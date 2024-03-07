import { defaultLocale } from "@/lib/internationalization";
import en from "@/lib/locales/en.json";
import ru from "@/lib/locales/ru.json";
import type { Lang } from "@/types";
import { useLocalStorage } from "@uidotdev/usehooks";

type Setting = { lang: Lang };

export default function useSetting() {
  const [setting, setSetting] = useLocalStorage<Setting>("setting", { lang: defaultLocale });

  return { setting, setSetting, t: setting.lang === "ru" ? ru : en };
}
