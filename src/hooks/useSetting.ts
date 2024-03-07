import { useLocalStorage } from "@uidotdev/usehooks";

export default function useSetting() {
  const [setting, setSetting] = useLocalStorage("setting", {});

  return { setting, setSetting };
}
