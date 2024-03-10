import type { Dictionary } from "@/types";

export const getEnglishDictionary = (): Dictionary => ({
  crystalStructures: {
    SIMPLE_HEXAGONAL: "Simple Hexagonal",
    FACE_CENTERED_CUBIC: "Face Centered Cubic",
    BODY_CENTERED_CUBIC: "Body Centered Cubic",
    SIMPLE_TRIGONAL: "Simple Trigonal",
  },

  colors: {
    COLORLESS: "Colorless",
    SILVER: "Silver",
    SLATE_GRAY: "Slate Gray",
    BLACK: "Black",
  },

  phase: {
    GAS: "Gas",
    SOLID: "Solid",
  },

  elements: {
    H: {
      name: "Hydrogen",
      nameOrigin: "From the Greek word hydro (water), and genes (forming)",
      description: "Hydrogen is the primary component of Jupiter and the other gas giant planets",
      history:
        "Henry Cavendish was the first to distinguish hydrogen from other gases in 1766 when he prepared it by reacting hydrochloric acid with zinc.\n\nIn 1670, English scientist Robert Boyle had observed its production by reacting strong acids with metals.\n\nFrench scientist Antoine Lavoisier later named the element hydrogen in 1783.",
      applications:
        "Liquid hydrogen is used as a rocket fuel.\n\nHydrogen is commonly used in power stations as a coolant in generators.\n\nHydrogen's two heavier isotopes (deuterium and tritium) are used in nuclear fusion.\n\nUsed as a shielding gas in welding methods such as atomic hydrogen welding.",
      toxicity: "Hydrogen poses a number of hazards to safety, from fires when mixed with air to being an asphyxiant in its pure form",
    },
    He: {
      description: "Unlike any other element, helium will remain liquid down to absolute zero at normal pressures",
      name: "Helium",
      nameOrigin: "From the Greek word helios, the sun",
      history:
        "French astronomer Jules Janssen obtained the first evidence of helium during the solar eclipse of 1868.\n\nNorman Lockyer and Edward Frankland suggested the name helium for the new element.\n\nIn 1895, Sir William Ramsay discovered helium in the uranium mineral cleveite.\n\nIt was independently discovered in cleveite by Per Teodor Cleve and Abraham Langlet.",
      applications:
        "Helium is used as a protective gas in growing silicon and germanium crystals, in titanium and zirconium production, and in gas chromatography.\n\nHelium at low temperatures is used in cryogenics.\n\nHelium is used for filling balloons and for pressurizing liquid fuel rockets.\n\nHelium is used as a shielding gas in arc welding processes.",
      toxicity: "Helium is not known to be toxic",
    },
    Li: {
      description: "Lithium is the only metal which reacts with nitrogen under normal conditions",
      name: "Lithium",
      nameOrigin: "From the Greek word helios, the sun",
      history:
        "Lithium was discovered by Johann Arfvedson in 1817 when he was analyzing minerals from the island of Uto in Sweden.\n\nThe pure metal was isolated the following year by both Swedish chemist William Thomas Brande and English chemist Sir Humphry Davy working independently.\n\nIn 1855, larger quantities of lithium were produced through the electrolysis of lithium chloride by Robert Bunsen and Augustus Matthiessen.",
      applications:
        "Pure lithium metal is used in rechargeable lithium ion batteries.\n\nLithium stearate is used as an all-purpose and high-temperature lubricant.\n\nLithium is used in special glasses and ceramics.\n\nMetallic lithium and its complex hydrides are used as high energy additives to rocket propellants.",
      toxicity: "Lithium is corrosive and requires special handling to avoid skin contact",
    },

    Be: {
      name: "Beryllium",
      nameOrigin: "From the Greek word beryllos, beryl",
      history:
        "Louis-Nicolas Vauquelin discovered beryllium in the oxide form in both beryl and emeralds in 1798.\n\nFriedrich Wöhler and Antoine Bussy independently isolated beryllium in 1828 by the chemical reaction of metallic potassium with beryllium chloride.\n\nThe first commercially-successful process for producing beryllium was developed in 1932 by Alfred Stock and Hans Goldschmidt.",
      applications:
        "Beryllium is used in nuclear reactors as a reflector or moderator.\n\nBeryllium metal is used for lightweight structural components in the defense and aerospace industries in high-speed aircraft, guided missiles, space vehicles and satellites.\n\nUnlike most metals, beryllium is virtually transparent to x-rays and hence it is used in radiation windows for x-ray tubes.",
      toxicity: "Beryllium and its salts are toxic and should be handled with the greatest of care",
      description: "Emerald is a naturally occurring compound of beryllium",
    },

    B: {
      history:
        "Boron compounds have been known for thousands of years, but the element was not discovered until 1808 by Sir Humphry Davy and by Gay-Lussac and Thenard.\n\nBoron was not recognized as an element until it was isolated in 1808 by Sir Humphry Davy and by Joseph Louis Gay-Lussac and Louis Jacques Thénard.\n\nJöns Jakob Berzelius identified boron as an element in 1824.",
      name: "Boron",
      nameOrigin: "From the Arabic word Buraq, Persian Burah",
      description: "Boron is an essential nutrient for all green plants",
      toxicity: "Elemental boron, boron oxide, boric acid, borates and many organoboron compounds are non-toxic",
      applications:
        "Boron oxide is used in glassmaking and ceramics.\n\nBorax is used in making fiberglass, as a cleansing fluid, a water softener, insecticide, herbicide and disinfectant.\n\nBoric acid is used as a mild antiseptic and as a flame retardant.\n\nBoron shielding is used as a control for nuclear reactors.",
    },

    C: {
      name: "Carbon",
      nameOrigin: "From the Latin word carbo, charcoal",
      history:
        "Carbon was discovered in prehistory and was known in the forms of soot and charcoal to the earliest human civilizations.\n\nIn 1772, Antoine Lavoisier showed that diamonds are a form of carbon; when he burned samples of charcoal and diamond and found that neither produced any water.\n\nIn 1779, Carl Wilhelm Scheele showed that graphite burned to form carbon dioxide and so must be another form of carbon.",
      applications:
        "The major use of carbon other than food and wood is in the form of hydrocarbons, most notably the fossil fuel methane gas and crude oil.\n\nGraphite is used for pencil tips, high temperature crucibles, dry cells, electrodes and as a lubricant.\n\nDiamonds are used in jewelry and in industry for cutting, drilling, grinding, and polishing.\n\nCarbon black is used as the black pigment in printing ink.",
      toxicity: "Pure carbon has extremely low toxicity to humans and can be handled safely in the form of graphite or charcoal",
      description: "About 20% of the weight of living organisms is carbon",
    },
  },

  elementCategories: {
    OTHER_NONMETALS: "Other nonmetals",
    NOBLE_GASSES: "Noble gasses",
    ALKALI_METALS: "Alkali metals",
    ALKALINE_EARTH_METALS: "Alkaline earth metals",
    POST_TRANSITION_METALS: "Post-transition metals",
    METTALOIDS: "Metalloids",
    ACTINIDES: "Actinides",
    LANTHANIDES: "Lanthanides",
    TRANSITION_METALS: "Transition metals",
  },

  tableFounder: {
    name: "Dmitri Ivanovich Mendeleev",
    birthDate: new Date("1834-02-09"),
    deathDate: new Date("1907-02-02"),
    history: {
      text1:
        "A brilliant Russian scientist, professor, member of the Academy of Sciences, owner of encyclopedic knowledge in chemistry, physics, geography, and economics. Scientists discovered and formulated one of the fundamental laws of nature, the periodic law of chemical elements. Mendeleev worked on his system from 1869 to 1900.",
      text2:
        "It is worth mentioning that when creating his system, Mendeleev left some cells of the table empty and anticipated the discovery of such elements as gallium, scandium, germanium, polonium, astatine, technetium, rhenium and francium. The chemist calculated their atomic masses and indicated their basic properties, but the elements themselves were discovered later.",
      text3: "The scientist died in 1907, at the age of 72.",
    },
  },
});
