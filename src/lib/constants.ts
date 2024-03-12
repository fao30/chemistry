import { CRYSTAL_STRUCTURES } from "@/components/CrystalStructures";
import type { Color, ElementCategory, Lang, Phase } from "@/types";

export const defaultLang: Lang = "ru";

export const COLOR_SETTING = {
  RED: { color: "#dc2626", value: "RED" },
  ORANGE: { color: "#ea580c", value: "ORANGE" },
  YELLOW: { color: "#ca8a04", value: "YELLOW" },
  BROWN: { color: "#a18072", value: "BROWN" },
  LIME: { color: "#65a30d", value: "LIME" },
  GREEN: { color: "#16a34a", value: "GREEN" },
  CYAN: { color: "#0891b2", value: "CYAN" },
  INDIGO: { color: "#4f46e5", value: "INDIGO" },
  PURPLE: { color: "#9333ea", value: "PURPLE" },
  PINK: { color: "#db2777", value: "PINK" },
};

export const COLOR_SETTING_OPTIONS = Object.entries(COLOR_SETTING).map(([_, e]) => ({ ...e }));

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
  GOLD: "GOLD",
};

export const ELEMENT_PHASE: Record<Phase, Phase> = {
  GAS: "GAS",
  SOLID: "SOLID",
  LIQUID: "LIQUID",
};

