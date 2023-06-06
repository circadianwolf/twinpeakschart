class FilterOption {
    codeName;
    displayName;
    color;

    constructor(codeName, displayName, color) {
        this.codeName = codeName;
        this.displayName = displayName;
        this.color = color;
    }
}

class FilterSet {
    filterOptions = [];

    constructor(filterOptions) {
        this.filterOptions = filterOptions;
    }

    getFilterOptionsAsObject() {
        const filterOptionsObject = {};
        this.filterOptions.forEach((v, i) => {
            filterOptionsObject[v.codeName] = i;
        });
        return filterOptionsObject;
    }

    isValidValue(value) {
        if (!isFinite(value))
            return false;
        const numValue = Number(value);
        return numValue >= 0 && numValue < this.filterOptions.length;
    }
}

class EpisodicDataSet {
    static FilterTemplateId = 'FilterTemplate';

    episodicChartManager;
    dataObjectDefinition;
    dataSet;
    dataView;
    filterContainer;
    filterSet;
    customFilterFunc = function (dataObject) { return true; };

    constructor(manager, dataObjectDefinition, baseDataObjects, filterContainerId, filterSet) {
        this.episodicChartManager = manager;
        this.dataObjectDefinition = dataObjectDefinition;
        this.filterContainer = document.getElementById(filterContainerId);
        this.filterSet = filterSet;

        const episodicDataSet = this;
        this.dataSet = new vis.DataSet(baseDataObjects);
        this.dataView = new vis.DataView(this.dataSet, { filter: function (dataObject) { return episodicDataSet.#includeWithActiveFilters(dataObject); } });

        this.#generateFilters();
    }

    updateDataObjectsForEpisode(episode) {
        const inEpisode = this.dataSet.get({
            filter: dataObject => EpisodicDataSet.isWithinEpisodeRange(dataObject, episode)
        });

        const result = [];
        inEpisode.forEach(dataObject => result.push(this.dataObjectDefinition.transformForEpisode(dataObject, episode)));

        this.dataSet.update(result);
    }

    getActiveFilterOptions() {
        let active = Array.from(this.filterContainer.getElementsByTagName("input")).filter(element => element.checked).map(element => element.value);
        if (this.filterSet.filterOptions.every((v, i) => active.includes(i) || active.includes(i.toString())))
            return [];
        return active;
    }

    #includeWithActiveFilters(dataObject) {
        const episode = this.episodicChartManager.selectedEpisode;
        if (!EpisodicDataSet.isWithinEpisodeRange(dataObject, episode))
            return false;

        const activeFilters = this.getActiveFilterOptions();
        if (activeFilters.length > 0 && !activeFilters.some(v => dataObject.type == v))
            return false;

        return this.customFilterFunc(dataObject);
    }

    #generateFilters() {
        const template = document.getElementById(EpisodicDataSet.FilterTemplateId);

        this.filterSet.filterOptions.forEach((option, index) => {
            const filter = template.cloneNode(true);
            filter.classList.remove('hidden');
            filter.id = "filter_" + option.codeName;

            const checkbox = getSingleChildElementWithClass(filter, "filterCbx");
            checkbox.id = "input_" + option.codeName;
            checkbox.value = index;
            checkbox.checked = true;
            checkbox.addEventListener('change', () => {
                this.episodicChartManager.update(this.episodicChartManager.selectedEpisode, this.episodicChartManager.onlySelectedEpisode);
            });

            const label = getSingleChildElementWithClass(filter, "filterLabel");
            label.htmlFor = "input_" + option.codeName;
            label.innerText = option.displayName;

            this.filterContainer.appendChild(filter);
        });
    }

    static isWithinEpisodeRange(dataObject, episode) {
        return (!dataObject.hasOwnProperty("episode") || dataObject.episode <= episode)
            && (!dataObject.hasOwnProperty("last_episode") || dataObject.last_episode >= episode);
    }

    static getEpisodicPropertyOfDataObject(dataObject, propertyName, episode) {
        if (!dataObject.hasOwnProperty(propertyName) || dataObject[propertyName] == null)
            return null;
        if (typeof dataObject[propertyName] !== 'object')
            return dataObject[propertyName];
        if (dataObject[propertyName].hasOwnProperty(episode + "_only"))
            return dataObject[propertyName][episode + "_only"];

        var count = episode;
        while (!dataObject[propertyName].hasOwnProperty(count) && count > 0)
            count--;
        if (count > 0)
            return dataObject[propertyName][count];

        return null;
    }
}

class EpisodicChartManager {
    chartContainer;
    nodeDataSet;
    edgeDataSet;
    chartOptions;
    network;
    nodeSearchTextBox;
    selectedEpisode = -1;
    onlySelectedEpisode = false;
    selectedNodeId = '';
    #nodeSearchText = '';
    fixedNodeIds = [];
    fixedNodesNeedReset = false;
    #visibleEdges = null;

