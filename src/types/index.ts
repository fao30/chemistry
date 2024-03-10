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

export type Color = "COLORLESS" | "SILVER" | "SLATE_GRAY" | "BLACK";

export type Phase = "GAS" | "SOLID";

export type CrystalStructure = "SIMPLE_HEXAGONAL" | "FACE_CENTERED_CUBIC" | "BODY_CENTERED_CUBIC" | "SIMPLE_TRIGONAL";

// key
export type ElementKey = (typeof ELEMENT_DATA)[number]["symbol"];
export type DictionaryKey = keyof Dictionary;

// main
export type Element = (typeof ELEMENT_DATA)[number];
export type Dictionary = {
  crystalStructures: Record<CrystalStructure, string>;
  phase: Record<Phase, string>;
  colors: Record<Color, string>;
  elements: Record<
    ElementKey,
    {
      name: string;
      nameOrigin: string;
      description: string;
      history: string;
      applications: string;
      toxicity: string;
    }
  >;
  elementCategories: Record<ElementCategory, string>;
  tableFounder: { name: string; birthDate: Date; deathDate: Date; history: { text1: string; text2: string; text3: string } };
};
