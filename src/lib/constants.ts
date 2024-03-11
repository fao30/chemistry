import { CRYSTAL_STRUCTURES } from "@/components/CrystalStructures";
import type { Color, ElementCategory, Lang, Phase } from "@/types";

export const defaultLang: Lang = "ru";

export const COLOR_SETTING = {
  RED: "#ef4444",
  ORANGE: "#f97316",
  YELLOW: "#eab308",
  BROWN: "#bfa094",
  LIME: "#84cc16",
  GREEN: "#22c55e",
  CYAN: "#06b6d4",
  INDIGO: "#6366f1",
  PURPLE: "#a855f7",
  PINK: "#ec4899",
};

export const COLOR_SETTING_OPTIONS = Object.entries(COLOR_SETTING).map(([_, e]) => ({ e }));

export const CATEGORIES: Record<ElementCategory, { color: string; value: ElementCategory }> = {
  OTHER_NONMETALS: { color: "#FFD100", value: "OTHER_NONMETALS" },
  NOBLE_GASSES: { color: "#D61681", value: "NOBLE_GASSES" },
  ALKALI_METALS: { color: "#9DC538", value: "ALKALI_METALS" },
  ALKALINE_EARTH_METALS: { color: "#EF7F30", value: "ALKALINE_EARTH_METALS" },
  POST_TRANSITION_METALS: { color: "#2CB195", value: "POST_TRANSITION_METALS" },
  METTALOIDS: { color: "#005D3C", value: "METTALOIDS" },
  ACTINIDES: { color: "#009CD9", value: "ACTINIDES" },
  LANTHANIDES: { color: "#264796", value: "LANTHANIDES" },
  TRANSITION_METALS: { color: "#E52D38", value: "TRANSITION_METALS" },
};

export const CATEGORIES_OPTIONS = Object.entries(CATEGORIES).map(([_, e]) => ({ ...e }));

export const ELEMENT_COLORS: Record<Color, Color> = {
  COLORLESS: "COLORLESS",
  SILVER: "SILVER",
  SLATE_GRAY: "SLATE_GRAY",
  BLACK: "BLACK",
  GRAY: "GRAY",
  YELLOW: "YELLOW",
};

export const ELEMENT_PHASE: Record<Phase, Phase> = {
  GAS: "GAS",
  SOLID: "SOLID",
};