    constructor(chartContainerId, initialEpisode, nodes, nodeFilterContainerId, nodeSearchId, nodeTypes, edges, edgeFilterContainerId, edgeTypes) {
        const manager = this;
        const nodeIds = nodes.map(node => node.id);

        const baseDataProperties = [
            new EpisodicDataObjectPropertyDefinition('episode'),
            new EpisodicDataObjectPropertyDefinition('last_episode'),
            new EpisodicDataObjectPropertyDefinition('label', 'labels', true),
        ];
        const nodeDataProperties = [
            ...baseDataProperties,
            new EpisodicDataObjectPropertyDefinition('id', '', true),
            new EpisodicDataObjectPropertyDefinition('image', 'images', false, null, node => {
                if (node.image != null) {
                    node.shape = "image";
                    node.heightConstraint = false;
                    node.widthConstraint = false;
                    if (!node.image.endsWith(".png"))
                        node.image = "images/" + node.image + ".png";
                    node.borderWidth = 3;
                }
                else {
                    delete node.image;
                    node.shape = "box";
                    node.heightConstraint = 100;
                    node.widthConstraint = 100;
                    node.borderWidth = 4;
                }
                return node;
            }),
            new EpisodicDataObjectPropertyDefinition('type', 'types', true, value => nodeTypes.isValidValue(value)),
            new EpisodicDataObjectPropertyDefinition('color', '', false, null, node => {
                const color = manager.nodeDataSet.filterSet.filterOptions[node.type].color;
                node.color = { border: color };
                return node;
            }),
            new EpisodicDataObjectPropertyDefinition('fixed', '', false, null, node => {
                if (manager.fixedNodesNeedReset && manager.fixedNodeIds.includes(node.id))
                    node.fixed = manager.selectedNodeId == '' || manager.selectedNodeId == node.id;
                return node;
            }),
            new EpisodicDataObjectPropertyDefinition('x'),
            new EpisodicDataObjectPropertyDefinition('y'),
        ];
        const edgeDataProperties = [
            ...baseDataProperties,
            new EpisodicDataObjectPropertyDefinition('from', '', true, value => nodeIds.includes(value)),
            new EpisodicDataObjectPropertyDefinition('to', '', true, value => nodeIds.includes(value)),
            new EpisodicDataObjectPropertyDefinition('arrows', '_arrows', false, value => ["from", "to", null].includes(value)),
            new EpisodicDataObjectPropertyDefinition('type', 'types', true, value => edgeTypes.isValidValue(value)),
            new EpisodicDataObjectPropertyDefinition('color', '', false, null, edge => {
                const color = manager.edgeDataSet.filterSet.filterOptions[edge.type].color;
                if (color != null) {
                    edge.color = color;
                    if (!edge.hasOwnProperty("font"))
                        edge.font = {};
                    edge.font.color = color;
                }
                return edge;
            }),
        ];

        const nodeDataDefinition = new EpisodicDataObjectDefinition(nodeDataProperties);
        const edgeDataDefinition = new EpisodicDataObjectDefinition(edgeDataProperties);

        nodes.forEach(node => nodeDataDefinition.validate(node));
        edges.forEach(edge => edgeDataDefinition.validate(edge));

        this.chartContainer = document.getElementById(chartContainerId);
        this.nodeDataSet = new EpisodicDataSet(this, nodeDataDefinition, nodes, nodeFilterContainerId, nodeTypes);
        this.edgeDataSet = new EpisodicDataSet(this, edgeDataDefinition, edges, edgeFilterContainerId, edgeTypes);
        this.nodeSearchTextBox = document.getElementById(nodeSearchId);

        this.fixedNodeIds = this.nodeDataSet.dataSet.getIds({ filter: node => node.fixed });
        
        this.nodeDataSet.customFilterFunc = function (node) { return manager.#customNodeFilter(node); };
        this.edgeDataSet.customFilterFunc = function (edge) { return manager.#customEdgeFilter(edge); };

        this.update(initialEpisode);

        this.chartOptions = {
            nodes: {
                size: 50,
                shape: "image",
                color: { background: "white" },
                font: { strokeWidth: 1, background: "white" },
                shapeProperties: { useBorderWithImage: true },
                labelHighlightBold: false,
            },
            edges: {
                color: "black",
                font: { align: "top" },
                labelHighlightBold: false
            },
            physics: {
                solver: "forceAtlas2Based",
                forceAtlas2Based: {
                    gravitationalConstant: -100,
                    springLength: 100,
                    avoidOverlap: 1
                }
            }
        };

        const data = {
            nodes: this.nodeDataSet.dataView,
            edges: this.edgeDataSet.dataView,
        };

        this.network = new vis.Network(this.chartContainer, data, this.chartOptions);

        this.network.addEventListener('selectNode', e => {
            manager.selectedNodeId = e.nodes[0];
            manager.fixedNodesNeedReset = true;

            //selecting a node clears the active search
            manager.nodeSearchTextBox.value = '';
            manager.#nodeSearchText = '';

            manager.#refreshDataViews();
        });

        this.network.addEventListener('deselectNode', e => {
            manager.selectedNodeId = '';
            manager.fixedNodesNeedReset = true;

            manager.#refreshDataViews();
        });

        let nodeSearchTimeout = null;
        this.nodeSearchTextBox.addEventListener('input', () => {
            if (nodeSearchTimeout != null)
                clearTimeout(nodeSearchTimeout);

            nodeSearchTimeout = setTimeout(() => {
                this.#nodeSearchText = this.nodeSearchTextBox.value;
                this.#refreshDataViews();
            }, 500);
        });
    }

    update(episode, onlySelectedEpisode) {
        if (this.selectedEpisode != episode) {
            this.selectedEpisode = episode;
            this.edgeDataSet.updateDataObjectsForEpisode(episode);
            this.nodeDataSet.updateDataObjectsForEpisode(episode);
        }
        this.onlySelectedEpisode = onlySelectedEpisode;

        this.#refreshDataViews();
    }

    #refreshDataViews() {
        this.#visibleEdges = null;
        this.edgeDataSet.dataView.refresh();
        this.nodeDataSet.dataView.refresh();
        this.fixedNodesNeedReset = false;
    }

    #customEdgeFilter(edge) {
        if (this.selectedNodeId != '' && edge.to != this.selectedNodeId && edge.from != this.selectedNodeId)
            return false;

        if (this.onlySelectedEpisode && !this.edgeDataSet.dataObjectDefinition.hadUpdateInEpisode(edge, this.selectedEpisode))
            return false;

        return true;
    }

