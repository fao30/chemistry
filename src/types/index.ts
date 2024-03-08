import type { ELEMENT_DATA } from "@/lib/constants";

export type Lang = "ru" | "en";
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

// key
export type ElementKey = (typeof ELEMENT_DATA)[number]["symbol"];
export type DictionaryKey = keyof Dictionary;

// main
export type Element = (typeof ELEMENT_DATA)[number];
export type Dictionary = {
  elements: Record<ElementKey, { name: string }>;
  elementCategories: Record<ElementCategory, string>;
  tableFounder: { name: string; birthDate: Date; deathDate: Date; history: { text1: string; text2: string; text3: string } };
};
