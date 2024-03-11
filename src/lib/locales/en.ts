import type { Dictionary } from "@/types";

export const getEnglishDictionary = (): Dictionary => ({
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

  crystalStructures: {
    SIMPLE_HEXAGONAL: "Simple Hexagonal",
    FACE_CENTERED_CUBIC: "Face Centered Cubic",
    BODY_CENTERED_CUBIC: "Body Centered Cubic",
    SIMPLE_TRIGONAL: "Simple Trigonal",
    BASE_CENTERED_MONOCLINIC: "Base Centered Monoclinic",
    TETRAHEDRAL_PACKING: "Tetrahedral Packing",
    SIMPLE_TRICLINIC: "Simple Triclinic",
    FACE_CENTERED_ORTHORHOMBIC: "Face Centered Orthorhombic",
    BASE_CENTERED_ORTHORHOMBIC: "Base Centered Orthorhombic",
  },

  colors: {
    COLORLESS: "Colorless",
    SILVER: "Silver",
    SLATE_GRAY: "Slate Gray",
    BLACK: "Black",
    GRAY: "Gray",
    YELLOW: "Yellow",
    COPPER: "Copper",
  },

  phase: {
    GAS: "Gas",
    SOLID: "Solid",
  },

  unit: {
    density: "g/cm-3",
    heatOfFusion: "kJ/mol",
    heatOfVaporization: "kJ/mol",
    specificHeatCapacity: "J/g·K",
    atomicRadius: "pm",
    ionizationPotential: "eV",
    atomicVolume: "cm-3_/mol",
    thermalConductivity: "W/cm·K",
  },

  titles: {
    group: "Group",
    period: "Period",
    block: "Block",
    protons: "Protons",
    electrons: "Electrons",
    neutrons: "Neutrons",
    generalProperties: "General Properties",
    atomicNumber: "Atomic Number",
    atomicWeight: "Atomic Weight",
    massNumber: "Mass Number",
    category: "Category",
    color: "Color",
    radioactive: "Radioactive",
    crystalStructure: "Crystal Structure",
    history: "History",
    electronConfiguration: "Electron Configuration",
    electronsPerShell: "Electrons per shell",
    physicalProperties: "Physical Properties",
    abudanceInEarthCrust: "Abundance in Earth's crust",
    abudanceInUniverse: "Abundance in Universe",
    casNumber: "CAS Number",
    pubchem: "PubChem CID Number",
    atomicProperties: "Atomic Properties",
    atomicRadius: "Atomic Radius",
    covalentRadius: "Covalent Radius",
    electronegativity: "Electronegativity",
    ionizationPotential: "Ionization Potential",
    atomicVolume: "Atomic Volume",
    thermalConductivity: "Thermal Conductivity",
    oxidationStates: "Oxidation States",
    applications: "Applications",
    isotopes: "Isotopes",
    stable: "Stable",
    unstable: "Unstable",
    phase: "Phase",
    density: "Density",
    meltingPoint: "Melting Point",
    boilingPoint: "Boiling Point",
    heatOfFusion: "Heat of Fusion",
    heatOfVaporization: "Heat of Vaporization",
    specificHeatCapacity: "Specific Heat Capacity",
    yes: "Yes",
    no: "No",
    symbol: "Symbol",
    title: "Name",
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

    O: {
      name: "Oxygen",
      nameOrigin: "From the Greek word oxys, acid, and genes, forming",
      history:
        "Carl Wilhelm Scheele obtained oxygen by heating mercuric oxide and nitrates in 1771, but did not publish his findings until 1777.\n\nJoseph Priestley also prepared this new air by 1774.\n\nThe name oxygen was coined in 1777 by Antoine Lavoisier, whose experiments with oxygen helped to discredit the then-popular phlogiston theory of combustion and corrosion.",
      applications:
        "Pure oxygen is frequently used to help breathing in patients with respiratory ailments.\n\nOxygen is used in oxyacetylene welding, as an oxidant for rocket fuel, and in methanol and ethylene oxide production.\n\nIt is also used in the production of steel, plastics and textiles.\n\nPlants and animals rely on oxygen for respiration.",
      toxicity: "Oxygen gas can be toxic at elevated partial pressures, leading to convulsions and other health problems",
      description: "Green and red colors in the Aurora Borealis are caused by oxygen atoms",
    },

    N: {
      name: "Natrium",
      nameOrigin: "From the Latin word nitrum, Greek Nitron, native soda; and genes, forming",
      history:
        "Nitrogen is considered to have been discovered by Scottish physician Daniel Rutherford in 1772, who called it noxious air or fixed air.\n\nIt was also studied at about the same time by Carl Wilhelm Scheele, Henry Cavendish and Joseph Priestley.\n\nIn 1790 the French chemist Jean-Antoine-Claude Chaptal named the element nitrogen.",
      applications:
        "Nitrogen is used to produce ammonia and fertilizers, vital for current food production methods.\n\nLiquid nitrogen is used as a refrigerant.\n\nNitric acid is used as an oxidizing agent in liquid fueled rockets.\n\nNitrogen is a constituent of molecules in every major drug class in pharmacology and medicine.",
      toxicity:
        "Rapid release of nitrogen gas into an enclosed space can displace oxygen, and therefore represents an asphyxiation hazard",
      description: "Nitrogen is present in all living organisms, in proteins, nucleic acids and other molecules",
    },

    F: {
      name: "Fluorine",
      nameOrigin: "From the Latin and French fluere, flow or flux",
      history:
        "In 1529, Georigius Agricola described the use of fluorspar as a flux.\n\nIn 1670 Heinrich Schwandhard found that glass was etched when exposed to fluorspar treated with acid.\n\nIn 1810, French scientist Andre-Marie Ampere proposed that fluoric acid was a compound of hydrogen with a new element.\n\nThe element was finally isolated in 1886 by Henri Moissan.",
      applications:
        "Compounds of fluorine, including sodium fluoride, are used in toothpaste and in drinking water to prevent dental cavities.\n\nHydrochlorofluorocarbons (HCFCs) and hydrofluorocarbons (HFCs) now serve as replacements for CFC refrigerants.\n\nFluorine and its compounds are used in processing nuclear fuel.",
      toxicity: "Fluorine is highly toxic and corrosive",
      description: "Fluorine reacts violently with water to produce oxygen",
    },
    Ne: {
      name: "Neon",
      nameOrigin: "From the Greek word neos, new",
      history:
        "Neon was discovered in 1898 by the British chemists Sir William Ramsay and Morris W. Travers in London.\n\nIt was discovered when Ramsay chilled a sample of air until it became a liquid, then warmed the liquid and captured the gases as they boiled off.\n\nAfter 1902, Georges Claude's company, Air Liquide, was producing industrial quantities of neon as a byproduct of his air liquefaction business.",
      applications:
        "Neon is often used in brightly lit advertising signs.\n\nIt is also used in vacuum tubes, high-voltage indicators, lightning arrestors, wave meter tubes, television tubes, and helium-neon lasers.\n\nLiquid neon is used as a cryogenic refrigerant.",
      toxicity: "Neon is not known to be toxic",
      description: "In a vacuum discharge tube, neon glows reddish orange",
    },
    Na: {
      name: "Sodium",
      nameOrigin: "From the English word, soda; Medieval Latin, sodanum: a headache remedy",
      history:
        "The chemical abbreviation for sodium was first published by Jöns Jakob Berzelius in his system of atomic symbols.\n\nIt is a contraction of the element's new Latin name natrium, which refers to the Egyptian natron, a natural mineral salt primarily made of hydrated sodium carbonate.\n\nIn 1807, Sir Humphry Davy isolated sodium for the first time by electrolysis of dried sodium hydroxide, which had been very slightly moistened.",
      applications:
        "Metallic sodium is vital in the manufacture of esters and in the preparation of organic compounds.\n\nSodium vapor lamps are often used for street lighting in cities.\n\nLiquid sodium is used as a heat transfer fluid in some fast reactors.\n\nSodium is also used as an alloying metal, an anti-scaling agent, and as a reducing agent for metals when other materials are ineffective.",
      toxicity: "Sodium metal should be handled with great care as it cannot be maintained in an inert atmosphere",
      description: "Sodium burns in air with a brilliant yellow flame",
    },
    Mg: {
      name: "Magnesium",
      nameOrigin: "From Magnesia, district in Thessaly",
      history:
        "Scottish chemist Joseph Black recognized magnesium as an element in 1755.\n\nMagnesium was first isolated by Sir Humphry Davy in 1808, in London.\n\nHe used electrolysis on a mixture of magnesia and mercuric oxide.\n\nAntoine Bussy prepared it in coherent form in 1831.",
      applications:
        "Magnesium is widely used in the manufacturing of mobile phones, laptop computers, cameras, and other electronic components.\n\nThe brilliant light it produces when ignited is made use of in photography, flares, pyrotechnics and incendiary bombs.\n\nMagnesium compounds such as the hydroxide (milk of magnesia), sulfate (Epsom salts), chloride and citrate are used for medicinal purposes.",
      toxicity: "Because serious fires can occur, great care should be taken in handling magnesium metal",
      description: "When it burns in air, magnesium produces a brilliant white light",
    },
    Al: {
      name: "Aluminum",
      nameOrigin: "From the Latin word alumen, alum",
      history:
        "In 1761, Guyton de Morveau proposed the name alumine for the base in alum, and Antoine Lavoisier, in 1787, thought this to be the oxide of a still undiscovered metal.\n\nSir Humphry Davy identified the existence of a metal base of alum in 1808.\n\nHans Christian Ørsted was the first to isolate metallic aluminum in 1825 in impure form.\n\nFriedrich Wöhler is generally credited with having isolated the metal in 1827.",
      applications:
        "Aluminum is used in an extensive range of products from drinks cans to window frames and boats to aircraft.\n\nIt is used in electrical transmission lines.\n\nIt is also used for kitchen utensils, outside building decoration, and in thousands of industrial applications.\n\nWhen alloyed with small amounts of copper, magnesium, silicon, manganese, or other elements impart a variety of useful properties.",
      toxicity: "Aluminum is not known to be toxic",
      description: "Aluminum does not stick to magnets under normal conditions",
    },
    Si: {
      name: "Silicon",
      nameOrigin: "From the Latin word silex, silicis, flint",
      history:
        "In 1800, Sir Humphry Davy thought silica to be a compound and not an element; but in 1811, Gay Lussac and Louis Jacques Thénard probably prepared impure amorphous silicon by heating potassium with silicon tetrafluoride.\n\nIn 1824 Jöns Jakob Berzelius prepared amorphous silicon by the same general method.\n\nHenri Deville in 1854 first prepared crystalline silicon, the second allotropic form of the element.",
      applications:
        "In the form of sand and clay it is used to make concrete and brick; it is a useful refractory material for high-temperature work, and in the form of silicates it is used in making enamels, pottery, etc.\n\nSilica, as sand, is a principal ingredient of glass.\n\nSilicon chips are the basis of modern electronic and computing.\n\nSilicon carbide, more commonly called carborundum is used in abrasives.",
      toxicity: "If breathed in as a fine silica/silicate dust, it may cause chronic respiratory problems",
      description: "Silicon also has the unusual property that it expands as it freezes",
    },

    P: {
      name: "Phosphorus",
      nameOrigin: "From the Greek phosphoros, light bearing; ancient name for the planet Venus when appearing before sunrise",
      history:
        "Hennig Brand discovered phosphorus in 1669, in Hamburg, Germany, preparing it from urine.\n\nIn 1769, Johan Gottlieb Gahn and Carl Wilhelm Scheele showed that calcium phosphate is found in bones, and they obtained elemental phosphorus from bone ash.\n\nAntoine Lavoisier recognized phosphorus as an element in 1777.",
      applications:
        "Many fertilisers contain a high proportion of phosphorus and are manufactured from concentrated phosphoric acids.\n\nPhosphorus is used in the manufacture of safety matches, pyrotechnics and incendiary shells.\n\nPhosphorus is also used in steel manufacture and in the production of phosphor bronze.",
      toxicity: "White phosphorus is highly toxic while red phosphorus is considered non-toxic",
      description: "Elemental phosphorus exists in two major forms - white phosphorus and red phosphorus",
    },
    S: {
      name: "Sulfur",
      nameOrigin: "Known to the ancients; referred to in Genesis as brimstone",
      history:
        "By the 3rd century, the Chinese discovered that sulfur could be extracted from pyrite.\n\nIndian alchemists wrote extensively about the use of sulfur in alchemical operations with mercury, from the eighth century AD onwards.\n\nIn 1777, Antoine Lavoisier helped convince the scientific community that sulfur was an element, not a compound.",
      applications:
        "Sulfur's main commercial use is as a reactant in the production of sulfuric acid.\n\nSulfur is a component of black gunpowder, and is used in the vulcanization of natural rubber and a fungicide.\n\nIt is used to make sulfite paper and other papers, to fumigate, and to bleach dried fruits.\n\nIt is also used extensively in making phosphatic fertilizers.",
      toxicity: "Elemental sulfur is considered to be of low toxicity",
      description: "Penicillin is a natural, sulfur-based antibiotic",
    },

    Cl: {
      name: "Chlorine",
      nameOrigin: "From the Greek word chloro, greenish yellow",
      history:
        "Around 1630, chlorine was recognized as a gas by the Belgian chemist and physician Jan Baptist van Helmont.\n\nElemental chlorine was first prepared and studied in 1774 by Swedish chemist Carl Wilhelm Scheele.\n\nBy 1810, the scientific consensus was that chlorine was actually a compound that contained oxygen.\n\nIn 1811, Sir Humphry Davy concluded the new gas was in fact a new element.",
      applications:
        "Chlorine is used for producing safe drinking water.\n\nIt is also extensively used in the production of paper products, dyestuffs, textiles, petroleum products, medicines, antiseptics, insecticides, food, solvents, paints, plastics, and many other consumer products.\n\nChlorinated compounds are used mostly for sanitation, pulp bleaching, disinfectants, and textile processing.",
      toxicity: "Elemental chlorine at high concentrations is extremely dangerous and poisonous",
      description: "Tree frogs have a chlorine compound in their skin that is a very powerful pain killer",
    },
    Ar: {
      name: "Argon",
      nameOrigin: "From the Greek argos, inactive",
      history:
        "Argon was suspected to be present in air by Henry Cavendish in 1785.\n\nIt was not isolated until 1894 by Lord Rayleigh and Sir William Ramsay in Scotland.\n\nArgon became the first member of the noble gases to be discovered.\n\nIn 1957, IUPAC agreed that the symbol should change from A to Ar.",
      applications:
        "Argon gas is used to fill conventional incandescent and fluorescent light bulbs.\n\nArgon is also used as an inert gas shield for arc welding and cutting, as blanket for the production of titanium and other reactive elements.\n\nIt is used as a protective atmosphere for growing silicon and germanium crystals.",
      toxicity: "Argon is considered to be non-toxic",
      description: "Argon makes a distinctive blue-green gas laser",
    },
    K: {
      name: "Potassium",
      nameOrigin: "From the English word, potash - pot ashes; Latin kalium, Arab qali, alkali",
      history:
        "Potassium's symbol K comes from 'kalium' the name of the element in Germany and Scandinavia.\n\nPotassium metal was first isolated in 1807 by Sir Humphry Davy, who derived it from caustic potash by the use of electrolysis of the molten salt with the newly discovered voltaic pile.\n\nPotassium was the first metal that was isolated by electrolysis.",
      applications:
        "The greatest demand for potash has been in its use for fertilizers.\n\nPotassium is an essential constituent for plant growth and is found in most soils.\n\nPotassium nitrate is the main explosive ingredient in gunpowder.\n\nPotassium hydroxide is used in the manufacture of soft soaps and as an electrolyte in alkaline batteries.",
      toxicity: "Potassium must be handled with great care with full skin and eye protection",
      description: "People whose diets are low in potassium can suffer from hypokalemia",
    },
    Ca: {
      name: "Calcium",
      nameOrigin: "From the Latin word calx, lime",
      history:
        "Calcium was known as early as the first century when the Ancient Romans prepared lime as calcium oxide.\n\nCalcium was first isolated by Sir Humphry Davy in 1808 when he electrolyzed a mixture of lime and mercuric oxide.\n\nDavy was trying to isolate calcium; when he heard that Jöns Jakob Berzelius and Pontin prepared calcium amalgam by electrolyzing lime in mercury, he tried it himself.",
      applications:
        "Calcium is used to remove oxygen, sulfur and carbon from alloys.\n\nIt is also used as an alloying agent used in the production of aluminum, beryllium, copper, lead, and magnesium alloys.\n\nCalcium is used as a reducing agent in the extraction of other metals, such as uranium, zirconium, and thorium.\n\nCalcium carbonate is used in manufacturing cement and mortar, lime and limestone.",
      toxicity: "Calcium is considered to be non-toxic",
      description: "The shell of an egg is made up of primarily calcium carbonate",
    },
    Sc: {
      name: "Scandium",
      nameOrigin: "From the Latin word Scandia, Scandinavia",
      history:
        "In 1879, Lars Fredrik Nilson and his team detected scandium in the minerals euxenite and gadolinite.\n\nNilson prepared 2 grams of scandium oxide of high purity.\n\nPer Teodor Cleve showed that scandium had properties similar to those predicted by Mendeleev for eka-boron.\n\nMetallic scandium was first prepared in 1937 by Fischer and his colleagues.",
      applications:
        "Scandium is used in sports equipment such as golf iron shafts, baseball bats, bicycle frames and fishing rods.\n\n,Scandium iodide, along with sodium iodide, when added to a modified form of mercury-vapor lamp, produces a form of metal halide lamp.",
      toxicity: "Scandium is considered to be of low toxicity",
      description: "The stable form of scandium is created in supernovas via the r-process",
    },
    Ti: {
      name: "Titanium",
      nameOrigin: "From the Latin titans, the first sons of the Earth, Greek mythology",
      history:
        "William Gregor found the oxide of titanium in ilmenite in 1791.\n\nMartin Heinrich Klaproth independently discovered the element in rutile in 1795 and named it.\n\nThe pure metallic form was only obtained in 1910 by Matthew A. Hunter.\n\nIn 1936, the Kroll Process made the commercial production of titanium possible.",
      applications:
        "Titanium is used in steel as an alloying element to reduce grain size and as a deoxidizer, and in stainless steel to reduce carbon content.\n\nTitanium has potential use in desalination plants for converting sea water into fresh water.\n\nTitanium is used in several everyday products such as drill bits, bicycles, golf clubs, watches and laptop computers.",
      toxicity: "Titanium metal is considered to be non-toxic",
      description: "Titanium is one of the few elements that burns in pure nitrogen gas",
    },
    V: {
      name: "Vanadium",
      nameOrigin: "Named after Scandinavian goddess, Vanadis",
      history:
        "Vanadium was originally discovered by Andrés Manuel del Río in 1801.\n\nIn 1805, the French chemist Hippolyte Victor Collet-Descotils incorrectly declared that del Río's new element was only an impure sample of chromium.\n\nIn 1831, the Swedish chemist Nils Gabriel Sefström rediscovered the element in a new oxide he found while working with iron ores.\n\nLater that same year, Friedrich Wöhler confirmed del Río's earlier work.",
      applications:
        "Vanadium is used as an additive in steel to strengthen and protect against corrosion.\n\nTitanium-aluminum-vanadium alloy is used in jet engines and for high-speed aircraft.\n\nVanadium foil is used in cladding titanium to steel.\n\nVanadium pentoxide is used in ceramics and as a catalyst for the production of sulfuric acid.",
      toxicity: "All vanadium compounds should be considered toxic",
      description: "Vanadium is mined mostly in South Africa, north-western China, and eastern Russia",
    },
    Cr: {
      name: "Chromium",
      nameOrigin: "From the Greek word chroma, color",
      history:
        "In 1797, Louis Nicolas Vauquelin received samples of crocoite ore.\n\nIn 1798, Vauquelin discovered that he could isolate metallic chromium by heating the oxide in a charcoal oven, making him the discoverer of the element.\n\nVauquelin was also able to detect traces of chromium in precious gemstones, such as ruby or emerald.",
      applications:
        "Chromium is used to harden steel, manufacture stainless steel, and form many useful alloys.\n\nIt is mostly used in plating to produce a hard, beautiful surface and to prevent corrosion.\n\nThe metal is also widely used as a catalyst.\n\nChromium compounds are valued as pigments for their vivid green, yellow, red and orange colors.",
      description: "Chromium oxide was used by the Chinese in the Qin dynasty over 2,000 years ago",
      toxicity: "In larger amounts, chromium can be toxic and carcinogenic",
    },
    Mn: {
      name: "Manganese",
      nameOrigin: "From the Latin word magnes, magnet, from magnetic properties of pyrolusite",
      history:
        "By the mid-18th century, Swedish chemist Carl Wilhelm Scheele had used pyrolusite to produce chlorine.\n\nScheele and others were aware that pyrolusite contained a new element, but they were not able to isolate it.\n\nJohan Gottlieb Gahn was the first to isolate an impure sample of manganese metal in 1774, by reducing the dioxide with carbon.",
      applications:
        "For over 2000 years, manganese dioxide has been used to make colorless glass.\n\nManganese dioxide is used as the cathode material in zinc-carbon and alkaline batteries.\n\nManganese also functions in the oxygen-evolving complex of photosynthetic plants.\n\nThe dioxide is also used in the preparation of oxygen and chlorine and in drying black paints.",
      toxicity: "Excess manganese, particularly inhalation of the powder, is toxic",
      description: "Neanderthals may have used black manganese di oxide as a cosmetic 50,000 years ago",
    },
    Fe: {
      name: "Iron",
      nameOrigin: "From the Latin word ferrum",
      history:
        "The first iron used by humans is likely to have come from meteorites.\n\nThe oldest known iron objects used by humans are some beads of meteoric iron, made in Egypt in about 4000 BC.\n\nThe discovery of smelting around 3000 BC led to the start of the iron age around 1200 BC and the prominent use of iron for tools and weapons.",
      applications:
        "Iron is used to manufacture steel and other alloys important in construction and manufacturing.\n\nIron is a vital constituent of plant and animal life and works as an oxygen carrier in hemoglobin.\n\nIron oxide mixed with aluminum powder can be ignited to create a thermite reaction, used in welding and purifying ores.",
      description: "The color of blood is due to the hemoglobin, an iron-containing protein",
      toxicity: "Iron is considered to be non-toxic",
    },
    Co: {
      name: "Cobalt",
      nameOrigin: "From the German word Kobald, goblin or evil spirit; also from the Greek cobalos, mine",
      history:
        "Cobalt compounds have been used for centuries to impart a rich blue color to glass, glazes and ceramics.\n\nThe element was first isolated by Swedish chemist George Brandt in 1735.\n\nHe showed it was the presence of the element cobalt that caused the blue color in glass, not bismuth as previously thought.",
      applications:
        "Cobalt is used in the preparation of magnetic, wear-resistant and high-strength alloys.\n\nCobalt is widely used in batteries and in electroplating.\n\nA solution of the chloride is used as a sympathetic ink.",
      description: "Supplemental colbalt is essential in sheep's diets to improve the wools quality",
      toxicity: "Cobalt and its compounds are considered to be slightly toxic",
    },
    Ni: {
      name: "Nickel",
      nameOrigin: "From the German word Nickel (Satan), and from kupfernickel, Old Nick's copper",
      history:
        "Artifacts made from metallic meteorites have been found dating from as early as 5000 BC.\n\nIn 1751, Baron Axel Fredrik Cronstedt was trying to extract copper from kupfernickel and instead produced the white metal.\n\nIn the early twentieth century, Ludwig Mond patented a process using nickel carbonyl to purify nickel.",
      applications:
        "Nickel is used extensively to make coins and nickel steel for armor plates and burglar-proof vaults.\n\nTubing made of copper-nickel alloy is extensively used in making desalination plants for converting sea water into fresh water.\n\nNickel is also used in batteries, ceramics and magnets.",
      toxicity: "Nickel and its compounds are considered to be carcinogenic",
      description: "Nickel is 100 times more concentrated below Earth's crust than in it",
    },
    Cu: {
      name: "Copper",
      nameOrigin: "From the Latin word cuprum, from the island of Cyprus",
      history:
        "Copper occurs naturally as native copper and was known to some of the oldest civilizations on record.\n\nEarliest estimates of the discovery of copper suggest around 9000 BC in the Middle East.\n\nIt was one of the most important materials to humans throughout the copper and bronze ages.",
      applications:
        "Copper is often used for electrical wiring applications and for household plumbing applications.\n\nCopper sulfate is used as a fungicide and as an algicide in rivers, lakes and ponds.\n\nIt is also used in cookware and cooking utensils.\n\nCommercially important alloys such as brass and bronze are made with copper and other metals.",
      description: "Pure copper is orange-red and acquires a reddish tarnish when exposed to air",
      toxicity: "Cooking acidic food in copper pots can cause toxicity",
    },
    Zn: {
      name: "Zinc",
      history:
        "Metallic zinc was produced in the 13th century A.D. India by reducing calamine with organic substances such as wool.\n\nThe metal was rediscovered in Europe by Andreas Sigismund Marggraf in 1746.\n\nHe heated a mixture of calamine ore and carbon in a closed vessel without copper to produce the metal.",
      applications:
        "Because of its corrosion resistance, zinc is often plated to other metals in a process called galvanization.\n\nZinc is an essential trace element for animals and plants.\n\nLarge quantities of zinc are used to produce die castings, which are used extensively by the automotive, electrical, and hardware industries.",
      nameOrigin: "From the German word Zink, of obscure origin",
      toxicity: "Zinc is not considered to be particularly toxic",
      description: "Zinc is referred to in nonscientific contexts as spelter",
    },
    Ga: {
      name: "Gallium",
      nameOrigin: "From the Latin word Gallia, France; also from Latin, gallus, a translation of Lecoq, a cock",
      history:
        "In 1871, existence of gallium was first predicted by Russian chemist Dmitri Mendeleev and called the element eka-aluminum.\n\nGallium was discovered spectroscopically by French chemist Paul Emile Lecoq de Boisbaudran in 1875 by its characteristic spectrum in an examination of a sphalerite sample.\n\nLater that year, Lecoq obtained the free metal by electrolysis of its hydroxide in potassium hydroxide solution.",
      applications:
        "Gallium wets glass or porcelain and forms a brilliant mirror when it is painted on glass.\n\nIt is widely used in doping semiconductors and producing solid-state devices such as transistors.\n\nLow melting gallium alloys are used in some medical thermometers as non-toxic substitutes for mercury.\n\nGallium arsenide is capable of converting electricity directly into coherent light.",
      toxicity: "Gallium is considered to be non-toxic",
      description: "Gallium has a strong tendency to supercool below its melting point / freezing point",
    },
    Ge: {
      name: "Germanium",
      nameOrigin: "From the Latin word Germania, Germany",
      history:
        "In 1869, Dmitri Mendeleev predicted its existence and some of its properties based on its position on his periodic table and called the element eka-silicon.\n\nIn 1886, Clemens Winkler found the new element along with silver and sulfur, in a rare mineral called argyrodite.\n\nThe first silicon-germanium alloys were obtained in 1955.",
      applications:
        "The most common use of germanium is as a semiconductor in electronics.\n\nGermanium is used in transistors and in integrated circuits.\n\nIt is used as an alloying agent and as a catalyst.\n\nIt is also used in infrared spectroscopes and infrared detectors.",
      toxicity: "Germanium is not known to be toxic",
      description: "Germanium and the oxide are transparent to infrared radiation",
    },
    As: {
      name: "Arsenic",
      nameOrigin: "From the Latin word arsenicum, Greek arsenikon",
      history:
        "Greek historian Olympiodorus of Thebes roasted arsenic sulfide and obtained white arsenic during 5th century AD.\n\nAlbertus Magnus is believed to have been the first to isolate the element from a compound in 1250, by heating soap together with arsenic trisulfide.\n\nIn 1649, Johann Schröder published two ways of preparing arsenic.",
      applications:
        "The toxicity of arsenic to insects, bacteria and fungi led to its use as a wood preservative and as insecticides.\n\nArsenic is used in bronzing, pyrotechny, and for hardening and improving the sphericity of shot.\n\nGallium arsenide is a semiconductor used in laser diodes and LEDs.\n\nSmall amounts of arsenic can be used in lead alloys for ammunition.",
      toxicity: "Arsenic and its compounds are poisonous",
      description: "Prawns are known to contain quite high levels of arsenic",
    },
  },
});
