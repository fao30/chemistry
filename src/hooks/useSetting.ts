import { defaultLang as lang } from "@/lib/constants";
import { getEnglishDictionary } from "@/lib/locales/en";
import { getRussianDictionary } from "@/lib/locales/ru";
import type { ColorSetting, Lang, TableWidth } from "@/types";
import { useLocalStorage } from "@uidotdev/usehooks";

type Setting = { lang: Lang; color: ColorSetting; tableWidth: TableWidth; withName: boolean; withAtomicWeight: boolean };

export default function useSetting() {
  const [setting, setSetting] = useLocalStorage<Setting>("setting", {
    lang,
    color: "RED",
    tableWidth: "100",
    withAtomicWeight: false,
    withName: true,
  });

  return { setting, setSetting, lang: setting.lang, t: setting.lang === "ru" ? getRussianDictionary() : getEnglishDictionary() };
}
