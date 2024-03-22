import useSetting from "@/hooks/useSetting";
import { COLOR_SETTING_OPTIONS, is2k } from "@/lib/constants";
import { cn } from "@/lib/functions";
import type { ColorSetting, Lang, TableWidth } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ConfigProvider, Drawer, Popover, Switch } from "antd";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { setting, t, setSetting, color } = useSetting();
  const navigate = useNavigate();
  const [openSetting, setOpenSetting] = useState(false);

  return (
    <Fragment>
      <nav
        className="animate sticky top-0 w-full py-2 4k:py-6 px-6 text-light flex justify-between z-50 backdrop-blur-2xl"
        style={{ backgroundColor: color }}
      >
        <button type="button" onClick={() => navigate("/")} className="flex items-center gap-2 bg-light px-2 rounded-md">
          <Icon width={is2k ? 60 : 35} icon="mdi:home" style={{ color }} />
          <img src="/logo.svg" alt="Logo" className="size-12" />
        </button>

        <section className="flex gap-4 2k:gap-8 4k:gap-10 items-center">
          <Popover
            style={{ backgroundColor: "#FEFEFE" }}
            content={
              <section className="flex flex-col">
                <a
                  type="button"
                  href="/solubility-chart"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1 hover:text-dark flex gap-2 items-center"
                >
                  <h6>{t.titles.solubilityChart}</h6>
                </a>

                <a
                  type="button"
                  href="/reactivity-series"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1 hover:text-dark flex gap-2 items-center"
                >
                  <h6>{t.titles.reactivitySeries}</h6>
                </a>
              </section>
            }
            placement="bottom"
          >
            <button type="button" className="flex gap-2 items-center">
              <Icon icon="tabler:table" width={is2k ? 45 : 27} />
              <h6 className="max-md:hidden">{t.titles.tables}</h6>
            </button>
          </Popover>
          <a type="button" href="/list" target="_blank" rel="noreferrer" className="flex gap-2 items-center">
            <Icon icon="material-symbols:list" width={is2k ? 60 : 40} />
            <h6 className="max-md:hidden">{t.navbar.list}</h6>
          </a>
          <a type="button" href="/compare" target="_blank" rel="noreferrer" className="flex gap-2 items-center">
            <Icon icon="teenyicons:git-compare-solid" width={is2k ? 45 : 27} rotate={3} />
            <h6 className="max-md:hidden">{t.navbar.compare}</h6>
          </a>
          <button onClick={() => setOpenSetting(true)} type="button">
            <Icon icon="uil:setting" width={is2k ? 45 : 27} />
          </button>
        </section>
      </nav>
      <Drawer
        width={is2k ? 1000 : 400}
        open={openSetting}
        onClose={() => setOpenSetting(false)}
        title={<h6>{t.titles.setting}</h6>}
        style={{ backgroundColor: "#FEFEFE" }}
      >
        <section className="flex flex-col gap-4 2k:gap-6">
          <section className="grid grid-cols-2 gap-4 text-dark items-center">
            <h6 className="title">{t.titles.language}</h6>
            <select
              className="px-2 bg-gray-400/40 h-8 outline-none h6 2k:h-auto"
              value={setting.lang}
              onChange={(e) => setSetting({ ...setting, lang: e.target.value as Lang })}
            >
              <option value="en">{t.titles.english}</option>
              <option value="ru">{t.titles.russian}</option>
            </select>
          </section>
          <section className="grid grid-cols-2 gap-4">
            <h6 className="title">{t.titles.color}</h6>
            <section className="grid grid-cols-5 gap-1">
              {COLOR_SETTING_OPTIONS.map((e) => (
                <button
                  onClick={() => setSetting({ ...setting, color: e.value as ColorSetting })}
                  key={e.value}
                  className={cn("aspect-square rounded-md border-4", {
                    "border-black": e.value === setting.color,
                  })}
                  type="button"
                  style={{ backgroundColor: e.color }}
                />
              ))}
            </section>
          </section>

          <section className="grid grid-cols-2 gap-4 text-dark items-center">
            <h6 className="title">{t.titles.tableWidth}</h6>
            <select
              className="px-2 bg-gray-400/40 h-8 outline-none h6 2k:h-auto"
              value={setting.tableWidth}
              onChange={(e) => setSetting({ ...setting, tableWidth: e.target.value as TableWidth })}
            >
              <option value="100">100%</option>
              <option value="95">95%</option>
              <option value="90">90%</option>
              <option value="85">85%</option>
              <option value="80">80%</option>
            </select>
          </section>

          <ConfigProvider
            theme={{
              components: {
                Switch: {
                  colorPrimary: color,
                  colorPrimaryHover: color,
                },
              },
            }}
          >
            <Fragment>
              <section className="grid grid-cols-2 gap-4 text-dark items-center">
                <h6 className="title">{t.titles.title}</h6>
                <Switch
                  className="bg-gray-400/40"
                  style={{ width: 50 }}
                  defaultChecked={setting.withName}
                  onChange={(e) => setSetting({ ...setting, withName: e })}
                />
              </section>
              <section className="grid grid-cols-2 gap-4 text-dark items-center">
                <h6 className="title">{t.titles.atomicWeight}</h6>
                <Switch
                  className="bg-gray-400/40"
                  style={{ width: 50 }}
                  defaultChecked={setting.withAtomicWeight}
                  onChange={(e) => setSetting({ ...setting, withAtomicWeight: e })}
                />
              </section>
              <section className="grid grid-cols-2 gap-4 text-dark items-center">
                <h6 className="title">{t.titles.audio}</h6>
                <Switch
                  className="bg-gray-400/40"
                  style={{ width: 50 }}
                  defaultChecked={setting.withAudio}
                  onChange={(e) => setSetting({ ...setting, withAudio: e })}
                />
              </section>
            </Fragment>
          </ConfigProvider>
        </section>
      </Drawer>
    </Fragment>
  );
}
