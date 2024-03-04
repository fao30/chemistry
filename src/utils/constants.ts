export type ElementCategory =
  | "ALKALI_METALS"
  | "ALKALINE_EARTH_METALS"
  | "TRANSITION_METALS"
  | "POST_TRANSITION_METALS"
  | "OTHER_NONMETALS"
  | "METTALOIDS"
  | "HALOGENS"
  | "NOBLE_GASSES"
  | "LANTHANIDES"
  | "ACTINIDES";

export type Element = {
  atomicNumber: number;
  name: string;
  symbol: string;
  category: ElementCategory;
  group: number;
  period: number;
};

export const ELEMENT_COLORS: Record<ElementCategory, string> = {
  OTHER_NONMETALS: "#19583c",
  NOBLE_GASSES: "#396113",
  ALKALI_METALS: "#7e1957",
  ALKALINE_EARTH_METALS: "#0c487b",
  POST_TRANSITION_METALS: "#523f75",
  METTALOIDS: "#874c21",
  HALOGENS: "#29607e",
  ACTINIDES: "#494437",
  LANTHANIDES: "#8c600f",
  TRANSITION_METALS: "#8b2934",
};

export const ELEMENT_DATA: Element[] = [
  { atomicNumber: 1, symbol: "H", name: "Hydrogen", category: "OTHER_NONMETALS", group: 1, period: 1 },
  { atomicNumber: 2, symbol: "He", name: "Helium", category: "NOBLE_GASSES", group: 18, period: 1 },
  { atomicNumber: 3, symbol: "Li", name: "Lithium", category: "ALKALI_METALS", group: 1, period: 2 },
  { atomicNumber: 4, symbol: "Be", name: "Beryllium", category: "ALKALINE_EARTH_METALS", group: 2, period: 2 },
  { atomicNumber: 11, symbol: "Na", name: "Natrium", category: "ALKALI_METALS", group: 1, period: 3 },
  { atomicNumber: 19, symbol: "K", name: "Potassium", category: "ALKALI_METALS", group: 1, period: 4 },
];
