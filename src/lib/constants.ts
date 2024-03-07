import type { ElementCategory, Lang } from "@/types";

export const defaultLang: Lang = "ru";

export const ELEMENT_CATEGORIES: Record<ElementCategory, { color: string; value: ElementCategory }> = {
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

export const ELEMENT_CATEGORIES_OPTIONS = Object.entries(ELEMENT_CATEGORIES).map(([_, e]) => ({ ...e }));

export const ELEMENT_DATA = [
  { no: 1, symbol: "H", category: ELEMENT_CATEGORIES.OTHER_NONMETALS.value, group: 1, period: 1 },
  { no: 2, symbol: "He", category: ELEMENT_CATEGORIES.NOBLE_GASSES.value, group: 18, period: 1 },
  { no: 3, symbol: "Li", category: ELEMENT_CATEGORIES.ALKALI_METALS.value, group: 1, period: 2 },
  { no: 4, symbol: "Be", category: ELEMENT_CATEGORIES.ALKALINE_EARTH_METALS.value, group: 2, period: 2 },
  { no: 11, symbol: "Na", category: ELEMENT_CATEGORIES.ALKALI_METALS.value, group: 1, period: 3 },
  { no: 19, symbol: "K", category: ELEMENT_CATEGORIES.ALKALI_METALS.value, group: 1, period: 4 },
] as const;