export const ELEMENT_DATA2 = [
  {
    symbol: "Ce",
    category: CATEGORIES.LANTHANIDES.value,
    group: null,
    period: 6,
    block: "f",
    static: {
      abundance: { earth: "0.006", universe: "1×10_-6" },
      unGrouped: { casNumber: "7440-45-1", pubChem: 23974, protons: 58, electrons: 58, neutrons: 82 },
      generalProperties: {
        atomicNumber: 58,
        atomicWeight: 140.116,
        massNumber: 140,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 19, 9, 2],
        electronConfiguration: ["Xe", "4f-1", "5d-1", "6s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 6.77,
        meltingPoint: 1068.15,
        boilingPoint: 3716.15,
        heatOfFusion: 5.5,
        heatOfVaporization: 350,
        specificHeatCapacity: 0.192,
      },
      atomicProperties: {
        atomicRadius: 182,
        covalentRadius: 204,
        electronegativity: 1.12,
        ionizationPotential: 5.5387,
        atomicVolume: 20.67,
        thermalConductivity: 0.114,
        oxidationStates: [2, 3, 4],
      },

      isotopes: {
        stable: [136, 138, 140, 142],
        unstable: [
          119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 137, 139, 141, 143, 144, 145, 146, 147,
          148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
        ],
      },
    },
  },
  {
    symbol: "Pr",
    category: CATEGORIES.LANTHANIDES.value,
    group: null,
    period: 6,
    block: "f",
    static: {
      abundance: { earth: "0.00086", universe: "2×10_-7" },
      unGrouped: { casNumber: "7440-10-0", pubChem: 23942, protons: 59, electrons: 59, neutrons: 82 },
      generalProperties: {
        atomicNumber: 59,
        atomicWeight: 140.90765,
        massNumber: 141,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 21, 8, 2],
        electronConfiguration: ["Xe", "4f-3", "6s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 6.773,
        meltingPoint: 1208.15,
        boilingPoint: 3793.15,
        heatOfFusion: 6.9,
        heatOfVaporization: 330,
        specificHeatCapacity: 0.193,
      },
      atomicProperties: {
        atomicRadius: 182,
        covalentRadius: 203,
        electronegativity: 1.13,
        ionizationPotential: 5.473,
        atomicVolume: 20.8,
        thermalConductivity: 0.125,
        oxidationStates: [2, 3, 4],
      },

      isotopes: {
        stable: [141],
        unstable: [
          121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 142, 143, 144, 145, 146,
          147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159,
        ],
      },
    },
  },

  {
    symbol: "Nd",
    category: CATEGORIES.LANTHANIDES.value,
    group: null,
    period: 6,
    block: "f",
    static: {
      abundance: { earth: "0.0033", universe: "1×10_-6" },
      unGrouped: { casNumber: "7440-00-8", pubChem: 23934, protons: 60, electrons: 60, neutrons: 84 },
      generalProperties: {
        atomicNumber: 60,
        atomicWeight: 144.242,
        massNumber: 144,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 22, 8, 2],
        electronConfiguration: ["Xe", "4f-4", "6s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 7.007,
        meltingPoint: 1297.15,
        boilingPoint: 3347.15,
        heatOfFusion: 7.1,
        heatOfVaporization: 285,
        specificHeatCapacity: 0.19,
      },
      atomicProperties: {
        atomicRadius: 181,
        covalentRadius: 201,
        electronegativity: 1.14,
        ionizationPotential: 5.525,
        atomicVolume: 20.6,
        thermalConductivity: 0.165,
        oxidationStates: [2, 3],
      },

      isotopes: {
        stable: [142, 143, 145, 146, 148],
        unstable: [
          124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 144, 146, 147, 149, 150, 151, 152,
          153, 154, 155, 156, 157, 158, 159, 160, 161,
        ],
      },
    },
  },

  {
    symbol: "Pm",
    category: CATEGORIES.LANTHANIDES.value,
    group: null,
    period: 6,
    block: "f",
    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "7440-00-8", pubChem: 23934, protons: 61, electrons: 61, neutrons: 84 },
      generalProperties: {
        atomicNumber: 61,
        atomicWeight: 145,
        massNumber: 145,
        radioActive: true,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 23, 8, 2],
        electronConfiguration: ["Xe", "4f-5", "6s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 7.26,
        meltingPoint: 1315.15,
        boilingPoint: 3273.15,
        heatOfFusion: 7.7,
        heatOfVaporization: 290,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: 183,
        covalentRadius: 199,
        electronegativity: null,
        ionizationPotential: 5.582,
        atomicVolume: 22.39,
        thermalConductivity: 0.179,
        oxidationStates: [3],
      },

      isotopes: {
        stable: [],
        unstable: [
          126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150,
          151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163,
        ],
      },
    },
  },

  {
    symbol: "Sm",
    category: CATEGORIES.LANTHANIDES.value,
    group: null,
    period: 6,
    block: "f",
    static: {
      abundance: { earth: "0.0006", universe: "5×10_-7" },
      unGrouped: { casNumber: "7440-19-9", pubChem: 23951, protons: 62, electrons: 62, neutrons: 88 },
      generalProperties: {
        atomicNumber: 62,
        atomicWeight: 150.36,
        massNumber: 150,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_TRIGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 24, 8, 2],
        electronConfiguration: ["Xe", "4f-6", "6s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 7.52,
        meltingPoint: 1345.15,
        boilingPoint: 2067.15,
        heatOfFusion: 8.6,
        heatOfVaporization: 175,
        specificHeatCapacity: 0.197,
      },
      atomicProperties: {
        atomicRadius: 180,
        covalentRadius: 198,
        electronegativity: 1.17,
        ionizationPotential: 5.6437,
        atomicVolume: 20.0,
        thermalConductivity: 0.133,
        oxidationStates: [2, 3],
      },

      isotopes: {
        stable: [144, 149, 150, 152, 154],
        unstable: [
          129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 145, 146, 147, 148, 151, 153, 155, 156, 157, 158,
          159, 160, 161, 162, 163, 164, 165,
        ],
      },
    },
  },

  {
    symbol: "Eu",
    category: CATEGORIES.LANTHANIDES.value,
    group: null,
    period: 6,
    block: "f",
    static: {
      abundance: { earth: "0.00018", universe: "5×10_-8" },
      unGrouped: { casNumber: "7440-53-1", pubChem: 23981, protons: 63, electrons: 63, neutrons: 89 },
      generalProperties: {
        atomicNumber: 63,
        atomicWeight: 151.964,
        massNumber: 152,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BODY_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 25, 8, 2],
        electronConfiguration: ["Xe", "4f-7", "6s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 5.243,
        meltingPoint: 1099.15,
        boilingPoint: 1802.15,
        heatOfFusion: 9.2,
        heatOfVaporization: 175,
        specificHeatCapacity: 0.182,
      },
      atomicProperties: {
        atomicRadius: 180,
        covalentRadius: 198,
        electronegativity: 1.2,
        ionizationPotential: 5.6704,
        atomicVolume: 20.8,
        thermalConductivity: 0.139,
        oxidationStates: [2, 3],
      },

      isotopes: {
        stable: [151, 153],
        unstable: [
          130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 152, 154, 155, 156,
          157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167,
        ],
      },
    },
  },

  {
    symbol: "Gd",
    category: CATEGORIES.LANTHANIDES.value,
    group: null,
    period: 6,
    block: "f",
    static: {
      abundance: { earth: "0.00052", universe: "2×10_-7" },
      unGrouped: { casNumber: "7440-54-2", pubChem: 23982, protons: 64, electrons: 64, neutrons: 93 },
      generalProperties: {
        atomicNumber: 64,
        atomicWeight: 157.25,
        massNumber: 157,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 25, 9, 2],
        electronConfiguration: ["Xe", "4f-7", "5d-1", "6s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 7.895,
        meltingPoint: 1585.15,
        boilingPoint: 3546.15,
        heatOfFusion: 10,
        heatOfVaporization: 305,
        specificHeatCapacity: 0.236,
      },
      atomicProperties: {
        atomicRadius: 180,
        covalentRadius: 196,
        electronegativity: 1.2,
        ionizationPotential: 6.1501,
        atomicVolume: 19.9,
        thermalConductivity: 0.106,
        oxidationStates: [1, 2, 3],
      },

      isotopes: {
        stable: [154, 155, 156, 157, 158, 160],
        unstable: [
          134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 159, 161, 162, 163, 164,
          165, 166, 167, 168, 169,
        ],
      },
    },
  },
  {
    symbol: "Tb",
    category: CATEGORIES.LANTHANIDES.value,
    group: null,
    period: 6,
    block: "f",
    static: {
      abundance: { earth: "0.000093", universe: "5×10_-8" },
      unGrouped: { casNumber: "7440-27-9", pubChem: 23958, protons: 65, electrons: 65, neutrons: 94 },
      generalProperties: {
        atomicNumber: 65,
        atomicWeight: 158.92535,
        massNumber: 159,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 27, 8, 2],
        electronConfiguration: ["Xe", "4f-9", "6s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 8.229,
        meltingPoint: 1629.15,
        boilingPoint: 3503.15,
        heatOfFusion: 10.8,
        heatOfVaporization: 295,
        specificHeatCapacity: 0.182,
      },
      atomicProperties: {
        atomicRadius: 177,
        covalentRadius: 194,
        electronegativity: 1.2,
        ionizationPotential: 5.8638,
        atomicVolume: 19.2,
        thermalConductivity: 0.111,
        oxidationStates: [1, 3, 4],
      },

      isotopes: {
        stable: [159],
        unstable: [
          136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 160, 161,
          162, 163, 164, 165, 166, 167, 168, 169, 170, 171,
        ],
      },
    },
  },

  {
    symbol: "Dy",
    category: CATEGORIES.LANTHANIDES.value,
    group: null,
    period: 6,
    block: "f",
    static: {
      abundance: { earth: "0.00062", universe: "2×10_-7" },
      unGrouped: { casNumber: "7429-91-6", pubChem: 23912, protons: 66, electrons: 66, neutrons: 97 },
      generalProperties: {
        atomicNumber: 66,
        atomicWeight: 162.5,
        massNumber: 163,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 28, 8, 2],
        electronConfiguration: ["Xe", "4f-10", "6s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 8.55,
        meltingPoint: 1680.15,
        boilingPoint: 2840.15,
        heatOfFusion: 11.1,
        heatOfVaporization: 280,
        specificHeatCapacity: 0.17,
      },
      atomicProperties: {
        atomicRadius: 178,
        covalentRadius: 192,
        electronegativity: 1.22,
        ionizationPotential: 5.9389,
        atomicVolume: 19.0,
        thermalConductivity: 0.107,
        oxidationStates: [2, 3],
      },

      isotopes: {
        stable: [156, 158, 160, 161, 162, 163, 164],
        unstable: [
          138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 157, 159, 165, 166, 167, 168, 169,
          170, 171, 172, 173,
        ],
      },
    },
  },

  {
    symbol: "Ho",
    category: CATEGORIES.LANTHANIDES.value,
    group: null,
    period: 6,
    block: "f",
    static: {
      abundance: { earth: "0.00012", universe: "5×10_-8" },
      unGrouped: { casNumber: "7429-91-6", pubChem: 23912, protons: 67, electrons: 67, neutrons: 98 },
      generalProperties: {
        atomicNumber: 67,
        atomicWeight: 164.93032,
        massNumber: 165,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 29, 8, 2],
        electronConfiguration: ["Xe", "4f-11", "6s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 8.795,
        meltingPoint: 1734.15,
        boilingPoint: 2993.15,
        heatOfFusion: 17,
        heatOfVaporization: 265,
        specificHeatCapacity: 0.165,
      },
      atomicProperties: {
        atomicRadius: 176,
        covalentRadius: 192,
        electronegativity: 1.23,
        ionizationPotential: 6.0215,
        atomicVolume: 18.7,
        thermalConductivity: 0.162,
        oxidationStates: [3],
      },

      isotopes: {
        stable: [165],
        unstable: [
          140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164,
          166, 167, 168, 169, 170, 171, 172, 173, 174, 175,
        ],
      },
    },
  },

  {
    symbol: "Er",
    category: CATEGORIES.LANTHANIDES.value,
    group: null,
    period: 6,
    block: "f",
    static: {
      abundance: { earth: "0.0003", universe: "2×10_-7" },
      unGrouped: { casNumber: "7440-52-0", pubChem: 23980, protons: 68, electrons: 68, neutrons: 99 },
      generalProperties: {
        atomicNumber: 68,
        atomicWeight: 167.259,
        massNumber: 167,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 30, 8, 2],
        electronConfiguration: ["Xe", "4f-12", "6s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 9.066,
        meltingPoint: 1802.15,
        boilingPoint: 3141.15,
        heatOfFusion: 19.9,
        heatOfVaporization: 285,
        specificHeatCapacity: 0.168,
      },
      atomicProperties: {
        atomicRadius: 176,
        covalentRadius: 189,
        electronegativity: 1.24,
        ionizationPotential: 6.1077,
        atomicVolume: 18.4,
        thermalConductivity: 0.143,
        oxidationStates: [3],
      },

      isotopes: {
        stable: [162, 164, 166, 167, 168, 170],
        unstable: [
          143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 163, 165, 169, 171, 172, 173,
          174, 175, 176, 177,
        ],
      },
    },
  },

  {
    symbol: "Tm",
    category: CATEGORIES.LANTHANIDES.value,
    group: null,
    period: 6,
    block: "f",
    static: {
      abundance: { earth: "0.000045", universe: "1×10_-8" },
      unGrouped: { casNumber: "7440-30-4", pubChem: 23961, protons: 69, electrons: 69, neutrons: 100 },
      generalProperties: {
        atomicNumber: 69,
        atomicWeight: 168.93421,
        massNumber: 169,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 31, 8, 2],
        electronConfiguration: ["Xe", "4f-13", "6s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 9.321,
        meltingPoint: 1818.15,
        boilingPoint: 2223.15,
        heatOfFusion: 16.8,
        heatOfVaporization: 250,
        specificHeatCapacity: 0.16,
      },
      atomicProperties: {
        atomicRadius: 176,
        covalentRadius: 190,
        electronegativity: 1.25,
        ionizationPotential: 6.1843,
        atomicVolume: 18.1,
        thermalConductivity: 0.168,
        oxidationStates: [2, 3],
      },

      isotopes: {
        stable: [169],
        unstable: [
          145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 170,
          171, 172, 173, 174, 175, 176, 177, 178, 179,
        ],
      },
    },
  },

  {
    symbol: "Yb",
    category: CATEGORIES.LANTHANIDES.value,
    group: null,
    period: 6,
    block: "f",
    static: {
      abundance: { earth: "0.00028", universe: "2×10_-7" },
      unGrouped: { casNumber: "7440-64-4", pubChem: 23992, protons: 70, electrons: 70, neutrons: 103 },
      generalProperties: {
        atomicNumber: 70,
        atomicWeight: 173.054,
        massNumber: 173,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 8, 2],
        electronConfiguration: ["Xe", "4f-14", "6s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 6.965,
        meltingPoint: 1097.15,
        boilingPoint: 1469.15,
        heatOfFusion: 7.7,
        heatOfVaporization: 160,
        specificHeatCapacity: 0.155,
      },
      atomicProperties: {
        atomicRadius: 176,
        covalentRadius: 187,
        electronegativity: 1.1,
        ionizationPotential: 6.2542,
        atomicVolume: 24.79,
        thermalConductivity: 0.349,
        oxidationStates: [2, 3],
      },

      isotopes: {
        stable: [168, 170, 171, 172, 173, 174, 176],
        unstable: [
          148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 169, 175, 177, 178, 179,
          180, 181,
        ],
      },
    },
  },

  {
    symbol: "Lu",
    category: CATEGORIES.LANTHANIDES.value,
    group: null,
    period: 6,
    block: "f",
    static: {
      abundance: { earth: "0.000056", universe: "1×10_-8" },
      unGrouped: { casNumber: "7440-64-4", pubChem: 23992, protons: 71, electrons: 71, neutrons: 104 },
      generalProperties: {
        atomicNumber: 70,
        atomicWeight: 174.9668,
        massNumber: 175,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 9, 2],
        electronConfiguration: ["Xe", "4f-14", "5d-1", "6s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 9.84,
        meltingPoint: 1925.15,
        boilingPoint: 3675.15,
        heatOfFusion: 22,
        heatOfVaporization: 415,
        specificHeatCapacity: 0.154,
      },
      atomicProperties: {
        atomicRadius: 174,
        covalentRadius: 187,
        electronegativity: 1.27,
        ionizationPotential: 5.4259,
        atomicVolume: 17.78,
        thermalConductivity: 0.164,
        oxidationStates: [3],
      },

      isotopes: {
        stable: [168, 170, 171, 172, 173, 174, 176],
        unstable: [
          150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174,
          175, 176, 177, 178, 179, 180, 181, 182, 183, 184,
        ],
      },
    },
  },
] as const;

