import { CRYSTAL_STRUCTURES } from "@/components/CrystalStructures";
import type { Color, ElementCategory, Lang, Phase } from "@/types";

export const defaultLang: Lang = "ru";

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
};

export const ELEMENT_PHASE: Record<Phase, Phase> = {
  GAS: "GAS",
  SOLID: "SOLID",
};

export const ELEMENT_DATA = [
  {
    no: 1,
    symbol: "H",
    category: CATEGORIES.OTHER_NONMETALS.value,
    group: 1,
    period: 1,
    block: "s",
    static: {
      unGrouped: { casNumber: "1333-74-0", pubChem: 783, protons: 1, electrons: 1, neutrons: 0 },
      generalProperties: {
        atomicNumber: 12,
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
        electronegavity: 2.2,
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
    no: 2,
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
        electronegavity: null,
        ionizationPotential: 24.5874,
        atomicVolume: 27.2,
        thermalConductivity: 0.00152,
        oxidationStates: [0],
      },
      abundance: { earth: "5.5×10-7", universe: "23" },
      isotopes: {
        stable: [3, 4],
        unstable: [5, 6, 7, 8, 9, 10],
      },
    },
  },
  {
    no: 3,
    symbol: "Li",
    category: CATEGORIES.ALKALI_METALS.value,
    group: 1,
    period: 2,
    block: "s",
    static: {
      unGrouped: { casNumber: "7439-93-2", pubChem: 3028194, protons: 3, electrons: 3, neutrons: 4 },
      generalProperties: {
        atomicNumber: 2,
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
        electronegavity: 0.98,
        ionizationPotential: 5.3917,
        atomicVolume: 13.1,
        thermalConductivity: 0.847,
        oxidationStates: [1],
      },
      abundance: { earth: "0.0017", universe: "6×10-7" },
      isotopes: {
        stable: [6, 7],
        unstable: [4, 5, 8, 9, 10, 11, 12],
      },
    },
  },
  {
    no: 4,
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
        electronegavity: 1.57,
        ionizationPotential: 9.3227,
        atomicVolume: 4.9,
        thermalConductivity: 2.01,
        oxidationStates: [1, 2],
      },
      abundance: { earth: "0.00019", universe: "1×10-7" },
      isotopes: {
        stable: [9],
        unstable: [5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16],
      },
    },
  },
  {
    no: 5,
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
        electronegavity: 2.04,
        ionizationPotential: 8.298,
        atomicVolume: 4.6,
        thermalConductivity: 0.274,
        oxidationStates: [1, 2, 3],
      },
      abundance: { earth: "0.00086", universe: "1×10-7" },
      isotopes: {
        stable: [10, 11],
        unstable: [7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19],
      },
    },
  },

  {
    no: 6,
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
        electronegavity: 2.55,
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
    no: 6,
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
        electronegavity: 2.55,
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
] as const;
