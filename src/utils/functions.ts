import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type Lang = "en" | "ru";

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
export const getLang = (): Lang | null => (localStorage.getItem("lang") as Lang) ?? null;
export const setLang = (lang: Lang) => localStorage.setItem("lang", lang);
