const nodeTypes = new FilterSet([
    new FilterOption("PERSON", "People", "black"),
    new FilterOption("OBJECT", "Objects", "darkslategray"),
    new FilterOption("PLACE", "Places", "brown"),
    new FilterOption("CONCEPT", "Concepts", "green")
]);

const edgeTypes = new FilterSet([
    new FilterOption("PUBLIC_RELATIONSHIP", "Public Relationships", "red"),
    new FilterOption("SECRET_RELATIONSHIP", "Secret Relationships", "deeppink"),
    new FilterOption("FAMILY", "Family", "indigo"),
    new FilterOption("FRIENDS", "Friendly", "blue"),
    new FilterOption("BUSINESS", "Work", "saddlebrown"),
    new FilterOption("DREAM", "Dreams", "teal"),
    new FilterOption("CRIME", "Crimes & Conspiracies", "black"),
    new FilterOption("EVIDENCE", "Mystery Evidence", "darkgoldenrod"),
    new FilterOption("UNCERTAIN", "Ambiguous or Uncertain Relevance", "lightgray"),
    new FilterOption("OTHER", "Other", "darkgray")
]);

const NODE_TYPES = nodeTypes.getFilterOptionsAsObject();

const EDGE_TYPES = edgeTypes.getFilterOptionsAsObject();

