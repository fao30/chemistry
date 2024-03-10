import type { Lang } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ELEMENT_DATA } from "./constants";

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export const getElement = () => {
  const sortedElements = ELEMENT_DATA.toSorted((a, b) => {
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

export const formatDate = ({
  date,
  lang,
  style,
}: {
  date: Date;
  lang: Lang;
  style: "short" | "long";
}): string =>
  date.toLocaleDateString(lang, {
    year: "numeric",
    month: style === "long" ? "long" : "numeric",
    day: "numeric",
  });

export function kelvinToCelsius(K: number) {
  return (K - 273.15).toFixed(2);
}

export function kelvinToFahrenheit(K: number) {
  return (((K - 273.15) * 9) / 5 + 32).toFixed(2);
}
