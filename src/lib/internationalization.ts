import type { Lang } from "@/types";

export const defaultLocale: Lang = "ru";
export const internationalization = { defaultLocale, locales: ["en", "ru"] } as const;