export const ELEMENT_DATA3 = [
  {
    symbol: "Th",
    category: CATEGORIES.ACTINIDES.value,
    group: null,
    period: 6,
    block: "f",
    static: {
      abundance: { earth: "0.0006", universe: "4×10_-8" },
      unGrouped: { casNumber: "7440-29-1", pubChem: 23960, protons: 90, electrons: 90, neutrons: 142 },
      generalProperties: {
        atomicNumber: 90,
        atomicWeight: 232.03806,
        massNumber: 232,
        radioActive: true,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 18, 10, 2],
        electronConfiguration: ["Rn", "6d-2", "7s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 11.7,
        meltingPoint: 2115.15,
        boilingPoint: 5061.15,
        heatOfFusion: 16,
        heatOfVaporization: 530,
        specificHeatCapacity: 0.113,
      },
      atomicProperties: {
        atomicRadius: 179,
        covalentRadius: 206,
        electronegativity: 1.3,
        ionizationPotential: 6.3067,
        atomicVolume: 19.9,
        thermalConductivity: 0.54,
        oxidationStates: [2, 3, 4],
      },

      isotopes: {
        stable: [232],
        unstable: [
          209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 233, 234,
          235, 236, 237, 238,
        ],
      },
    },
  },

  {
    symbol: "Pa",
    category: CATEGORIES.ACTINIDES.value,
    group: null,
    period: 7,
    block: "f",
    static: {
      abundance: { earth: "9.9×10_-13", universe: null },
      unGrouped: { casNumber: "7440-13-3", pubChem: null, protons: 91, electrons: 91, neutrons: 140 },
      generalProperties: {
        atomicNumber: 91,
        atomicWeight: 231.03588,
        massNumber: 231,
        radioActive: true,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.CENTERED_TETRAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 20, 9, 2],
        electronConfiguration: ["Rn", "5f-2", "6d-1", "7s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 15.37,
        meltingPoint: 1841.15,
        boilingPoint: 4300.15,
        heatOfFusion: 15,
        heatOfVaporization: 470,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: 163,
        covalentRadius: 200,
        electronegativity: 1.5,
        ionizationPotential: 5.89,
        atomicVolume: 15.0,
        thermalConductivity: 0.47,
        oxidationStates: [3, 4, 5],
      },

      isotopes: {
        stable: [],
        unstable: [
          212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236,
          237, 238, 239, 240,
        ],
      },
    },
  },

  {
    symbol: "U",
    category: CATEGORIES.ACTINIDES.value,
    group: null,
    period: 7,
    block: "f",
    static: {
      abundance: { earth: "0.00018", universe: "2×10_-8%" },
      unGrouped: { casNumber: "7440-61-1", pubChem: 23989, protons: 92, electrons: 92, neutrons: 146 },
      generalProperties: {
        atomicNumber: 92,
        atomicWeight: 238.02891,
        massNumber: 238,
        radioActive: true,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BASE_CENTERED_ORTHORHOMBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 21, 9, 2],
        electronConfiguration: ["Rn", "5f-3", "6d-1", "7s-1"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 18.95,
        meltingPoint: 1405.35,
        boilingPoint: 4404.15,
        heatOfFusion: 14,
        heatOfVaporization: 420,
        specificHeatCapacity: 0.116,
      },
      atomicProperties: {
        atomicRadius: 156,
        covalentRadius: 196,
        electronegativity: 1.38,
        ionizationPotential: 6.1941,
        atomicVolume: 12.59,
        thermalConductivity: 0.276,
        oxidationStates: [3, 4, 5, 6],
      },

      isotopes: {
        stable: [],
        unstable: [
          215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239,
          240, 241, 242,
        ],
      },
    },
  },

  {
    symbol: "Np",
    category: CATEGORIES.ACTINIDES.value,
    group: null,
    period: 7,
    block: "f",
    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "7439-99-8", pubChem: null, protons: 93, electrons: 93, neutrons: 144 },
      generalProperties: {
        atomicNumber: 93,
        atomicWeight: 237,
        massNumber: 237,
        radioActive: true,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_ORTHORHOMBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 22, 9, 2],
        electronConfiguration: ["Rn", "5f-3", "6d-1", "7s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 20.45,
        meltingPoint: 910.15,
        boilingPoint: 4273.15,
        heatOfFusion: 10,
        heatOfVaporization: 335,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: 155,
        covalentRadius: 190,
        electronegativity: 1.36,
        ionizationPotential: 6.2657,
        atomicVolume: 11.62,
        thermalConductivity: 0.063,
        oxidationStates: [3, 4, 5, 6, 7],
      },

      isotopes: {
        stable: [],
        unstable: [225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244],
      },
    },
  },

  {
    symbol: "Pu",
    category: CATEGORIES.ACTINIDES.value,
    group: null,
    period: 7,
    block: "f",
    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "7440-07-5", pubChem: 23940, protons: 94, electrons: 94, neutrons: 150 },
      generalProperties: {
        atomicNumber: 94,
        atomicWeight: 244,
        massNumber: 244,
        radioActive: true,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_MONOCLINIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 24, 8, 2],
        electronConfiguration: ["Rn", "5f-6", "7s-2"],
      },

      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 19.816,
        meltingPoint: 912.55,
        boilingPoint: 3501.15,
        heatOfFusion: null,
        heatOfVaporization: 325,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: 159,
        covalentRadius: 187,
        electronegativity: 1.28,
        ionizationPotential: 6.0262,
        atomicVolume: 12.32,
        thermalConductivity: 0.0674,
        oxidationStates: [3, 4, 5, 6, 7, 8],
      },

      isotopes: {
        stable: [],
        unstable: [228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247],
      },
    },
  },
] as const;

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
        atomicWeight: 1.00794,
        massNumber: 1,
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
        atomicWeight: 6.941,
        massNumber: 7,
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

  {
    symbol: "Te",
    category: CATEGORIES.METTALOIDS.value,
    group: 16,
    period: 5,
    block: "p",

    static: {
      abundance: { earth: "9.9×10_-8", universe: "9×10_-7" },
      unGrouped: { casNumber: "13494-80-9", pubChem: 6327182, protons: 52, electrons: 52, neutrons: 76 },
      generalProperties: {
        atomicNumber: 52,
        atomicWeight: 127.6,
        massNumber: 128,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_TRIGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 18, 6],
        electronConfiguration: ["[Kr]", "4d-10", "5s-2", "5p-4"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 6.232,
        meltingPoint: 722.66,
        boilingPoint: 1261.15,
        heatOfFusion: 17.5,
        heatOfVaporization: 48,
        specificHeatCapacity: 0.202,
      },
      atomicProperties: {
        atomicRadius: 140,
        covalentRadius: 138,
        electronegativity: 2.1,
        ionizationPotential: 9.0096,
        atomicVolume: 20.5,
        thermalConductivity: 0.0235,
        oxidationStates: [-2, 2, 4, 5, 6],
      },

      isotopes: {
        stable: [120, 122, 124, 125, 126],
        unstable: [
          105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 121, 123, 127, 128, 129, 130, 131, 132, 134, 135,
          136, 137, 138, 139, 140, 141, 142,
        ],
      },
    },
  },

  {
    symbol: "I",
    category: CATEGORIES.OTHER_NONMETALS.value,
    group: 17,
    period: 5,
    block: "p",

    static: {
      abundance: { earth: "0.000049", universe: "1×10_-7" },
      unGrouped: { casNumber: "7553-56-2", pubChem: 807, protons: 53, electrons: 53, neutrons: 74 },
      generalProperties: {
        atomicNumber: 53,
        atomicWeight: 126.90447,
        massNumber: 127,
        radioActive: false,
        color: ELEMENT_COLORS.SLATE_GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BASE_CENTERED_ORTHORHOMBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 18, 7],
        electronConfiguration: ["[Kr]", "4d-10", "5s-2", "5p-5"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 4.93,
        meltingPoint: 386.85,
        boilingPoint: 457.4,
        heatOfFusion: 7.76,
        heatOfVaporization: 20.9,
        specificHeatCapacity: 0.214,
      },
      atomicProperties: {
        atomicRadius: 140,
        covalentRadius: 139,
        electronegativity: 2.66,
        ionizationPotential: 10.4513,
        atomicVolume: 25.74,
        thermalConductivity: 0.00449,
        oxidationStates: [-1, 1, 3, 5, 7],
      },

      isotopes: {
        stable: [127],
        unstable: [
          108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 128, 129, 130, 131, 132, 134,
          135, 136, 137, 138, 139, 140, 141, 142, 143, 144,
        ],
      },
    },
  },
  {
    symbol: "Xe",
    category: CATEGORIES.NOBLE_GASSES.value,
    group: 18,
    period: 5,
    block: "p",

    static: {
      abundance: { earth: "2×10_-9", universe: "1×10_-6" },
      unGrouped: { casNumber: "7440-63-3", pubChem: 23991, protons: 54, electrons: 54, neutrons: 77 },
      generalProperties: {
        atomicNumber: 54,
        atomicWeight: 131.293,
        massNumber: 131,
        radioActive: false,
        color: ELEMENT_COLORS.COLORLESS,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 18, 8],
        electronConfiguration: ["[Kr]", "4d-10", "5s-2", "5p-6"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.GAS,
        density: 0.005887,
        meltingPoint: 161.45,
        boilingPoint: 165.03,
        heatOfFusion: 2.3,
        heatOfVaporization: 12.64,
        specificHeatCapacity: 0.158,
      },
      atomicProperties: {
        atomicRadius: 108,
        covalentRadius: 140,
        electronegativity: 2.6,
        ionizationPotential: 12.1298,
        atomicVolume: 37.3,
        thermalConductivity: 0.0000569,
        oxidationStates: [2, 4, 6, 8],
      },

      isotopes: {
        stable: [124, 126, 128, 129, 130, 131, 132, 134, 136],
        unstable: [
          108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 125, 127, 133, 135, 137, 138, 139, 140, 141,
          142, 143, 144, 145, 146, 147,
        ],
      },
    },
  },

  {
    symbol: "Cs",
    category: CATEGORIES.ALKALI_METALS.value,
    group: 1,
    period: 6,
    block: "s",

    static: {
      abundance: { earth: "0.00019", universe: "8×10_-8" },
      unGrouped: { casNumber: "7440-46-2", pubChem: 5354618, protons: 55, electrons: 55, neutrons: 78 },
      generalProperties: {
        atomicNumber: 55,
        atomicWeight: 132.9054519,
        massNumber: 133,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BODY_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 18, 8, 1],
        electronConfiguration: ["[Xe]", "6s-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 1.873,
        meltingPoint: 301.59,
        boilingPoint: 944.15,
        heatOfFusion: 2.09,
        heatOfVaporization: 65,
        specificHeatCapacity: 0.242,
      },
      atomicProperties: {
        atomicRadius: 265,
        covalentRadius: 244,
        electronegativity: 0.79,
        ionizationPotential: 3.8939,
        atomicVolume: 71.07,
        thermalConductivity: 0.359,
        oxidationStates: [-1, 1],
      },

      isotopes: {
        stable: [133],
        unstable: [
          112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 134, 135, 136, 137,
          138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151,
        ],
      },
    },
  },

  {
    symbol: "Ba",
    category: CATEGORIES.ALKALINE_EARTH_METALS.value,
    group: 2,
    period: 6,
    block: "s",

    static: {
      abundance: { earth: "0.034", universe: "1×10_-6" },
      unGrouped: { casNumber: "7440-46-2", pubChem: 5354618, protons: 56, electrons: 56, neutrons: 81 },
      generalProperties: {
        atomicNumber: 56,
        atomicWeight: 137.327,
        massNumber: 137,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BODY_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 18, 8, 2],
        electronConfiguration: ["[Xe]", "6s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 3.594,
        meltingPoint: 1000.15,
        boilingPoint: 2170.15,
        heatOfFusion: 8,
        heatOfVaporization: 140,
        specificHeatCapacity: 0.204,
      },
      atomicProperties: {
        atomicRadius: 222,
        covalentRadius: 215,
        electronegativity: 0.89,
        ionizationPotential: 5.2117,
        atomicVolume: 39.24,
        thermalConductivity: 0.184,
        oxidationStates: [2],
      },

      isotopes: {
        stable: [130, 132, 134, 135, 136, 137, 138],
        unstable: [
          114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 131, 133, 139, 140, 141, 142, 143, 144, 145,
          146, 147, 148, 149, 150, 151, 152, 153,
        ],
      },
    },
  },
  {
    symbol: "La",
    category: CATEGORIES.LANTHANIDES.value,
    group: 3,
    period: 6,
    block: "s",

    static: {
      abundance: { earth: "0.0034", universe: "2×10_-7" },
      unGrouped: { casNumber: "7439-91-0", pubChem: 23926, protons: 57, electrons: 57, neutrons: 82 },
      generalProperties: {
        atomicNumber: 57,
        atomicWeight: 138.90547,
        massNumber: 139,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 18, 9, 2],
        electronConfiguration: ["[Xe]", "5d-1", "6s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 6.145,
        meltingPoint: 1193.15,
        boilingPoint: 3737.15,
        heatOfFusion: 6.2,
        heatOfVaporization: 400,
        specificHeatCapacity: 0.195,
      },
      atomicProperties: {
        atomicRadius: 187,
        covalentRadius: 207,
        electronegativity: 1.1,
        ionizationPotential: 5.5769,
        atomicVolume: 22.5,
        thermalConductivity: 0.135,
        oxidationStates: [2, 3],
      },

      isotopes: {
        stable: [139],
        unstable: [
          117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 140, 141, 142,
          143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155,
        ],
      },
    },
  },

  {
    symbol: "Hf",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 4,
    period: 6,
    block: "d",

    static: {
      abundance: { earth: "0.00033", universe: "7×10_-8" },
      unGrouped: { casNumber: "7440-58-6", pubChem: 23986, protons: 72, electrons: 72, neutrons: 106 },
      generalProperties: {
        atomicNumber: 72,
        atomicWeight: 178.49,
        massNumber: 178,
        radioActive: false,
        color: ELEMENT_COLORS.GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 10, 2],
        electronConfiguration: ["[Xe]", "4f-14", "5d-2", "6s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 13.31,
        meltingPoint: 2506.15,
        boilingPoint: 4876.15,
        heatOfFusion: 25.5,
        heatOfVaporization: 630,
        specificHeatCapacity: 0.144,
      },
      atomicProperties: {
        atomicRadius: 159,
        covalentRadius: 175,
        electronegativity: 1.3,
        ionizationPotential: 6.8251,
        atomicVolume: 13.6,
        thermalConductivity: 0.23,
        oxidationStates: [2, 3, 4],
      },

      isotopes: {
        stable: [176, 177, 178, 179, 180],
        unstable: [
          153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 181, 182,
          184, 185, 186, 187, 188,
        ],
      },
    },
  },
  {
    symbol: "Ta",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 5,
    period: 6,
    block: "d",

    static: {
      abundance: { earth: "0.00017", universe: "8×10_-9" },
      unGrouped: { casNumber: "7440-25-7", pubChem: 23956, protons: 73, electrons: 73, neutrons: 108 },
      generalProperties: {
        atomicNumber: 73,
        atomicWeight: 180.94788,
        massNumber: 181,
        radioActive: false,
        color: ELEMENT_COLORS.GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BODY_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 11, 2],
        electronConfiguration: ["[Xe]", "4f-14", "5d-3", "6s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 16.654,
        meltingPoint: 3290.15,
        boilingPoint: 5731.15,
        heatOfFusion: 36,
        heatOfVaporization: 735,
        specificHeatCapacity: 0.14,
      },
      atomicProperties: {
        atomicRadius: 146,
        covalentRadius: 170,
        electronegativity: 1.5,
        ionizationPotential: 7.5496,
        atomicVolume: 10.9,
        thermalConductivity: 0.575,
        oxidationStates: [-1, 2, 3, 4, 5],
      },

      isotopes: {
        stable: [181],
        unstable: [
          155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179,
          180, 182, 184, 185, 186, 187, 188, 189, 190,
        ],
      },
    },
  },

  {
    symbol: "W",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 6,
    period: 6,
    block: "d",

    static: {
      abundance: { earth: "0.00011", universe: "5×10_-8" },
      unGrouped: { casNumber: "7440-33-7", pubChem: 23964, protons: 74, electrons: 74, neutrons: 110 },
      generalProperties: {
        atomicNumber: 74,
        atomicWeight: 183.84,
        massNumber: 184,
        radioActive: false,
        color: ELEMENT_COLORS.GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BODY_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 12, 2],
        electronConfiguration: ["[Xe]", "4f-14", "5d-4", "6s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 19.25,
        meltingPoint: 3695.15,
        boilingPoint: 5828.15,
        heatOfFusion: 35,
        heatOfVaporization: 800,
        specificHeatCapacity: 0.132,
      },
      atomicProperties: {
        atomicRadius: 139,
        covalentRadius: 162,
        electronegativity: 2.36,
        ionizationPotential: 7.864,
        atomicVolume: 9.53,
        thermalConductivity: 1.74,
        oxidationStates: [-2, -1, 1, 2, 3, 4, 5, 6],
      },

      isotopes: {
        stable: [180, 182, 183, 184, 186],
        unstable: [
          158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 181, 185, 187,
          188, 189, 190, 191, 192,
        ],
      },
    },
  },

  {
    symbol: "Re",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 7,
    period: 6,
    block: "d",

    static: {
      abundance: { earth: "2.6×10_-7", universe: "2×10_-8" },
      unGrouped: { casNumber: "7440-15-5", pubChem: 23947, protons: 75, electrons: 75, neutrons: 111 },
      generalProperties: {
        atomicNumber: 75,
        atomicWeight: 186.207,
        massNumber: 186,
        radioActive: false,
        color: ELEMENT_COLORS.GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 13, 2],
        electronConfiguration: ["[Xe]", "4f-14", "5d-5", "6s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 21.02,
        meltingPoint: 3459.15,
        boilingPoint: 5869.15,
        heatOfFusion: 33,
        heatOfVaporization: 705,
        specificHeatCapacity: 0.137,
      },
      atomicProperties: {
        atomicRadius: 137,
        covalentRadius: 151,
        electronegativity: 1.9,
        ionizationPotential: 7.8335,
        atomicVolume: 8.85,
        thermalConductivity: 0.479,
        oxidationStates: [-3, -1, 1, 2, 3, 4, 5, 6, 7],
      },

      isotopes: {
        stable: [185],
        unstable: [
          160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184,
          186, 187, 188, 189, 190, 191, 192, 193, 194,
        ],
      },
    },
  },

  {
    symbol: "Os",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 8,
    period: 6,
    block: "d",

    static: {
      abundance: { earth: "1.8×10_-7", universe: "3×10_-7" },
      unGrouped: { casNumber: "7440-15-5", pubChem: 23947, protons: 76, electrons: 76, neutrons: 114 },
      generalProperties: {
        atomicNumber: 76,
        atomicWeight: 190.23,
        massNumber: 190,
        radioActive: false,
        color: ELEMENT_COLORS.SLATE_GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 14, 2],
        electronConfiguration: ["[Xe]", "4f-14", "5d-6", "6s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 22.61,
        meltingPoint: 3306.15,
        boilingPoint: 5285.15,
        heatOfFusion: 31,
        heatOfVaporization: 630,
        specificHeatCapacity: 0.13,
      },
      atomicProperties: {
        atomicRadius: 135,
        covalentRadius: 144,
        electronegativity: 2.2,
        ionizationPotential: 8.4382,
        atomicVolume: 8.49,
        thermalConductivity: 0.876,
        oxidationStates: [-2, -1, 2, 3, 4, 5, 6, 7, 8],
      },

      isotopes: {
        stable: [184, 187, 188, 189, 190, 192],
        unstable: [
          161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 185, 186,
          191, 193, 194, 195, 196,
        ],
      },
    },
  },

  {
    symbol: "Ir",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 9,
    period: 6,
    block: "d",

    static: {
      abundance: { earth: "4×10_-8", universe: "2×10_-7" },
      unGrouped: { casNumber: "7439-88-5", pubChem: 23924, protons: 77, electrons: 77, neutrons: 115 },
      generalProperties: {
        atomicNumber: 77,
        atomicWeight: 192.217,
        massNumber: 192,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 15, 2],
        electronConfiguration: ["[Xe]", "4f-14", "5d-7", "6s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 22.56,
        meltingPoint: 2739.15,
        boilingPoint: 4701.15,
        heatOfFusion: 26,
        heatOfVaporization: 560,
        specificHeatCapacity: 0.131,
      },
      atomicProperties: {
        atomicRadius: 136,
        covalentRadius: 141,
        electronegativity: 2.2,
        ionizationPotential: 8.967,
        atomicVolume: 8.54,
        thermalConductivity: 1.47,
        oxidationStates: [-3, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      },

      isotopes: {
        stable: [191, 193],
        unstable: [
          164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188,
          189, 190, 192, 194, 195, 196, 197, 198, 199,
        ],
      },
    },
  },

  {
    symbol: "Pt",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 10,
    period: 6,
    block: "d",

    static: {
      abundance: { earth: "3.7×10_-6", universe: "5×10_-7" },
      unGrouped: { casNumber: "7440-06-4", pubChem: 23939, protons: 78, electrons: 78, neutrons: 117 },
      generalProperties: {
        atomicNumber: 78,
        atomicWeight: 195.084,
        massNumber: 195,
        radioActive: false,
        color: ELEMENT_COLORS.GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 17, 1],
        electronConfiguration: ["[Xe]", "4f-14", "5d-9", "6s-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 21.45,
        meltingPoint: 2041.45,
        boilingPoint: 4098.15,
        heatOfFusion: 20,
        heatOfVaporization: 490,
        specificHeatCapacity: 0.133,
      },
      atomicProperties: {
        atomicRadius: 139,
        covalentRadius: 136,
        electronegativity: 2.28,
        ionizationPotential: 8.9587,
        atomicVolume: 9.1,
        thermalConductivity: 0.716,
        oxidationStates: [2, 4, 5, 6],
      },

      isotopes: {
        stable: [192, 194, 195, 196, 198],
        unstable: [
          166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190,
          191, 193, 197, 199, 200, 201, 202,
        ],
      },
    },
  },

  {
    symbol: "Au",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 11,
    period: 6,
    block: "d",

    static: {
      abundance: { earth: "3.1×10_-7", universe: "6×10_-8" },
      unGrouped: { casNumber: "7440-57-5", pubChem: 23985, protons: 79, electrons: 79, neutrons: 118 },
      generalProperties: {
        atomicNumber: 79,
        atomicWeight: 196.966569,
        massNumber: 197,
        radioActive: false,
        color: ELEMENT_COLORS.GOLD,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 18, 1],
        electronConfiguration: ["[Xe]", "4f-14", "5d-10", "6s-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 19.282,
        meltingPoint: 1337.35,
        boilingPoint: 3129.15,
        heatOfFusion: 12.5,
        heatOfVaporization: 330,
        specificHeatCapacity: 0.129,
      },
      atomicProperties: {
        atomicRadius: 144,
        covalentRadius: 136,
        electronegativity: 2.54,
        ionizationPotential: 9.2255,
        atomicVolume: 10.2,
        thermalConductivity: 3.17,
        oxidationStates: [-1, 1, 2, 3, 5],
      },

      isotopes: {
        stable: [197],
        unstable: [
          169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193,
          194, 195, 196, 198, 199, 200, 201, 202, 203, 204, 205,
        ],
      },
    },
  },

  {
    symbol: "Hg",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 12,
    period: 6,
    block: "d",

    static: {
      abundance: { earth: "6.7×10_-6", universe: "1×10_-7" },
      unGrouped: { casNumber: "7439-97-6", pubChem: 23931, protons: 80, electrons: 80, neutrons: 121 },
      generalProperties: {
        atomicNumber: 80,
        atomicWeight: 200.59,
        massNumber: 201,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_TRIGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 18, 2],
        electronConfiguration: ["[Xe]", "4f-14", "5d-10", "6s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.LIQUID,
        density: 13.5336,
        meltingPoint: 234.32,
        boilingPoint: 630.15,
        heatOfFusion: 2.29,
        heatOfVaporization: 59.2,
        specificHeatCapacity: 0.14,
      },
      atomicProperties: {
        atomicRadius: 151,
        covalentRadius: 132,
        electronegativity: 2.0,
        ionizationPotential: 10.4375,
        atomicVolume: 14.82,
        thermalConductivity: 0.0834,
        oxidationStates: [1, 2, 4],
      },

      isotopes: {
        stable: [196, 198, 199, 200, 201, 202, 204],
        unstable: [
          171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195,
          197, 203, 205, 206, 207, 208, 209, 210,
        ],
      },
    },
  },

  {
    symbol: "Tl",
    category: CATEGORIES.POST_TRANSITION_METALS.value,
    group: 13,
    period: 6,
    block: "p",

    static: {
      abundance: { earth: "0.000053", universe: "5×10_-8" },
      unGrouped: { casNumber: "7440-28-0", pubChem: 5359464, protons: 81, electrons: 81, neutrons: 123 },
      generalProperties: {
        atomicNumber: 81,
        atomicWeight: 204.3833,
        massNumber: 204,
        radioActive: false,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_HEXAGONAL.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 18, 3],
        electronConfiguration: ["[Xe]", "4f-14", "5d-10", "6s-2", "6p-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 11.85,
        meltingPoint: 577.15,
        boilingPoint: 1746.15,
        heatOfFusion: 4.2,
        heatOfVaporization: 165,
        specificHeatCapacity: 0.129,
      },
      atomicProperties: {
        atomicRadius: 170,
        covalentRadius: 145,
        electronegativity: 1.62,
        ionizationPotential: 6.1082,
        atomicVolume: 17.2,
        thermalConductivity: 0.461,
        oxidationStates: [1, 3],
      },

      isotopes: {
        stable: [203, 205],
        unstable: [
          176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200,
          201, 202, 204, 206, 207, 208, 209, 210, 211, 212,
        ],
      },
    },
  },

  {
    symbol: "Pb",
    category: CATEGORIES.POST_TRANSITION_METALS.value,
    group: 14,
    period: 6,
    block: "p",

    static: {
      abundance: { earth: "0.00099", universe: "1×10_-6" },
      unGrouped: { casNumber: "7439-92-1", pubChem: 5352425, protons: 82, electrons: 82, neutrons: 125 },
      generalProperties: {
        atomicNumber: 82,
        atomicWeight: 207.2,
        massNumber: 207,
        radioActive: false,
        color: ELEMENT_COLORS.SLATE_GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 18, 4],
        electronConfiguration: ["[Xe]", "4f-14", "5d-10", "6s-2", "6p-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 11.342,
        meltingPoint: 600.61,
        boilingPoint: 2022.15,
        heatOfFusion: 4.77,
        heatOfVaporization: 178,
        specificHeatCapacity: 0.129,
      },
      atomicProperties: {
        atomicRadius: 175,
        covalentRadius: 146,
        electronegativity: 2.33,
        ionizationPotential: 7.4167,
        atomicVolume: 18.17,
        thermalConductivity: 0.353,
        oxidationStates: [-4, 2, 4],
      },

      isotopes: {
        stable: [204, 206, 207, 208],
        unstable: [
          178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202,
          203, 205, 209, 210, 211, 212, 213, 214, 215,
        ],
      },
    },
  },

  {
    symbol: "Bi",
    category: CATEGORIES.POST_TRANSITION_METALS.value,
    group: 15,
    period: 6,
    block: "p",

    static: {
      abundance: { earth: "2.5×10_-6", universe: "7×10_-8" },
      unGrouped: { casNumber: "7440-69-9", pubChem: 5359367, protons: 83, electrons: 83, neutrons: 126 },
      generalProperties: {
        atomicNumber: 83,
        atomicWeight: 208.9804,
        massNumber: 209,
        radioActive: false,
        color: ELEMENT_COLORS.GRAY,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BASE_CENTERED_MONOCLINIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 18, 5],
        electronConfiguration: ["[Xe]", "4f-14", "5d-10", "6s-2", "6p-3"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 9.78,
        meltingPoint: 544.65,
        boilingPoint: 1837.15,
        heatOfFusion: 10.9,
        heatOfVaporization: 160,
        specificHeatCapacity: 0.122,
      },
      atomicProperties: {
        atomicRadius: 156,
        covalentRadius: 148,
        electronegativity: 2.02,
        ionizationPotential: 7.2856,
        atomicVolume: 21.3,
        thermalConductivity: 0.0797,
        oxidationStates: [-3, 3, 5],
      },

      isotopes: {
        stable: [],
        unstable: [
          184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208,
          209, 210, 211, 212, 213, 214, 215, 216, 217, 218,
        ],
      },
    },
  },

  {
    symbol: "Po",
    category: CATEGORIES.POST_TRANSITION_METALS.value,
    group: 16,
    period: 6,
    block: "p",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "7440-08-6", pubChem: null, protons: 84, electrons: 84, neutrons: 126 },
      generalProperties: {
        atomicNumber: 84,
        atomicWeight: 210,
        massNumber: 210,
        radioActive: true,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.SIMPLE_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 18, 6],
        electronConfiguration: ["[Xe]", "4f-14", "5d-10", "6s-2", "6p-4"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 9.196,
        meltingPoint: 527.15,
        boilingPoint: 1235.15,
        heatOfFusion: 13,
        heatOfVaporization: 100,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: 168,
        covalentRadius: 140,
        electronegativity: 2.0,
        ionizationPotential: 8.417,
        atomicVolume: 22.23,
        thermalConductivity: 0.2,
        oxidationStates: [-2, 2, 4, 6],
      },

      isotopes: {
        stable: [],
        unstable: [
          188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212,
          213, 214, 215, 216, 217, 218, 219, 220,
        ],
      },
    },
  },

  {
    symbol: "At",
    category: CATEGORIES.POST_TRANSITION_METALS.value,
    group: 17,
    period: 6,
    block: "p",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "7440-68-8", pubChem: null, protons: 85, electrons: 85, neutrons: 125 },
      generalProperties: {
        atomicNumber: 85,
        atomicWeight: 210,
        massNumber: 210,
        radioActive: true,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 18, 7],
        electronConfiguration: ["[Xe]", "4f-14", "5d-10", "6s-2", "6p-5"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 7,
        meltingPoint: 575.15,
        boilingPoint: 610.15,
        heatOfFusion: 6,
        heatOfVaporization: 40,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: null,
        covalentRadius: 150,
        electronegativity: 2.2,
        ionizationPotential: 9.3,
        atomicVolume: 30,
        thermalConductivity: 0.017,
        oxidationStates: [-1, 1, 3, 5, 7],
      },

      isotopes: {
        stable: [],
        unstable: [
          193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217,
          218, 219, 220, 221, 222, 223,
        ],
      },
    },
  },

  {
    symbol: "Rn",
    category: CATEGORIES.NOBLE_GASSES.value,
    group: 18,
    period: 6,
    block: "p",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "10043-92-2", pubChem: 24857, protons: 86, electrons: 86, neutrons: 136 },
      generalProperties: {
        atomicNumber: 86,
        atomicWeight: 222,
        massNumber: 222,
        radioActive: true,
        color: ELEMENT_COLORS.COLORLESS,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 18, 8],
        electronConfiguration: ["[Xe]", "4f-14", "5d-10", "6s-2", "6p-6"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.GAS,
        density: 0.00973,
        meltingPoint: 202,
        boilingPoint: 211.3,
        heatOfFusion: 3,
        heatOfVaporization: 17,
        specificHeatCapacity: 0.094,
      },
      atomicProperties: {
        atomicRadius: 120,
        covalentRadius: 150,
        electronegativity: null,
        ionizationPotential: 10.7485,
        atomicVolume: 50.5,
        thermalConductivity: 0.0000364,
        oxidationStates: [2, 4, 6],
      },

      isotopes: {
        stable: [],
        unstable: [
          195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219,
          220, 221, 222, 223, 224, 225, 226, 227, 228,
        ],
      },
    },
  },

  {
    symbol: "Fr",
    category: CATEGORIES.ALKALI_METALS.value,
    group: 1,
    period: 7,
    block: "s",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "7440-73-5", pubChem: null, protons: 87, electrons: 87, neutrons: 136 },
      generalProperties: {
        atomicNumber: 87,
        atomicWeight: 223,
        massNumber: 223,
        radioActive: true,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 18, 8, 1],
        electronConfiguration: ["[Rn]", "7s-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 1.87,
        meltingPoint: 296.15,
        boilingPoint: 950.15,
        heatOfFusion: 2,
        heatOfVaporization: 65,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: 260,
        covalentRadius: 348,
        electronegativity: 0.7,
        ionizationPotential: 4.0727,
        atomicVolume: 71.07,
        thermalConductivity: 0.15,
        oxidationStates: [1],
      },

      isotopes: {
        stable: [],
        unstable: [
          199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223,
          224, 225, 226, 227, 228, 229, 230, 231, 232,
        ],
      },
    },
  },

  {
    symbol: "Ra",
    category: CATEGORIES.ALKALINE_EARTH_METALS.value,
    group: 2,
    period: 7,
    block: "s",

    static: {
      abundance: { earth: "9.9×10_-12", universe: null },
      unGrouped: { casNumber: "7440-14-4", pubChem: 6328144, protons: 88, electrons: 88, neutrons: 138 },
      generalProperties: {
        atomicNumber: 88,
        atomicWeight: 226,
        massNumber: 226,
        radioActive: true,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.BODY_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 18, 8, 2],
        electronConfiguration: ["[Rn]", "7s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 5.5,
        meltingPoint: 973.15,
        boilingPoint: 2010.15,
        heatOfFusion: 8,
        heatOfVaporization: 125,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: null,
        covalentRadius: 221,
        electronegativity: 0.9,
        ionizationPotential: 5.2784,
        atomicVolume: 45.2,
        thermalConductivity: 1.86,
        oxidationStates: [2],
      },

      isotopes: {
        stable: [],
        unstable: [
          202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226,
          227, 228, 229, 230, 231, 232, 233, 234,
        ],
      },
    },
  },

  {
    symbol: "Ac",
    category: CATEGORIES.ACTINIDES.value,
    group: 3,
    period: 7,
    block: "f",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "7440-34-8", pubChem: null, protons: 89, electrons: 89, neutrons: 138 },
      generalProperties: {
        atomicNumber: 89,
        atomicWeight: 227,
        massNumber: 227,
        radioActive: true,
        color: ELEMENT_COLORS.SILVER,
      },
      crystalStructure: CRYSTAL_STRUCTURES.FACE_CENTERED_CUBIC.value,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 18, 9, 2],
        electronConfiguration: ["[Rn]", "6d-1", "7s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 10.07,
        meltingPoint: 1323.15,
        boilingPoint: 3471.15,
        heatOfFusion: 14,
        heatOfVaporization: 400,
        specificHeatCapacity: 0.12,
      },
      atomicProperties: {
        atomicRadius: null,
        covalentRadius: 215,
        electronegativity: 1.1,
        ionizationPotential: 5.17,
        atomicVolume: 22.54,
        thermalConductivity: 0.12,
        oxidationStates: [3],
      },

      isotopes: {
        stable: [],
        unstable: [
          206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230,
          231, 232, 233, 234, 235, 236,
        ],
      },
    },
  },

  {
    symbol: "Rf",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 4,
    period: 7,
    block: "d",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "53850-36-5", pubChem: null, protons: 104, electrons: 104, neutrons: 157 },
      generalProperties: {
        atomicNumber: 104,
        atomicWeight: 267,
        massNumber: 261,
        radioActive: true,
        color: null,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 32, 10, 2],
        electronConfiguration: ["[Rn]", "5f-14", "6d-2", "7s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 23,
        meltingPoint: 2373.15,
        boilingPoint: 5773.15,
        heatOfFusion: null,
        heatOfVaporization: null,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: null,
        covalentRadius: 215,
        electronegativity: 1.1,
        ionizationPotential: 5.17,
        atomicVolume: 22.54,
        thermalConductivity: 0.12,
        oxidationStates: [3],
      },

      isotopes: {
        stable: [],
        unstable: [253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 265, 266, 267, 268],
      },
    },
  },

  {
    symbol: "Db",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 5,
    period: 7,
    block: "d",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "53850-35-4", pubChem: null, protons: 105, electrons: 105, neutrons: 157 },
      generalProperties: {
        atomicNumber: 105,
        atomicWeight: 268,
        massNumber: 262,
        radioActive: true,
        color: null,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 32, 11, 2],
        electronConfiguration: ["[Rn]", "5f-14", "6d-3", "7s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 39,
        meltingPoint: null,
        boilingPoint: null,
        heatOfFusion: null,
        heatOfVaporization: null,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: null,
        covalentRadius: 149,
        electronegativity: null,
        ionizationPotential: null,
        atomicVolume: null,
        thermalConductivity: 0.58,
        oxidationStates: [5],
      },

      isotopes: {
        stable: [],
        unstable: [255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 265, 266, 267, 268, 269, 270],
      },
    },
  },

  {
    symbol: "Sg",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 6,
    period: 7,
    block: "d",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "54038-81-2", pubChem: null, protons: 106, electrons: 106, neutrons: 156 },
      generalProperties: {
        atomicNumber: 106,
        atomicWeight: 269,
        massNumber: 262,
        radioActive: true,
        color: null,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 32, 12, 2],
        electronConfiguration: ["[Rn]", "5f-14", "6d-4", "7s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 35,
        meltingPoint: null,
        boilingPoint: null,
        heatOfFusion: null,
        heatOfVaporization: null,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: null,
        covalentRadius: 143,
        electronegativity: null,
        ionizationPotential: null,
        atomicVolume: null,
        thermalConductivity: null,
        oxidationStates: [6],
      },

      isotopes: {
        stable: [],
        unstable: [258, 259, 260, 261, 262, 263, 264, 265, 265, 266, 267, 268, 269, 270, 271, 272, 273],
      },
    },
  },

  {
    symbol: "Bh",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 7,
    period: 7,
    block: "d",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "54037-14-8", pubChem: null, protons: 107, electrons: 107, neutrons: 157 },
      generalProperties: {
        atomicNumber: 107,
        atomicWeight: 270,
        massNumber: 264,
        radioActive: true,
        color: null,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 32, 13, 2],
        electronConfiguration: ["[Rn]", "5f-14", "6d-5", "7s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 37,
        meltingPoint: null,
        boilingPoint: null,
        heatOfFusion: null,
        heatOfVaporization: null,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: null,
        covalentRadius: 141,
        electronegativity: null,
        ionizationPotential: null,
        atomicVolume: null,
        thermalConductivity: null,
        oxidationStates: [7],
      },

      isotopes: {
        stable: [],
        unstable: [260, 261, 262, 263, 264, 265, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275],
      },
    },
  },

  {
    symbol: "Hs",
    category: CATEGORIES.TRANSITION_METALS.value,
    group: 8,
    period: 7,
    block: "d",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "54037-14-8", pubChem: null, protons: 108, electrons: 108, neutrons: 161 },
      generalProperties: {
        atomicNumber: 108,
        atomicWeight: 269,
        massNumber: 269,
        radioActive: true,
        color: null,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 32, 14, 2],
        electronConfiguration: ["[Rn]", "5f-14", "6d-6", "7s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 41,
        meltingPoint: null,
        boilingPoint: null,
        heatOfFusion: null,
        heatOfVaporization: null,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: null,
        covalentRadius: 134,
        electronegativity: null,
        ionizationPotential: null,
        atomicVolume: null,
        thermalConductivity: null,
        oxidationStates: [8],
      },

      isotopes: {
        stable: [],
        unstable: [263, 264, 265, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277],
      },
    },
  },

  {
    symbol: "Mt",
    category: null,
    group: 9,
    period: 7,
    block: "d",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "54038-01-6", pubChem: null, protons: 109, electrons: 109, neutrons: 159 },
      generalProperties: {
        atomicNumber: 109,
        atomicWeight: 278,
        massNumber: 268,
        radioActive: true,
        color: null,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 32, 15, 2],
        electronConfiguration: ["[Rn]", "5f-14", "6d-7", "7s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 35,
        meltingPoint: null,
        boilingPoint: null,
        heatOfFusion: null,
        heatOfVaporization: null,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: null,
        covalentRadius: 129,
        electronegativity: null,
        ionizationPotential: null,
        atomicVolume: null,
        thermalConductivity: null,
        oxidationStates: [3, 4, 6],
      },

      isotopes: {
        stable: [],
        unstable: [265, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279],
      },
    },
  },

  {
    symbol: "Ds",
    category: null,
    group: 10,
    period: 7,
    block: "d",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "54083-77-1", pubChem: null, protons: 110, electrons: 110, neutrons: 171 },
      generalProperties: {
        atomicNumber: 110,
        atomicWeight: 281,
        massNumber: 281,
        radioActive: true,
        color: null,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 32, 16, 2],
        electronConfiguration: ["[Rn]", "5f-14", "6d-8", "7s-2"],
      },
      physhicalProperties: {
        phase: null,
        density: null,
        meltingPoint: null,
        boilingPoint: null,
        heatOfFusion: null,
        heatOfVaporization: null,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: null,
        covalentRadius: 128,
        electronegativity: null,
        ionizationPotential: null,
        atomicVolume: null,
        thermalConductivity: null,
        oxidationStates: [6],
      },

      isotopes: {
        stable: [],
        unstable: [267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281],
      },
    },
  },

  {
    symbol: "Rg",
    category: null,
    group: 11,
    period: 7,
    block: "d",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "54386-24-2", pubChem: null, protons: 111, electrons: 111, neutrons: 170 },
      generalProperties: {
        atomicNumber: 111,
        atomicWeight: 281,
        massNumber: 281,
        radioActive: true,
        color: null,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 32, 17, 2],
        electronConfiguration: ["[Rn]", "5f-14", "6d-9", "7s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: null,
        meltingPoint: null,
        boilingPoint: null,
        heatOfFusion: null,
        heatOfVaporization: null,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: null,
        covalentRadius: 121,
        electronegativity: null,
        ionizationPotential: null,
        atomicVolume: null,
        thermalConductivity: null,
        oxidationStates: [-1, 1, 3, 5],
      },

      isotopes: {
        stable: [],
        unstable: [272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283],
      },
    },
  },

  {
    symbol: "Cn",
    category: null,
    group: 12,
    period: 7,
    block: "d",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "54084-26-3", pubChem: null, protons: 112, electrons: 112, neutrons: 173 },
      generalProperties: {
        atomicNumber: 112,
        atomicWeight: 285,
        massNumber: 285,
        radioActive: true,
        color: null,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 32, 18, 2],
        electronConfiguration: ["[Rn]", "5f-14", "6d-10", "7s-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.LIQUID,
        density: null,
        meltingPoint: null,
        boilingPoint: null,
        heatOfFusion: null,
        heatOfVaporization: null,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: null,
        covalentRadius: 122,
        electronegativity: null,
        ionizationPotential: null,
        atomicVolume: null,
        thermalConductivity: null,
        oxidationStates: [2, 4],
      },

      isotopes: {
        stable: [],
        unstable: [277, 278, 279, 280, 281, 282, 283, 283, 284, 285],
      },
    },
  },

  {
    symbol: "Nh",
    category: null,
    group: 13,
    period: 7,
    block: "p",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "54084-70-7", pubChem: null, protons: 112, electrons: 112, neutrons: 173 },
      generalProperties: {
        atomicNumber: 113,
        atomicWeight: 286,
        massNumber: 286,
        radioActive: true,
        color: null,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 32, 18, 3],
        electronConfiguration: ["[Rn]", "5f-14", "6d-10", "7s-2", "7p-1"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 16,
        meltingPoint: 703.15,
        boilingPoint: 1373.15,
        heatOfFusion: null,
        heatOfVaporization: null,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: null,
        covalentRadius: 136,
        electronegativity: null,
        ionizationPotential: null,
        atomicVolume: null,
        thermalConductivity: null,
        oxidationStates: [1, 3, 5],
      },

      isotopes: {
        stable: [],
        unstable: [278, 279, 280, 281, 282, 283, 283, 284, 285, 286, 287],
      },
    },
  },

  {
    symbol: "Fl",
    category: null,
    group: 14,
    period: 7,
    block: "p",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "54084-70-7", pubChem: null, protons: 114, electrons: 114, neutrons: 173 },
      generalProperties: {
        atomicNumber: 114,
        atomicWeight: 289,
        massNumber: 297,
        radioActive: true,
        color: null,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 32, 18, 4],
        electronConfiguration: ["[Rn]", "5f-14", "6d-10", "7s-2", "7p-2"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 14,
        meltingPoint: 343.15,
        boilingPoint: 423.15,
        heatOfFusion: null,
        heatOfVaporization: null,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: null,
        covalentRadius: 143,
        electronegativity: null,
        ionizationPotential: null,
        atomicVolume: null,
        thermalConductivity: null,
        oxidationStates: [2, 4],
      },

      isotopes: {
        stable: [],
        unstable: [284, 285, 286, 287, 288, 289],
      },
    },
  },

  {
    symbol: "Mc",
    category: null,
    group: 15,
    period: 7,
    block: "p",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "54085-64-2", pubChem: null, protons: 115, electrons: 115, neutrons: 173 },
      generalProperties: {
        atomicNumber: 115,
        atomicWeight: 288,
        massNumber: 288,
        radioActive: true,
        color: null,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 32, 18, 5],
        electronConfiguration: ["[Rn]", "5f-14", "6d-10", "7s-2", "7p-3"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: null,
        meltingPoint: null,
        boilingPoint: null,
        heatOfFusion: null,
        heatOfVaporization: null,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: null,
        covalentRadius: 162,
        electronegativity: null,
        ionizationPotential: null,
        atomicVolume: null,
        thermalConductivity: null,
        oxidationStates: [1, 3],
      },

      isotopes: {
        stable: [],
        unstable: [287, 288, 289, 290, 291],
      },
    },
  },

  {
    symbol: "Lv",
    category: null,
    group: 16,
    period: 7,
    block: "p",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "54100-71-9", pubChem: null, protons: 116, electrons: 116, neutrons: 175 },
      generalProperties: {
        atomicNumber: 116,
        atomicWeight: 293,
        massNumber: 291,
        radioActive: true,
        color: null,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 32, 18, 6],
        electronConfiguration: ["[Rn]", "5f-14", "6d-10", "7s-2", "7p-4"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: null,
        meltingPoint: null,
        boilingPoint: null,
        heatOfFusion: null,
        heatOfVaporization: null,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: null,
        covalentRadius: 175,
        electronegativity: null,
        ionizationPotential: null,
        atomicVolume: null,
        thermalConductivity: null,
        oxidationStates: [2, 4],
      },

      isotopes: {
        stable: [],
        unstable: [289, 290, 291, 292, 293],
      },
    },
  },

  {
    symbol: "Ts",
    category: null,
    group: 17,
    period: 7,
    block: "p",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "54100-71-9", pubChem: null, protons: 117, electrons: 117, neutrons: 177 },
      generalProperties: {
        atomicNumber: 117,
        atomicWeight: 294,
        massNumber: 294,
        radioActive: true,
        color: null,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 32, 18, 7],
        electronConfiguration: ["[Rn]", "5f-14", "6d-10", "7s-2", "7p-5"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: null,
        meltingPoint: null,
        boilingPoint: null,
        heatOfFusion: null,
        heatOfVaporization: null,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: null,
        covalentRadius: 165,
        electronegativity: null,
        ionizationPotential: null,
        atomicVolume: null,
        thermalConductivity: null,
        oxidationStates: [-1, 1, 3, 5],
      },

      isotopes: {
        stable: [],
        unstable: [291, 292, 293, 294],
      },
    },
  },

  {
    symbol: "Og",
    category: null,
    group: 18,
    period: 7,
    block: "p",

    static: {
      abundance: { earth: null, universe: null },
      unGrouped: { casNumber: "54144-19-3", pubChem: null, protons: 118, electrons: 118, neutrons: 176 },
      generalProperties: {
        atomicNumber: 118,
        atomicWeight: 294,
        massNumber: 294,
        radioActive: true,
        color: null,
      },
      crystalStructure: null,
      electrons: {
        electronsPerShell: [2, 8, 18, 32, 32, 18, 8],
        electronConfiguration: ["[Rn]", "5f-14", "6d-10", "7s-2", "7p-6"],
      },
      physhicalProperties: {
        phase: ELEMENT_PHASE.SOLID,
        density: 13.65,
        meltingPoint: null,
        boilingPoint: null,
        heatOfFusion: null,
        heatOfVaporization: null,
        specificHeatCapacity: null,
      },
      atomicProperties: {
        atomicRadius: 152,
        covalentRadius: 157,
        electronegativity: null,
        ionizationPotential: null,
        atomicVolume: null,
        thermalConductivity: null,
        oxidationStates: [-1, 0, 2, 4, 6],
      },

      isotopes: {
        stable: [],
        unstable: [293, 294],
      },
    },
  },
] as const;

export const ELEMENT_DATA_COMPLETE = [...ELEMENT_DATA, ...ELEMENT_DATA2, ...ELEMENT_DATA3];
