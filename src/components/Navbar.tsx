import useSetting from "@/hooks/useSetting";
import { COLOR_SETTING, COLOR_SETTING_OPTIONS } from "@/lib/constants";
import { cn } from "@/lib/functions";
import type { ColorSetting, Lang, TableWidth } from "@/types";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ConfigProvider, Drawer, Switch } from "antd";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { setting, t, setSetting } = useSetting();
  const navigate = useNavigate();
  const [openSetting, setOpenSetting] = useState(false);

  return (
    <Fragment>
      <nav
        className="animate sticky top-0 w-full py-2 px-6 text-light flex justify-between z-50 backdrop-blur-2xl"
        style={{ backgroundColor: COLOR_SETTING[setting.color].color }}
      >
        <button type="button" onClick={() => navigate("/")}>
          <Icon width={35} icon="mdi:home" />
        </button>

        <section className="flex gap-4 items-center">
          <a type="button" href="/list" target="_blank" rel="noreferrer" className="flex gap-2 items-center">
            <Icon icon="material-symbols:list" width={40} />
            <h6 className="max-md:hidden">{t.navbar.list}</h6>
          </a>
          <a type="button" href="/compare" target="_blank" rel="noreferrer" className="flex gap-2 items-center">
            <Icon icon="teenyicons:git-compare-solid" width={27} rotate={3} />
            <h6 className="max-md:hidden">{t.navbar.compare}</h6>
          </a>
          <button onClick={() => setOpenSetting(true)} type="button">
            <Icon icon="uil:setting" width={27} />
          </button>
        </section>
      </nav>
      <Drawer
        width={400}
        open={openSetting}
        onClose={() => setOpenSetting(false)}
        title={<h6>{t.titles.setting}</h6>}
        style={{ backgroundColor: "#FEFEFE" }}
      >
        <section className="flex flex-col gap-4">
          <section className="grid grid-cols-2 text-dark items-center">
            <h6 className="title">{t.titles.language}</h6>
            <select
              className="px-2 bg-gray-400/40 h-8 text-lg outline-none"
              value={setting.lang}
              onChange={(e) => setSetting({ ...setting, lang: e.target.value as Lang })}
            >
              <option value="en">{t.titles.english}</option>
              <option value="ru">{t.titles.russian}</option>
            </select>
          </section>
          <section className="grid grid-cols-2">
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

          <section className="grid grid-cols-2 text-dark items-center">
            <h6 className="title">{t.titles.tableWidth}</h6>
            <select
              className="px-2 bg-gray-400/40 h-8 text-lg outline-none"
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
                  colorPrimary: COLOR_SETTING[setting.color].color,
                  colorPrimaryHover: COLOR_SETTING[setting.color].color,
                },
              },
            }}
          >
            <Fragment>
              <section className="grid grid-cols-2 text-dark items-center">
                <h6 className="title">{t.titles.title}</h6>
                <Switch
                  className="bg-gray-400/40"
                  style={{ width: 50 }}
                  defaultChecked={setting.withName}
                  onChange={(e) => setSetting({ ...setting, withName: e })}
                />
              </section>
              <section className="grid grid-cols-2 text-dark items-center">
                <h6 className="title">{t.titles.atomicWeight}</h6>
                <Switch
                  className="bg-gray-400/40"
                  style={{ width: 50 }}
                  defaultChecked={setting.withAtomicWeight}
                  onChange={(e) => setSetting({ ...setting, withAtomicWeight: e })}
                />
              </section>
            </Fragment>
          </ConfigProvider>
        </section>
      </Drawer>
    </Fragment>
  );
}
