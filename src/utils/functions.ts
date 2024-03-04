import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ELEMENT_DATA } from "./constants";

type Lang = "en" | "ru";

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
export const getLang = (): Lang | null => (localStorage.getItem("lang") as Lang) ?? null;
export const setLang = (lang: Lang) => localStorage.setItem("lang", lang);
export const getElement = () => {
  const sortedElements = ELEMENT_DATA.sort((a, b) => {
    if (a.period === b.period) return a.group - b.group;
    return a.period - b.period;
  });

  const numRows = Math.max(...sortedElements.map((e) => e.period));
  const numCols = Math.max(...sortedElements.map((e) => e.group));

  const tableRows = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      const element = sortedElements.find((e) => e.period === i + 1 && e.group === j + 1);
      row.push(element ?? null);
    }
    tableRows.push(row);
  }

  return tableRows;
};