export const ELEMENT_DATA = [
  {
    symbol: "H",
    category: CATEGORIES.OTHER_NONMETALS.value,
    group: 1,
    period: 1,
    block: "s",
    static: {
      unGrouped: { casNumber: "1333-74-0", pubChem: 783, protons: 1, electrons: 1, neutrons: 0 },
      generalProperties: {
        atomicNumber: 1,
        atomicWeight: 24.305,
        massNumber: 24,
        radioActive: false,
        color: ELEMENT_COLORS.COLORLESS,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [1],
        electronConfiguration: ["1s-1"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.GAS,
        density: 0.00008988,
        meltingPoint: 14.01,
        boilingPoint: 20.28,
        heatOfFusion: 0.558,
        heatOfVaporization: 0.452,
        specificHeatCapacity: 14.304,
      },
      atomicProperties: {
        atomicRadius: 53,
        covalentRadius: 31,
        electronegativity: 2.2,
        ionizationPotential: 13.5984,
        atomicVolume: 14.4,
        thermalConductivity: 0.001815,
        oxidationStates: [-1, 1],
      },
      abundance: { earth: "0.15", universe: "75" },
      isotopes: {
        stable: [1, 2],
        unstable: [3, 4, 5, 6, 7],
      },
    },
  },
  {
    symbol: "He",
    category: CATEGORIES.NOBLE_GASSES.value,
    group: 18,
    period: 1,
    block: "s",
    static: {
      unGrouped: { casNumber: "7440-59-7", pubChem: 23987, protons: 2, electrons: 2, neutrons: 2 },
      generalProperties: {
        atomicNumber: 2,
        atomicWeight: 4.002602,
        massNumber: 4,
        radioActive: false,
        color: ELEMENT_COLORS.COLORLESS,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2],
        electronConfiguration: ["1s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.GAS,
        density: 0.0001785,
        meltingPoint: 0.95,
        boilingPoint: 4.22,
        heatOfFusion: 0.02,
        heatOfVaporization: 0.083,
        specificHeatCapacity: 5.193,
      },
      atomicProperties: {
        atomicRadius: 31,
        covalentRadius: 28,
        electronegativity: null,
        ionizationPotential: 24.5874,
        atomicVolume: 27.2,
        thermalConductivity: 0.00152,
        oxidationStates: [0],
      },
      abundance: { earth: "5.5×10_-7", universe: "23" },
      isotopes: {
        stable: [3, 4],
        unstable: [5, 6, 7, 8, 9, 10],
      },
    },
  },
  {
    symbol: "Li",
    category: CATEGORIES.ALKALI_METALS.value,
    group: 1,
    period: 2,
    block: "s",
    static: {
      unGrouped: { casNumber: "7439-93-2", pubChem: 3028194, protons: 3, electrons: 3, neutrons: 4 },
      generalProperties: {
        atomicNumber: 3,
        atomicWeight: 4.002602,
        massNumber: 4,
        radioActive: false,
        color: ELEMENT_COLORS.COLORLESS,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BODY_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 1],
        electronConfiguration: ["[He]", "2s-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 0.534,
        meltingPoint: 453.69,
        boilingPoint: 1615.15,
        heatOfFusion: 3,
        heatOfVaporization: 147,
        specificHeatCapacity: 3.582,
      },
      atomicProperties: {
        atomicRadius: 152,
        covalentRadius: 128,
        electronegativity: 0.98,
        ionizationPotential: 5.3917,
        atomicVolume: 13.1,
        thermalConductivity: 0.847,
        oxidationStates: [1],
      },
      abundance: { earth: "0.0017", universe: "6×10_-7" },
      isotopes: {
        stable: [6, 7],
        unstable: [4, 5, 8, 9, 10, 11, 12],
      },
    },
  },
  {
    symbol: "Be",
    category: CATEGORIES.ALKALINE_EARTH_METALS.value,
    group: 2,
    period: 2,
    block: "s",
    static: {
      unGrouped: { casNumber: "7440-41-7", pubChem: 5460467, protons: 4, electrons: 4, neutrons: 5 },
      generalProperties: {
        atomicNumber: 4,
        atomicWeight: 9.012182,
        massNumber: 9,
        radioActive: false,
        color: ELEMENT_COLORS.SLATE_GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 2],
        electronConfiguration: ["[He]", "2s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 1.85,
        meltingPoint: 1560.15,
        boilingPoint: 2742.15,
        heatOfFusion: 7.95,
        heatOfVaporization: 297,
        specificHeatCapacity: 1.825,
      },
      atomicProperties: {
        atomicRadius: 112,
        covalentRadius: 96,
        electronegativity: 1.57,
        ionizationPotential: 9.3227,
        atomicVolume: 4.9,
        thermalConductivity: 2.01,
        oxidationStates: [1, 2],
      },
      abundance: { earth: "0.00019", universe: "1×10_-7" },
      isotopes: {
        stable: [9],
        unstable: [5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16],
      },
    },
  },
  {
    symbol: "B",
    category: CATEGORIES.METTALOIDS.value,
    group: 13,
    period: 2,
    block: "p",
    static: {
      unGrouped: { casNumber: "7440-42-8", pubChem: 5462311, protons: 5, electrons: 5, neutrons: 6 },
      generalProperties: {
        atomicNumber: 5,
        atomicWeight: 10.811,
        massNumber: 11,
        radioActive: false,
        color: ELEMENT_COLORS.BLACK,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_TRIGONAL.value,
      electrons: {
        electronsPerShell: [2, 3],
        electronConfiguration: ["[He]", "2s-2", "2p-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 2.34,
        meltingPoint: 2349.15,
        boilingPoint: 4200.15,
        heatOfFusion: 50,
        heatOfVaporization: 507,
        specificHeatCapacity: 1.026,
      },
      atomicProperties: {
        atomicRadius: 90,
        covalentRadius: 84,
        electronegativity: 2.04,
        ionizationPotential: 8.298,
        atomicVolume: 4.6,
        thermalConductivity: 0.274,
        oxidationStates: [1, 2, 3],
      },
      abundance: { earth: "0.00086", universe: "1×10_-7" },
      isotopes: {
        stable: [10, 11],
        unstable: [7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19],
      },
    },
  },

  {
    symbol: "C",
    category: CATEGORIES.OTHER_NONMETALS.value,
    group: 14,
    period: 2,
    block: "p",
    static: {
      unGrouped: { casNumber: "7440-44-0", pubChem: 5462310, protons: 6, electrons: 6, neutrons: 6 },
      generalProperties: {
        atomicNumber: 6,
        atomicWeight: 12.0107,
        massNumber: 12,
        radioActive: false,
        color: ELEMENT_COLORS.BLACK,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 4],
        electronConfiguration: ["[He]", "2s-2", "2p-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 2.267,
        meltingPoint: 3948.15,
        boilingPoint: 4300.15,
        heatOfFusion: 105,
        heatOfVaporization: 715,
        specificHeatCapacity: 0.709,
      },
      atomicProperties: {
        atomicRadius: 67,
        covalentRadius: 77,
        electronegativity: 2.55,
        ionizationPotential: 11.2603,
        atomicVolume: 5.31,
        thermalConductivity: 1.29,
        oxidationStates: [-4, -3, -2, -1, 1, 2, 3, 4],
      },
      abundance: { earth: "0.18", universe: "0.5" },
      isotopes: {
        stable: [12, 13],
        unstable: [8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20, 21, 22],
      },
    },
  },

  {
    symbol: "N",
    category: CATEGORIES.OTHER_NONMETALS.value,
    group: 15,
    period: 2,
    block: "p",
    static: {
      unGrouped: { casNumber: "7727-37-9", pubChem: 947, protons: 7, electrons: 7, neutrons: 7 },
      generalProperties: {
        atomicNumber: 7,
        atomicWeight: 14.0067,
        massNumber: 14,
        radioActive: false,
        color: ELEMENT_COLORS.COLORLESS,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 5],
        electronConfiguration: ["[He]", "2s-2", "2p-3"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.GAS,
        density: 0.0012506,
        meltingPoint: 63.15,
        boilingPoint: 77.36,
        heatOfFusion: 0.36,
        heatOfVaporization: 2.79,
        specificHeatCapacity: 1.04,
      },
      atomicProperties: {
        atomicRadius: 56,
        covalentRadius: 71,
        electronegativity: 3.04,
        ionizationPotential: 14.5341,
        atomicVolume: 17.3,
        thermalConductivity: 0.0002598,
        oxidationStates: [-3, -2, -1, 1, 2, 3, 4, 5],
      },
      abundance: { earth: "0.002", universe: "0.1" },
      isotopes: {
        stable: [14, 15],
        unstable: [10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
      },
    },
  },

  {
    symbol: "O",
    category: CATEGORIES.OTHER_NONMETALS.value,
    group: 16,
    period: 2,
    block: "p",
    static: {
      unGrouped: { casNumber: "7782-44-7", pubChem: 977, protons: 8, electrons: 8, neutrons: 8 },
      generalProperties: {
        atomicNumber: 8,
        atomicWeight: 15.9994,
        massNumber: 16,
        radioActive: false,
        color: ELEMENT_COLORS.COLORLESS,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BASE_CENTERED_MONOCLINIC.value,
      electrons: {
        electronsPerShell: [2, 6],
        electronConfiguration: ["[He]", "2s-2", "2p-4"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.GAS,
        density: 0.001429,
        meltingPoint: 54.36,
        boilingPoint: 90.2,
        heatOfFusion: 0.222,
        heatOfVaporization: 3.41,
        specificHeatCapacity: 0.918,
      },
      atomicProperties: {
        atomicRadius: 48,
        covalentRadius: 66,
        electronegativity: 3.44,
        ionizationPotential: 13.6181,
        atomicVolume: 14.0,
        thermalConductivity: 0.0002674,
        oxidationStates: [-2, -1, 1, 2],
      },
      abundance: { earth: "46", universe: "1" },
      isotopes: {
        stable: [16, 17, 18],
        unstable: [12, 13, 14, 15, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
      },
    },
  },

  {
    symbol: "F",
    category: CATEGORIES.OTHER_NONMETALS.value,
    group: 17,
    period: 2,
    block: "p",
    static: {
      unGrouped: { casNumber: "7782-41-4", pubChem: 24524, protons: 9, electrons: 9, neutrons: 10 },
      generalProperties: {
        atomicNumber: 9,
        atomicWeight: 18.9984032,
        massNumber: 19,
        radioActive: false,
        color: ELEMENT_COLORS.COLORLESS,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BASE_CENTERED_MONOCLINIC.value,
      electrons: {
        electronsPerShell: [2, 7],
        electronConfiguration: ["[He]", "2s-2", "2p-5"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.GAS,
        density: 0.001696,
        meltingPoint: 53.53,
        boilingPoint: 85.03,
        heatOfFusion: 0.26,
        heatOfVaporization: 3.27,
        specificHeatCapacity: 0.824,
      },
      atomicProperties: {
        atomicRadius: 42,
        covalentRadius: 64,
        electronegativity: 3.98,
        ionizationPotential: 17.4228,
        atomicVolume: 17.1,
        thermalConductivity: 0.000279,
        oxidationStates: [-1],
      },
      abundance: { earth: "0.054", universe: "0.00004" },
      isotopes: {
        stable: [19],
        unstable: [14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      },
    },
  },

  {
    symbol: "Ne",
    category: CATEGORIES.NOBLE_GASSES.value,
    group: 18,
    period: 2,
    block: "p",
    static: {
      unGrouped: { casNumber: "7440-01-9", pubChem: 23935, protons: 10, electrons: 10, neutrons: 10 },
      generalProperties: {
        atomicNumber: 10,
        atomicWeight: 20.1797,
        massNumber: 20,
        radioActive: false,
        color: ELEMENT_COLORS.COLORLESS,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8],
        electronConfiguration: ["[He]", "2s-2", "2p-6"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.GAS,
        density: 0.0008999,
        meltingPoint: 24.56,
        boilingPoint: 27.07,
        heatOfFusion: 0.34,
        heatOfVaporization: 1.75,
        specificHeatCapacity: 1.03,
      },
      atomicProperties: {
        atomicRadius: 38,
        covalentRadius: 59,
        electronegativity: null,
        ionizationPotential: 21.5645,
        atomicVolume: 16.7,
        thermalConductivity: 0.000493,
        oxidationStates: [0],
      },
      abundance: { earth: "3×10_-7", universe: "0.13" },
      isotopes: {
        stable: [20, 21, 22],
        unstable: [16, 17, 19, 19, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      },
    },
  },

  {
    symbol: "Na",
    category: CATEGORIES.ALKALI_METALS.value,
    group: 1,
    period: 3,
    block: "s",
    static: {
      unGrouped: { casNumber: "7440-23-5", pubChem: 5360545, protons: 11, electrons: 11, neutrons: 12 },
      generalProperties: {
        atomicNumber: 11,
        atomicWeight: 22.98976928,
        massNumber: 23,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BODY_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 1],
        electronConfiguration: ["[Ne]", "3s-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 0.971,
        meltingPoint: 370.87,
        boilingPoint: 1156.15,
        heatOfFusion: 2.6,
        heatOfVaporization: 97.7,
        specificHeatCapacity: 1.228,
      },
      atomicProperties: {
        atomicRadius: 186,
        covalentRadius: 166,
        electronegativity: 0.93,
        ionizationPotential: 5.1391,
        atomicVolume: 23.7,
        thermalConductivity: 1.41,
        oxidationStates: [-1, 1],
      },
      abundance: { earth: "2.3", universe: "0.002" },
      isotopes: {
        stable: [23],
        unstable: [18, 19, 20, 21, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37],
      },
    },
  },

  {
    symbol: "Mg",
    category: CATEGORIES.ALKALINE_EARTH_METALS.value,
    group: 2,
    period: 3,
    block: "s",
    static: {
      unGrouped: { casNumber: "7439-95-4", pubChem: 5462224, protons: 12, electrons: 12, neutrons: 12 },
      generalProperties: {
        atomicNumber: 12,
        atomicWeight: 24.305,
        massNumber: 24,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 2],
        electronConfiguration: ["[Ne]", "3s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 1.738,
        meltingPoint: 923.15,
        boilingPoint: 1363.15,
        heatOfFusion: 8.7,
        heatOfVaporization: 128,
        specificHeatCapacity: 1.023,
      },
      atomicProperties: {
        atomicRadius: 160,
        covalentRadius: 141,
        electronegativity: 1.31,
        ionizationPotential: 7.6462,
        atomicVolume: 13.97,
        thermalConductivity: 1.56,
        oxidationStates: [1, 2],
      },
      abundance: { earth: "2.9", universe: "0.06" },
      isotopes: {
        stable: [24, 25, 26],
        unstable: [19, 20, 21, 22, 23, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
      },
    },
  },

  {
    symbol: "Al",
    category: CATEGORIES.POST_TRANSITION_METALS.value,
    group: 13,
    period: 3,
    block: "p",
    static: {
      unGrouped: { casNumber: "7429-90-5", pubChem: 5359268, protons: 13, electrons: 13, neutrons: 14 },
      generalProperties: {
        atomicNumber: 13,
        atomicWeight: 26.9815386,
        massNumber: 27,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 3],
        electronConfiguration: ["[Ne]", "3s-2", "3p-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 2.698,
        meltingPoint: 933.47,
        boilingPoint: 2792.15,
        heatOfFusion: 10.7,
        heatOfVaporization: 293,
        specificHeatCapacity: 0.897,
      },
      atomicProperties: {
        atomicRadius: 143,
        covalentRadius: 121,
        electronegativity: 1.61,
        ionizationPotential: 5.9858,
        atomicVolume: 9.98,
        thermalConductivity: 2.37,
        oxidationStates: [1, 3],
      },
      abundance: { earth: "8.1", universe: "0.005" },
      isotopes: {
        stable: [27],
        unstable: [21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 40, 41, 42],
      },
    },
  },

  {
    symbol: "Si",
    category: CATEGORIES.METTALOIDS.value,
    group: 14,
    period: 3,
    block: "p",
    static: {
      unGrouped: { casNumber: "7440-21-3", pubChem: 5461123, protons: 14, electrons: 14, neutrons: 14 },
      generalProperties: {
        atomicNumber: 14,
        atomicWeight: 28.0855,
        massNumber: 28,
        radioActive: false,
        color: ELEMENT_COLORS.GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.TETRAHEDRAL_PACKING.value,
      electrons: {
        electronsPerShell: [2, 8, 4],
        electronConfiguration: ["[Ne]", "3s-2", "3p-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 2.3296,
        meltingPoint: 1687.15,
        boilingPoint: 3538.15,
        heatOfFusion: 50.2,
        heatOfVaporization: 359,
        specificHeatCapacity: 0.705,
      },
      atomicProperties: {
        atomicRadius: 111,
        covalentRadius: 111,
        electronegativity: 1.9,
        ionizationPotential: 8.1517,
        atomicVolume: 12.1,
        thermalConductivity: 1.48,
        oxidationStates: [-4, -3, -2, -1, 1, 2, 3, 4],
      },
      abundance: { earth: "27", universe: "0.07" },
      isotopes: {
        stable: [28, 29, 30],
        unstable: [22, 23, 24, 25, 26, 27, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
      },
    },
  },

  {
    symbol: "P",
    category: CATEGORIES.OTHER_NONMETALS.value,
    group: 15,
    period: 3,
    block: "p",
    static: {
      unGrouped: { casNumber: "7723-14-0", pubChem: 5462309, protons: 15, electrons: 15, neutrons: 16 },
      generalProperties: {
        atomicNumber: 15,
        atomicWeight: 30.973762,
        massNumber: 31,
        radioActive: false,
        color: ELEMENT_COLORS.COLORLESS,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_TRICLINIC.value,
      electrons: {
        electronsPerShell: [2, 8, 5],
        electronConfiguration: ["[Ne]", "3s-2", "3p-3"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 1.82,
        meltingPoint: 317.25,
        boilingPoint: 553,
        heatOfFusion: 0.64,
        heatOfVaporization: 12.4,
        specificHeatCapacity: 0.769,
      },
      atomicProperties: {
        atomicRadius: 98,
        covalentRadius: 107,
        electronegativity: 2.19,
        ionizationPotential: 10.4867,
        atomicVolume: 17.0,
        thermalConductivity: 0.00235,
        oxidationStates: [-3, -2, -1, 1, 2, 3, 4, 5],
      },
      abundance: { earth: "0.099", universe: "0.0007" },
      isotopes: {
        stable: [31],
        unstable: [24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
      },
    },
  },

  {
    symbol: "S",
    category: CATEGORIES.OTHER_NONMETALS.value,
    group: 16,
    period: 3,
    block: "p",
    static: {
      unGrouped: { casNumber: "7704-34-9", pubChem: 5362487, protons: 16, electrons: 16, neutrons: 16 },
      generalProperties: {
        atomicNumber: 16,
        atomicWeight: 32.065,
        massNumber: 32,
        radioActive: false,
        color: ELEMENT_COLORS.YELLOW,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_ORTHORHOMBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 6],
        electronConfiguration: ["[Ne]", "3s-2", "3p-4"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 2.067,
        meltingPoint: 388.36,
        boilingPoint: 717.8,
        heatOfFusion: 1.73,
        heatOfVaporization: 9.8,
        specificHeatCapacity: 0.71,
      },
      atomicProperties: {
        atomicRadius: 88,
        covalentRadius: 105,
        electronegativity: 2.58,
        ionizationPotential: 10.36,
        atomicVolume: 15.5,
        thermalConductivity: 0.00269,
        oxidationStates: [-2, -1, 1, 2, 3, 4, 5, 6],
      },
      abundance: { earth: "0.042", universe: "0.05" },
      isotopes: {
        stable: [32, 33, 34, 36],
        unstable: [26, 27, 28, 29, 30, 31, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
      },
    },
  },

  {
    symbol: "Cl",
    category: CATEGORIES.OTHER_NONMETALS.value,
    group: 17,
    period: 3,
    block: "p",
    static: {
      unGrouped: { casNumber: "7782-50-5", pubChem: 24526, protons: 17, electrons: 17, neutrons: 18 },
      generalProperties: {
        atomicNumber: 17,
        atomicWeight: 35.453,
        massNumber: 35,
        radioActive: false,
        color: ELEMENT_COLORS.YELLOW,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BASE_CENTERED_ORTHORHOMBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 7],
        electronConfiguration: ["[Ne]", "3s-2", "3p-5"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.GAS,
        density: 0.003214,
        meltingPoint: 171.65,
        boilingPoint: 239.11,
        heatOfFusion: 3.2,
        heatOfVaporization: 10.2,
        specificHeatCapacity: 0.479,
      },
      atomicProperties: {
        atomicRadius: 79,
        covalentRadius: 102,
        electronegativity: 3.16,
        ionizationPotential: 12.9676,
        atomicVolume: 22.7,
        thermalConductivity: 0.000089,
        oxidationStates: [-1, 1, 2, 3, 4, 5, 6, 7],
      },
      abundance: { earth: "0.017", universe: "0.0001" },
      isotopes: {
        stable: [35, 37],
        unstable: [28, 29, 30, 31, 32, 33, 34, 36, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
      },
    },
  },

  {
    symbol: "Ar",
    category: CATEGORIES.NOBLE_GASSES.value,
    group: 18,
    period: 3,
    block: "p",
    static: {
      unGrouped: { casNumber: "7440-37-1", pubChem: 23968, protons: 18, electrons: 18, neutrons: 22 },
      generalProperties: {
        atomicNumber: 18,
        atomicWeight: 39.948,
        massNumber: 40,
        radioActive: false,
        color: ELEMENT_COLORS.COLORLESS,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 8],
        electronConfiguration: ["[Ne]", "3s-2", "3p-6"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.GAS,
        density: 0.0017837,
        meltingPoint: 83.8,
        boilingPoint: 87.3,
        heatOfFusion: 1.18,
        heatOfVaporization: 6.5,
        specificHeatCapacity: 0.52,
      },
      atomicProperties: {
        atomicRadius: 71,
        covalentRadius: 106,
        electronegativity: null,
        ionizationPotential: 15.7596,
        atomicVolume: 22.4,
        thermalConductivity: 0.0001772,
        oxidationStates: [0],
      },
      abundance: { earth: "0.00015", universe: "0.02" },
      isotopes: {
        stable: [36, 38, 40],
        unstable: [30, 31, 32, 33, 34, 35, 37, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53],
      },
    },
  },

  {
    symbol: "K",
    category: CATEGORIES.ALKALI_METALS.value,
    group: 1,
    period: 4,
    block: "s",
    static: {
      unGrouped: { casNumber: "7440-09-7", pubChem: 5462222, protons: 19, electrons: 19, neutrons: 20 },
      generalProperties: {
        atomicNumber: 19,
        atomicWeight: 39.0983,
        massNumber: 39,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BODY_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 8, 1],
        electronConfiguration: ["[Ar]", "4s-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 0.862,
        meltingPoint: 336.53,
        boilingPoint: 1032.15,
        heatOfFusion: 2.33,
        heatOfVaporization: 76.9,
        specificHeatCapacity: 0.757,
      },
      atomicProperties: {
        atomicRadius: 227,
        covalentRadius: 203,
        electronegativity: 0.82,
        ionizationPotential: 4.3407,
        atomicVolume: 45.46,
        thermalConductivity: 1.024,
        oxidationStates: [-1, 1],
      },
      abundance: { earth: "1.5", universe: "0.0003" },
      isotopes: {
        stable: [39, 41],
        unstable: [32, 33, 34, 35, 36, 37, 38, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55],
      },
    },
  },

  {
    symbol: "Ca",
    category: CATEGORIES.ALKALINE_EARTH_METALS.value,
    group: 2,
    period: 4,
    block: "s",
    static: {
      unGrouped: { casNumber: "7440-70-2", pubChem: 5460341, protons: 20, electrons: 20, neutrons: 20 },
      generalProperties: {
        atomicNumber: 20,
        atomicWeight: 40.078,
        massNumber: 40,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BODY_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 8, 2],
        electronConfiguration: ["[Ar]", "4s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 1.54,
        meltingPoint: 1115.15,
        boilingPoint: 1757.15,
        heatOfFusion: 8.54,
        heatOfVaporization: 155,
        specificHeatCapacity: 0.647,
      },
      atomicProperties: {
        atomicRadius: 197,
        covalentRadius: 176,
        electronegativity: 1.0,
        ionizationPotential: 6.1132,
        atomicVolume: 29.9,
        thermalConductivity: 2.01,
        oxidationStates: [1, 2],
      },
      abundance: { earth: "5", universe: "0.007" },
      isotopes: {
        stable: [40, 42, 43, 44, 46],
        unstable: [34, 35, 36, 37, 38, 39, 41, 45, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
      },
    },
  },

  {
    symbol: "Sc",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 3,
    period: 4,
    block: "d",
    static: {
      unGrouped: { casNumber: "7440-20-2", pubChem: 23952, protons: 21, electrons: 21, neutrons: 24 },
      generalProperties: {
        atomicNumber: 21,
        atomicWeight: 44.955912,
        massNumber: 45,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 9, 2],
        electronConfiguration: ["[Ar]", "3d-1", "4s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 2.989,
        meltingPoint: 1814.15,
        boilingPoint: 3109.15,
        heatOfFusion: 16,
        heatOfVaporization: 318,
        specificHeatCapacity: 0.568,
      },
      atomicProperties: {
        atomicRadius: 162,
        covalentRadius: 170,
        electronegativity: 1.36,
        ionizationPotential: 6.5615,
        atomicVolume: 15.0,
        thermalConductivity: 0.158,
        oxidationStates: [1, 2, 3],
      },
      abundance: { earth: "0.0026", universe: "3×10_-6" },
      isotopes: {
        stable: [45],
        unstable: [36, 367, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
      },
    },
  },

  {
    symbol: "Ti",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 4,
    period: 4,
    block: "d",
    static: {
      unGrouped: { casNumber: "7440-32-6", pubChem: 23963, protons: 22, electrons: 22, neutrons: 26 },
      generalProperties: {
        atomicNumber: 22,
        atomicWeight: 47.867,
        massNumber: 48,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 10, 2],
        electronConfiguration: ["[Ar]", "3d-2", "4s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 4.54,
        meltingPoint: 1941.15,
        boilingPoint: 3560.15,
        heatOfFusion: 18.7,
        heatOfVaporization: 425,
        specificHeatCapacity: 0.523,
      },
      atomicProperties: {
        atomicRadius: 147,
        covalentRadius: 160,
        electronegativity: 1.54,
        ionizationPotential: 6.8281,
        atomicVolume: 10.64,
        thermalConductivity: 0.219,
        oxidationStates: [-1, 2, 3, 4],
      },
      abundance: { earth: "0.66", universe: "0.0003" },
      isotopes: {
        stable: [46, 47, 48, 49, 50],
        unstable: [38, 39, 40, 41, 42, 43, 44, 45, 51, 52, 53, 54, 55, 56, 57, 57, 59, 60, 61, 62, 63],
      },
    },
  },
] as const;
