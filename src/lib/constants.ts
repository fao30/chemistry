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
  COPPER: "COPPER",
  RED: "RED",
};

export const ELEMENT_PHASE: Record<Phase, Phase> = {
  GAS: "GAS",
  SOLID: "SOLID",
  LIQUID: "LIQUID",
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

  {
    symbol: "V",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 5,
    period: 4,
    block: "d",
    static: {
      unGrouped: { casNumber: "7440-62-2", pubChem: 23990, protons: 23, electrons: 23, neutrons: 28 },
      generalProperties: {
        atomicNumber: 23,
        atomicWeight: 50.9415,
        massNumber: 51,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BODY_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 11, 2],
        electronConfiguration: ["[Ar]", "3d-3", "4s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 6.11,
        meltingPoint: 2183.15,
        boilingPoint: 3680.15,
        heatOfFusion: 22.8,
        heatOfVaporization: 453,
        specificHeatCapacity: 0.489,
      },
      atomicProperties: {
        atomicRadius: 134,
        covalentRadius: 153,
        electronegativity: 1.63,
        ionizationPotential: 6.8281,
        atomicVolume: 8.78,
        thermalConductivity: 0.307,
        oxidationStates: [-1, 1, 2, 3, 4, 5],
      },
      abundance: { earth: "0.019", universe: "0.0001" },
      isotopes: {
        stable: [51],
        unstable: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65],
      },
    },
  },

  {
    symbol: "Cr",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 6,
    period: 4,
    block: "d",

    static: {
      abundance: { earth: "0.014", universe: "0.0015" },
      unGrouped: { casNumber: "7440-47-3", pubChem: 23976, protons: 24, electrons: 24, neutrons: 28 },
      generalProperties: {
        atomicNumber: 24,
        atomicWeight: 51.9961,
        massNumber: 52,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BODY_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 13, 1],
        electronConfiguration: ["[Ar]", "3d-5", "4s-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 7.15,
        meltingPoint: 2180.15,
        boilingPoint: 2944.15,
        heatOfFusion: 20.5,
        heatOfVaporization: 339,
        specificHeatCapacity: 0.449,
      },
      atomicProperties: {
        atomicRadius: 128,
        covalentRadius: 139,
        electronegativity: 1.66,
        ionizationPotential: 6.7665,
        atomicVolume: 7.23,
        thermalConductivity: 0.937,
        oxidationStates: [-2, -1, 1, 2, 3, 4, 5, 6],
      },

      isotopes: {
        stable: [50, 52, 53, 54],
        unstable: [42, 43, 44, 45, 46, 47, 48, 49, 51, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67],
      },
    },
  },

  {
    symbol: "Mn",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 7,
    period: 4,
    block: "d",

    static: {
      abundance: { earth: "0.11", universe: "0.0008" },
      unGrouped: { casNumber: "7439-96-5", pubChem: 23930, protons: 25, electrons: 25, neutrons: 30 },
      generalProperties: {
        atomicNumber: 25,
        atomicWeight: 54.938045,
        massNumber: 55,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BODY_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 13, 2],
        electronConfiguration: ["[Ar]", "3d-5", "4s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 7.44,
        meltingPoint: 1519.15,
        boilingPoint: 2334.15,
        heatOfFusion: 13.2,
        heatOfVaporization: 220,
        specificHeatCapacity: 0.479,
      },
      atomicProperties: {
        atomicRadius: 127,
        covalentRadius: 139,
        electronegativity: 1.55,
        ionizationPotential: 7.434,
        atomicVolume: 7.4,
        thermalConductivity: 0.0782,
        oxidationStates: [-3, -2, -1, 1, 2, 3, 4, 5, 6, 7],
      },

      isotopes: {
        stable: [55],
        unstable: [44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
      },
    },
  },

  {
    symbol: "Fe",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 8,
    period: 4,
    block: "d",

    static: {
      abundance: { earth: "6.3", universe: "0.11" },
      unGrouped: { casNumber: "7439-89-6", pubChem: 23925, protons: 26, electrons: 26, neutrons: 30 },
      generalProperties: {
        atomicNumber: 26,
        atomicWeight: 55.845,
        massNumber: 56,
        radioActive: false,
        color: ELEMENT_COLORS.GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BODY_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 14, 2],
        electronConfiguration: ["[Ar]", "3d-6", "4s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 7.874,
        meltingPoint: 1811.15,
        boilingPoint: 3134.15,
        heatOfFusion: 13.8,
        heatOfVaporization: 347,
        specificHeatCapacity: 0.449,
      },
      atomicProperties: {
        atomicRadius: 126,
        covalentRadius: 132,
        electronegativity: 1.83,
        ionizationPotential: 7.9024,
        atomicVolume: 7.1,
        thermalConductivity: 0.802,
        oxidationStates: [-2, -1, 1, 2, 3, 4, 5, 6, 7, 8],
      },

      isotopes: {
        stable: [54, 56, 57, 58],
        unstable: [45, 46, 47, 48, 49, 50, 51, 52, 53, 55, 59, 60, 61, 62, 63, 64, 65, 66, 68, 69, 70, 71, 72],
      },
    },
  },

  {
    symbol: "Co",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 9,
    period: 4,
    block: "d",

    static: {
      abundance: { earth: "0.003", universe: "0.0003" },
      unGrouped: { casNumber: "7440-48-4", pubChem: 104730, protons: 27, electrons: 27, neutrons: 32 },
      generalProperties: {
        atomicNumber: 27,
        atomicWeight: 58.933195,
        massNumber: 59,
        radioActive: false,
        color: ELEMENT_COLORS.GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 15, 2],
        electronConfiguration: ["[Ar]", "3d-7", "4s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 8.86,
        meltingPoint: 3200.15,
        boilingPoint: 3134.15,
        heatOfFusion: 16.2,
        heatOfVaporization: 375,
        specificHeatCapacity: 0.421,
      },
      atomicProperties: {
        atomicRadius: 125,
        covalentRadius: 126,
        electronegativity: 1.88,
        ionizationPotential: 7.881,
        atomicVolume: 6.7,
        thermalConductivity: 1,
        oxidationStates: [-1, -1, 2, 3, 4, 5],
      },

      isotopes: {
        stable: [59],
        unstable: [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75],
      },
    },
  },

  {
    symbol: "Ni",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 10,
    period: 4,
    block: "d",

    static: {
      abundance: { earth: "0.0089", universe: "0.006" },
      unGrouped: { casNumber: "7440-02-0", pubChem: 935, protons: 27, electrons: 27, neutrons: 32 },
      generalProperties: {
        atomicNumber: 28,
        atomicWeight: 58.6934,
        massNumber: 59,
        radioActive: false,
        color: ELEMENT_COLORS.GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 16, 2],
        electronConfiguration: ["[Ar]", "3d-8", "4s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 8.912,
        meltingPoint: 1728.15,
        boilingPoint: 3186.15,
        heatOfFusion: 17.2,
        heatOfVaporization: 378,
        specificHeatCapacity: 0.444,
      },
      atomicProperties: {
        atomicRadius: 124,
        covalentRadius: 124,
        electronegativity: 1.91,
        ionizationPotential: 7.6398,
        atomicVolume: 6.59,
        thermalConductivity: 0.907,
        oxidationStates: [-1, 1, 2, 3, 4],
      },

      isotopes: {
        stable: [58, 60, 61, 62, 64],
        unstable: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 59, 63, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78],
      },
    },
  },

  {
    symbol: "Cu",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 11,
    period: 4,
    block: "d",

    static: {
      abundance: { earth: "0.0068", universe: "6×10_-6" },
      unGrouped: { casNumber: "7440-50-8", pubChem: 23978, protons: 29, electrons: 29, neutrons: 35 },
      generalProperties: {
        atomicNumber: 29,
        atomicWeight: 63.546,
        massNumber: 64,
        radioActive: false,
        color: ELEMENT_COLORS.COPPER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 1],
        electronConfiguration: ["[Ar]", "3d-10", "4s-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 8.96,
        meltingPoint: 1357.75,
        boilingPoint: 2835.15,
        heatOfFusion: 13.1,
        heatOfVaporization: 300,
        specificHeatCapacity: 0.385,
      },
      atomicProperties: {
        atomicRadius: 128,
        covalentRadius: 132,
        electronegativity: 1.9,
        ionizationPotential: 7.7264,
        atomicVolume: 7.1,
        thermalConductivity: 4.01,
        oxidationStates: [1, 2, 3, 4],
      },

      isotopes: {
        stable: [63, 65],
        unstable: [52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
      },
    },
  },

  {
    symbol: "Zn",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 12,
    period: 4,
    block: "d",

    static: {
      abundance: { earth: "0.0078", universe: "0.00003" },
      unGrouped: { casNumber: "7440-66-6", pubChem: 23994, protons: 30, electrons: 30, neutrons: 35 },
      generalProperties: {
        atomicNumber: 30,
        atomicWeight: 65.38,
        massNumber: 65,
        radioActive: false,
        color: ELEMENT_COLORS.SLATE_GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 2],
        electronConfiguration: ["[Ar]", "3d-10", "4s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 7.134,
        meltingPoint: 692.68,
        boilingPoint: 1180.15,
        heatOfFusion: 7.35,
        heatOfVaporization: 119,
        specificHeatCapacity: 0.388,
      },
      atomicProperties: {
        atomicRadius: 134,
        covalentRadius: 122,
        electronegativity: 1.65,
        ionizationPotential: 9.3942,
        atomicVolume: 9.2,
        thermalConductivity: 1.16,
        oxidationStates: [1, 2],
      },

      isotopes: {
        stable: [64, 66, 67, 68, 70],
        unstable: [54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 65, 69, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83],
      },
    },
  },

  {
    symbol: "Ga",
    category: CATEGORIES.POST_TRANSITION_METALS.value,
    group: 13,
    period: 4,
    block: "p",

    static: {
      abundance: { earth: "0.0019", universe: "1×10_-6" },
      unGrouped: { casNumber: "7440-55-3", pubChem: 5360835, protons: 31, electrons: 31, neutrons: 39 },
      generalProperties: {
        atomicNumber: 31,
        atomicWeight: 69.723,
        massNumber: 70,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BASE_CENTERED_ORTHORHOMBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 3],
        electronConfiguration: ["[Ar]", "3d-10", "4s-2", "4p-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 5.907,
        meltingPoint: 302.91,
        boilingPoint: 2477.15,
        heatOfFusion: 5.59,
        heatOfVaporization: 256,
        specificHeatCapacity: 0.371,
      },
      atomicProperties: {
        atomicRadius: 135,
        covalentRadius: 122,
        electronegativity: 1.81,
        ionizationPotential: 5.9993,
        atomicVolume: 11.8,
        thermalConductivity: 0.406,
        oxidationStates: [1, 2, 3],
      },

      isotopes: {
        stable: [69, 71],
        unstable: [56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 70, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
      },
    },
  },
  {
    symbol: "Ge",
    category: CATEGORIES.METTALOIDS.value,
    group: 14,
    period: 4,
    block: "p",

    static: {
      abundance: { earth: "0.00014", universe: "0.00002" },
      unGrouped: { casNumber: "7440-56-4", pubChem: 6326954, protons: 32, electrons: 32, neutrons: 41 },
      generalProperties: {
        atomicNumber: 32,
        atomicWeight: 72.63,
        massNumber: 73,
        radioActive: false,
        color: ELEMENT_COLORS.GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 4],
        electronConfiguration: ["[Ar]", "3d-10", "4s-2", "4p-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 5.323,
        meltingPoint: 1211.4,
        boilingPoint: 3106.15,
        heatOfFusion: 31.8,
        heatOfVaporization: 334,
        specificHeatCapacity: 0.32,
      },
      atomicProperties: {
        atomicRadius: 122,
        covalentRadius: 122,
        electronegativity: 2.01,
        ionizationPotential: 7.8994,
        atomicVolume: 13.6,
        thermalConductivity: 0.599,
        oxidationStates: [-4, 1, 2, 3, 4],
      },

      isotopes: {
        stable: [70, 72, 73, 74],
        unstable: [58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 71, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
      },
    },
  },

  {
    symbol: "As",
    category: CATEGORIES.METTALOIDS.value,
    group: 15,
    period: 4,
    block: "p",

    static: {
      abundance: { earth: "0.00021", universe: "8×10_-7" },
      unGrouped: { casNumber: "7440-38-2", pubChem: 5359596, protons: 33, electrons: 33, neutrons: 42 },
      generalProperties: {
        atomicNumber: 33,
        atomicWeight: 74.9216,
        massNumber: 75,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_TRIGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 5],
        electronConfiguration: ["[Ar]", "3d-10", "4s-2", "4p-3"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 5.776,
        meltingPoint: 1090.15,
        boilingPoint: 876.15,
        heatOfFusion: 27.7,
        heatOfVaporization: 32.4,
        specificHeatCapacity: 0.329,
      },
      atomicProperties: {
        atomicRadius: 119,
        covalentRadius: 119,
        electronegativity: 2.18,
        ionizationPotential: 9.7886,
        atomicVolume: 12.97,
        thermalConductivity: 0.502,
        oxidationStates: [-3, 2, 3, 5],
      },

      isotopes: {
        stable: [75],
        unstable: [
          60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 76, 77, 78, 79, 80, 81, 82, 83, 84, 84, 85, 86, 87, 88, 89, 90,
          91, 92,
        ],
      },
    },
  },

  {
    symbol: "Se",
    category: CATEGORIES.OTHER_NONMETALS.value,
    group: 16,
    period: 4,
    block: "p",

    static: {
      abundance: { earth: "5×10_-6", universe: "3×10-_6" },
      unGrouped: { casNumber: "7782-49-2", pubChem: 6326970, protons: 34, electrons: 34, neutrons: 45 },
      generalProperties: {
        atomicNumber: 34,
        atomicWeight: 78.96,
        massNumber: 79,
        radioActive: false,
        color: ELEMENT_COLORS.GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_MONOCLINIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 6],
        electronConfiguration: ["[Ar]", "3d-10", "4s-2", "4p-4"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 4.809,
        meltingPoint: 494.15,
        boilingPoint: 958.15,
        heatOfFusion: 5.4,
        heatOfVaporization: 26,
        specificHeatCapacity: 0.321,
      },
      atomicProperties: {
        atomicRadius: 120,
        covalentRadius: 120,
        electronegativity: 2.55,
        ionizationPotential: 9.7524,
        atomicVolume: 16.45,
        thermalConductivity: 0.0204,
        oxidationStates: [-2, 2, 4, 6],
      },

      isotopes: {
        stable: [74, 75, 77, 78, 80],
        unstable: [65, 66, 67, 68, 69, 70, 71, 72, 73, 75, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94],
      },
    },
  },

  {
    symbol: "Br",
    category: CATEGORIES.OTHER_NONMETALS.value,
    group: 17,
    period: 4,
    block: "p",

    static: {
      abundance: { earth: "0.0003", universe: "7×10-_7" },
      unGrouped: { casNumber: "7726-95-6", pubChem: 24408, protons: 35, electrons: 35, neutrons: 45 },
      generalProperties: {
        atomicNumber: 35,
        atomicWeight: 79.904,
        massNumber: 80,
        radioActive: false,
        color: ELEMENT_COLORS.RED,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BASE_CENTERED_ORTHORHOMBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 7],
        electronConfiguration: ["[Ar]", "3d-10", "4s-2", "4p-5"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.LIQUID,
        density: 3.122,
        meltingPoint: 265.95,
        boilingPoint: 331.95,
        heatOfFusion: 5.8,
        heatOfVaporization: 14.8,
        specificHeatCapacity: 0.474,
      },
      atomicProperties: {
        atomicRadius: 120,
        covalentRadius: 120,
        electronegativity: 2.96,
        ionizationPotential: 11.8138,
        atomicVolume: 23.5,
        thermalConductivity: 0.00122,
        oxidationStates: [-1, 1, 3, 4, 5, 7],
      },

      isotopes: {
        stable: [79, 81],
        unstable: [67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 80, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97],
      },
    },
  },

  {
    symbol: "Kr",
    category: CATEGORIES.NOBLE_GASSES.value,
    group: 18,
    period: 4,
    block: "p",

    static: {
      abundance: { earth: "1.5×10_-8", universe: "4×10_-6" },
      unGrouped: { casNumber: "7439-90-9", pubChem: 5416, protons: 36, electrons: 36, neutrons: 48 },
      generalProperties: {
        atomicNumber: 36,
        atomicWeight: 83.798,
        massNumber: 84,
        radioActive: false,
        color: ELEMENT_COLORS.COLORLESS,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 8],
        electronConfiguration: ["[Ar]", "3d-10", "4s-2", "4p-6"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.GAS,
        density: 0.003733,
        meltingPoint: 115.79,
        boilingPoint: 119.93,
        heatOfFusion: 1.64,
        heatOfVaporization: 9.02,
        specificHeatCapacity: 0.248,
      },
      atomicProperties: {
        atomicRadius: 88,
        covalentRadius: 116,
        electronegativity: 3.0,
        ionizationPotential: 13.9996,
        atomicVolume: 38.9,
        thermalConductivity: 0.0000949,
        oxidationStates: [2],
      },

      isotopes: {
        stable: [78, 80, 82, 83, 84, 86],
        unstable: [69, 70, 71, 72, 73, 74, 75, 76, 77, 79, 81, 85, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101],
      },
    },
  },

  {
    symbol: "Rb",
    category: CATEGORIES.ALKALI_METALS.value,
    group: 1,
    period: 5,
    block: "s",

    static: {
      abundance: { earth: "0.006", universe: "1×10_-6" },
      unGrouped: { casNumber: "7440-17-7", pubChem: 5357696, protons: 37, electrons: 37, neutrons: 48 },
      generalProperties: {
        atomicNumber: 37,
        atomicWeight: 85.4678,
        massNumber: 85,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BODY_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 8, 1],
        electronConfiguration: ["[Kr]", "5s-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 1.532,
        meltingPoint: 312.46,
        boilingPoint: 961.15,
        heatOfFusion: 2.19,
        heatOfVaporization: 72,
        specificHeatCapacity: 0.363,
      },
      atomicProperties: {
        atomicRadius: 248,
        covalentRadius: 220,
        electronegativity: 0.82,
        ionizationPotential: 4.1771,
        atomicVolume: 55.9,
        thermalConductivity: 0.582,
        oxidationStates: [-1, 1],
      },

      isotopes: {
        stable: [85],
        unstable: [
          71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101,
          102,
        ],
      },
    },
  },

  {
    symbol: "Sr",
    category: CATEGORIES.ALKALINE_EARTH_METALS.value,
    group: 2,
    period: 5,
    block: "s",

    static: {
      abundance: { earth: "0.036", universe: "4×10_-6" },
      unGrouped: { casNumber: "7440-24-6", pubChem: 5359327, protons: 38, electrons: 38, neutrons: 50 },
      generalProperties: {
        atomicNumber: 38,
        atomicWeight: 87.62,
        massNumber: 88,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 8, 2],
        electronConfiguration: ["[Kr]", "5s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 2.64,
        meltingPoint: 1050.15,
        boilingPoint: 1655.15,
        heatOfFusion: 8,
        heatOfVaporization: 137,
        specificHeatCapacity: 0.301,
      },
      atomicProperties: {
        atomicRadius: 215,
        covalentRadius: 195,
        electronegativity: 0.95,
        ionizationPotential: 5.6949,
        atomicVolume: 33.7,
        thermalConductivity: 0.353,
        oxidationStates: [1, 2],
      },

      isotopes: {
        stable: [84, 86, 87, 88],
        unstable: [
          73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 85, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105,
        ],
      },
    },
  },

  {
    symbol: "Y",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 3,
    period: 5,
    block: "d",

    static: {
      abundance: { earth: "0.0029", universe: "7×10_-7" },
      unGrouped: { casNumber: "7440-65-5", pubChem: 23993, protons: 39, electrons: 39, neutrons: 50 },
      generalProperties: {
        atomicNumber: 39,
        atomicWeight: 88.90585,
        massNumber: 89,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 9, 2],
        electronConfiguration: ["[Kr]", "4d-1", "5s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 4.469,
        meltingPoint: 1799.15,
        boilingPoint: 3609.15,
        heatOfFusion: 11.4,
        heatOfVaporization: 380,
        specificHeatCapacity: 0.298,
      },
      atomicProperties: {
        atomicRadius: 180,
        covalentRadius: 190,
        electronegativity: 1.22,
        ionizationPotential: 6.2173,
        atomicVolume: 19.8,
        thermalConductivity: 0.172,
        oxidationStates: [1, 2, 3],
      },

      isotopes: {
        stable: [89],
        unstable: [
          76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 87, 88, 90, 81, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105,
          106, 107, 108,
        ],
      },
    },
  },

  {
    symbol: "Zr",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 4,
    period: 5,
    block: "d",

    static: {
      abundance: { earth: "0.013", universe: "5×10_-6" },
      unGrouped: { casNumber: "7440-67-7", pubChem: 23995, protons: 40, electrons: 40, neutrons: 51 },
      generalProperties: {
        atomicNumber: 40,
        atomicWeight: 91.224,
        massNumber: 91,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 10, 2],
        electronConfiguration: ["[Kr]", "4d-2", "5s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 6.506,
        meltingPoint: 2128.15,
        boilingPoint: 4682.15,
        heatOfFusion: 21,
        heatOfVaporization: 580,
        specificHeatCapacity: 0.278,
      },
      atomicProperties: {
        atomicRadius: 160,
        covalentRadius: 175,
        electronegativity: 1.33,
        ionizationPotential: 6.6339,
        atomicVolume: 14.0,
        thermalConductivity: 0.227,
        oxidationStates: [1, 2, 3, 4],
      },

      isotopes: {
        stable: [90, 91, 92, 94],
        unstable: [
          78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 93, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 110,
        ],
      },
    },
  },

  {
    symbol: "Nb",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 5,
    period: 5,
    block: "d",

    static: {
      abundance: { earth: "0.0017", universe: "2×10_-7" },
      unGrouped: { casNumber: "7440-03-1", pubChem: 23936, protons: 41, electrons: 41, neutrons: 52 },
      generalProperties: {
        atomicNumber: 41,
        atomicWeight: 92.90638,
        massNumber: 93,
        radioActive: false,
        color: ELEMENT_COLORS.GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BODY_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 12, 2],
        electronConfiguration: ["[Kr]", "4d-4", "5s-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 8.57,
        meltingPoint: 2750.15,
        boilingPoint: 5017.15,
        heatOfFusion: 26.8,
        heatOfVaporization: 690,
        specificHeatCapacity: 0.265,
      },
      atomicProperties: {
        atomicRadius: 146,
        covalentRadius: 164,
        electronegativity: 1.6,
        ionizationPotential: 6.7589,
        atomicVolume: 10.87,
        thermalConductivity: 0.537,
        oxidationStates: [-1, 2, 3, 4, 5],
      },

      isotopes: {
        stable: [93],
        unstable: [
          81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
          110, 111, 112, 113,
        ],
      },
    },
  },

  {
    symbol: "Mo",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 6,
    period: 5,
    block: "d",

    static: {
      abundance: { earth: "0.00011", universe: "5×10_-7" },
      unGrouped: { casNumber: "7439-98-7", pubChem: 23932, protons: 42, electrons: 42, neutrons: 54 },
      generalProperties: {
        atomicNumber: 42,
        atomicWeight: 95.96,
        massNumber: 96,
        radioActive: false,
        color: ELEMENT_COLORS.GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BODY_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 13, 1],
        electronConfiguration: ["[Kr]", "4d-5", "5s-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 10.22,
        meltingPoint: 2896.15,
        boilingPoint: 4912.15,
        heatOfFusion: 36,
        heatOfVaporization: 600,
        specificHeatCapacity: 0.251,
      },
      atomicProperties: {
        atomicRadius: 139,
        covalentRadius: 154,
        electronegativity: 2.16,
        ionizationPotential: 7.0924,
        atomicVolume: 9.4,
        thermalConductivity: 1.38,
        oxidationStates: [-2, -1, 1, 2, 3, 4, 5, 6],
      },

      isotopes: {
        stable: [92, 94, 95, 96, 97, 98],
        unstable: [
          83, 84, 85, 86, 87, 88, 89, 90, 91, 93, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115,
        ],
      },
    },
  },

  {
    symbol: "Tc",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 7,
    period: 5,
    block: "d",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "7440-26-8", pubChem: null, protons: 43, electrons: 43, neutrons: 55 },
      generalProperties: {
        atomicNumber: 43,
        atomicWeight: 98,
        massNumber: 98,
        radioActive: true,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 13, 2],
        electronConfiguration: ["[Kr]", "4d-5", "5s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 11.5,
        meltingPoint: 2430.15,
        boilingPoint: 4538.15,
        heatOfFusion: 23,
        heatOfVaporization: 550,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: 136,
        covalentRadius: 147,
        electronegativity: 1.9,
        ionizationPotential: 7.28,
        atomicVolume: 8.5,
        thermalConductivity: 0.506,
        oxidationStates: [-3, -1, 1, 2, 3, 4, 5, 6, 7],
      },

      isotopes: {
        stable: [],
        unstable: [
          85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
          113, 114, 115, 116, 117, 118,
        ],
      },
    },
  },

  {
    symbol: "Ru",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 8,
    period: 5,
    block: "d",

    static: {
      abundance: { earth: "9.9×10_-8", universe: "4×10_-7" },
      unGrouped: { casNumber: "7440-18-8", pubChem: 23950, protons: 44, electrons: 44, neutrons: 57 },
      generalProperties: {
        atomicNumber: 44,
        atomicWeight: 101.07,
        massNumber: 101,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 15, 1],
        electronConfiguration: ["[Kr]", "4d-7", "5s-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 12.37,
        meltingPoint: 2607.15,
        boilingPoint: 4423.15,
        heatOfFusion: 25.7,
        heatOfVaporization: 580,
        specificHeatCapacity: 0.238,
      },
      atomicProperties: {
        atomicRadius: 134,
        covalentRadius: 146,
        electronegativity: 2.2,
        ionizationPotential: 7.3605,
        atomicVolume: 8.3,
        thermalConductivity: 1.17,
        oxidationStates: [-2, 1, 2, 3, 4, 5, 6, 7, 8],
      },

      isotopes: {
        stable: [96, 98, 99, 100, 102, 103, 104],
        unstable: [
          87, 88, 89, 90, 91, 92, 93, 94, 95, 97, 103, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
        ],
      },
    },
  },

  {
    symbol: "Rh",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 9,
    period: 5,
    block: "d",

    static: {
      abundance: { earth: "7×10_-8", universe: "6×10_-8" },
      unGrouped: { casNumber: "7440-16-6", pubChem: 23948, protons: 45, electrons: 45, neutrons: 58 },
      generalProperties: {
        atomicNumber: 45,
        atomicWeight: 102.9055,
        massNumber: 103,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 16, 1],
        electronConfiguration: ["[Kr]", "4d-8", "5s-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 12.41,
        meltingPoint: 2237.15,
        boilingPoint: 3968.15,
        heatOfFusion: 21.7,
        heatOfVaporization: 495,
        specificHeatCapacity: 0.243,
      },
      atomicProperties: {
        atomicRadius: 134,
        covalentRadius: 142,
        electronegativity: 2.28,
        ionizationPotential: 7.4589,
        atomicVolume: 8.3,
        thermalConductivity: 1.5,
        oxidationStates: [-1, -1, 1, 2, 3, 4, 5, 6],
      },

      isotopes: {
        stable: [103],
        unstable: [
          89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
          117, 118, 119, 120, 121, 122,
        ],
      },
    },
  },

  {
    symbol: "Pd",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 10,
    period: 5,
    block: "d",

    static: {
      abundance: { earth: "6.3×10_-7", universe: "2×10_-7" },
      unGrouped: { casNumber: "7440-05-3", pubChem: 23938, protons: 46, electrons: 46, neutrons: 60 },
      generalProperties: {
        atomicNumber: 46,
        atomicWeight: 106.42,
        massNumber: 106,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 18],
        electronConfiguration: ["[Kr]", "4d-10"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 12.02,
        meltingPoint: 1828.05,
        boilingPoint: 3236.15,
        heatOfFusion: 16.7,
        heatOfVaporization: 380,
        specificHeatCapacity: 0.244,
      },
      atomicProperties: {
        atomicRadius: 137,
        covalentRadius: 139,
        electronegativity: 2.2,
        ionizationPotential: 8.3369,
        atomicVolume: 8.9,
        thermalConductivity: 0.718,
        oxidationStates: [2, 4],
      },

      isotopes: {
        stable: [102, 104, 105, 106, 108, 110],
        unstable: [
          91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 107, 109, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124,
        ],
      },
    },
  },

  {
    symbol: "Ag",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 11,
    period: 5,
    block: "d",

    static: {
      abundance: { earth: "7.9×10_-6", universe: "6×10_-8" },
      unGrouped: { casNumber: "7440-22-4", pubChem: 23954, protons: 47, electrons: 47, neutrons: 61 },
      generalProperties: {
        atomicNumber: 47,
        atomicWeight: 107.8682,
        massNumber: 108,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 18, 1],
        electronConfiguration: ["[Kr]", "4d-10", "5s-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 10.49,
        meltingPoint: 1234.93,
        boilingPoint: 2435.15,
        heatOfFusion: 11.3,
        heatOfVaporization: 255,
        specificHeatCapacity: 0.235,
      },
      atomicProperties: {
        atomicRadius: 144,
        covalentRadius: 145,
        electronegativity: 1.93,
        ionizationPotential: 7.5762,
        atomicVolume: 10.3,
        thermalConductivity: 4.29,
        oxidationStates: [1, 2, 3],
      },

      isotopes: {
        stable: [107, 109],
        unstable: [
          93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120,
          121, 122, 123, 124, 125, 127, 128, 129, 130,
        ],
      },
    },
  },

  {
    symbol: "Cd",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 12,
    period: 5,
    block: "d",

    static: {
      abundance: { earth: "0.000015", universe: "2×10_-7" },
      unGrouped: { casNumber: "7440-43-9", pubChem: 23973, protons: 48, electrons: 48, neutrons: 64 },
      generalProperties: {
        atomicNumber: 48,
        atomicWeight: 112.411,
        massNumber: 112,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 18, 2],
        electronConfiguration: ["[Kr]", "4d-10", "5s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 8.69,
        meltingPoint: 594.22,
        boilingPoint: 1040.15,
        heatOfFusion: 6.3,
        heatOfVaporization: 100,
        specificHeatCapacity: 0.232,
      },
      atomicProperties: {
        atomicRadius: 151,
        covalentRadius: 144,
        electronegativity: 1.69,
        ionizationPotential: 8.9938,
        atomicVolume: 13.1,
        thermalConductivity: 0.968,
        oxidationStates: [1, 2],
      },

      isotopes: {
        stable: [106, 108, 110, 111, 112, 114],
        unstable: [
          95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 107, 109, 113, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 127,
          128, 129, 130, 131, 132,
        ],
      },
    },
  },

  {
    symbol: "In",
    category: CATEGORIES.POST_TRANSITION_METALS.value,
    group: 13,
    period: 5,
    block: "p",

    static: {
      abundance: { earth: "0.000016", universe: "3×10_-8" },
      unGrouped: { casNumber: "7440-74-6", pubChem: 5359967, protons: 49, electrons: 49, neutrons: 66 },
      generalProperties: {
        atomicNumber: 49,
        atomicWeight: 114.818,
        massNumber: 115,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.CENTERED_TETRAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 18, 3],
        electronConfiguration: ["[Kr]", "4d-10", "5s-2", "5p-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 7.31,
        meltingPoint: 429.75,
        boilingPoint: 2345.15,
        heatOfFusion: 3.26,
        heatOfVaporization: 230,
        specificHeatCapacity: 0.233,
      },
      atomicProperties: {
        atomicRadius: 167,
        covalentRadius: 142,
        electronegativity: 1.78,
        ionizationPotential: 5.7864,
        atomicVolume: 15.7,
        thermalConductivity: 0.816,
        oxidationStates: [1, 2, 3],
      },

      isotopes: {
        stable: [113],
        unstable: [
          97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 119, 120, 121, 122,
          123, 124, 125, 127, 128, 129, 130, 131, 132, 134, 135,
        ],
      },
    },
  },

  {
    symbol: "Sn",
    category: CATEGORIES.POST_TRANSITION_METALS.value,
    group: 14,
    period: 5,
    block: "p",

    static: {
      abundance: { earth: "0.00022", universe: "4×10_-7" },
      unGrouped: { casNumber: "7440-31-5", pubChem: 5352426, protons: 50, electrons: 50, neutrons: 69 },
      generalProperties: {
        atomicNumber: 50,
        atomicWeight: 118.71,
        massNumber: 119,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.CENTERED_TETRAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 18, 4],
        electronConfiguration: ["[Kr]", "4d-10", "5s-2", "5p-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 7.287,
        meltingPoint: 505.08,
        boilingPoint: 2875.15,
        heatOfFusion: 7,
        heatOfVaporization: 290,
        specificHeatCapacity: 0.228,
      },
      atomicProperties: {
        atomicRadius: 140,
        covalentRadius: 139,
        electronegativity: 1.96,
        ionizationPotential: 7.3439,
        atomicVolume: 16.3,
        thermalConductivity: 0.666,
        oxidationStates: [-4, 2 - 4],
      },

      isotopes: {
        stable: [112, 114, 115, 116, 117, 118, 119, 120, 122, 124],
        unstable: [
          99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 113, 121, 123, 125, 127, 128, 129, 130, 131, 132, 134, 135,
          136, 137,
        ],
      },
    },
  },

  {
    symbol: "Sb",
    category: CATEGORIES.METTALOIDS.value,
    group: 15,
    period: 5,
    block: "p",

    static: {
      abundance: { earth: "0.00002", universe: "4×10_-8" },
      unGrouped: { casNumber: "7440-36-0", pubChem: 5354495, protons: 51, electrons: 51, neutrons: 71 },
      generalProperties: {
        atomicNumber: 51,
        atomicWeight: 121.76,
        massNumber: 122,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_TRIGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 18, 5],
        electronConfiguration: ["[Kr]", "4d-10", "5s-2", "5p-3"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 6.685,
        meltingPoint: 903.78,
        boilingPoint: 1860.15,
        heatOfFusion: 19.7,
        heatOfVaporization: 68,
        specificHeatCapacity: 0.207,
      },
      atomicProperties: {
        atomicRadius: 140,
        covalentRadius: 139,
        electronegativity: 2.05,
        ionizationPotential: 8.6084,
        atomicVolume: 18.22,
        thermalConductivity: 0.243,
        oxidationStates: [-3, 3, 5],
      },

      isotopes: {
        stable: [121, 123],
        unstable: [
          103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 122, 124, 125, 127, 128, 129, 130,
          131, 132, 134, 135, 136, 137, 138, 139,
        ],
      },
    },
  },
] as const;