const baseNodes = [
    {
        id: "laura_palmer", label: "Laura Palmer\n(deceased)", type: NODE_TYPES.PERSON,
        images: {
            1: "laura_palmer_homecoming",
            2: "laura_palmer_1x02",
            3: "laura_palmer_vhs",
            "4_only": "laura_palmer_1x04"
        },
        fixed: true
    },
    {
        id: "donna_hayward", label: "Donna Hayward", type: NODE_TYPES.PERSON,
        images: { 1: "donna_hayward", 2: "donna_hayward_1x02", "4_only": "donna_hayward_1x04" }
    },
    {
        id: "james_hurley", label: "James Hurley", type: NODE_TYPES.PERSON,
        images: { 1: "james_hurley", "4_only": "james_hurley_1x04" }
    },
    {
        id: "bobby_briggs", label: "Bobby Briggs", type: NODE_TYPES.PERSON,
        images: { 1: "bobby_briggs", "4_only": "bobby_briggs_1x04" }
    },
    {
        id: "leland_palmer", label: "Leland Palmer", type: NODE_TYPES.PERSON,
        images: { 1: "leland_palmer", 3: "leland_palmer_1x03", 4: "leland_palmer_1x04", 5: "leland_palmer_1x05" }
    },
    {
        id: "sarah_palmer", label: "Sarah Palmer", type: NODE_TYPES.PERSON,
        images: { 1: "sarah_palmer", "4_only": "sarah_palmer_1x04" }
    },
    {
        id: "pete_martell", label: "Pete Martell", type: NODE_TYPES.PERSON,
        images: { 1: "pete_martell", "4_only": "pete_martell_1x04" }
    },
    {
        id: "dr_jacoby", label: "Dr. Jacoby", type: NODE_TYPES.PERSON,
        images: { 1: "dr_jacoby", 4: "dr_jacoby_1x04", 5: "dr_jacoby_1x05" }
    },
    {
        id: "johnny_horne", label: "Johnny Horne", type: NODE_TYPES.PERSON,
        images: { 1: "johnny_horne_pilot", 4: "johnny_horne_1x04" }
    },
    { id: "laura_killer", label: "???", type: NODE_TYPES.PERSON },
    { id: "packard_sawmill", label: "Packard Sawmill", image: "packard_sawmill", type: NODE_TYPES.PLACE },
    { id: "heart_necklace_laura", label: "Laura's heart necklace", image: "heart_necklace_laura", type: NODE_TYPES.OBJECT },
    { id: "heart_necklace_james", label: "James' heart necklace", image: "heart_necklace_james", type: NODE_TYPES.OBJECT },
    { id: "laura_safe_deposit_box", label: "Safe deposit box", type: NODE_TYPES.OBJECT },
    { id: "train_car", label: "Abandoned train car", image: "train_car", type: NODE_TYPES.PLACE },
    { id: "fingernail_letter_r", label: "Fingernail Letter 'R'", image: "fingernail_letter", type: NODE_TYPES.OBJECT },
    {
        id: "ed_hurley", type: NODE_TYPES.PERSON,
        labels: { 1: "Ed", 2: "Ed Hurley" },
        images: { "1": "big_ed", "4_only": "big_ed_1x04" }
    },
    { id: "mike_nelson", label: "Mike 'Snake'", image: "mike_snake_nelson", type: NODE_TYPES.PERSON },
    {
        id: "nadine_hurley", image: "nadine_hurley", type: NODE_TYPES.PERSON,
        labels: { 1: "Nadine", 2: "Nadine Hurley" },
    },
    {
        id: "norma_jennings", image: "norma_jennings", type: NODE_TYPES.PERSON,
        labels: { 1: "Norma", 2: "Norma Jennings" },
    },
    { id: "shelly_johnson", label: "Shelly Johnson", image: "shelly_johnson", type: NODE_TYPES.PERSON },
    {
        id: "hank_jennings", type: NODE_TYPES.PERSON,
        labels: { 1: "Hank\n(in prison\nfor manslaughter)", 2: "Hank Jennings\n(in prison\nfor manslaughter)", 4: 'Hank Jennings' },
        images: { 4: "hank_jennings_mugshot", 5: "hank_jennings" }
    },
    { id: "leo_johnson", label: "Leo Johnson", image: "leo_johnson", type: NODE_TYPES.PERSON },
    { id: "major_briggs", label: "Major Briggs", image: "major_briggs", type: NODE_TYPES.PERSON },
    {
        id: "catherine_martell", label: "Catherine Martell\n(née Packard)", type: NODE_TYPES.PERSON,
        images: { 1: "catherine_martell", "2_only": "catherine_martell_1x02", "6_only": "catherine_martell_1x06" }
    },
    { id: "josie_packard", label: "Josie Packard", image: "josie_packard", type: NODE_TYPES.PERSON },
    { id: "doc_hayward", label: "Doc Hayward", image: "doc_hayward", type: NODE_TYPES.PERSON },
    { id: "benjamin_horne", label: "Benjamin Horne", image: "benjamin_horne", type: NODE_TYPES.PERSON },
    {
        id: "audrey_horne", label: "Audrey Horne", type: NODE_TYPES.PERSON,
        images: { 1: "audrey_horne_pilot", 2: "audrey_horne_1x02", "4_only": "audrey_horne_1x04" }
    },
    { id: "ronette_pulaski", label: "Ronette Pulaski", image: "ronette_pulaski", type: NODE_TYPES.PERSON },
    { id: "fire_walk_with_me", label: "'FIRE WALK WITH ME'", image: "fire_walk_with_me", type: NODE_TYPES.CONCEPT },
    { id: "ten_thousand_cash", label: "$10,000 cash", type: NODE_TYPES.OBJECT },
    { id: "flesh_world", label: "'Flesh World' magazine", image: "flesh_world", type: NODE_TYPES.OBJECT },
    { id: "teresa_banks", label: "Teresa Banks\n(deceased)", type: NODE_TYPES.PERSON },
    { id: "andrew_packard", label: "Andrew Packard\n(deceased)", type: NODE_TYPES.PERSON },
    { id: "great_northern", label: "Great Northern hotel", image: "great_northern", type: NODE_TYPES.PLACE },
    {
        id: "dale_cooper", label: "Special Agent\nDale Cooper", type: NODE_TYPES.PERSON,
        images: { 1: "dale_cooper_pilot", 2: "dale_cooper_1x02", 3: "dale_cooper_1x03", 4: "dale_cooper_1x04", 5: "dale_cooper_1x05", 6: "dale_cooper_1x06" }
    },
    { id: "diane", label: "Diane", type: NODE_TYPES.PERSON },
    { id: "harry_truman", label: "Sheriff Harry Truman", type: NODE_TYPES.PERSON, image: "sheriff_truman" },
    { id: "deputy_hawk", label: "Deputy Hawk", type: NODE_TYPES.PERSON, image: "deputy_hawk" },
    { id: "deputy_andy", label: "Deputy Andy", type: NODE_TYPES.PERSON, image: "deputy_andy" },
    { id: "lucy", label: "Lucy", type: NODE_TYPES.PERSON, image: "lucy" },
    {
        id: "one_armed_man", type: NODE_TYPES.PERSON,
        labels: { 1: "One armed man?", 5: "Phillip Michael Gerard,\nshoe salesman" },
        images: { 1: "one_armed_man", 5: "phillip_michael_gerard" }
    },
    { id: "harriet_hayward", label: "Harriet Hayward", type: NODE_TYPES.PERSON, image: "harriet_hayward" },
    {
        id: "eileen_hayward", label: "Eileen Hayward", type: NODE_TYPES.PERSON,
        images: { 1: "eileen_hayward_pilot", 2: "eileen_hayward_1x02" }
    },
    {
        id: "bett_briggs", label: "Bett Briggs", type: NODE_TYPES.PERSON,
        images: { 1: "bett_briggs_pilot", 2: "bett_briggs_1x02" }
    },
    {
        id: "sylvia_horne", type: NODE_TYPES.PERSON,
        labels: { 1: "Mrs. Horne", 4: "Sylvia Horne" },
        images: { 1: "sylvia_horne_pilot", 3: "sylvia_horne_1x03" }
    },
    {
        id: "bobby_leo_cocaine_deal", type: NODE_TYPES.CONCEPT, episode: 2,
        labels: { 2: "$20,000", 3: "Cocaine deal" }
    },
    { id: "albert_rosenfield", label: "Albert Rosenfield", type: NODE_TYPES.PERSON, images: { 3: "albert_rosenfield" }, episode: 2 },
    { id: "leos_bloody_shirt", label: "Bloody shirt", type: NODE_TYPES.OBJECT, image: "bloody_shirt", episode: 2 },
    {
        id: "jacques_renault", type: NODE_TYPES.PERSON, label: "Jacques Renault", episode: 2,
        images: { 4: "jacques_renault" }
    },
    {
        id: "bob", type: NODE_TYPES.PERSON, episode: "2",
        labels: { 2: "???", 3: "Bob?" },
        images: { 2: "bob_1x02", 3: "bob_1x03" }
    },
    { id: "hornes_department_store", type: NODE_TYPES.PLACE, episode: 2, label: "Horne's\ndepartment store\n(perfume counter)" },
    {
        id: "log_lady", type: NODE_TYPES.PERSON, episode: "2",
        labels: { 2: "Log Lady", 6: "Margaret\nthe Log Lady" },
        images: { 2: "log_lady", "4_only": "log_lady_1x04" }
    },
    { id: "horne_conspiracy", label: "Conspiracy", type: NODE_TYPES.CONCEPT, episode: 2 },
    { id: "jerry_horne", label: "Jerry Horne", image: "jerry_horne", type: NODE_TYPES.PERSON, episode: 3 },
    { id: "one_eyed_jacks", label: "One Eyed Jack's\ncasino & brothel", image: "one_eyed_jacks", type: NODE_TYPES.PLACE, episode: 3 },
    { id: "jacks_new_girl", label: "New Girl", image: "new_girl", type: NODE_TYPES.PERSON, episode: 3 },
    { id: "mike", type: NODE_TYPES.PERSON, episode: 3, label: "Mike?", image: "mike" },
    { id: "dwarf", label: "???", image: "dwarf", type: NODE_TYPES.PERSON, episode: 3 },
    { id: "dwarf_cousin", label: "???", image: "laura_palmer_red_room", type: NODE_TYPES.PERSON, episode: 3 },
    { id: "red_room", label: "Red room?", image: "red_room", type: NODE_TYPES.PLACE, episode: 3 },
    { id: "jack_one_eye_note", label: "'Jack with\nOne Eye' note", type: NODE_TYPES.OBJECT, episode: 3 },
    { id: "ski_mask_man", label: "Ski mask man?", image: "ski_mask", type: NODE_TYPES.PERSON, episode: 3 },
    {
        id: "madeleine_ferguson", type: NODE_TYPES.PERSON, image: "madeleine_ferguson", episode: 4,
        labels: { 4: "Madeleine", 5: "Madeleine Ferguson" }
    },
    { id: "bookhouse_boys", label: "The Bookhouse Boys", type: NODE_TYPES.CONCEPT, episode: 4 },
    {
        id: "bernard_renault", type: NODE_TYPES.PERSON, episode: 4,
        labels: { 4: "Bernard Renault", 5: "Bernard Renault\n(deceased)"},
        images: { 4: "bernard_renault", 5: "bernard_renault_corpse" }
    },
    { id: "gordon_cole", label: "Gordon Cole", type: NODE_TYPES.PERSON, episode: 4 },
    { id: "drug_trade", label: "Twin Peaks\ndrug trade", type: NODE_TYPES.CONCEPT, episode: 4 },
    { id: "packard_murder", label: "Murder conspiracy?", type: NODE_TYPES.CONCEPT, episode: 4 },
    {
        id: "bite_claw_marks", type: NODE_TYPES.OBJECT, episode: 4,
        labels: { 4: "Bite and claw marks", 5: "Bite and claw marks\nfrom a parrot or myna bird" }
    },
    { id: "soap_residue", label: "Soap residue", type: NODE_TYPES.OBJECT, episode: 4 },
    {
        id: "plastic_fragment_j", type: NODE_TYPES.OBJECT, episode: 4,
        labels: { 4: "Plastic fragment\nwith letter 'J'", 5: "Poker chip fragment\nwith letter 'J'" },
        images: { 5: "plastic_fragment_j" }
    },
    { id: "twine_fragments_1", label: "Twine fragments\n(type 1)", type: NODE_TYPES.OBJECT, episode: 4 },
    { id: "twine_fragments_2", label: "Twine fragments\n(type 2)", type: NODE_TYPES.OBJECT, episode: 4 },
    { id: "red_corvette", label: "Red corvette", type: NODE_TYPES.OBJECT, episode: 5 },
    { id: "timber_falls", label: "Timber Falls Motel", image: "timber_falls", type: NODE_TYPES.PLACE, episode: 5 },
    { id: "bob_lydecker", label: "Bob Lydecker", type: NODE_TYPES.PERSON, episode: 5 },
    { id: "lydecker_clinic", label: "Lydecker\nVeterinary Clinic", image: "lydecker_clinic", type: NODE_TYPES.PLACE, episode: 5 },
    { id: "waldo", label: "Waldo\nthe myna bird", type: NODE_TYPES.OBJECT, episode: 5, images: { 6: "waldo_1x06" } },
    { id: "big_eds_gas_farm", label: "Big Ed's Gas Farm", type: NODE_TYPES.PLACE, image: "big_eds_gas_farm" },
    { id: "rr_diner", label: "Double-R Diner", image: "rr_diner", type: NODE_TYPES.PLACE },
    { id: "roadhouse", label: "The Roadhouse", image: "roadhouse", type: NODE_TYPES.PLACE, episode: 2 },
    { id: "emory_batiss", label: "Emory Batiss", image: "emory_batiss", type: NODE_TYPES.PERSON, episode: 6 },
    { id: "jacques_cabin", label: "Jacques' Cabin", image: "jacques_cabin", type: NODE_TYPES.PLACE, episode: 6 },
    { id: "poker_chip", label: "Broken Poker Chip", image: "casino_chip", type: NODE_TYPES.OBJECT, episode: 6 },
    { id: "red_drapes_ad", label: "Flesh World\n'red drapes' ad", image: "red_drapes_ad", type: NODE_TYPES.CONCEPT, episode: 6 },
    { id: "teen_investigators", label: "Teen Murder\nInvestigation Team", type: NODE_TYPES.CONCEPT, episode: 6 },
    { id: "owls", label: "Owls", type: NODE_TYPES.CONCEPT, episode: 6 },
    { id: "cabin_party", label: "Cabin party?", type: NODE_TYPES.CONCEPT, episode: 6 },
    { id: "third_man", label: "Third man?", type: NODE_TYPES.PERSON, episode: 6 },
    { id: "lauras_hidden_tape", label: "Hidden tape", image: "lauras_hidden_tape", type: NODE_TYPES.OBJECT, episode: 6 }
];