    #customNodeFilter(node) {
        if (this.#visibleEdges == null) {
            this.#visibleEdges = this.edgeDataSet.dataView.get();
        }
        const connectedToVisibleEdges = this.#visibleEdges.some(edge => edge.from == node.id || edge.to == node.id);

        if (!connectedToVisibleEdges) {
            if (this.selectedNodeId != '' && node.id != this.selectedNodeId)
                return false;

            if (this.onlySelectedEpisode && !this.nodeDataSet.dataObjectDefinition.hadUpdateInEpisode(node, this.selectedEpisode))
                return false;

            if (this.#nodeSearchText != '') {
                if (!node.label.toLowerCase().includes(this.#nodeSearchText.toLowerCase()))
                    return false;
            }
        }

        return true;
    }
}

class EpisodicDataObjectDefinition {
    propertyDefinitions;

    constructor(propertyDefinitions) {
        this.propertyDefinitions = propertyDefinitions;
    }

    validate(dataObject) {
        try {
            Object.getOwnPropertyNames(dataObject).forEach(propertyName => {
                if (!this.propertyDefinitions.some(propertyDefinition =>
                    propertyDefinition.directPropertyName == propertyName
                    || propertyDefinition.episodicPropertyName == propertyName))
                    throw new Error("Unknown property: " + propertyName);
            });

            this.propertyDefinitions.forEach(propertyDefinition => propertyDefinition.validate(dataObject));
        }
        catch (error) {
            console.log(dataObject);
            throw error;
        }
    }

    transformForEpisode(dataObject, episode) {
        this.propertyDefinitions.forEach(property => {
            dataObject = property.transformForEpisode(dataObject, episode);
        });
        return dataObject;
    }

