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
}

class EpisodicDataSet {
    static FilterTemplateId = 'FilterTemplate';

    episodicChartManager;
    dataSet;
    dataView;
    filterContainer;
    filterSet;
    dataObjectTransformFunc = function (dataObject) { return dataObject; };
    customFilterFunc = function (dataObject) { return true; };

    constructor(manager, baseDataObjects, filterContainerId, filterSet) {
        this.episodicChartManager = manager;
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
        inEpisode.forEach(dataObject => {
            if (dataObject.hasOwnProperty("labels"))
                dataObject.label = EpisodicDataSet.getEpisodicPropertyOfDataObject(dataObject, "labels", episode);
            if (dataObject.hasOwnProperty("types"))
                dataObject.type = EpisodicDataSet.getEpisodicPropertyOfDataObject(dataObject, "types", episode);

            dataObject = this.dataObjectTransformFunc(dataObject, episode);

            result.push(dataObject);
        });

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
                this.episodicChartManager.update(this.episodicChartManager.selectedEpisode);
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
    #selectedNodeId = '';
    #nodeSearchText = '';

    constructor(chartContainerId, initialEpisode, nodes, nodeFilterContainerId, nodeSearchId, nodeTypes, edges, edgeFilterContainerId, edgeTypes) {
        this.chartContainer = document.getElementById(chartContainerId);
        this.nodeDataSet = new EpisodicDataSet(this, nodes, nodeFilterContainerId, nodeTypes);
        this.edgeDataSet = new EpisodicDataSet(this, edges, edgeFilterContainerId, edgeTypes);
        this.nodeSearchTextBox = document.getElementById(nodeSearchId);

        const manager = this;
        this.nodeDataSet.dataObjectTransformFunc = function (node, episode) { return manager.#transformNodeForEpisode(node, episode); };
        this.edgeDataSet.dataObjectTransformFunc = function (edge, episode) { return manager.#transformEdgeForEpisode(edge, episode); };
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
            manager.#selectedNodeId = e.nodes[0];

            //selecting a node clears the active search
            manager.nodeSearchTextBox.value = '';
            manager.#nodeSearchText = '';

            manager.#refreshDataViews();
        });

        this.network.addEventListener('deselectNode', e => {
            manager.#selectedNodeId = '';
            manager.#refreshDataViews();
        });

        let nodeSearchTimeout = null;
        this.nodeSearchTextBox.addEventListener('input', () => {
            if (nodeSearchTimeout != null)
                clearTimeout(nodeSearchTimeout);

            nodeSearchTimeout = setTimeout(() => {
                console.log('searching');
                this.#nodeSearchText = this.nodeSearchTextBox.value;
                this.#refreshDataViews();
            }, 500);
        });
    }

    update(episode) {
        if (this.selectedEpisode != episode) {
            this.selectedEpisode = episode;
            this.nodeDataSet.updateDataObjectsForEpisode(episode);
            this.edgeDataSet.updateDataObjectsForEpisode(episode);
        }

        this.#refreshDataViews();
    }

    #refreshDataViews() {
        this.nodeDataSet.dataView.refresh();
        this.edgeDataSet.dataView.refresh();
    }

    #transformNodeForEpisode(node, episode) {
        const color = this.nodeDataSet.filterSet.filterOptions[node.type].color;
        node.color = { border: color };

        if (node.hasOwnProperty("images"))
            node.image = EpisodicDataSet.getEpisodicPropertyOfDataObject(node, "images", episode);
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
    }

    #transformEdgeForEpisode(edge, episode) {
        const color = this.edgeDataSet.filterSet.filterOptions[edge.type].color;

        if (color != null) {
            edge.color = color;
            if (!edge.hasOwnProperty("font"))
                edge.font = {};
            edge.font.color = color;
        }

        if (edge.hasOwnProperty("_arrows")) {
            const arrows = EpisodicDataSet.getEpisodicPropertyOfDataObject(edge, "_arrows", episode);
            if (arrows != null)
                edge.arrows = arrows;
            else
                delete edge.arrows;
        }

        return edge;
    }

    #customNodeFilter(node) {
        if (this.#selectedNodeId != '') {
            if (node.id != this.#selectedNodeId
                && this.edgeDataSet.dataSet.get({
                    filter: edge => EpisodicDataSet.isWithinEpisodeRange(edge, this.selectedEpisode) &&
                        ((edge.to == this.#selectedNodeId && edge.from == node.id) || (edge.from == this.#selectedNodeId && edge.to == node.id))
                }).length == 0)
                return false;
        }

        if (this.#nodeSearchText != '') {
            if (!node.label.toLowerCase().includes(this.#nodeSearchText.toLowerCase()))
                return false;
        }

        const edgeFilters = this.edgeDataSet.getActiveFilterOptions();
        if (edgeFilters.length > 0) {
            if (this.edgeDataSet.dataSet.get({
                filter: edge => EpisodicDataSet.isWithinEpisodeRange(edge, this.selectedEpisode)
                    && (edge.to == node.id || edge.from == node.id)
                    && (edgeFilters.includes(edge.type) || edgeFilters.includes(edge.type.toString()))
                    && (this.#selectedNodeId == '' || edge.to == this.#selectedNodeId || edge.from == this.#selectedNodeId)
            }).length == 0)
                return false;
        }

        return true;
    }

    #customEdgeFilter(edge) {
        if (this.#selectedNodeId == '')
            return true;
        if (edge.to == this.#selectedNodeId || edge.from == this.#selectedNodeId)
            return true;

        return false;
    }
}

function getSingleChildElementWithClass(parentElement, className) {
    return Array.from(parentElement.children).find(el => {
        return el.classList.contains(className);
    });
}