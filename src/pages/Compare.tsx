import useSetting from "@/hooks/useSetting";
import { COLOR_SETTING, ELEMENT_DATA_COMPLETE } from "@/lib/constants";
import { kelvinToCelsius, kelvinToFahrenheit } from "@/lib/functions";
import type { ElementKey } from "@/types";
import { Navigate, useSearchParams } from "react-router-dom";

const renderUnit = (unit: string) => {
  let renderedStructure = "";
  if (unit.includes("-")) {
    const [base, exponent] = unit.split("-");
    const [aExponent, bExponent] = exponent.split("_");
    renderedStructure += `${base}<sup>${aExponent}</sup>${bExponent ?? ""}`;
  } else {
    renderedStructure += unit;
  }
  return <span dangerouslySetInnerHTML={{ __html: renderedStructure }} />;
};

export default function Compare() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, lang, setting } = useSetting();

  const a: ElementKey = (searchParams.get("a") as ElementKey) ?? "Au";
  const b: ElementKey = (searchParams.get("b") as ElementKey) ?? "Au";

  const dataA = ELEMENT_DATA_COMPLETE.find((e) => e.symbol === a);
  const tDataA = t.elements[a];
  const dataB = ELEMENT_DATA_COMPLETE.find((e) => e.symbol === b);
  const tDataB = t.elements[b];

  if (!dataA || !dataB) return <Navigate to="/" />;

  const sorteredData = ELEMENT_DATA_COMPLETE.map((e) => ({ ...e, name: t.elements[e.symbol].name }));

  const Title = ({ title }: { title: string }) => (
    <h6
      className="uppercase text-light w-fit pl-4 pr-8 py-1 rounded-r-md"
      style={{ backgroundColor: COLOR_SETTING[setting.color].color }}
    >
      {title}
    </h6>
  );

  const renderAbudance = (abundance: typeof dataA.static.abundance.earth | typeof dataB.static.abundance.universe) => {
    let renderedStructure = "";
    if (abundance?.includes("_") && abundance?.includes("×")) {
      const [base, exponent] = abundance.split("_");
      renderedStructure += `${base.replace(".", lang === "ru" ? "," : ".")}<sup>${exponent}</sup>%`;
    } else {
      renderedStructure += abundance?.replace(".", lang === "ru" ? "," : ".");
    }
    return <span dangerouslySetInnerHTML={{ __html: renderedStructure }} />;
  };

  const renderElectronConfiguration = (
    arr: typeof dataA.static.electrons.electronConfiguration | typeof dataB.static.electrons.electronConfiguration,
  ) => {
    let renderedStructure = "";
    arr.forEach((item, index) => {
      if (item.includes("-")) {
        const [base, exponent] = item.split("-");
        renderedStructure += `${index > 0 ? " " : ""}${base}<sup>${exponent}</sup>`;
      } else {
        renderedStructure += item;
      }
    });
    return <span dangerouslySetInnerHTML={{ __html: renderedStructure }} />;
  };

  return (
    <article className="p-6 flex flex-col gap-6">
      <section className="grid grid-cols-3 gap-6">
        <div />
        <select
          className="outline-none h-10 bg-gray-600 text-light px-4"
          value={a}
          onChange={(e) => {
            searchParams.set("a", e.target.value);
            setSearchParams(searchParams);
          }}
        >
          {sorteredData
            .sort((a, b) => {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            })
            .map((e) => (
              <option value={e.symbol} key={e.symbol}>
                {t.elements[e.symbol].name}
              </option>
            ))}
        </select>
        <select
          className="outline-none h-10 bg-gray-600 text-light px-4"
          value={b}
          onChange={(e) => {
            searchParams.set("b", e.target.value);
            setSearchParams(searchParams);
          }}
        >
          {sorteredData
            .sort((a, b) => {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            })
            .map((e) => (
              <option value={e.symbol} key={e.symbol}>
                {t.elements[e.symbol].name}
              </option>
            ))}
        </select>
      </section>
      {/* FIRST COLUMN */}
      <section className="flex flex-col gap-4">
        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.title}</h6>
          <h6>{tDataA.name}</h6>
          <h6>{tDataB.name}</h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.symbol}</h6>
          <h6>{dataA.symbol ?? "-"}</h6>
          <h6>{dataB.symbol ?? "-"}</h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.atomicNumber}</h6>
          <h6>{dataA.static.generalProperties.atomicNumber ?? "-"}</h6>
          <h6>{dataB.static.generalProperties.atomicNumber ?? "-"}</h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.group}</h6>
          <h6>{dataA.group ?? "-"}</h6>
          <h6>{dataB.group ?? "-"}</h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.period}</h6>
          <h6>{dataA.period ?? "-"}</h6>
          <h6>{dataB.period ?? "-"}</h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.block}</h6>
          <h6>{dataA.block ?? "-"}</h6>
          <h6>{dataB.block ?? "-"}</h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.abudanceInEarthCrust}</h6>
          <h6>{dataA.static.abundance.earth ? renderAbudance(dataA.static.abundance.earth) : "-"}</h6>
          <h6>{dataB.static.abundance.earth ? renderAbudance(dataB.static.abundance.earth) : "-"}</h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.abudanceInUniverse}</h6>
          <h6>{dataA.static.abundance.universe ? renderAbudance(dataA.static.abundance.universe) : "-"}</h6>
          <h6>{dataB.static.abundance.universe ? renderAbudance(dataB.static.abundance.universe) : "-"}</h6>
        </section>
      </section>
      {/* SECOND COLUMN */}
      <section className="flex flex-col gap-4">
        <Title title={t.titles.generalProperties} />

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.atomicWeight}</h6>
          <h6>
            {dataA.static.generalProperties.atomicWeight ? dataA.static.generalProperties.atomicWeight.toLocaleString(lang) : "-"}
          </h6>
          <h6>
            {dataB.static.generalProperties.atomicWeight ? dataB.static.generalProperties.atomicWeight.toLocaleString(lang) : "-"}
          </h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.category}</h6>
          <h6>{dataA.category ? t.elementCategories[dataA.category] : "-"}</h6>
          <h6>{dataB.category ? t.elementCategories[dataB.category] : "-"}</h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.category}</h6>
          <h6>{dataA.static.generalProperties.color ? t.colors[dataA.static.generalProperties.color] : "-"}</h6>
          <h6>{dataB.static.generalProperties.color ? t.colors[dataB.static.generalProperties.color] : "-"}</h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.radioactive}</h6>
          <h6>{dataA.static.generalProperties.radioActive ? t.titles.yes : t.titles.no}</h6>
          <h6>{dataB.static.generalProperties.radioActive ? t.titles.yes : t.titles.no}</h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.radioactive}</h6>
          <h6>{dataA.static.crystalStructure ? t.crystalStructures[dataA.static.crystalStructure] : "-"}</h6>
          <h6>{dataB.static.crystalStructure ? t.crystalStructures[dataB.static.crystalStructure] : "-"}</h6>
        </section>
      </section>

      {/* THIRD COLUMN */}
      <section className="flex flex-col gap-4">
        <Title title={t.titles.atomicProperties} />
        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">
            {t.titles.density} ({renderUnit(t.unit.density)})
          </h6>
          <h6>{dataA.static.physhicalProperties.density ? dataA.static.physhicalProperties.density.toLocaleString(lang) : "-"}</h6>
          <h6>{dataB.static.physhicalProperties.density ? dataB.static.physhicalProperties.density.toLocaleString(lang) : "-"}</h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.phase}</h6>
          <h6>{dataA.static.physhicalProperties.phase ? t.phase[dataA.static.physhicalProperties.phase] : "-"}</h6>
          <h6>{dataB.static.physhicalProperties.phase ? t.phase[dataB.static.physhicalProperties.phase] : "-"}</h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.meltingPoint}</h6>
          <h6>
            {dataA.static.physhicalProperties.meltingPoint
              ? `${dataA.static.physhicalProperties.meltingPoint.toLocaleString(lang)} K | ${parseInt(
                  kelvinToCelsius(dataA.static.physhicalProperties.meltingPoint),
                ).toLocaleString(lang)}°C | ${parseInt(
                  kelvinToFahrenheit(dataA.static.physhicalProperties.meltingPoint),
                ).toLocaleString(lang)}°F`
              : "-"}
          </h6>
          <h6>
            {dataB.static.physhicalProperties.meltingPoint
              ? `${dataB.static.physhicalProperties.meltingPoint.toLocaleString(lang)} K | ${parseInt(
                  kelvinToCelsius(dataB.static.physhicalProperties.meltingPoint),
                ).toLocaleString(lang)}°C | ${parseInt(
                  kelvinToFahrenheit(dataB.static.physhicalProperties.meltingPoint),
                ).toLocaleString(lang)}°F`
              : "-"}
          </h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.boilingPoint}</h6>
          <h6>
            {dataA.static.physhicalProperties.boilingPoint
              ? `${dataA.static.physhicalProperties.boilingPoint.toLocaleString(lang)} K | ${parseInt(
                  kelvinToCelsius(dataA.static.physhicalProperties.boilingPoint),
                ).toLocaleString(lang)}°C | ${parseInt(
                  kelvinToFahrenheit(dataA.static.physhicalProperties.boilingPoint),
                ).toLocaleString(lang)}°F`
              : "-"}
          </h6>
          <h6>
            {dataB.static.physhicalProperties.boilingPoint
              ? `${dataB.static.physhicalProperties.boilingPoint.toLocaleString(lang)} K | ${parseInt(
                  kelvinToCelsius(dataB.static.physhicalProperties.boilingPoint),
                ).toLocaleString(lang)}°C | ${parseInt(
                  kelvinToFahrenheit(dataB.static.physhicalProperties.boilingPoint),
                ).toLocaleString(lang)}°F`
              : "-"}
          </h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">
            {t.titles.heatOfFusion} ({renderUnit(t.unit.heatOfFusion)})
          </h6>
          <h6>
            {dataA.static.physhicalProperties.heatOfFusion ? dataA.static.physhicalProperties.heatOfFusion.toLocaleString(lang) : "-"}
          </h6>
          <h6>
            {dataB.static.physhicalProperties.heatOfFusion ? dataB.static.physhicalProperties.heatOfFusion.toLocaleString(lang) : "-"}
          </h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">
            {t.titles.heatOfVaporization} ({renderUnit(t.unit.heatOfVaporization)})
          </h6>
          <h6>
            {dataA.static.physhicalProperties.heatOfVaporization
              ? dataA.static.physhicalProperties.heatOfVaporization.toLocaleString(lang)
              : "-"}
          </h6>
          <h6>
            {dataB.static.physhicalProperties.heatOfVaporization
              ? dataB.static.physhicalProperties.heatOfVaporization.toLocaleString(lang)
              : "-"}
          </h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">
            {t.titles.specificHeatCapacity} ({renderUnit(t.unit.specificHeatCapacity)})
          </h6>
          <h6>
            {dataA.static.physhicalProperties.specificHeatCapacity
              ? dataA.static.physhicalProperties.specificHeatCapacity.toLocaleString(lang)
              : "-"}
          </h6>
          <h6>
            {dataB.static.physhicalProperties.specificHeatCapacity
              ? dataB.static.physhicalProperties.specificHeatCapacity.toLocaleString(lang)
              : "-"}
          </h6>
        </section>
      </section>

      {/* FOURTH COLUMN */}
      <section className="flex flex-col gap-4">
        <Title title={t.titles.atomicProperties} />
        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">
            {t.titles.atomicRadius} ({renderUnit(t.unit.atomicRadius)})
          </h6>
          <h6>{dataA.static.atomicProperties.atomicRadius ? dataA.static.atomicProperties.atomicRadius.toLocaleString(lang) : "-"}</h6>
          <h6>{dataB.static.atomicProperties.atomicRadius ? dataB.static.atomicProperties.atomicRadius.toLocaleString(lang) : "-"}</h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.covalentRadius}</h6>
          <h6>
            {dataA.static.atomicProperties.covalentRadius ? dataA.static.atomicProperties.covalentRadius.toLocaleString(lang) : "-"}
          </h6>
          <h6>
            {dataB.static.atomicProperties.covalentRadius ? dataB.static.atomicProperties.covalentRadius.toLocaleString(lang) : "-"}
          </h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.electronegativity}</h6>
          <h6>
            {dataA.static.atomicProperties.electronegativity
              ? dataA.static.atomicProperties.electronegativity.toLocaleString(lang)
              : "-"}
          </h6>
          <h6>
            {dataB.static.atomicProperties.electronegativity
              ? dataB.static.atomicProperties.electronegativity.toLocaleString(lang)
              : "-"}
          </h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">
            {t.titles.atomicVolume} {renderUnit(t.unit.atomicVolume)}
          </h6>
          <h6>{dataA.static.atomicProperties.atomicVolume ? dataA.static.atomicProperties.atomicVolume.toLocaleString(lang) : "-"}</h6>
          <h6>{dataB.static.atomicProperties.atomicVolume ? dataB.static.atomicProperties.atomicVolume.toLocaleString(lang) : "-"}</h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.oxidationStates}</h6>
          <h6>
            {dataA.static.atomicProperties.oxidationStates.length ? dataA.static.atomicProperties.oxidationStates.join(", ") : "-"}
          </h6>
          <h6>
            {dataB.static.atomicProperties.oxidationStates.length ? dataB.static.atomicProperties.oxidationStates.join(", ") : "-"}
          </h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.electronConfiguration}</h6>
          <h6>
            {dataA.static.electrons.electronConfiguration.length
              ? renderElectronConfiguration(dataA.static.electrons.electronConfiguration)
              : "-"}
          </h6>
          <h6>
            {dataB.static.electrons.electronConfiguration.length
              ? renderElectronConfiguration(dataB.static.electrons.electronConfiguration)
              : "-"}
          </h6>
        </section>

        <section className="grid grid-cols-3 gap-6">
          <h6 className="title">{t.titles.electronsPerShell}</h6>
          <h6>{dataA.static.electrons.electronsPerShell.length ? dataA.static.electrons.electronsPerShell.join(", ") : "-"}</h6>
          <h6>{dataB.static.electrons.electronsPerShell.length ? dataB.static.electrons.electronsPerShell.join(", ") : "-"}</h6>
        </section>
      </section>
    </article>
  );
}
