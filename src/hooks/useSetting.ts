import { defaultLang as lang } from "@/lib/constants";
import { getEnglishDictionary } from "@/lib/locales/en";
// import { getRussianDictionary } from "@/lib/locales/ru";
import type { Lang } from "@/types";
import { useLocalStorage } from "@uidotdev/usehooks";

type Setting = { lang: Lang };

export default function useSetting() {
  const [setting, setSetting] = useLocalStorage<Setting>("setting", { lang });

  // return { setting, setSetting, t: setting.lang === "ru" ? getRussianDictionary() : getEnglishDictionary() };
  return { setting, lang: setting.lang, setSetting, t: getEnglishDictionary() };
}
