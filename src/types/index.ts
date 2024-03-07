import type { useDictionary } from "@/lib/dictionary";

export type Lang = "ru" | "en";
export type Dictionary = Awaited<ReturnType<typeof useDictionary>>;
