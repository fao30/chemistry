import type { Dictionary } from "@/types";

export type ElementCategory =
  | "ALKALI_METALS"
  | "ALKALINE_EARTH_METALS"
  | "TRANSITION_METALS"
  | "POST_TRANSITION_METALS"
  | "OTHER_NONMETALS"
  | "METTALOIDS"
  | "NOBLE_GASSES"
  | "LANTHANIDES"
  | "ACTINIDES";

export type Element = {
  no: number;
  name: string;
  symbol: string;
  category: ElementCategory;
  group: number;
  period: number;
  // mass: number;
};

export const ELEMENT_CATEGORIES: { value: ElementCategory; label: string }[] = [
  { value: "OTHER_NONMETALS", label: "hello" },
  { value: "ALKALI_METALS", label: "" },
  { value: "ALKALINE_EARTH_METALS", label: "" },
  { value: "POST_TRANSITION_METALS", label: "" },
  { value: "METTALOIDS", label: "" },
  { value: "LANTHANIDES", label: "" },
  { value: "ACTINIDES", label: "" },
  { value: "NOBLE_GASSES", label: "" },
  { value: "TRANSITION_METALS", label: "" },
];

export const ELEMENT_COLORS: Record<ElementCategory, string> = {
  OTHER_NONMETALS: "#FFD100",
  NOBLE_GASSES: "#D61681",
  ALKALI_METALS: "#9DC538",
  ALKALINE_EARTH_METALS: "#EF7F30",
  POST_TRANSITION_METALS: "#2CB195",
  METTALOIDS: "#005D3C",
  ACTINIDES: "#009CD9",
  LANTHANIDES: "#264796",
  TRANSITION_METALS: "#E52D38",
};

export const ELEMENT_DATA: Element[] = [
  { no: 1, symbol: "H", name: "Hydrogen", category: "OTHER_NONMETALS", group: 1, period: 1 },
  { no: 2, symbol: "He", name: "Helium", category: "NOBLE_GASSES", group: 18, period: 1 },
  { no: 3, symbol: "Li", name: "Lithium", category: "ALKALI_METALS", group: 1, period: 2 },
  { no: 4, symbol: "Be", name: "Beryllium", category: "ALKALINE_EARTH_METALS", group: 2, period: 2 },
  { no: 11, symbol: "Na", name: "Natrium", category: "ALKALI_METALS", group: 1, period: 3 },
  { no: 19, symbol: "K", name: "Potassium", category: "ALKALI_METALS", group: 1, period: 4 },
];
