import type { Lang } from "@/types";

const dictionaries = {
  en: () => import("@/lib/locales/en.json").then((module) => module.default),
  ru: () => import("@/lib/locales/ru.json").then((module) => module.default),
};

export const useDictionary = async (lang: Lang) => await dictionaries[lang]();