    hadUpdateInEpisode(dataObject, episode) {
        if (episode == 1)
            return true;
        if (dataObject.hasOwnProperty("episode") && dataObject.episode.toString() == episode.toString())
            return true;
        return this.propertyDefinitions.some(property => property.hadUpdateInEpisode(dataObject, episode));
    }
}

class EpisodicDataObjectPropertyDefinition {
    directPropertyName;
    episodicPropertyName = '';
    required = false;
    isAllowedValue = function (value) { return true; };
    transformForEpisodeCustomFunc = function (dataObject, episode) { return dataObject; };

    constructor(directPropertyName, episodicPropertyName = '', required = false, isAllowedValueFunc = null, transformForEpisodeCustomFunc = null) {
        this.directPropertyName = directPropertyName;
        this.episodicPropertyName = episodicPropertyName;
        this.required = required;
        if (isAllowedValueFunc != null)
            this.isAllowedValue = isAllowedValueFunc;
        if (transformForEpisodeCustomFunc != null)
            this.transformForEpisodeCustomFunc = transformForEpisodeCustomFunc;
    }

    validate(dataObject) {
        if (this.required) {
            if (!dataObject.hasOwnProperty(this.directPropertyName)) {
                if (this.episodicPropertyName == '' || !dataObject.hasOwnProperty(this.episodicPropertyName))
                    throw new Error("Missing required property: " + this.directPropertyName);
            }
        }

        let episodicValues = null;
        let episodicValueKeys = [];
        if (dataObject.hasOwnProperty(this.episodicPropertyName)) {
            if (dataObject.hasOwnProperty(this.directPropertyName))
                throw new Error("Object has both direct property and episodic property set");

            episodicValues = dataObject[this.episodicPropertyName];
            if (typeof episodicValues !== "object")
                throw new Error("Bad value for episodic property: " + this.episodicPropertyName);

            episodicValueKeys = Object.getOwnPropertyNames(episodicValues);
            if (episodicValueKeys.some(episodicValueKey => {
                if (Number.isFinite(episodicValueKey))
                    return false;
                if (episodicValueKey.includes("_only")) {
                    let numberStr = episodicValueKey.replace("_only", '');
                    return !isFinite(numberStr);
                }
            }))
                throw new Error("Bad value for episodic property: " + this.episodicPropertyName);
        }

        if (this.isAllowedValue != null) {
            if (dataObject.hasOwnProperty(this.directPropertyName)) {
                if (!this.isAllowedValue(dataObject[this.directPropertyName]))
                    throw new Error("Bad value for limited property: " + this.directPropertyName);
            }
            else if (episodicValues != null) {
                if (episodicValueKeys.some(episodicValueKey => !this.isAllowedValue(episodicValues[episodicValueKey])))
                    throw new Error("Bad value for limited property: " + this.episodicPropertyName);
            }
        }
    }

    transformForEpisode(dataObject, episode) {
        if (dataObject.hasOwnProperty(this.episodicPropertyName)) {
            const episodicValue = this.getEpisodicValue(dataObject, episode);
            if (episodicValue != null)
                dataObject[this.directPropertyName] = episodicValue;
            else
                delete dataObject[this.directPropertyName];
        }

        dataObject = this.transformForEpisodeCustomFunc(dataObject, episode);

        return dataObject;
    }

    getEpisodicValue(dataObject, episode) {
        if (!dataObject.hasOwnProperty(this.episodicPropertyName)
            || dataObject[this.episodicPropertyName] == null)
            return null;

        const episodicValues = dataObject[this.episodicPropertyName];
        if (episodicValues.hasOwnProperty(episode + "_only"))
            return episodicValues[episode + "_only"];

        let count = episode;
        while (!episodicValues.hasOwnProperty(count) && count > 0)
            count--;
        if (count > 0)
            return episodicValues[count];

        return null;
    }

    hadUpdateInEpisode(dataObject, episode) {
        if (this.episodicPropertyName == '' || !dataObject.hasOwnProperty(this.episodicPropertyName))
            return false;
        const episodicValues = dataObject[this.episodicPropertyName];
        return episodicValues.hasOwnProperty(episode) || episodicValues.hasOwnProperty(episode.toString()) || episodicValues.hasOwnProperty(episode + "_only");
    }
}

function getSingleChildElementWithClass(parentElement, className) {
    return Array.from(parentElement.children).find(el => {
        return el.classList.contains(className);
    });
}