const baseEdges = [
    { from: "laura_palmer", to: "donna_hayward", label: "Best Friends", type: EDGE_TYPES.FRIENDS },
    { from: "laura_palmer", to: "james_hurley", label: "Secret Relationship", type: EDGE_TYPES.SECRET_RELATIONSHIP },
    { from: "laura_palmer", to: "bobby_briggs", label: "Public Relationship", type: EDGE_TYPES.PUBLIC_RELATIONSHIP },
    { from: "laura_palmer", to: "leland_palmer", label: "Parent/Child", type: EDGE_TYPES.FAMILY },
    { from: "laura_palmer", to: "sarah_palmer", label: "Parent/Child", type: EDGE_TYPES.FAMILY },
    { from: "laura_palmer", to: "dr_jacoby", label: "Secret\nPsychiatric\nSessions", type: EDGE_TYPES.BUSINESS },
    { from: "laura_palmer", to: "johnny_horne", label: "Tutored", type: EDGE_TYPES.BUSINESS, arrows: "to" },
    { from: "laura_palmer", to: "pete_martell", label: "Found by", type: EDGE_TYPES.EVIDENCE, arrows: "to" },
    { from: "laura_palmer", to: "laura_killer", label: "Murdered", type: EDGE_TYPES.CRIME, arrows: "from" },
    { from: "laura_palmer", to: "heart_necklace_laura", label: "Owned", type: EDGE_TYPES.EVIDENCE, arrows: "to" },
    { from: "laura_palmer", to: "heart_necklace_james", label: "Gave", type: EDGE_TYPES.EVIDENCE, arrows: "to" },
    { from: "laura_palmer", to: "laura_safe_deposit_box", label: "Owned", type: EDGE_TYPES.EVIDENCE, arrows: "to" },
    { from: "laura_palmer", to: "packard_sawmill", label: "Found near", type: EDGE_TYPES.EVIDENCE, arrows: "to" },
    { from: "laura_palmer", to: "train_car", label: "Murdered at?", type: EDGE_TYPES.CRIME, arrows: "to" },
    { from: "laura_palmer", to: "fingernail_letter_r", label: "Found on", type: EDGE_TYPES.EVIDENCE, arrows: "from" },
    {
        from: "donna_hayward", to: "james_hurley",
        labels: { 1: "Friends", 2: "Secret Relationship\n(post Laura's death)" },
        types: { 1: EDGE_TYPES.FRIENDS, 2: EDGE_TYPES.SECRET_RELATIONSHIP }
    },
    { from: "heart_necklace_james", to: "james_hurley", label: "Given to", type: EDGE_TYPES.EVIDENCE, arrows: "to" },
    { from: "heart_necklace_laura", to: "heart_necklace_james", label: "Paired", type: EDGE_TYPES.EVIDENCE },
    { from: "heart_necklace_laura", to: "train_car", label: "Found in", arrows: "to", type: EDGE_TYPES.EVIDENCE },
    { from: "leland_palmer", to: "sarah_palmer", label: "Married", type: EDGE_TYPES.PUBLIC_RELATIONSHIP },
    {
        from: "james_hurley", to: "ed_hurley",
        labels: { 1: "Friendly?", 2: "Uncle and guardian" },
        types: { 1: EDGE_TYPES.UNCERTAIN, 2: EDGE_TYPES.FAMILY },
        _arrows: { 2: "from" }
    },
    {
        from: "donna_hayward", to: "ed_hurley",
        labels: { 1: "Friendly?", 2: "Friendly" },
        types: { 1: EDGE_TYPES.UNCERTAIN, 2: EDGE_TYPES.FRIENDS }
    },
    { from: "donna_hayward", to: "mike_nelson", label: "Public Relationship", type: EDGE_TYPES.PUBLIC_RELATIONSHIP },
    { from: "donna_hayward", to: "doc_hayward", label: "Parent/Child", type: EDGE_TYPES.FAMILY },
    { from: "bobby_briggs", to: "mike_nelson", label: "Best Friends", type: EDGE_TYPES.FRIENDS },
    { from: "ed_hurley", to: "nadine_hurley", label: "Married", type: EDGE_TYPES.PUBLIC_RELATIONSHIP },
    { from: "ed_hurley", to: "norma_jennings", label: "Secret Relationship", type: EDGE_TYPES.SECRET_RELATIONSHIP },
    { from: "ed_hurley", to: "big_eds_gas_farm", label: "Owns", arrows: "to", type: EDGE_TYPES.BUSINESS },
    { from: "norma_jennings", to: "hank_jennings", label: "Married", type: EDGE_TYPES.PUBLIC_RELATIONSHIP },
    { from: "bobby_briggs", to: "shelly_johnson", label: "Secret Relationship", type: EDGE_TYPES.SECRET_RELATIONSHIP },
    { from: "bobby_briggs", to: "major_briggs", label: "Parent/Child", type: EDGE_TYPES.FAMILY },
    {
        from: "norma_jennings", to: "rr_diner", type: EDGE_TYPES.BUSINESS, arrows: "to",
        labels: { 1: "Works at", 4: "Owns" }
    },
    { from: "shelly_johnson", to: "rr_diner", label: "Works at", arrows: "to", type: EDGE_TYPES.BUSINESS },
    { from: "shelly_johnson", to: "leo_johnson", label: "Married", type: EDGE_TYPES.PUBLIC_RELATIONSHIP },
    { from: "pete_martell", to: "packard_sawmill", label: "Works at", type: EDGE_TYPES.BUSINESS, arrows: "to" },
    { from: "pete_martell", to: "catherine_martell", label: "Married", type: EDGE_TYPES.PUBLIC_RELATIONSHIP },
    { from: "catherine_martell", to: "packard_sawmill", label: "Works at", type: EDGE_TYPES.BUSINESS, arrows: "to" },
    { from: "josie_packard", to: "packard_sawmill", label: "Owns", type: EDGE_TYPES.BUSINESS, arrows: "to" },
    { from: "leland_palmer", to: "benjamin_horne", label: "Works for", type: EDGE_TYPES.BUSINESS, arrows: "to" },
    { from: "johnny_horne", to: "benjamin_horne", label: "Parent/Child", type: EDGE_TYPES.FAMILY },
    { from: "johnny_horne", to: "audrey_horne", label: "Siblings", type: EDGE_TYPES.FAMILY },
    { from: "audrey_horne", to: "benjamin_horne", label: "Parent/Child", type: EDGE_TYPES.FAMILY },
    { from: "catherine_martell", to: "benjamin_horne", label: "Secret phone call?", type: EDGE_TYPES.UNCERTAIN, last_episode: 1 },
    { from: "benjamin_horne", to: "josie_packard", label: "Plotting\nto buy out", type: EDGE_TYPES.OTHER, arrows: "to", last_episode: 1 },
    { from: "train_car", to: "fire_walk_with_me", label: "Found written\nin blood on\na note in", type: EDGE_TYPES.EVIDENCE, arrows: "from" },
    { from: "laura_safe_deposit_box", to: "ten_thousand_cash", label: "Held", type: EDGE_TYPES.EVIDENCE, arrows: "to" },
    { from: "laura_safe_deposit_box", to: "flesh_world", label: "Held", type: EDGE_TYPES.EVIDENCE, arrows: "to" },
    { from: "flesh_world", to: "ronette_pulaski", label: "Features", type: EDGE_TYPES.EVIDENCE, arrows: "to" },
    { from: "flesh_world", to: "leo_johnson", label: "Features the truck of", type: EDGE_TYPES.EVIDENCE, arrows: "to" },
    { from: "train_car", to: "ronette_pulaski", label: "Escaped from", type: EDGE_TYPES.CRIME, arrows: "from" },
    { from: "laura_killer", to: "ronette_pulaski", label: "Attempted murder?", type: EDGE_TYPES.CRIME, arrows: "to" },
    { from: "laura_killer", to: "teresa_banks", label: "Murdered?", type: EDGE_TYPES.CRIME, arrows: "to" },
    { from: "catherine_martell", to: "andrew_packard", label: "Siblings", type: EDGE_TYPES.FAMILY },
    { from: "josie_packard", to: "andrew_packard", label: "Widow", type: EDGE_TYPES.PUBLIC_RELATIONSHIP, arrows: "to" },
    { from: "josie_packard", to: "harry_truman", label: "Secret Relationship", type: EDGE_TYPES.SECRET_RELATIONSHIP },
    { from: "catherine_martell", to: "josie_packard", label: "Spying on", type: EDGE_TYPES.CRIME, arrows: "to" },
    { from: "benjamin_horne", to: "great_northern", label: "Owns", type: EDGE_TYPES.BUSINESS, arrows: "to" },
    { from: "dale_cooper", to: "great_northern", label: "Staying at", type: EDGE_TYPES.OTHER, arrows: "to" },
    { from: "dale_cooper", to: "teresa_banks", label: "Investigated\nthe murder of", type: EDGE_TYPES.BUSINESS, arrows: "to" },
    { from: "dale_cooper", to: "diane", label: "Works with", type: EDGE_TYPES.BUSINESS },
    { from: "harry_truman", to: "dale_cooper", label: "Temporarily\nworks for", type: EDGE_TYPES.BUSINESS, arrows: "to" },
    { from: "harry_truman", to: "deputy_hawk", label: "Works for", type: EDGE_TYPES.BUSINESS, arrows: "from" },
    { from: "harry_truman", to: "deputy_andy", label: "Works for", type: EDGE_TYPES.BUSINESS, arrows: "from" },
    { from: "harry_truman", to: "lucy", label: "Works for", type: EDGE_TYPES.BUSINESS, arrows: "from" },
    { from: "harry_truman", to: "doc_hayward", label: "Works with", type: EDGE_TYPES.BUSINESS },
    { from: "harry_truman", to: "one_armed_man", label: "Observed\nat hospital", type: EDGE_TYPES.UNCERTAIN, arrows: "to" },
    { from: "dale_cooper", to: "one_armed_man", label: "Observed\nat hospital", type: EDGE_TYPES.UNCERTAIN, arrows: "to" },
    { from: "deputy_andy", to: "lucy", label: "'Sweetie'", type: EDGE_TYPES.UNCERTAIN },
    { from: "eileen_hayward", to: "doc_hayward", label: "Married", type: EDGE_TYPES.PUBLIC_RELATIONSHIP },
    { from: "eileen_hayward", to: "donna_hayward", label: "Parent/Child", type: EDGE_TYPES.FAMILY },
    { from: "eileen_hayward", to: "harriet_hayward", label: "Parent/Child", type: EDGE_TYPES.FAMILY },
    { from: "harriet_hayward", to: "doc_hayward", label: "Parent/Child", type: EDGE_TYPES.FAMILY },
    { from: "harriet_hayward", to: "donna_hayward", label: "Siblings", type: EDGE_TYPES.FAMILY },
    { from: "bett_briggs", to: "major_briggs", label: "Married", type: EDGE_TYPES.PUBLIC_RELATIONSHIP },
    { from: "bett_briggs", to: "bobby_briggs", label: "Parent/Child", type: EDGE_TYPES.FAMILY },
    { from: "sylvia_horne", to: "benjamin_horne", label: "Married", type: EDGE_TYPES.PUBLIC_RELATIONSHIP },
    { from: "sylvia_horne", to: "audrey_horne", label: "Parent/Child", type: EDGE_TYPES.FAMILY },
    { from: "sylvia_horne", to: "johnny_horne", label: "Parent/Child", type: EDGE_TYPES.FAMILY },
    { from: "shelly_johnson", to: "leos_bloody_shirt", label: "Found and stashed", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 2 },
    { from: "leo_johnson", to: "leos_bloody_shirt", label: "Owned", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 2 },
    { from: "laura_palmer", to: "josie_packard", label: "Tutored\nin English", type: EDGE_TYPES.BUSINESS, arrows: "to", episode: 2 },
    { from: "dr_jacoby", to: "heart_necklace_james", label: "Recovered by?", type: EDGE_TYPES.EVIDENCE, arrows: "from", episode: 2 },
    { from: "bobby_briggs", to: "ten_thousand_cash", label: "Given by", type: EDGE_TYPES.EVIDENCE, arrows: "from", episode: 2 },
    {
        from: "bobby_briggs", to: "bobby_leo_cocaine_deal", type: EDGE_TYPES.CRIME, arrows: "to", episode: 2,
        labels: { 2: "Owes", 3: "Owes $20,000 for" }
    },
    {
        from: "mike_nelson", to: "bobby_leo_cocaine_deal", type: EDGE_TYPES.CRIME, arrows: "to", episode: 2,
        labels: { 2: "Owes", 3: "Owes $20,000 for" }
    },
    {
        from: "leo_johnson", to: "bobby_leo_cocaine_deal", type: EDGE_TYPES.CRIME, episode: 2,
        _arrows: { 2: "from", 3: "to" },
        labels: { 2: "Owed to", 3: "Cocaine supplier" }
    },
    { from: "ten_thousand_cash", to: "bobby_leo_cocaine_deal", label: "Intended for", type: EDGE_TYPES.CRIME, arrows: "to", episode: 2 },
    { from: "deputy_hawk", to: "one_armed_man", label: "Followed\nat hospital", type: EDGE_TYPES.OTHER, arrows: "to", episode: 2 },
    { from: "laura_palmer", to: "norma_jennings", label: "Organized\n'Meals on Wheels'\nprogram with", type: EDGE_TYPES.BUSINESS, episode: 2 },
    { from: "dale_cooper", to: "albert_rosenfield", label: "Works with", type: EDGE_TYPES.BUSINESS, episode: 2 },
    { from: "ed_hurley", to: "jacques_renault", label: "Suspects he\nwas drugged by", type: EDGE_TYPES.CRIME, arrows: "to", episode: 2 },
    { from: "jacques_renault", to: "roadhouse", label: "Bartender at", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 2 },
    { from: "sarah_palmer", to: "bob", label: "Hallucinated?", type: EDGE_TYPES.DREAM, arrows: "to", episode: 2 },
    { from: "benjamin_horne", to: "hornes_department_store", label: "Owns", type: EDGE_TYPES.BUSINESS, arrows: "to", episode: 2 },
    { from: "ronette_pulaski", to: "hornes_department_store", label: "Formerly\nworked at", type: EDGE_TYPES.BUSINESS, arrows: "to", episode: 2 },
    { from: "laura_palmer", to: "log_lady", label: "Says her log\nsaw something\nnight of murder", type: EDGE_TYPES.UNCERTAIN, arrows: "from", episode: 2, last_episode: 5 },
    { from: "catherine_martell", to: "benjamin_horne", label: "Secret Relationship", type: EDGE_TYPES.SECRET_RELATIONSHIP, episode: 2 },
    { from: "benjamin_horne", to: "horne_conspiracy", label: "Mastermind", arrows: "to", type: EDGE_TYPES.CRIME, episode: 2 },
    {
        from: "catherine_martell", to: "horne_conspiracy", type: EDGE_TYPES.CRIME, episode: 2,
        labels: { 2: "Co-conspirator", 6: "Unwitting target of" },
        _arrows: { 2: "to", 6: "from" },
    },
    {
        from: "horne_conspiracy", to: "josie_packard", type: EDGE_TYPES.CRIME, episode: 2,
        _arrows: { 2: "to", 6: "from" },
        labels: { 2: "To force out", 5: "To frame\n& force out", 6: "Co-conspirator" }
    },
    { from: "laura_palmer", to: "benjamin_horne", label: "'Sang for'??", arrows: "from", type: EDGE_TYPES.UNCERTAIN, episode: 3 },
    { from: "benjamin_horne", to: "jerry_horne", label: "Siblings", type: EDGE_TYPES.FAMILY, episode: 3 },
    { from: "benjamin_horne", to: "one_eyed_jacks", label: "Patron", arrows: "to", type: EDGE_TYPES.OTHER, episode: 3 },
    { from: "jerry_horne", to: "one_eyed_jacks", label: "Patron", arrows: "to", type: EDGE_TYPES.OTHER, episode: 3 },
    { from: "jacks_new_girl", to: "one_eyed_jacks", label: "Works at", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 3 },
    { from: "jacks_new_girl", to: "hornes_department_store", label: "'Fresh from'", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 3 },
    { from: "dale_cooper", to: "red_room", label: "Dreamt of", arrows: "to", type: EDGE_TYPES.DREAM, episode: 3 },
    { from: "red_room", to: "dwarf", label: "Included", arrows: "to", type: EDGE_TYPES.DREAM, episode: 3 },
    { from: "red_room", to: "dwarf_cousin", label: "Included", arrows: "to", type: EDGE_TYPES.DREAM, episode: 3 },
    { from: "red_room", to: "mike", label: "Along\nvision of", arrows: "to", type: EDGE_TYPES.DREAM, episode: 3 },
    { from: "red_room", to: "bob", label: "Along\nvision of", arrows: "to", type: EDGE_TYPES.DREAM, episode: 3 },
    { from: "mike", to: "one_armed_man", label: "Looks like", type: EDGE_TYPES.DREAM, episode: 3 },
    {
        from: "mike", to: "fire_walk_with_me", arrows: "to", type: EDGE_TYPES.DREAM, episode: 3,
        labels: { 3: "Spoke", 4: "Had tattoo saying" }
    },
    {
        from: "mike", to: "bob", arrows: "to", type: EDGE_TYPES.DREAM, episode: 3,
        labels: { 3: "Claimed\nto know", 4: "Lived together,\nshot to stop\nkilling" }
    },
    { from: "laura_palmer", to: "dwarf_cousin", label: "'Looks almost\nexactly like'", type: EDGE_TYPES.DREAM, episode: 3 },
    { from: "dwarf", to: "dwarf_cousin", label: "Cousins\n(supposedly)", type: EDGE_TYPES.FAMILY, episode: 3 },
    { from: "leo_johnson", to: "ski_mask_man", label: "Associates?", type: EDGE_TYPES.CRIME, episode: 3 },
    { from: "jack_one_eye_note", to: "dale_cooper", label: "Left for", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 3 },
    { from: "jack_one_eye_note", to: "one_eyed_jacks", label: "Points at", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 3 },
    { from: "audrey_horne", to: "jack_one_eye_note", label: "Left", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 4 },
    { from: "laura_palmer", to: "hornes_department_store", label: "Worked at", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 4 },
    { from: "dr_jacoby", to: "johnny_horne", label: "Patient of", arrows: "from", type: EDGE_TYPES.BUSINESS, episode: 4 },
    { from: "harry_truman", to: "bookhouse_boys", label: "Leader?", arrows: "to", type: EDGE_TYPES.CRIME, episode: 4 },
    { from: "ed_hurley", to: "bookhouse_boys", label: "Member", arrows: "to", type: EDGE_TYPES.CRIME, episode: 4 },
    { from: "james_hurley", to: "bookhouse_boys", label: "Member", arrows: "to", type: EDGE_TYPES.CRIME, episode: 4 },
    { from: "deputy_hawk", to: "bookhouse_boys", label: "Member", arrows: "to", type: EDGE_TYPES.CRIME, episode: 4 },
    { from: "bookhouse_boys", to: "drug_trade", label: "Investigating", arrows: "to", type: EDGE_TYPES.CRIME, episode: 4 },
    { from: "bookhouse_boys", to: "bernard_renault", label: "Kidnapped", arrows: "to", type: EDGE_TYPES.CRIME, episode: 4 },
    { from: "bookhouse_boys", to: "jacques_renault", label: "Surveilled", arrows: "to", type: EDGE_TYPES.CRIME, episode: 4 },
    { from: "jacques_renault", to: "bernard_renault", label: "Siblings", type: EDGE_TYPES.FAMILY, episode: 4 },
    { from: "jacques_renault", to: "drug_trade", label: "Conspirator", arrows: "to", type: EDGE_TYPES.CRIME, episode: 4 },
    { from: "bernard_renault", to: "drug_trade", label: "Conspirator", arrows: "to", type: EDGE_TYPES.CRIME, episode: 4 },
    { from: "bernard_renault", to: "roadhouse", label: "Janitor at", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 4 },
    { from: "leo_johnson", to: "drug_trade", label: "Conspirator", arrows: "to", type: EDGE_TYPES.CRIME, episode: 4 },
    { from: "dale_cooper", to: "gordon_cole", label: "Works for", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 4 },
    { from: "josie_packard", to: "packard_murder", label: "Suspects", arrows: "to", type: EDGE_TYPES.UNCERTAIN, episode: 4 },
    { from: "andrew_packard", to: "packard_murder", label: "Suspected victim", arrows: "from", type: EDGE_TYPES.UNCERTAIN, episode: 4 },
    { from: "benjamin_horne", to: "packard_murder", label: "Suspected\nperpetrator", arrows: "from", type: EDGE_TYPES.UNCERTAIN, episode: 4 },
    { from: "catherine_martell", to: "packard_murder", label: "Suspected\nperpetrator", arrows: "from", type: EDGE_TYPES.UNCERTAIN, episode: 4 },
    { from: "laura_palmer", to: "drug_trade", label: "Used cocaine\nsourced from", arrows: "to", type: EDGE_TYPES.CRIME, episode: 4 },
    { from: "bobby_leo_cocaine_deal", to: "drug_trade", label: "Part of", arrows: "to", type: EDGE_TYPES.CRIME, episode: 4 },
    { from: "laura_palmer", to: "bite_claw_marks", label: "Found on", arrows: "from", type: EDGE_TYPES.EVIDENCE, episode: 4 },
    { from: "laura_palmer", to: "soap_residue", label: "Found on", arrows: "from", type: EDGE_TYPES.EVIDENCE, episode: 4 },
    { from: "train_car", to: "soap_residue", label: "Found near", arrows: "from", type: EDGE_TYPES.EVIDENCE, episode: 4 },
    { from: "laura_palmer", to: "plastic_fragment_j", label: "Found in\nstomach of", arrows: "from", type: EDGE_TYPES.EVIDENCE, episode: 4 },
    { from: "laura_palmer", to: "twine_fragments_1", label: "Found on", arrows: "from", type: EDGE_TYPES.EVIDENCE, episode: 4 },
    { from: "ronette_pulaski", to: "twine_fragments_1", label: "Found on", arrows: "from", type: EDGE_TYPES.EVIDENCE, episode: 4 },
    { from: "train_car", to: "twine_fragments_1", label: "Found in", arrows: "from", type: EDGE_TYPES.EVIDENCE, episode: 4 },
    { from: "laura_palmer", to: "twine_fragments_2", label: "Found on", arrows: "from", type: EDGE_TYPES.EVIDENCE, episode: 4 },
    { from: "laura_palmer", to: "madeleine_ferguson", label: "Cousins", type: EDGE_TYPES.FAMILY, episode: 4 },
    { from: "leland_palmer", to: "madeleine_ferguson", label: "Uncle/Niece", type: EDGE_TYPES.FAMILY, episode: 4 },
    { from: "sarah_palmer", to: "madeleine_ferguson", label: "Aunt/Niece", type: EDGE_TYPES.FAMILY, episode: 4 },
    { from: "bob", to: "fire_walk_with_me", label: "Had tattoo saying", arrows: "to", type: EDGE_TYPES.DREAM, episode: 4 },
    { from: "sarah_palmer", to: "heart_necklace_james", label: "Had vision\nof recovery", arrows: "to", type: EDGE_TYPES.DREAM, episode: 5 },
    { from: "dr_jacoby", to: "red_corvette", label: "On night of murder,\nfollowed someone driving", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 5 },
    { from: "leo_johnson", to: "red_corvette", label: "Owns a", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 5 },
    { from: "horne_conspiracy", to: "timber_falls", label: "Meets at", arrows: "to", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "josie_packard", to: "timber_falls", label: "Surveilled", arrows: "to", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "horne_conspiracy", to: "packard_sawmill", label: "Plan to\nburn down", arrows: "to", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "one_armed_man", to: "bob_lydecker", label: "Best Friends", type: EDGE_TYPES.FRIENDS, episode: 5 },
    { from: "one_armed_man", to: "timber_falls", label: "Staying at", type: EDGE_TYPES.OTHER, episode: 5 },
    { from: "bob", to: "bob_lydecker", label: "???", type: EDGE_TYPES.UNCERTAIN, episode: 5 },
    { from: "audrey_horne", to: "dale_cooper", label: "Wants to seduce", arrows: "to", type: EDGE_TYPES.SECRET_RELATIONSHIP, episode: 5 },
    { from: "audrey_horne", to: "donna_hayward", label: "Investigating\nmurder together", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "bob_lydecker", to: "lydecker_clinic", label: "Owns", type: EDGE_TYPES.BUSINESS, arrows: "to", episode: 5 },
    { from: "laura_palmer", to: "madeleine_ferguson", label: "As kids, pretended\nthey were sisters", type: EDGE_TYPES.UNCERTAIN, episode: 5 },
    { from: "audrey_horne", to: "hornes_department_store", label: "Asked to\nwork at", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 5 },
    { from: "plastic_fragment_j", to: "one_eyed_jacks", label: "Originated from", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 5 },
    { from: "waldo", to: "jacques_renault", label: "Owns", arrows: "from", type: EDGE_TYPES.EVIDENCE, episode: 5 },
    { from: "waldo", to: "lydecker_clinic", label: "Treated", arrows: "from", type: EDGE_TYPES.OTHER, episode: 5 },
    { from: "waldo", to: "bite_claw_marks", label: "Caused?", arrows: "from", type: EDGE_TYPES.UNCERTAIN, episode: 5 },
    { from: "benjamin_horne", to: "hank_jennings", label: "Criminal associates", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "leo_johnson", to: "hank_jennings", label: "Criminal associates", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "leo_johnson", to: "bernard_renault", label: "Murdered", arrows: "to", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "horne_conspiracy", to: "leo_johnson", label: "Hired for arson", arrows: "to", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "benjamin_horne", to: "bernard_renault", label: "Knows about murder", arrows: "to", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "benjamin_horne", to: "bobby_leo_cocaine_deal", label: "Knows about", arrows: "to", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "benjamin_horne", to: "leo_johnson", label: "Criminal associates", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "pete_martell", to: "josie_packard", label: "Fishing contest\npartners", type: EDGE_TYPES.FRIENDS, episode: 5 },
    { from: "hank_jennings", to: "josie_packard", label: "Domino??", type: EDGE_TYPES.UNCERTAIN, episode: 5 },
    { from: "bobby_briggs", to: "leos_bloody_shirt", label: "Given to", arrows: "from", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "leos_bloody_shirt", to: "jacques_renault", label: "Planted at home of", arrows: "to", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "leos_bloody_shirt", to: "laura_palmer", label: "Does NOT match blood of", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 6 },
    { from: "flesh_world", to: "jacques_renault", label: "Found in the home of", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 6 },
    { from: "jacques_renault", to: "ronette_pulaski", label: "Managed the\nFlesh World ad for", arrows: "to", type: EDGE_TYPES.CRIME, episode: 6 },
    { from: "emory_batiss", to: "hornes_department_store", label: "Perfume Counter Manager", arrows: "from", type: EDGE_TYPES.BUSINESS, episode: 6 },
    { from: "jacques_renault", to: "jacques_cabin", label: "Owned", arrows: "to", type: EDGE_TYPES.OTHER, episode: 6 },
    { from: "jacques_cabin", to: "red_room", label: "Red drapes...?", type: EDGE_TYPES.UNCERTAIN, episode: 6 },
    { from: "jacques_cabin", to: "dwarf_cousin", label: "'There's always\nmusic in the air'?", type: EDGE_TYPES.UNCERTAIN, episode: 6 },
    { from: "waldo", to: "jacques_cabin", label: "Found at", arrows: "to", type: EDGE_TYPES.OTHER, episode: 6 },
    { from: "poker_chip", to: "jacques_cabin", label: "Found at", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 6 },
    { from: "plastic_fragment_j", to: "poker_chip", label: "Matches", type: EDGE_TYPES.EVIDENCE, episode: 6 },
    { from: "flesh_world", to: "red_drapes_ad", label: "Included", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 6 },
    { from: "jacques_renault", to: "red_drapes_ad", label: "Managed", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 6 },
    { from: "red_drapes_ad", to: "jacques_cabin", label: "Taken at", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 6 },
    { from: "laura_palmer", to: "red_drapes_ad", label: "Featured in?", arrows: "to", type: EDGE_TYPES.UNCERTAIN, episode: 6 },
    { from: "donna_hayward", to: "teen_investigators", label: "Member of", arrows: "to", type: EDGE_TYPES.OTHER, episode: 6 },
    { from: "james_hurley", to: "teen_investigators", label: "Member of", arrows: "to", type: EDGE_TYPES.OTHER, episode: 6 },
    { from: "madeleine_ferguson", to: "teen_investigators", label: "Member of", arrows: "to", type: EDGE_TYPES.OTHER, episode: 6 },
    { from: "bobby_briggs", to: "dr_jacoby", label: "Patient of", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 6 },
    { from: "major_briggs", to: "dr_jacoby", label: "Patient of", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 6 },
    { from: "bett_briggs", to: "dr_jacoby", label: "Patient of", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 6 },
    { from: "log_lady", to: "owls", label: "'The owls won't see us here'", type: EDGE_TYPES.UNCERTAIN, episode: 6 },
    { from: "log_lady", to: "cabin_party", label: "Says her log observed", type: EDGE_TYPES.EVIDENCE, episode: 6 },
    { from: "laura_palmer", to: "cabin_party", label: "Attended", type: EDGE_TYPES.CRIME, episode: 6 },
    { from: "ronette_pulaski", to: "cabin_party", arrows: "to", label: "Attended", type: EDGE_TYPES.CRIME, episode: 6 },
    { from: "jacques_renault", to: "cabin_party", arrows: "to", label: "Attended", type: EDGE_TYPES.CRIME, episode: 6 },
    { from: "leo_johnson", to: "cabin_party", arrows: "to", label: "Attended", type: EDGE_TYPES.CRIME, episode: 6 },
    { from: "cabin_party", to: "jacques_cabin", arrows: "to", label: "Occured at", type: EDGE_TYPES.CRIME, episode: 6 },
    { from: "third_man", to: "cabin_party", arrows: "to", label: "Visited?", type: EDGE_TYPES.UNCERTAIN, episode: 6 },
    { from: "owls", to: "cabin_party", label: "'The owls were silent'", type: EDGE_TYPES.UNCERTAIN, episode: 6 },
    { from: "audrey_horne", to: "horne_conspiracy", arrows: "to", label: "Aware of", type: EDGE_TYPES.OTHER, episode: 6 },
    { from: "shelly_johnson", to: "leo_johnson", label: "Shot", type: EDGE_TYPES.CRIME, arrows: "to", episode: 6 },
    { from: "madeleine_ferguson", to: "lauras_hidden_tape", label: "Found", type: EDGE_TYPES.OTHER, arrows: "to", episode: 6 },
    { from: "laura_palmer", to: "lauras_hidden_tape", label: "Made & hid", type: EDGE_TYPES.OTHER, arrows: "to", episode: 6 },
    { from: "log_lady", to: "fire_walk_with_me", label: "'Fire is the devil hiding\nlike a coward in the smoke'", type: EDGE_TYPES.UNCERTAIN, episode: 6 }
];