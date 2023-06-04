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
    //#region Episode 1
    {
        id: "laura_palmer", label: "Laura Palmer\n(deceased)", type: NODE_TYPES.PERSON,
        images: {
            1: "laura_palmer_homecoming",
            2: "laura_palmer_1x02",
            3: "laura_palmer_vhs",
            "4_only": "laura_palmer_1x04",
            "9_only": "laura_palmer_2x01",
            "11_only": "laura_palmer_gravestone",
        },
        fixed: true
    },
    {
        id: "donna_hayward", label: "Donna Hayward", type: NODE_TYPES.PERSON,
        images: {
            1: "donna_hayward", 2: "donna_hayward_1x02", "4_only": "donna_hayward_1x04", 8: "donna_hayward_1x08", 9: "donna_hayward_2x01",
            10: "donna_hayward_2x02", 11: "donna_hayward_2x03",
        }
    },
    {
        id: "james_hurley", label: "James Hurley", type: NODE_TYPES.PERSON,
        images: { 1: "james_hurley", "4_only": "james_hurley_1x04" }
    },
    {
        id: "bobby_briggs", label: "Bobby Briggs", type: NODE_TYPES.PERSON,
        images: { 1: "bobby_briggs", "4_only": "bobby_briggs_1x04", "8_only": "bobby_briggs_1x08" },
    },
    {
        id: "leland_palmer", label: "Leland Palmer", type: NODE_TYPES.PERSON,
        images: {
            1: "leland_palmer", 3: "leland_palmer_1x03", 4: "leland_palmer_1x04", 5: "leland_palmer_1x05", 8: "leland_palmer_1x08", 9: "leland_palmer_2x01",
            12: "leland_palmer_2x04"
        }
    },
    {
        id: "sarah_palmer", label: "Sarah Palmer", type: NODE_TYPES.PERSON,
        images: { 1: "sarah_palmer", "4_only": "sarah_palmer_1x04" }
    },
    {
        id: "pete_martell", label: "Pete Martell", type: NODE_TYPES.PERSON,
        images: { 1: "pete_martell", "4_only": "pete_martell_1x04", 8: "pete_martell_1x08", 9: "pete_martell_2x01" }
    },
    {
        id: "dr_jacoby", type: NODE_TYPES.PERSON,
        labels: { 1: "Dr. Jacoby", 8: "Dr. Lawrence Jacoby" },
        images: { 1: "dr_jacoby", 4: "dr_jacoby_1x04", 5: "dr_jacoby_1x05", 8: "dr_jacoby_1x08", 10: "dr_jacoby_2x02", 11: "dr_jacoby_2x03" }
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
    { id: "fingernail_letter_r", label: "Fingernail letter 'R'", image: "fingernail_letter", type: NODE_TYPES.OBJECT },
    {
        id: "ed_hurley", type: NODE_TYPES.PERSON,
        labels: { 1: "Ed", 2: "Ed Hurley" },
        images: { "1": "big_ed", "4_only": "big_ed_1x04", "7_only": "big_ed_1x07", 10: "big_ed_2x02" }
    },
    { id: "mike_nelson", label: "Mike 'Snake'", image: "mike_snake_nelson", type: NODE_TYPES.PERSON },
    {
        id: "nadine_hurley", type: NODE_TYPES.PERSON,
        labels: { 1: "Nadine", 2: "Nadine Hurley" },
        images: { 1: "nadine_hurley", 8: "nadine_hurley_1x08", 11: "nadine_hurley_2x03" }, 
    },
    {
        id: "norma_jennings", image: "norma_jennings", type: NODE_TYPES.PERSON,
        labels: { 1: "Norma", 2: "Norma Jennings" },
    },
    {
        id: "shelly_johnson", label: "Shelly Johnson", type: NODE_TYPES.PERSON,
        images: { 1: "shelly_johnson", 8: "shelly_johnson_1x08", 9: "shelly_johnson_2x01" },
    },
    {
        id: "hank_jennings", type: NODE_TYPES.PERSON,
        labels: { 1: "Hank\n(in prison\nfor manslaughter)", 2: "Hank Jennings\n(in prison\nfor manslaughter)", 4: 'Hank Jennings' },
        images: { 4: "hank_jennings_mugshot", 5: "hank_jennings", 8: "hank_jennings_1x08", 9: "hank_jennings_2x01", 12: "hank_jennings_2x04" }
    },
    {
        id: "leo_johnson", label: "Leo Johnson", type: NODE_TYPES.PERSON,
        images: { 1: "leo_johnson", 8: "leo_johnson_1x08", 10: "leo_johnson_2x02" },
    },
    {
        id: "major_briggs", image: "major_briggs", type: NODE_TYPES.PERSON,
        labels: { 1: "Major Briggs", 10: "Major\nGarland Briggs" }
    },
    {
        id: "catherine_martell", label: "Catherine Martell\n(née Packard)", type: NODE_TYPES.PERSON,
        images: { 1: "catherine_martell", "2_only": "catherine_martell_1x02", "6_only": "catherine_martell_1x06", 8: "catherine_martell_1x08" },
    },
    {
        id: "josie_packard", label: "Josie Packard", type: NODE_TYPES.PERSON,
        images: { 1: "josie_packard", 8: "josie_packard_1x08", 12: "josie_packard_2x04" },
    },
    {
        id: "doc_hayward", image: "doc_hayward", type: NODE_TYPES.PERSON,
        labels: { 1: "Doc Hayward", 8: "Doc Will Hayward" }
    },
    {
        id: "benjamin_horne", label: "Benjamin Horne", type: NODE_TYPES.PERSON,
        images: { 1: "benjamin_horne", 9: "benjamin_horne_2x01" },
    },
    {
        id: "audrey_horne", label: "Audrey Horne", type: NODE_TYPES.PERSON,
        images: {
            1: "audrey_horne_pilot", 2: "audrey_horne_1x02", "4_only": "audrey_horne_1x04", 8: "audrey_horne_1x08", 9: "audrey_horne_2x01",
            10: "audrey_horne_2x02", 12: "audrey_horne_2x04"
        }
    },
    {
        id: "ronette_pulaski", label: "Ronette Pulaski", type: NODE_TYPES.PERSON,
        images: { 1: "ronette_pulaski", 9: "ronette_pulaski_2x01" },
    },
    { id: "fire_walk_with_me", label: "'FIRE WALK WITH ME'", image: "fire_walk_with_me", type: NODE_TYPES.CONCEPT },
    { id: "ten_thousand_cash", label: "$10,000 cash", type: NODE_TYPES.OBJECT },
    { id: "flesh_world", label: "'Flesh World' magazine", image: "flesh_world", type: NODE_TYPES.OBJECT },
    { id: "teresa_banks", label: "Teresa Banks\n(deceased)", type: NODE_TYPES.PERSON },
    { id: "andrew_packard", label: "Andrew Packard\n(deceased)", type: NODE_TYPES.PERSON },
    { id: "great_northern", label: "Great Northern hotel", image: "great_northern", type: NODE_TYPES.PLACE },
    {
        id: "dale_cooper", label: "Special Agent\nDale Cooper", type: NODE_TYPES.PERSON,
        images: {
            1: "dale_cooper_pilot", 2: "dale_cooper_1x02", 3: "dale_cooper_1x03", 4: "dale_cooper_1x04", 5: "dale_cooper_1x05", 6: "dale_cooper_1x06", 7: "dale_cooper_1x07",
            8: "dale_cooper_1x08", 9: "dale_cooper_2x01", 10: "dale_cooper_2x02", 11: "dale_cooper_2x03",
        }
    },
    { id: "diane", label: "Diane", type: NODE_TYPES.PERSON },
    { id: "harry_truman", label: "Sheriff Harry Truman", type: NODE_TYPES.PERSON, image: "sheriff_truman" },
    { id: "deputy_hawk", label: "Deputy Hawk", type: NODE_TYPES.PERSON, image: "deputy_hawk" },
    {
        id: "deputy_andy", label: "Deputy Andy", type: NODE_TYPES.PERSON,
        images: { 1: "deputy_andy", 8: "deputy_andy_1x08" }
    },
    { id: "lucy", label: "Lucy Moran", type: NODE_TYPES.PERSON, image: "lucy" },
    {
        id: "one_armed_man", type: NODE_TYPES.PERSON,
        labels: { 1: "One armed man?", 5: "Phillip Michael Gerard,\nshoe salesman" },
        images: { 1: "one_armed_man", 5: "phillip_michael_gerard" }
    },
    {
        id: "harriet_hayward", label: "Harriet Hayward", type: NODE_TYPES.PERSON,
        images: { 1: "harriet_hayward", 9: "harriet_hayward_2x01" }
    },
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
    { id: "big_eds_gas_farm", label: "Big Ed's Gas Farm", type: NODE_TYPES.PLACE, image: "big_eds_gas_farm" },
    { id: "rr_diner", label: "Double-R Diner", image: "rr_diner", type: NODE_TYPES.PLACE },
    //#endregion
    //#region Episode 2
    {
        id: "bobby_leo_cocaine_deal", type: NODE_TYPES.CONCEPT, episode: 2,
        labels: { 2: "$20,000", 3: "Cocaine deal" }
    },
    { id: "albert_rosenfield", label: "Albert Rosenfield", type: NODE_TYPES.PERSON, images: { 3: "albert_rosenfield" }, episode: 2 },
    { id: "leos_bloody_shirt", label: "Bloody shirt", type: NODE_TYPES.OBJECT, image: "bloody_shirt", episode: 2 },
    {
        id: "jacques_renault", type: NODE_TYPES.PERSON, episode: 2,
        labels: { 2: "Jacques Renault", 8: "Jacques Reanult\n(deceased)" },
        images: { 4: "jacques_renault", 7: "jacques_renault_1x07" }
    },
    {
        id: "bob", type: NODE_TYPES.PERSON, episode: 2,
        labels: { 2: "???", 3: "Bob?" },
        images: { 2: "bob_1x02", 3: "bob_1x03", 9: "bob_2x01", 10: "bob_2x02", 11: "bob_sketch" },
    },
    { id: "hornes_department_store", type: NODE_TYPES.PLACE, episode: 2, label: "Horne's\ndepartment store\n(perfume counter)" },
    {
        id: "log_lady", type: NODE_TYPES.PERSON, episode: 2,
        labels: { 2: "Log Lady", 6: "Margaret\nthe Log Lady" },
        images: { 2: "log_lady", "4_only": "log_lady_1x04" }
    },
    { id: "horne_conspiracy", label: "Conspiracy", type: NODE_TYPES.CONCEPT, episode: 2 },
    {
        id: "coconut_stash", label: "Coconut container", type: NODE_TYPES.OBJECT, episode: 2,
        images: { 2: "coconut_stash", 8: "coconut_stash_1x08" }
    },
    { id: "jacoby_tape", label: "Hidden tape #1", image: "jacoby_tape", type: NODE_TYPES.OBJECT, episode: 2 },
    { id: "mystery_man", label: "'Mystery man'", type: NODE_TYPES.PERSON, episode: 2 },
    { id: "roadhouse", label: "The Roadhouse", image: "roadhouse", type: NODE_TYPES.PLACE, episode: 2 },
    //#endregion
    //#region Episode 3
    {
        id: "jerry_horne", label: "Jerry Horne", type: NODE_TYPES.PERSON, episode: 3,
        images: { 3: "jerry_horne", 9: "jerry_horne_2x01" }
    },
    { id: "one_eyed_jacks", label: "One Eyed Jack's\ncasino & brothel", image: "one_eyed_jacks", type: NODE_TYPES.PLACE, episode: 3 },
    { id: "blackie", type: NODE_TYPES.PERSON, label: "Blackie", image: "blackie", episode: 3 },
    { id: "jacks_new_girl", label: "New Girl", image: "new_girl", type: NODE_TYPES.PERSON, episode: 3 },
    { id: "bloody_rag", label: "Bloody rag", image: "bloody_rag", type: NODE_TYPES.OBJECT, episode: 3 },
    { id: "mike", type: NODE_TYPES.PERSON, episode: 3, label: "Mike?", image: "mike" },
    { id: "dwarf", label: "Dwarf?", image: "dwarf", type: NODE_TYPES.PERSON, episode: 3 },
    { id: "dwarf_cousin", label: "???", image: "laura_palmer_red_room", type: NODE_TYPES.PERSON, episode: 3 },
    { id: "red_room", label: "Red room?", image: "red_room", type: NODE_TYPES.PLACE, episode: 3 },
    { id: "jack_one_eye_note", label: "'Jack with\nOne Eye' note", type: NODE_TYPES.OBJECT, episode: 3 },
    { id: "ski_mask_man", label: "Ski mask man?", image: "ski_mask", type: NODE_TYPES.PERSON, episode: 3 },
    //#endregion
    //#region Episode 4
    {
        id: "madeleine_ferguson", type: NODE_TYPES.PERSON, episode: 4,
        labels: { 4: "Madeleine", 5: "Madeleine Ferguson" },
        images: { 4: "madeleine_ferguson", "7_only": "madeleine_ferguson_1x07", 9: "madeleine_ferguson_2x01" }
    },
    {
        id: "bookhouse_boys", type: NODE_TYPES.CONCEPT, episode: 2,
        labels: { 2: "Bookhouse Boys?", 4: "The Bookhouse Boys" },
    },
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
    //#endregion
    //#region Episode 5
    { id: "red_corvette", label: "Red corvette", type: NODE_TYPES.OBJECT, episode: 5 },
    { id: "timber_falls", label: "Timber Falls Motel", image: "timber_falls", type: NODE_TYPES.PLACE, episode: 5 },
    { id: "bob_lydecker", label: "Bob Lydecker", type: NODE_TYPES.PERSON, episode: 5 },
    { id: "lydecker_clinic", label: "Lydecker\nVeterinary Clinic", image: "lydecker_clinic", type: NODE_TYPES.PLACE, episode: 5 },
    {
        id: "waldo", type: NODE_TYPES.OBJECT, episode: 5, images: { 6: "waldo_1x06" },
        labels: { 5: "Waldo\nthe myna bird", 7: "Waldo\nthe myna bird\n(deceased)" }
    },
    //#endregion
    //#region Episode 6
    {
        id: "emory_batiss", type: NODE_TYPES.PERSON, episode: 6,
        labels: { 6: "Emory Batiss", 12: "Emory Batiss\n(deceased)" },
        images: { 6: "emory_batiss", 12: "emory_batiss_2x04" },
    },
    { id: "jacques_cabin", label: "Jacques' Cabin", image: "jacques_cabin", type: NODE_TYPES.PLACE, episode: 6 },
    { id: "poker_chip", label: "Broken Poker Chip", image: "casino_chip", type: NODE_TYPES.OBJECT, episode: 6 },
    { id: "red_drapes_ad", label: "Flesh World\n'red drapes' ad", image: "red_drapes_ad", type: NODE_TYPES.CONCEPT, episode: 6 },
    { id: "teen_investigators", label: "Teen Murder\nInvestigation Team", type: NODE_TYPES.CONCEPT, episode: 6 },
    {
        id: "owls", type: NODE_TYPES.CONCEPT, episode: 6,
        images: { 6: "owl", 10: "owl_2x02" },
        labels: { 6: "Owls", 9: "'The owls are\nnot what they seem'" }
    },
    {
        id: "cabin_party", type: NODE_TYPES.CONCEPT, episode: 6,
        labels: { 6: "Cabin party?", 8: "Cabin party" },
    },
    { id: "third_man", label: "Third man?", type: NODE_TYPES.PERSON, episode: 6 },
    { id: "lauras_hidden_tape", label: "Hidden tape #2", image: "lauras_hidden_tape", type: NODE_TYPES.OBJECT, episode: 6 },
    //#endregion
    //#region Episode 7
    {
        id: "mystery_note", type: NODE_TYPES.OBJECT, episode: 7,
        labels: { 7: "Mystery note", 8: "'My special agent'\nnote" },
        images: { 8: "my_special_agent" }
    },
    { id: "life_insurance_policy", label: "Life insurance\npolicy", type: NODE_TYPES.CONCEPT, episode: 7 },
    { id: "planted_cocaine", label: "Planted cocaine", image: "planted_cocaine", type: NODE_TYPES.OBJECT, episode: 7 },
    //#endregion
    //#region Episode 8
    { id: "jacoby_attacker", label: "Jacoby's attacker", image: "jacoby_attacker", type: NODE_TYPES.PERSON, episode: 8 },
    { id: "josie_hank_payment", label: "$90,000", type: NODE_TYPES.OBJECT, episode: 8 },
    { id: "hank_murder", label: "Murder?", type: NODE_TYPES.CONCEPT, episode: 8 },
    {
        id: "coopers_shooter", label: "Cooper's shooter", type: NODE_TYPES.PERSON, episode: 8,
        images: { 8: "coopers_shooter", 11: null }
    },
    //#endregion
    //#region Episode 9
    { id: "giant", label: "Giant?", image: "giant", type: NODE_TYPES.PERSON, episode: 9 },
    { id: "man_smiling_bag", label: "'A man in a\nsmiling bag'", image: "smiling_bag", type: NODE_TYPES.CONCEPT, episode: 9 },
    { id: "without_chemicals_points", label: "'Without chemicals,\nhe points'", type: NODE_TYPES.CONCEPT, episode: 9 },
    { id: "coopers_ring", label: "Ring", image: "coopers_ring", type: NODE_TYPES.OBJECT, episode: 9 },
    { id: "leo_hungry_horse", label: "'Leo locked inside\nhungry horse'", type: NODE_TYPES.CONCEPT, episode: 9 },
    { id: "clue_leos_house", label: "Clue at Leo's house", type: NODE_TYPES.CONCEPT, episode: 9 },
    { id: "beth_ferguson", label: "Beth Ferguson", type: NODE_TYPES.PERSON, episode: 9 },
    { id: "rug_shadow", label: "Dream about\nthe rug?", image: "rug_shadow", type: NODE_TYPES.CONCEPT, episode: 9 },
    { id: "leos_duster", label: "Duster", type: NODE_TYPES.OBJECT, episode: 9 },
    { id: "leos_boots", label: "Hidden boots", image: "leos_boots", type: NODE_TYPES.OBJECT, episode: 9 },
    { id: "leos_cocaine", label: "Hidden cocaine", image: "leos_boots_cocaine", type: NODE_TYPES.OBJECT, episode: 9 },
    { id: "meals_wheels_note", label: "'LOOK INTO THE\nMEALS ON WHEELS'", image: "meals_wheels_note", type: NODE_TYPES.OBJECT, episode: 9 },
    { id: "meals_on_wheels", label: "Meals on Wheels", type: NODE_TYPES.CONCEPT, episode: 9 },
    { id: "fingernail_letter_t", label: "Fingernail\nletter 'T'", type: NODE_TYPES.OBJECT, episode: 9 },
    { id: "paper_scraps", label: "Paper scraps", type: NODE_TYPES.OBJECT, episode: 9 },
    {
        id: "hong_kong_man", type: NODE_TYPES.PERSON, episode: 9,
        images: { 9: "hong_kong_man", 10: "hong_kong_man_2x02", 12: "hong_kong_man_2x04" },
        labels: { 9: "Man from\nHong Kong?", 12: "Jonathan" },
    },
    { id: "gersten_hayward", label: "Gersten Hayward", image: "gersten_hayward", type: NODE_TYPES.PERSON, episode: 9 },
    { id: "play_with_fire", label: "'Would you like to\nplay with fire, little boy?'", type: NODE_TYPES.CONCEPT, episode: 9 },
    //#endregion
    //#region Episode 10
    { id: "windom_earle", label: "Windom Earle", type: NODE_TYPES.PERSON, episode: 10 },
    { id: "mrs_tremond", label: "Mrs. Tremond", image: "mrs_tremond", type: NODE_TYPES.PERSON, episode: 10 },
    { id: "mrs_tremond_grandson", label: "Magician\nin training", image: "mrs_tremond_grandson", type: NODE_TYPES.PERSON, episode: 10 },
    {
        id: "harold_smith", type: NODE_TYPES.PERSON, episode: 10,
        images: { 10: "harold_smith", 11: "harold_smith_2x03" },
        labels: { 10: "Mr. Smith", 11: "Harold Smith" }
    },
    { id: "mystery_caller", label: "Mystery caller?", type: NODE_TYPES.PERSON, episode: 10 },
    { id: "deep_space_monitors", label: "Deep Space\nMonitors", type: NODE_TYPES.OBJECT, episode: 10 },
    { id: "audrey_kidnapping", label: "Kidnapping\nconspiracy", type: NODE_TYPES.CONCEPT, episode: 10 },
    //#endregion
    //#region Episode 11
    { id: "fingernail_letter_b", label: "Fingernail letter 'B'", image: "fingernail_letter_b", type: NODE_TYPES.OBJECT, episode: 11 },
    { id: "walther_ppk", label: "Walther PPK", image: "coopers_shooter", type: NODE_TYPES.OBJECT, episode: 11 },
    {
        id: "dick_tremayne", label: "Richard 'Dick'\nTremayne", type: NODE_TYPES.PERSON, episode: 11,
        images: { 11: "dick_tremayne", 12: "dick_tremayne_2x04" },
    },
    { id: "pearl_lakes", label: "Pearl Lakes\nsummer house", type: NODE_TYPES.PLACE, episode: 11 },
    { id: "jean_renault", label: "Jean Renault", image: "jean_renault", type: NODE_TYPES.PERSON, episode: 11 },
    { id: "nancy", label: "Nancy", image: "nancy", type: NODE_TYPES.PERSON, episode: 11 },
    { id: "gerards_needle", label: "Needle", image: "gerards_needle", type: NODE_TYPES.OBJECT, episode: 11 },
    { id: "eolani", label: "Eolani", image: "eolani", type: NODE_TYPES.PERSON, episode: 11 },
    { id: "lauras_secret_diary", label: "Secret diary", image: "lauras_secret_diary", type: NODE_TYPES.OBJECT, episode: 11 },
    //#endregion
    //#region Episode 12
    { id: "clinton_sternwood", label: "Judge Clinton Sternwood", image: "clinton_sternwood", type: NODE_TYPES.PERSON, episode: 12 },
    { id: "daryl_lodwick", label: "Daryl Lodwick, DA", image: "daryl_lodwick", type: NODE_TYPES.PERSON, episode: 12 },
    { id: "andys_boots", label: "Andy's boots", type: NODE_TYPES.OBJECT, episode: 12 },
    { id: "mt_wentz", label: "M.T. Wentz,\ntravel writer &\nrestaurant critic", type: NODE_TYPES.PERSON, episode: 12 },
    { id: "lodwick_badge", label: "DA's badge", image: "lodwick_badge", type: NODE_TYPES.OBJECT, episode: 12 },
    { id: "sid", label: "Sid", image: "sid", type: NODE_TYPES.PERSON, episode: 12 },
    { id: "tojamura", label: "Mr. Tojamura", image: "tojamura", type: NODE_TYPES.PERSON, episode: 12 },
    { id: "eckhardt", label: "Mr. Eckhardt", type: NODE_TYPES.PERSON, episode: 12 },
    //#endregion
];

