import Box from "@/components/Box";
import { CRYSTAL_STRUCTURES } from "@/components/CrystalStructures";
import useSetting from "@/hooks/useSetting";
import { ELEMENT_DATA_COMPLETE, is2k } from "@/lib/constants";
import { kelvinToCelsius, kelvinToFahrenheit } from "@/lib/functions";
import { useRef } from "react";
import { Navigate, useParams } from "react-router-dom";

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

export default function ElementBySymbol() {
  const { symbol } = useParams();
  const data = ELEMENT_DATA_COMPLETE.find((e) => e.symbol === symbol);
  if (!data) return <Navigate to="/" />;
  const { t, lang, setting } = useSetting();
  const tData = t.elements[data.symbol];

  const audioRef = useRef<HTMLAudioElement>(null);

  const renderElectronConfiguration = (arr: typeof data.static.electrons.electronConfiguration) => {
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

  const renderIsotopes = (arr: typeof data.static.isotopes.stable | typeof data.static.isotopes.unstable) => {
    let renderedStructure = "";
    arr.forEach((e, index) => {
      renderedStructure += `${index > 0 ? " " : ""}<sup>${e}</sup>${data.symbol}${index !== arr.length - 1 ? ", " : ""}`;
    });
    return <span dangerouslySetInnerHTML={{ __html: renderedStructure }} />;
  };

  const renderAbudance = (abundance: typeof data.static.abundance.earth | typeof data.static.abundance.universe) => {
    let renderedStructure = "";
    if (abundance?.includes("_") && abundance?.includes("×")) {
      const [base, exponent] = abundance.split("_");
      renderedStructure += `${base.replace(".", lang === "ru" ? "," : ".")}<sup>${exponent}</sup>%`;
    } else {
      renderedStructure += `${abundance?.replace(".", lang === "ru" ? "," : ".")}%`;
    }
    return <span dangerouslySetInnerHTML={{ __html: renderedStructure }} />;
  };

  const ELEMENTS_WITHOUT_GROUP = [57, 89];

  return (
    <article className="p-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6 text-dark">
      {/* FIRST COLUMN */}
      <section className="flex flex-col gap-6">
        <div onClick={() => audioRef.current?.load()} className="cursor-pointer">
          <Box classNameDiv="p-6 flex-col gap-2 flex items-center justify-center">
            <h5>{tData.name.toUpperCase()}</h5>
            {setting.withAudio ? (
              <audio ref={audioRef} controls className="invisible size-0" autoPlay>
                <source src={`/sound/${data.static.generalProperties.atomicNumber}.mp3`} type="audio/mp3" />
                <track kind="captions" srcLang="ru" label={tData.name} default />
              </audio>
            ) : null}
          </Box>
        </div>
        <section className="grid grid-cols-2 gap-6">
          <Box classNameDiv="relative size-full">
            <h5 className="absolute top-2 left-2.5">{data.static.generalProperties.atomicNumber}</h5>
            <h1 className="absolute centered">{data.symbol}</h1>
          </Box>
          <Box classNameDiv="aspect-[21/9] flex flex-col justify-between">
            <div className="grid grid-cols-2">
              <h6 className="title">{t.titles.group}</h6>
              <h6>
                {ELEMENTS_WITHOUT_GROUP.includes(data.static.generalProperties.atomicNumber) ? "-" : data.group ? data.group : "-"}
              </h6>
            </div>
            <div className="grid grid-cols-2">
              <h6 className="title">{t.titles.period}</h6>
              <h6>{data.period ?? "-"}</h6>
            </div>
            <div className="grid grid-cols-2">
              <h6 className="title">{t.titles.block}</h6>
              <h6>{data.block ?? "-"}</h6>
            </div>
          </Box>
        </section>
        <Box classNameDiv="grid grid-cols-3">
          <section className="flex items-center justify-center flex-col">
            <h6 className="title">{t.titles.protons}</h6>
            <h6>{data.static.unGrouped.protons ?? "-"}</h6>
          </section>
          <section className="flex items-center justify-center flex-col">
            <h6 className="title">{t.titles.electrons}</h6>
            <h6>{data.static.unGrouped.electrons ?? "-"}</h6>
          </section>
          <section className="flex items-center justify-center flex-col">
            <h6 className="title">{t.titles.neutrons}</h6>
            <h6>{data.static.unGrouped.neutrons ?? "-"}</h6>
          </section>
        </Box>
        <Box title={t.titles.generalProperties}>
          <section className="flex flex-col 2k:gap-2">
            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.atomicNumber}</h6>
              <h6>{data.static.generalProperties.atomicNumber ?? "-"}</h6>
            </section>
            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.atomicWeight}</h6>
              <h6>{data.static.generalProperties.atomicWeight?.toLocaleString(lang) ?? "-"}</h6>
            </section>
            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.massNumber}</h6>
              <h6>{data.static.generalProperties.massNumber.toLocaleString(lang) ?? "-"}</h6>
            </section>
            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.category}</h6>
              <h6>{data.category ? t.elementCategories[data.category] : "-"}</h6>
            </section>
            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.color}</h6>
              <h6>{data.static.generalProperties.color ? t.colors[data.static.generalProperties.color] : "-"}</h6>
            </section>
            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.radioactive}</h6>
              <h6>{data.static.generalProperties.radioActive ? t.titles.yes : t.titles.no}</h6>
            </section>
          </section>
        </Box>
        <Box classNameDiv="flex flex-col gap-4">
          <h6 className="whitespace-pre-line">{tData.nameOrigin}</h6>
        </Box>
        <Box>
          <section className="grid grid-cols-2">
            <h6 className="title">{t.titles.crystalStructure}</h6>
            <h6>{data.static.crystalStructure ? t.crystalStructures[data.static.crystalStructure] : "-"}</h6>
          </section>
          {data.static.crystalStructure ? CRYSTAL_STRUCTURES[data.static.crystalStructure].component : null}
        </Box>
        <Box title={t.titles.history}>
          <h6 className="whitespace-pre-line">{tData.history}</h6>
        </Box>
        <Box>
          <h6 className="whitespace-pre-line">{tData.description}</h6>
        </Box>
      </section>

      {/* SECOND COLUMN */}
      <section className="flex flex-col gap-6">
        <Box>
          <section className="flex flex-col 2k:gap-2">
            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.electronsPerShell}</h6>
              <h6>{data.static.electrons.electronsPerShell?.join(", ")}</h6>
            </section>
            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.electronConfiguration}</h6>
              <h6>{renderElectronConfiguration(data.static.electrons.electronConfiguration)}</h6>
            </section>
            <section
              className="relative"
              style={{ height: data.static.electrons.electronsPerShell.length >= 6 && !is2k ? "25rem" : is2k ? "40rem" : "20rem" }}
            >
              <div className="absolute flex items-center justify-center centered size-12 2k:size-24 bg-dark text-light rounded-full">
                <h6>{data.symbol}</h6>
              </div>

              {data.static.electrons.electronsPerShell?.map((e, shellIndex) => {
                const radius = (is2k ? 80 : 40) + shellIndex * (is2k ? 30 : 20);

                return (
                  <div
                    key={shellIndex}
                    style={{ width: `${radius * 2}px` }}
                    className="rounded-full aspect-square border-2 border-dark absolute centered"
                  >
                    <div style={{ animation: `rotate ${10 * (shellIndex + 1)}s linear infinite` }} className="absolute centered">
                      {Array(e)
                        ?.fill(e)
                        ?.map((_, electronIndex) => {
                          const electronAngle = (electronIndex / e) * Math.PI * 2;
                          const x = Math.cos(electronAngle) * radius;
                          const y = Math.sin(electronAngle) * radius;
                          return (
                            <div
                              key={`${shellIndex}-${electronIndex}`}
                              className="!-translate-x-2 !-translate-y-2 2k:!-translate-x-3 2k:!-translate-y-3 size-4 2k:size-6 rounded-full bg-dark absolute border-2 border-light"
                              style={{ left: x, top: y }}
                            />
                          );
                        })}
                    </div>
                  </div>
                );
              })}
            </section>
          </section>
        </Box>
        <Box title={t.titles.physicalProperties}>
          <section className="flex flex-col 2k:gap-2">
            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.phase}</h6>
              <h6>{data.static.physhicalProperties.phase ? t.phase[data.static.physhicalProperties.phase] : "-"}</h6>
            </section>
            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.density}</h6>

              {data.static.physhicalProperties.density ? (
                <h6>
                  {data.static.physhicalProperties.density.toLocaleString(lang)} {renderUnit(t.unit.density)}
                </h6>
              ) : (
                <h6>-</h6>
              )}
            </section>

            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.meltingPoint}</h6>

              {data.static.physhicalProperties.meltingPoint ? (
                <h6>
                  {data.static.physhicalProperties.meltingPoint.toLocaleString(lang)} K |{" "}
                  {kelvinToCelsius(data.static.physhicalProperties.meltingPoint, lang)}°C |{" "}
                  {kelvinToFahrenheit(data.static.physhicalProperties.meltingPoint, lang)}°F
                </h6>
              ) : (
                <h6>-</h6>
              )}
            </section>

            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.boilingPoint}</h6>
              {data.static.physhicalProperties.boilingPoint ? (
                <h6>
                  {data.static.physhicalProperties.boilingPoint.toLocaleString(lang)} K |{" "}
                  {kelvinToCelsius(data.static.physhicalProperties.boilingPoint, lang)}°C |{" "}
                  {kelvinToFahrenheit(data.static.physhicalProperties.boilingPoint, lang)}°F
                </h6>
              ) : (
                <h6>-</h6>
              )}
            </section>

            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.heatOfFusion}</h6>

              {data.static.physhicalProperties.heatOfFusion ? (
                <h6>
                  {data.static.physhicalProperties.heatOfFusion.toLocaleString(lang)} {t.unit.heatOfFusion}
                </h6>
              ) : (
                <h6>-</h6>
              )}
            </section>

            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.heatOfVaporization}</h6>

              {data.static.physhicalProperties.heatOfVaporization ? (
                <h6>
                  {data.static.physhicalProperties.heatOfVaporization.toLocaleString(lang)} {t.unit.heatOfVaporization}
                </h6>
              ) : (
                <h6>-</h6>
              )}
            </section>

            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.specificHeatCapacity}</h6>

              {data.static.physhicalProperties.specificHeatCapacity ? (
                <h6>
                  {data.static.physhicalProperties.specificHeatCapacity.toLocaleString(lang)} {t.unit.specificHeatCapacity}
                </h6>
              ) : (
                <h6>-</h6>
              )}
            </section>
          </section>
        </Box>

        <Box>
          <section className="flex flex-col">
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.abudanceInEarthCrust}</h6>
              <h6>{data.static.abundance.earth ? renderAbudance(data.static.abundance.earth) : "-"}</h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.abudanceInUniverse}</h6>
              <h6>{data.static.abundance.universe ? renderAbudance(data.static.abundance.universe) : "-"}</h6>
            </section>
          </section>
        </Box>

        <Box>
          <img src={`/assets/elements/${data.symbol}.jpg`} alt={tData.name} className="size-full" />
        </Box>
        <Box>
          <h6 className="whitespace-pre-line">{tData.toxicity}</h6>
        </Box>
      </section>
      <section className="flex flex-col gap-6">
        <Box title={t.titles.atomicProperties}>
          <section className="flex flex-col 2k:gap-2">
            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.atomicRadius}</h6>
              <h6>
                {data.static.atomicProperties.atomicRadius
                  ? `${data.static.atomicProperties.atomicRadius.toLocaleString(lang)} ${t.unit.atomicRadius}`
                  : "-"}
              </h6>
            </section>
            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.covalentRadius}</h6>
              <h6>
                {data.static.atomicProperties.covalentRadius
                  ? `${data.static.atomicProperties.covalentRadius.toLocaleString(lang)} ${t.unit.atomicRadius}`
                  : "-"}
              </h6>
            </section>
            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.electronegativity}</h6>
              <h6>
                {data.static.atomicProperties.electronegativity
                  ? `${data.static.atomicProperties.electronegativity.toLocaleString(lang)}`
                  : "-"}
              </h6>
            </section>
            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.ionizationPotential}</h6>
              <h6>
                {data.static.atomicProperties.ionizationPotential
                  ? `${data.static.atomicProperties.ionizationPotential.toLocaleString(lang)} ${t.unit.ionizationPotential}`
                  : "-"}
              </h6>
            </section>
            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.atomicVolume}</h6>
              {data.static.atomicProperties.atomicVolume ? (
                <h6>
                  {data.static.atomicProperties.atomicVolume.toLocaleString(lang)} {renderUnit(t.unit.atomicVolume)}
                </h6>
              ) : (
                <h6>-</h6>
              )}
            </section>
            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.thermalConductivity}</h6>
              <h6>
                {data.static.atomicProperties.thermalConductivity
                  ? `${data.static.atomicProperties.thermalConductivity.toLocaleString(lang)} ${t.unit.thermalConductivity}`
                  : "-"}
              </h6>
            </section>
            <section className="grid grid-cols-2 gap-4">
              <h6 className="title">{t.titles.oxidationStates}</h6>
              <h6>{data.static.atomicProperties.oxidationStates?.join(", ")}</h6>
            </section>
          </section>
        </Box>
        <Box title={t.titles.applications}>
          <h6 className="whitespace-pre-line">{tData.applications ?? "-"}</h6>
        </Box>
        <Box title={t.titles.isotopes}>
          <section className="flex flex-col gap-2">
            <section className="flex flex-col 2k:gap-1">
              <h6 className="title">{t.titles.stable}</h6>
              <h6>{data.static.isotopes.stable.length ? renderIsotopes(data.static.isotopes.stable) : "-"}</h6>
            </section>
            <section className="flex flex-col 2k:gap-1">
              <h6 className="title">{t.titles.unstable}</h6>
              <h6>{data.static.isotopes.unstable.length ? renderIsotopes(data.static.isotopes.unstable) : "-"}</h6>
            </section>
          </section>
        </Box>
      </section>
    </article>
  );
}