const baseEdges = [
    //#region Episode 1
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
    { from: "fingernail_letter_r", to: "teresa_banks", label: "Matches a letter\nfound on", type: EDGE_TYPES.EVIDENCE, arrows: "to", last_episode: 8 },
    { from: "laura_killer", to: "fingernail_letter_r", label: "Placed by", type: EDGE_TYPES.CRIME, arrows: "from" },
    {
        from: "donna_hayward", to: "james_hurley",
        labels: { 1: "Friends", 2: "Public relationship? \n(post Laura's death)" },
        types: { 1: EDGE_TYPES.FRIENDS, 2: EDGE_TYPES.PUBLIC_RELATIONSHIP }
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
    {
        from: "donna_hayward", to: "mike_nelson", type: EDGE_TYPES.PUBLIC_RELATIONSHIP,
        labels: { 1: "Public relationship", 2: "Former relationship?" }
    },
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
    {
        from: "deputy_andy", to: "lucy",
        labels: { 1: "'Sweetie'", 5: "Former relationship?", 12: "Former relationship" },
        types: { 1: EDGE_TYPES.UNCERTAIN, 5: EDGE_TYPES.PUBLIC_RELATIONSHIP }
    },
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
    //#endregion
    //#region Episode 2
    { from: "shelly_johnson", to: "leos_bloody_shirt", label: "Found and stashed", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 2 },
    { from: "leo_johnson", to: "leos_bloody_shirt", label: "Owned", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 2 },
    {
        from: "ed_hurley", to: "bookhouse_boys", arrows: "to", episode: 2,
        labels: { 2: "???", 4: "Member" },
        types: { 2: EDGE_TYPES.UNCERTAIN, 4: EDGE_TYPES.CRIME }
    },
    {
        from: "james_hurley", to: "bookhouse_boys", arrows: "to", episode: 2,
        labels: { 2: "???", 4: "Member" },
        types: { 2: EDGE_TYPES.UNCERTAIN, 4: EDGE_TYPES.CRIME }
    },
    { from: "deputy_hawk", to: "ed_hurley", label: "Hand signal?", type: EDGE_TYPES.UNCERTAIN, episode: 2, last_episode: 3 },
    { from: "laura_palmer", to: "josie_packard", label: "Tutored\nin English", type: EDGE_TYPES.BUSINESS, arrows: "to", episode: 2 },
    { from: "dr_jacoby", to: "heart_necklace_james", label: "Dug up by?", type: EDGE_TYPES.EVIDENCE, arrows: "from", episode: 2 },
    { from: "dr_jacoby", to: "coconut_stash", label: "Owns", arrows: "to", type: EDGE_TYPES.OTHER, episode: 2 },
    { from: "dr_jacoby", to: "jacoby_tape", label: "Made for", arrows: "from", type: EDGE_TYPES.EVIDENCE, episode: 2 },
    { from: "laura_palmer", to: "jacoby_tape", label: "Made", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 2 },
    { from: "laura_palmer", to: "mystery_man", label: "Secretly seeing", type: EDGE_TYPES.SECRET_RELATIONSHIP, episode: 2 },
    { from: "mystery_man", to: "jacoby_tape", label: "Mentioned on", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 2 },
    { from: "heart_necklace_james", to: "coconut_stash", label: "Hidden in?", arrows: "to", type: EDGE_TYPES.UNCERTAIN, episode: 2 },
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
    { from: "laura_palmer", to: "norma_jennings", label: "Organized\n'Meals on Wheels'\nprogram with", type: EDGE_TYPES.BUSINESS, episode: 2, last_episode: 8 },
    { from: "dale_cooper", to: "albert_rosenfield", label: "Works with", type: EDGE_TYPES.BUSINESS, episode: 2 },
    { from: "ed_hurley", to: "jacques_renault", label: "Suspects he\nwas drugged by", type: EDGE_TYPES.CRIME, arrows: "to", episode: 2 },
    {
        from: "jacques_renault", to: "roadhouse", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 2,
        labels: { 2: "Bartender at", 4: "Former bartender at" }
    },
    { from: "sarah_palmer", to: "bob", label: "Hallucinated?", type: EDGE_TYPES.DREAM, arrows: "to", episode: 2 },
    { from: "benjamin_horne", to: "hornes_department_store", label: "Owns", type: EDGE_TYPES.BUSINESS, arrows: "to", episode: 2 },
    { from: "ronette_pulaski", to: "hornes_department_store", label: "Formerly\nworked at", type: EDGE_TYPES.BUSINESS, arrows: "to", episode: 2 },
    { from: "laura_palmer", to: "log_lady", label: "Says her log\nsaw something\nnight of murder", type: EDGE_TYPES.UNCERTAIN, arrows: "from", episode: 2, last_episode: 5 },
    { from: "catherine_martell", to: "benjamin_horne", label: "Secret Relationship", type: EDGE_TYPES.SECRET_RELATIONSHIP, episode: 2 },
    { from: "benjamin_horne", to: "horne_conspiracy", label: "Mastermind", arrows: "to", type: EDGE_TYPES.CRIME, episode: 2 },
    {
        from: "catherine_martell", to: "horne_conspiracy", type: EDGE_TYPES.CRIME, episode: 2, arrows: "to",
        labels: { 2: "Co-conspirator", 6: "Co-conspirator/\nunwitting target" },
    },
    {
        from: "horne_conspiracy", to: "josie_packard", type: EDGE_TYPES.CRIME, episode: 2,
        _arrows: { 2: "to", 6: "from" },
        labels: { 2: "To force out", 5: "To frame\n& force out", 6: "Co-conspirator/\nfalse target" }
    },
    //#endregion
    //#region Episode 3
    { from: "laura_palmer", to: "benjamin_horne", label: "'Sang for'??", arrows: "from", type: EDGE_TYPES.UNCERTAIN, episode: 3 },
    { from: "benjamin_horne", to: "jerry_horne", label: "Siblings", type: EDGE_TYPES.FAMILY, episode: 3 },
    {
        from: "benjamin_horne", to: "one_eyed_jacks", arrows: "to", episode: 3,
        labels: { 3: "Patron", 8: "Owner" },
        types: { 3: EDGE_TYPES.OTHER, 8: EDGE_TYPES.BUSINESS }
    },
    { from: "jerry_horne", to: "one_eyed_jacks", label: "Patron", arrows: "to", type: EDGE_TYPES.OTHER, episode: 3 },
    { from: "blackie", to: "one_eyed_jacks", label: "Manages", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 3 },
    {
        from: "blackie", to: "benjamin_horne", episode: 3,
        labels: { 3: "Friends?", 8: "Works for" },
        _arrows: { 8: "to" },
        types: { 3: EDGE_TYPES.FRIENDS, 8: EDGE_TYPES.BUSINESS }
    },
    { from: "jacks_new_girl", to: "one_eyed_jacks", label: "Works at", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 3 },
    { from: "jacks_new_girl", to: "hornes_department_store", label: "'Fresh from'", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 3 },
    { from: "bloody_rag", to: "deputy_hawk", label: "Found", arrows: "from", type: EDGE_TYPES.EVIDENCE, episode: 3 },
    { from: "bloody_rag", to: "train_car", label: "Found near", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 3 },
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
    //#endregion
    //#region Episode 4
    { from: "audrey_horne", to: "jack_one_eye_note", label: "Left", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 4 },
    { from: "laura_palmer", to: "hornes_department_store", label: "Worked at", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 4 },
    { from: "dr_jacoby", to: "johnny_horne", label: "Patient of", arrows: "from", type: EDGE_TYPES.BUSINESS, episode: 4 },
    { from: "harry_truman", to: "bookhouse_boys", label: "Leader?", arrows: "to", type: EDGE_TYPES.CRIME, episode: 4 },
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
    //#endregion
    //#region Episode 5
    { from: "sarah_palmer", to: "heart_necklace_james", label: "Had vision\nof recovery", arrows: "to", type: EDGE_TYPES.DREAM, episode: 5 },
    { from: "dr_jacoby", to: "red_corvette", label: "On night after murder,\nfollowed someone driving", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 5 },
    { from: "leo_johnson", to: "red_corvette", label: "Owns a", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 5 },
    { from: "horne_conspiracy", to: "timber_falls", label: "Meets at", arrows: "to", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "josie_packard", to: "timber_falls", label: "Surveilled", arrows: "to", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "horne_conspiracy", to: "packard_sawmill", label: "Plan to\nburn down", arrows: "to", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "one_armed_man", to: "bob_lydecker", label: "Best Friends", type: EDGE_TYPES.FRIENDS, episode: 5 },
    { from: "one_armed_man", to: "timber_falls", label: "Staying at", type: EDGE_TYPES.OTHER, episode: 5 },
    { from: "bob", to: "bob_lydecker", label: "???", type: EDGE_TYPES.UNCERTAIN, episode: 5 },
    {
        from: "audrey_horne", to: "dale_cooper", episode: 5,
        labels: { 5: "Wants to seduce", 7: "Friends?" },
        _arrows: { 5: "to", 7: null },
        types: { 5: EDGE_TYPES.SECRET_RELATIONSHIP, 7: EDGE_TYPES.FRIENDS }
    },
    { from: "audrey_horne", to: "donna_hayward", label: "Agreed to investigate\nmurder together", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "bob_lydecker", to: "lydecker_clinic", label: "Owns", type: EDGE_TYPES.BUSINESS, arrows: "to", episode: 5 },
    { from: "laura_palmer", to: "madeleine_ferguson", label: "As kids, pretended\nthey were sisters", type: EDGE_TYPES.UNCERTAIN, episode: 5 },
    {
        from: "audrey_horne", to: "hornes_department_store", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 5, last_episode: 7,
        labels: { 5: "Asked to\nwork at", 6: "Works at" }, 
    },
    { from: "plastic_fragment_j", to: "one_eyed_jacks", label: "Originated from", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 5 },
    { from: "waldo", to: "jacques_renault", label: "Owns", arrows: "from", type: EDGE_TYPES.EVIDENCE, episode: 5 },
    { from: "waldo", to: "lydecker_clinic", label: "Treated", arrows: "from", type: EDGE_TYPES.OTHER, episode: 5 },
    {
        from: "waldo", to: "bite_claw_marks", arrows: "to", episode: 5,
        labels: { 5: "Caused?", 7: "Caused" },
        types: { 5: EDGE_TYPES.UNCERTAIN, 7: EDGE_TYPES.EVIDENCE }
    },
    { from: "benjamin_horne", to: "hank_jennings", label: "Criminal associates", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "leo_johnson", to: "hank_jennings", label: "Criminal associates", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "leo_johnson", to: "bernard_renault", label: "Murdered", arrows: "to", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "horne_conspiracy", to: "leo_johnson", label: "Hired for arson", arrows: "to", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "benjamin_horne", to: "bernard_renault", label: "Knows about murder", arrows: "to", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "benjamin_horne", to: "bobby_leo_cocaine_deal", label: "Knows about", arrows: "to", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "benjamin_horne", to: "leo_johnson", label: "Criminal associates", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "pete_martell", to: "josie_packard", label: "Fishing contest\npartners", type: EDGE_TYPES.FRIENDS, episode: 5 },
    { from: "hank_jennings", to: "josie_packard", label: "Domino??", type: EDGE_TYPES.UNCERTAIN, episode: 5, last_episode: 7 },
    { from: "bobby_briggs", to: "leos_bloody_shirt", label: "Given to", arrows: "from", type: EDGE_TYPES.CRIME, episode: 5 },
    { from: "leos_bloody_shirt", to: "jacques_renault", label: "Planted at home of", arrows: "to", type: EDGE_TYPES.CRIME, episode: 5 },
    //#endregion
    //#region Episode 6
    { from: "leos_bloody_shirt", to: "laura_palmer", label: "Does NOT match blood of", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 6, last_episode: 7 },
    { from: "flesh_world", to: "jacques_renault", label: "Found in the home of", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 6 },
    { from: "jacques_renault", to: "ronette_pulaski", label: "Managed the\nFlesh World ad for", arrows: "to", type: EDGE_TYPES.CRIME, episode: 6 },
    { from: "emory_batiss", to: "hornes_department_store", label: "Perfume Counter Manager", arrows: "from", type: EDGE_TYPES.BUSINESS, episode: 6 },
    { from: "jacques_renault", to: "jacques_cabin", label: "Owned", arrows: "to", type: EDGE_TYPES.OTHER, episode: 6 },
    { from: "jacques_cabin", to: "red_room", label: "Red drapes...?", type: EDGE_TYPES.UNCERTAIN, episode: 6 },
    { from: "jacques_cabin", to: "dwarf_cousin", label: "'There's always\nmusic in the air'?", type: EDGE_TYPES.UNCERTAIN, episode: 6 },
    { from: "waldo", to: "jacques_cabin", label: "Found at", arrows: "to", type: EDGE_TYPES.OTHER, episode: 6 },
    { from: "poker_chip", to: "jacques_cabin", label: "Found at", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 6 },
    { from: "poker_chip", to: "one_eyed_jacks", label: "From", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 6 },
    { from: "plastic_fragment_j", to: "poker_chip", label: "Matches", type: EDGE_TYPES.EVIDENCE, episode: 6 },
    { from: "flesh_world", to: "red_drapes_ad", label: "Included", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 6 },
    { from: "jacques_renault", to: "red_drapes_ad", label: "Managed", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 6 },
    { from: "red_drapes_ad", to: "jacques_cabin", label: "Taken at", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 6 },
    {
        from: "laura_palmer", to: "red_drapes_ad", arrows: "to", episode: 6,
        labels: { 6: "Featured in?", 8: "Featured in" },
        types: { 6: EDGE_TYPES.UNCERTAIN, 8: EDGE_TYPES.EVIDENCE }, 
    },
    { from: "donna_hayward", to: "teen_investigators", label: "Member of", arrows: "to", type: EDGE_TYPES.OTHER, episode: 6 },
    { from: "james_hurley", to: "teen_investigators", label: "Member of", arrows: "to", type: EDGE_TYPES.OTHER, episode: 6 },
    { from: "teen_investigators", to: "laura_palmer", label: "Investigating\nmurder of", arrows: "to", type: EDGE_TYPES.OTHER, episode: 6 },
    { from: "madeleine_ferguson", to: "teen_investigators", label: "Member of", arrows: "to", type: EDGE_TYPES.OTHER, episode: 6 },
    { from: "bobby_briggs", to: "dr_jacoby", label: "Patient of", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 6 },
    { from: "major_briggs", to: "dr_jacoby", label: "Patient of", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 6 },
    { from: "bett_briggs", to: "dr_jacoby", label: "Patient of", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 6 },
    { from: "log_lady", to: "owls", label: "'The owls won't\nsee us here'", type: EDGE_TYPES.UNCERTAIN, episode: 6 },
    { from: "log_lady", to: "cabin_party", label: "Says her log observed", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 6 },
    { from: "laura_palmer", to: "cabin_party", label: "Attended", arrows: "to", type: EDGE_TYPES.CRIME, episode: 6 },
    { from: "ronette_pulaski", to: "cabin_party", arrows: "to", label: "Attended", type: EDGE_TYPES.CRIME, episode: 6 },
    { from: "jacques_renault", to: "cabin_party", arrows: "to", label: "Attended", type: EDGE_TYPES.CRIME, episode: 6 },
    { from: "leo_johnson", to: "cabin_party", arrows: "to", label: "Attended", type: EDGE_TYPES.CRIME, episode: 6 },
    { from: "cabin_party", to: "jacques_cabin", arrows: "to", label: "Occured at", type: EDGE_TYPES.CRIME, episode: 6 },
    { from: "third_man", to: "cabin_party", arrows: "to", label: "Visited?", type: EDGE_TYPES.UNCERTAIN, episode: 6 },
    { from: "owls", to: "cabin_party", label: "'The owls\nwere silent'", type: EDGE_TYPES.UNCERTAIN, episode: 6 },
    { from: "audrey_horne", to: "horne_conspiracy", arrows: "to", label: "Aware of", type: EDGE_TYPES.OTHER, episode: 6 },
    { from: "shelly_johnson", to: "leo_johnson", label: "Shot", type: EDGE_TYPES.CRIME, arrows: "to", episode: 6 },
    { from: "madeleine_ferguson", to: "lauras_hidden_tape", label: "Found", type: EDGE_TYPES.EVIDENCE, arrows: "to", episode: 6 },
    { from: "laura_palmer", to: "lauras_hidden_tape", label: "Made & hid", type: EDGE_TYPES.EVIDENCE, arrows: "to", episode: 6 },
    { from: "log_lady", to: "fire_walk_with_me", label: "'Fire is the devil hiding\nlike a coward in the smoke'", type: EDGE_TYPES.UNCERTAIN, episode: 6 },
    //#endregion
    //#region Episode 7
    { from: "jacques_renault", to: "one_eyed_jacks", label: "Works\nat the casino", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 7 },
    { from: "emory_batiss", to: "one_eyed_jacks", label: "Recruits girls for", arrows: "to", type: EDGE_TYPES.CRIME, episode: 7 },
    { from: "audrey_horne", to: "mystery_note", label: "Left", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 7 },
    { from: "audrey_horne", to: "one_eyed_jacks", label: "Got a secret\njob at", arrows: "to", type: EDGE_TYPES.CRIME, episode: 7 },
    { from: "mystery_note", to: "dale_cooper", label: "Left for", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 7 },
    { from: "leo_johnson", to: "waldo", label: "Murdered", arrows: "to", type: EDGE_TYPES.CRIME, episode: 7 },
    { from: "hank_jennings", to: "horne_conspiracy", label: "Co-conspirator", arrows: "to", type: EDGE_TYPES.CRIME, episode: 7 },
    { from: "horne_conspiracy", to: "life_insurance_policy", label: "Secretly\ntook out", arrows: "to", type: EDGE_TYPES.CRIME, episode: 7 },
    { from: "life_insurance_policy", to: "catherine_martell", label: "On", arrows: "to", type: EDGE_TYPES.CRIME, episode: 7 },
    { from: "life_insurance_policy", to: "josie_packard", label: "Beneficiary", arrows: "to", type: EDGE_TYPES.CRIME, episode: 7 },
    { from: "leo_johnson", to: "laura_palmer", label: "Hurt?", arrows: "to", type: EDGE_TYPES.UNCERTAIN, episode: 7 },
    { from: "teen_investigators", to: "dr_jacoby", label: "Tricked &\nbroke into home of", arrows: "to", type: EDGE_TYPES.CRIME, episode: 7 },
    { from: "bobby_briggs", to: "planted_cocaine", label: "Planted", arrows: "to", type: EDGE_TYPES.CRIME, episode: 7 },
    { from: "planted_cocaine", to: "james_hurley", label: "Intended to frame", arrows: "to", type: EDGE_TYPES.CRIME, episode: 7 },
    { from: "lauras_hidden_tape", to: "coconut_stash", label: "Mentioned", arrows: "to", type: EDGE_TYPES.OTHER, episode: 7 },
    //#endregion
    //#region Episode 8
    { from: "teen_investigators", to: "coconut_stash", label: "Found", arrows: "to", type: EDGE_TYPES.OTHER, episode: 8 },
    { from: "coconut_stash", to: "jacoby_tape", label: "Held", arrows: "to", type: EDGE_TYPES.OTHER, episode: 8 },
    { from: "teen_investigators", to: "jacoby_tape", label: "Took", arrows: "to", type: EDGE_TYPES.CRIME, episode: 8 },
    { from: "teen_investigators", to: "james_heart_necklace", label: "Recovered", arrows: "to", type: EDGE_TYPES.OTHER, episode: 8 },
    { from: "jacoby_attacker", to: "dr_jacoby", label: "Attacked", arrows: "to", type: EDGE_TYPES.CRIME, episode: 8 },
    { from: "waldo", to: "poker_chip", label: "Broke", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 8 },
    { from: "twine_fragments_2", to: "cabin_party", label: "Used at?", arrows: "to", type: EDGE_TYPES.UNCERTAIN, episode: 8 },
    { from: "jacques_renault", to: "twine_fragments_2", label: "'Laura, she's' all tied up...\nshe liked that'", type: EDGE_TYPES.UNCERTAIN, episode: 8 },
    { from: "mystery_man", to: "fire_walk_with_me", label: "'This guy can really\nlight my F-I-R-E'", type: EDGE_TYPES.UNCERTAIN, episode: 8 },
    { from: "mystery_man", to: "red_corvette", label: "Drives", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 8 },
    { from: "leo_johnson", to: "shelly_johnson", label: "Aducted and\ntried to murder", arrows: "to", type: EDGE_TYPES.CRIME, episode: 8 },
    { from: "josie_packard", to: "josie_hank_payment", label: "Paid", arrows: "to", type: EDGE_TYPES.CRIME, episode: 8 },
    { from: "hank_jennings", to: "josie_hank_payment", label: "Paid to", arrows: "from", type: EDGE_TYPES.CRIME, episode: 8 },
    { from: "josie_hank_payment", to: "hank_murder", label: "For?", arrows: "to", type: EDGE_TYPES.UNCERTAIN, episode: 8 },
    { from: "hank_jennings", to: "hank_murder", label: "Committed?", arrows: "to", type: EDGE_TYPES.UNCERTAIN, episode: 8 },
    { from: "josie_packard", to: "hank_murder", label: "Party to?", arrows: "to", type: EDGE_TYPES.UNCERTAIN, episode: 8 },
    { from: "leos_bloody_shirt", to: "jacques_renault", label: "Blood of", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 8 },
    { from: "leos_bloody_shirt", to: "cabin_party", label: "Bloodied at", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 8 },
    { from: "leo_johnson", to: "bobby_briggs", label: "Attempted murder", arrows: "to", type: EDGE_TYPES.CRIME, episode: 8 },
    { from: "hank_jennings", to: "leo_johnson", label: "Shot", arrows: "to", type: EDGE_TYPES.CRIME, episode: 8 },
    { from: "hank_jennings", to: "catherine_martell", label: "Called to\nsend to mill", arrows: "to", type: EDGE_TYPES.CRIME, episode: 8 },
    { from: "catherine_martell", to: "shelly_johnson", label: "Rescued", arrows: "to", type: EDGE_TYPES.OTHER, episode: 8 },
    { from: "leo_johnson", to: "packard_sawmill", label: "Set fire to", arrows: "to", type: EDGE_TYPES.CRIME, episode: 8 },
    { from: "leland_palmer", to: "jacques_renault", label: "Murdered", arrows: "to", type: EDGE_TYPES.CRIME, episode: 8 },
    { from: "dale_cooper", to: "coopers_shooter", label: "Shot", arrows: "from", type: EDGE_TYPES.CRIME, episode: 8 },
    //#endregion
    //#region Episode 9
    { from: "jerry_horne", to: "drug_trade", label: "Uses drugs from", arrows: "to", type: EDGE_TYPES.CRIME, episode: 9 },
    { from: "blackie", to: "drug_trade", label: "Uses drugs from", arrows: "to", type: EDGE_TYPES.CRIME, episode: 9 },
    { from: "jerry_horne", to: "blackie", label: "Threatened/\nsupplied drugs", arrows: "to", type: EDGE_TYPES.CRIME, episode: 9 },
    { from: "giant", to: "dale_cooper", label: "Appeared to", arrows: "to", type: EDGE_TYPES.DREAM, episode: 9 },
    { from: "giant", to: "man_smiling_bag", label: "Told of", arrows: "to", type: EDGE_TYPES.DREAM, episode: 9 },
    { from: "man_smiling_bag", to: "dale_cooper", label: "Told to", arrows: "to", type: EDGE_TYPES.DREAM, episode: 9 },
    { from: "giant", to: "without_chemicals_points", label: "Told of", arrows: "to", type: EDGE_TYPES.DREAM, episode: 9 },
    { from: "without_chemicals_points", to: "dale_cooper", label: "Told to", arrows: "to", type: EDGE_TYPES.DREAM, episode: 9 },
    { from: "giant", to: "leo_hungry_horse", label: "Told of", arrows: "to", type: EDGE_TYPES.DREAM, episode: 9 },
    { from: "leo_hungry_horse", to: "dale_cooper", label: "Told to", arrows: "to", type: EDGE_TYPES.DREAM, episode: 9 },
    { from: "giant", to: "clue_leos_house", label: "Told of", arrows: "to", type: EDGE_TYPES.DREAM, episode: 9 },
    { from: "clue_leos_house", to: "dale_cooper", label: "Told to", arrows: "to", type: EDGE_TYPES.DREAM, episode: 9 },
    { from: "dale_cooper", to: "coopers_ring", label: "Owned", arrows: "to", type: EDGE_TYPES.OTHER, episode: 9 },
    { from: "giant", to: "coopers_ring", label: "Taken by", arrows: "from", type: EDGE_TYPES.DREAM, episode: 9 },
    { from: "giant", to: "owls", label: "Told of", arrows: "to", type: EDGE_TYPES.DREAM, episode: 9 },
    { from: "owls", to: "dale_cooper", label: "Told to", arrows: "to", type: EDGE_TYPES.DREAM, episode: 9 },
    { from: "madeleine_ferguson", to: "beth_ferguson", label: "Parent/Child", type: EDGE_TYPES.FAMILY, episode: 9 },
    { from: "madeleine_ferguson", to: "rug_shadow", label: "Dreamt of\n& had vision of", type: EDGE_TYPES.DREAM, episode: 9 },
    { from: "jerry_horne", to: "horne_conspiracy", label: "Co-conspirator", arrows: "to", type: EDGE_TYPES.CRIME, episode: 9 },
    { from: "flesh_world", to: "leo_johnson", label: "Copy found in\nhome of", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "leo_johnson", to: "leos_duster", label: "Owned", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "leos_duster", to: "horne_conspiracy", label: "'Reeks of gasoline'", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "leo_johnson", to: "leos_boots", label: "Found at home of", arrows: "from", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "leo_johnson", to: "leos_cocaine", label: "Found at home of", arrows: "from", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "leos_boots", to: "leos_cocaine", label: "Found with", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "leos_cocaine", to: "drug_trade", label: "Part of", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "leos_cocaine", to: "clue_leos_house", label: "Meant?", arrows: "from", type: EDGE_TYPES.UNCERTAIN, episode: 9, last_episode: 11 },
    { from: "meals_wheels_note", to: "donna_hayward", label: "Left for", arrows: "to", type: EDGE_TYPES.UNCERTAIN, episode: 9 },
    { from: "meals_wheels_note", to: "rr_diner", label: "Left at", arrows: "to", type: EDGE_TYPES.OTHER, episode: 9 },
    { from: "laura_palmer", to: "meals_on_wheels", label: "Organizer", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 9 },
    { from: "norma_jennings", to: "meals_on_wheels", label: "Organizer", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 9 },
    { from: "meals_wheels_note", to: "meals_on_wheels", label: "Points at", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "albert_rosenfield", to: "coopers_shooter", label: "Sent to investigate", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 9 },
    { from: "albert_rosenfield", to: "gordon_cole", label: "Works for", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 9 },
    { from: "leo_johnson", to: "leo_hungry_horse", label: "Was jailed in\nHungry Horse, Montana", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "leo_hungry_horse", to: "teresa_banks", label: "On night of murder", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "play_with_fire", to: "laura_palmer", label: "Recited by", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "play_with_fire", to: "james_hurley", label: "Recited to", arrows: "to", type: EDGE_TYPES.OTHER, episode: 9 },
    { from: "play_with_fire", to: "mystery_man", label: "Originally said by", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "mystery_man", to: "bob", label: "'Would you like to\nplay with Bob?'", type: EDGE_TYPES.UNCERTAIN, episode: 9 },
    { from: "heart_necklace_james", to: "dale_cooper", label: "Handed over to", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "dr_jacoby", to: "james_hurley", label: "Followed night\nafter murder", arrows: "to", type: EDGE_TYPES.OTHER, episode: 9 },
    { from: "dr_jacoby", to: "donna_hayward", label: "Followed night\nafter murder", arrows: "to", type: EDGE_TYPES.OTHER, episode: 9 },
    { from: "dr_jacoby", to: "jacques_renault", label: "Smelled scorched engine\noil at time of murder", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "man_smiling_bag", to: "jacques_renault", label: "Body bag?", type: EDGE_TYPES.UNCERTAIN, episode: 9 },
    { from: "leo_johnson", to: "laura_palmer", label: "Called night\nof murder", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "third_man", to: "jacques_cabin", label: "'Evidence outside\nthe window'", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "third_man", to: "laura_killer", label: "Is suspected to be", type: EDGE_TYPES.CRIME, episode: 9 },
    { from: "fingernail_letter_t", to: "teresa_banks", label: "Found on", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "fingernail_letter_r", to: "fingernail_letter_t", label: "Matches", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "laura_killer", to: "fingernail_letter_t", label: "Placed by?", type: EDGE_TYPES.CRIME, arrows: "from", episode: 9 },
    { from: "fire_walk_with_me", to: "laura_killer", label: "Written in\nthe blood of?", type: EDGE_TYPES.EVIDENCE, arrows: "to", episode: 9 },
    { from: "paper_scraps", to: "train_car", label: "Found near", type: EDGE_TYPES.EVIDENCE, arrows: "to", episode: 9 },
    { from: "bloody_rag", to: "paper_scraps", label: "Found with", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "bloody_rag", to: "laura_killer", label: "Blood of?", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "bloody_rag", to: "fire_walk_with_me", label: "Same blood", type: EDGE_TYPES.EVIDENCE, episode: 9 },
    { from: "hong_kong_man", to: "josie_packard", label: "Called for", type: EDGE_TYPES.OTHER, arrows: "to", episode: 9 },
    { from: "leland_palmer", to: "doc_hayward", label: "Laywer for", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 9 },
    { from: "giant", to: "mystery_note", label: "'You forgot something'", type: EDGE_TYPES.DREAM, episode: 9 },
    { from: "giant", to: "third_man", label: "'One person saw the third man;\nthree have seen him,\nbut only one, his body'", type: EDGE_TYPES.DREAM, episode: 9 },
    { from: "ronette_pulaski", to: "bob", label: "Remembers", arrows: "to", type: EDGE_TYPES.DREAM, episode: 9 },
    { from: "bob", to: "train_car", label: "Present at in\nRonette's memory", arrows: "to", type: EDGE_TYPES.DREAM, episode: 9 },
    { from: "gersten_hayward", to: "donna_hayward", label: "Siblings", type: EDGE_TYPES.FAMILY, episode: 9 },
    { from: "gersten_hayward", to: "doc_hayward", label: "Parent/Child", type: EDGE_TYPES.FAMILY, episode: 9 },
    { from: "gersten_hayward", to: "eileen_hayward", label: "Parent/Child", type: EDGE_TYPES.FAMILY, episode: 9 },
    { from: "gersten_hayward", to: "harriet_hayward", label: "Siblings", type: EDGE_TYPES.FAMILY, episode: 9 },
    //#endregion
    //#region Episode 10
    { from: "windom_earle", to: "dale_cooper", label: "Former partners", type: EDGE_TYPES.BUSINESS, episode: 10 },
    { from: "albert_rosenfield", to: "windom_earle", label: "Searching for", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 10 },
    { from: "albert_rosenfield", to: "great_northern", label: "Staying at", arrows: "to", type: EDGE_TYPES.OTHER, episode: 10 },
    { from: "hong_kong_man", to: "dale_cooper", label: "Watching", arrows: "to", type: EDGE_TYPES.UNCERTAIN, episode: 10 },
    { from: "donna_hayward", to: "meals_on_wheels", label: "Volunteers for", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 10 },
    { from: "mrs_tremond", to: "meals_on_wheels", label: "Serves", arrows: "from", type: EDGE_TYPES.OTHER, episode: 10 },
    { from: "mrs_tremond", to: "mrs_tremond_grandson", label: "Grandparent/Grandchild", type: EDGE_TYPES.FAMILY, episode: 10 },
    { from: "mrs_tremond", to: "harold_smith", label: "Neighbor", type: EDGE_TYPES.OTHER, episode: 10 },
    { from: "harold_smith", to: "meals_on_wheels", label: "Serves", arrows: "from", type: EDGE_TYPES.OTHER, episode: 10 },
    { from: "log_lady", to: "major_briggs", label: "'Deliver the message'", arrows: "to", type: EDGE_TYPES.OTHER, episode: 10 },
    { from: "harry_truman", to: "hank_jennings", label: "Childhood friends", type: EDGE_TYPES.FRIENDS, episode: 10 },
    { from: "hank_jennings", to: "bookhouse_boys", label: "Former member", arrows: "to", type: EDGE_TYPES.CRIME, episode: 10 },
    {
        from: "leland_palmer", to: "bob", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 10,
        labels: {
            10: "My grandfather's summer house on Pearl Lakes...\nHe lived right next door. I was just a little boy.",
            11: "Says his name\nwas 'Robertson'"
        },
    },
    { from: "mystery_caller", to: "lucy", label: "Calls sheriff's office", arrows: "to", type: EDGE_TYPES.UNCERTAIN, episode: 10 },
    { from: "laura_palmer", to: "one_eyed_jacks", label: "Worked at for\none weekend", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 10 },
    { from: "major_briggs", to: "deep_space_monitors", label: "Maintains", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 10 },
    { from: "deep_space_monitors", to: "owls", label: "Transmitted when\nCooper was shot", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 10 },
    {
        from: "harold_smith", to: "donna_hayward", arrows: "to", type: EDGE_TYPES.OTHER, episode: 10,
        labels: { 10: "Arranged to meet", 11: "Met" }
    },
    { from: "madeleine_ferguson", to: "bob", label: "Hallucinated?", arrows: "to", type: EDGE_TYPES.DREAM, episode: 10 },
    { from: "bob", to: "owls", label: "Cooper's dream?", type: EDGE_TYPES.DREAM, episode: 10 },
    { from: "audrey_kidnapping", to: "audrey_horne", label: "Victim", arrows: "to", type: EDGE_TYPES.CRIME, episode: 10 },
    { from: "blackie", to: "audrey_kidnapping", label: "Conspirator", arrows: "to", type: EDGE_TYPES.CRIME, episode: 10 },
    { from: "emory_batiss", to: "audrey_kidnapping", label: "Conspirator", arrows: "to", type: EDGE_TYPES.CRIME, episode: 10 },
    { from: "emory_batiss", to: "audrey_horne", label: "Kidnapped", arrows: "to", type: EDGE_TYPES.CRIME, episode: 10 },
    //#endregion
    //#region Episode 11
    { from: "fingernail_letter_b", to: "ronette_pulaski", label: "Found on", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 11 },
    { from: "fingernail_letter_b", to: "fingernail_letter_t", label: "Matches", type: EDGE_TYPES.EVIDENCE, episode: 11 },
    { from: "fingernail_letter_b", to: "fingernail_letter_r", label: "Matches", type: EDGE_TYPES.EVIDENCE, episode: 11 },
    { from: "laura_killer", to: "fingernail_letter_b", label: "Placed by?", type: EDGE_TYPES.CRIME, arrows: "from", episode: 11 },
    { from: "harold_smith", to: "meals_wheels_note", label: "Left", type: EDGE_TYPES.EVIDENCE, arrows: "to", episode: 11 },
    { from: "laura_palmer", to: "harold_smith", label: "Asked to contact Donna\nif anything happened to her", arrows: "to", type: EDGE_TYPES.OTHER, episode: 11 },
    { from: "fingernail_letter_b", to: "flesh_world", label: "Cut from", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 11 },
    { from: "coopers_shooter", to: "walther_ppk", label: "Used", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 11 },
    { from: "lucy", to: "dick_tremayne", label: "Used to date", type: EDGE_TYPES.PUBLIC_RELATIONSHIP, episode: 11 },
    { from: "dick_tremayne", to: "hornes_department_store", label: "Works at the\nmenswear counter", type: EDGE_TYPES.BUSINESS, episode: 11 },
    { from: "leland_palmer", to: "pearl_lakes", label: "Stayed at grandfather's\nas a boy", arrows: "to", type: EDGE_TYPES.OTHER, episode: 11 },
    { from: "bob", to: "pearl_lakes", label: "Lived next door?", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 11 },
    { from: "leland_palmer", to: "play_with_fire", label: "Said to", arrows: "from", type: EDGE_TYPES.EVIDENCE, episode: 11 },
    { from: "bob", to: "play_with_fire", label: "Said when Leland\nwas a child?", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 11 },
    { from: "bob", to: "third_man", label: "Is suspected to be", type: EDGE_TYPES.CRIME, episode: 11 },
    { from: "bob", to: "laura_killer", label: "Is suspected to be", type: EDGE_TYPES.CRIME, episode: 11 },
    { from: "ben_horne", to: "blackie", label: "Got hooked on heroin?", arrows: "to", type: EDGE_TYPES.CRIME, episode: 11 },
    { from: "blackie", to: "audrey_horne", label: "Drugged with heroin?", arrows: "to", type: EDGE_TYPES.CRIME, episode: 11 },
    { from: "one_armed_man", to: "bob", label: "Reacts to sketch of", arrows: "to", type: EDGE_TYPES.OTHER, episode: 11 },
    { from: "jean_renault", to: "jacques_renault", label: "Siblings", type: EDGE_TYPES.FAMILY, episode: 11 },
    { from: "jean_renault", to: "bernard_renault", label: "Siblings", type: EDGE_TYPES.FAMILY, episode: 11 },
    { from: "blackie", to: "nancy", label: "Siblings", type: EDGE_TYPES.FAMILY, episode: 11 },
    { from: "jean_renault", to: "dale_cooper", label: "Wants revenge on", arrows: "to", type: EDGE_TYPES.CRIME, episode: 11 },
    { from: "jean_renault", to: "audrey_kidnapping", label: "Conspirator", arrows: "to", type: EDGE_TYPES.CRIME, episode: 11 },
    { from: "nancy", to: "audrey_kidnapping", label: "Conspirator", arrows: "to", type: EDGE_TYPES.CRIME, episode: 11 },
    { from: "audrey_kidnapping", to: "benjamin_horne", label: "Ransom target", arrows: "to", type: EDGE_TYPES.CRIME, episode: 11 },
    { from: "jean_renault", to: "nancy", label: "Together?", type: EDGE_TYPES.PUBLIC_RELATIONSHIP, episode: 11 },
    { from: "one_armed_man", to: "gerards_needle", label: "Left by", arrows: "from", type: EDGE_TYPES.EVIDENCE, episode: 11 },
    { from: "gerards_needle", to: "without_chemicals_points", arrows: "from", label: "Connected to?", type: EDGE_TYPES.UNCERTAIN, episode: 11 },
    { from: "one_armed_man", to: "without_chemicals_points", arrows: "from", label: "Pointed at?", type: EDGE_TYPES.UNCERTAIN, episode: 11 },
    { from: "dr_jacoby", to: "eolani", label: "Married", type: EDGE_TYPES.PUBLIC_RELATIONSHIP, episode: 11 },
    { from: "james_hurley", to: "madeleine_ferguson", label: "Kissed", type: EDGE_TYPES.SECRET_RELATIONSHIP, episode: 11 },
    { from: "dr_jacoby", to: "leland_palmer", label: "Identified\nunder hypnosis", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 11 },
    { from: "laura_palmer", to: "lauras_secret_diary", label: "Wrote", arrows: "to", type: EDGE_TYPES.OTHER, episode: 11 },
    {
        from: "harold_smith", to: "lauras_secret_diary", arrows: "to", type: EDGE_TYPES.OTHER, episode: 11,
        labels: { 11: "Holds", 12: "Given to\n(supposedly)" }
    },
    { from: "planted_cocaine", to: "leos_cocaine", label: "Matches", type: EDGE_TYPES.EVIDENCE, episode: 11 },
    { from: "planted_cocaine", to: "jacques_renault", label: "Matches cocaine\nfound in car of", arrows: "to", type: EDGE_TYPES.EVIDENCE, episode: 11 },
    { from: "planted_cocaine", to: "leo_johnson", label: "Blamed on", arrows: "to", type: EDGE_TYPES.CRIME, episode: 11 },
    //#endregion
    //#region Episode 12
    { from: "clinton_sternwood", to: "leland_palmer", label: "Judging case of", arrows: "to", type: EDGE_TYPES.CRIME, episode: 12 },
    { from: "clinton_sternwood", to: "leo_johnson", label: "Judging case of", arrows: "to", type: EDGE_TYPES.CRIME, episode: 12 },
    { from: "daryl_lodwick", to: "leland_palmer", label: "Prosecuting case of", arrows: "to", type: EDGE_TYPES.CRIME, episode: 12 },
    { from: "daryl_lodwick", to: "leo_johnson", label: "Prosecuting case of", arrows: "to", type: EDGE_TYPES.CRIME, episode: 12 },
    { from: "deputy_andy", to: "andys_boots", arrows: "to", label: "Bought", type: EDGE_TYPES.EVIDENCE, episode: 12 },
    { from: "andys_boots", to: "one_armed_man", arrows: "from", label: "Sold", type: EDGE_TYPES.EVIDENCE, episode: 12 },
    { from: "andys_boots", to: "leos_boots", label: "Matching brand", type: EDGE_TYPES.EVIDENCE, episode: 12 },
    { from: "leos_boots", to: "clue_leos_house", label: "Meant?", arrows: "from", type: EDGE_TYPES.UNCERTAIN, episode: 12 },
    { from: "jean_renault", to: "benjamin_horne", label: "Delivered ransom\ndemand to", arrows: "to", type: EDGE_TYPES.CRIME, episode: 12 },
    { from: "jean_renault", to: "one_eyed_jacks", label: "Wants control of", arrows: "to", type: EDGE_TYPES.CRIME, episode: 12 },
    { from: "great_northern", to: "mt_wentz", label: "Staff on the\nlookout for", arrows: "to", type: EDGE_TYPES.OTHER, episode: 12 },
    { from: "norma_jennings", to: "mt_wentz", label: "On the lookout for", arrows: "to", type: EDGE_TYPES.OTHER, episode: 12 },
    { from: "audrey_kidnapping", to: "dale_cooper", label: "Asked to deliver\nransom money", arrows: "to", type: EDGE_TYPES.CRIME, episode: 12 },
    { from: "dale_cooper", to: "bookhouse_boys", label: "Asked for help\nwith kidnapping", arrows: "to", type: EDGE_TYPES.CRIME, episode: 12 },
    { from: "jean_renault", to: "emory_batiss", label: "Murdered", arrows: "to", type: EDGE_TYPES.CRIME, episode: 12 },
    { from: "daryl_lodwick", to: "mt_wentz", label: "Mistaken for", arrows: "to", type: EDGE_TYPES.OTHER, episode: 12 },
    { from: "daryl_lodwick", to: "lodwick_badge", label: "Belongs to", arrows: "from", type: EDGE_TYPES.OTHER, episode: 12 },
    { from: "hank_jennings", to: "lodwick_badge", label: "Stole", arrows: "to", type: EDGE_TYPES.CRIME, episode: 12 },
    { from: "sid", to: "clinton_sternwood", label: "Law clerk for", arrows: "to", type: EDGE_TYPES.BUSINESS, episode: 12 },
    { from: "tojamura", to: "great_northern", label: "Staying at", arrows: "to", type: EDGE_TYPES.OTHER, episode: 12 },
    { from: "tojamura", to: "mt_wentz", label: "Mistaken for", arrows: "to", type: EDGE_TYPES.OTHER, episode: 12 },
    { from: "hong_kong_man", to: "josie_packard", label: "Cousins\n(supposedly)", type: EDGE_TYPES.FAMILY, episode: 12 },
    { from: "hong_kong_man", to: "eckhardt", label: "???", type: EDGE_TYPES.UNCERTAIN, episode: 12 },
    { from: "josie_packard", to: "eckhardt", label: "???", type: EDGE_TYPES.UNCERTAIN, episode: 12 },
    { from: "hong_kong_man", to: "horne_conspiracy", label: "Secret party to?", type: EDGE_TYPES.CRIME, episode: 12 },
    { from: "hong_kong_man", to: "hank_jennings", label: "Attacked\n& threatened", arrows: "to", type: EDGE_TYPES.CRIME, episode: 12 },
    { from: "harry_truman", to: "audrey_kidnapping", label: "Joined rescue plot", arrows: "to", type: EDGE_TYPES.CRIME, episode: 12 },
    //#endregion
];