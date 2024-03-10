import Box from "@/components/Box";
import { CRYSTAL_STRUCTURES } from "@/components/CrystalStructures";
import useSetting from "@/hooks/useSetting";
import { ELEMENT_DATA } from "@/lib/constants";
import { kelvinToCelsius, kelvinToFahrenheit } from "@/lib/functions";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

export default function ElementBySymbol() {
  const { symbol } = useParams();

  const data = ELEMENT_DATA.find((e) => e.symbol === symbol);
  if (!data) return <Navigate to="/" />;

  const { t } = useSetting();
  const tData = t.elements[data.symbol];

  const [angles, setAngles] = useState<{ angle: number; interval: NodeJS.Timeout }[]>([]);

  useEffect(() => {
    const newAngles = data.static.electrons.electronsPerShell.map((_, shellIndex) => ({
      angle: 0,
      interval: setInterval(
        () => {
          setAngles((prevAngles) => {
            const newAngles = [...prevAngles];
            newAngles[shellIndex].angle += 0.01 / (shellIndex + 1);
            return newAngles;
          });
        },
        10 * (shellIndex + 2),
      ),
    }));

    setAngles(newAngles);

    return () => {
      for (const newAngle of newAngles) {
        clearInterval(newAngle.interval);
      }
    };
  }, []);

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
    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
    return <span dangerouslySetInnerHTML={{ __html: renderedStructure }} />;
  };

  const renderIsotopes = (arr: typeof data.static.isotopes.stable | typeof data.static.isotopes.unstable) => {
    let renderedStructure = "";
    arr.forEach((e, index) => {
      renderedStructure += `${index > 0 ? " " : ""}<sup>${e}</sup>${data.symbol}${index !== arr.length - 1 ? ", " : ""}`;
    });
    // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
    return <span dangerouslySetInnerHTML={{ __html: renderedStructure }} />;
  };

  //   {/* <img src={`/assets/elements/${data.symbol}.jpg`} alt={tData.name} /> */}

  return (
    <article className="p-6 grid md:grid-cols-2 xl:grid-cols-3 gap-6 text-dark">
      {/* FIRST COLUMN */}
      <section className="flex flex-col gap-6">
        <Box classNameDiv="p-6 flex items-center justify-center">
          <h5>{tData.name}</h5>
        </Box>
        <section className="grid grid-cols-2 gap-6">
          <Box classNameDiv="relative aspect-[21/9]">
            <h5 className="absolute top-2 left-2.5">{data.static.generalProperties.atomicNumber}</h5>
            <h1 className="absolute centered">{data.symbol}</h1>
          </Box>
          <Box classNameDiv="aspect-[21/9] flex flex-col justify-between">
            <div className="grid grid-cols-2">
              <h6 className="title">{t.titles.group}</h6>
              <h6>{data.group}</h6>
            </div>
            <div className="grid grid-cols-2">
              <h6 className="title">{t.titles.period}</h6>
              <h6>{data.period}</h6>
            </div>
            <div className="grid grid-cols-2">
              <h6 className="title">{t.titles.block}</h6>
              <h6>{data.block}</h6>
            </div>
          </Box>
        </section>
        <Box classNameDiv="grid grid-cols-3">
          <section className="flex items-center justify-center flex-col">
            <h6 className="title">{t.titles.protons}</h6>
            <h6>{data.static.unGrouped.protons}</h6>
          </section>
          <section className="flex items-center justify-center flex-col">
            <h6 className="title">{t.titles.electrons}</h6>
            <h6>{data.static.unGrouped.electrons}</h6>
          </section>
          <section className="flex items-center justify-center flex-col">
            <h6 className="title">{t.titles.neutrons}</h6>
            <h6>{data.static.unGrouped.neutrons}</h6>
          </section>
        </Box>
        <Box title={t.titles.generalProperties}>
          <section className="flex flex-col">
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.atomicNumber}</h6>
              <h6>{data.static.generalProperties.atomicNumber}</h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.atomicWeight}</h6>
              <h6>{data.static.generalProperties.atomicWeight}</h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.massNumber}</h6>
              <h6>{data.static.generalProperties.massNumber}</h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.category}</h6>
              <h6>{t.elementCategories[data.category]}</h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.color}</h6>
              <h6>{t.colors[data.static.generalProperties.color]}</h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.radioactive}</h6>
              <h6>{data.static.generalProperties.radioActive ? t.titles.yes : t.titles.no}</h6>
            </section>
          </section>
        </Box>
        <Box classNameDiv="flex flex-col gap-4">
          <h6>{tData.nameOrigin}</h6>
        </Box>
        <Box>
          <section className="grid grid-cols-2">
            <h6 className="title">{t.titles.crystalStructure}</h6>
            <h6>{t.crystalStructures[data.static.crystalStructure]}</h6>
          </section>
          {CRYSTAL_STRUCTURES[data.static.crystalStructure].component}
        </Box>
        <Box title={t.titles.history}>
          <h6 className="whitespace-pre-line leading-5">{tData.history}</h6>
        </Box>
      </section>

      {/* SECOND COLUMN */}
      <section className="flex flex-col gap-6">
        <Box>
          <section className="flex flex-col">
            <section className="flex flex-col">
              <section className="grid grid-cols-2">
                <h6 className="title">{t.titles.electronsPerShell}</h6>
                <h6>{data.static.electrons.electronsPerShell}</h6>
              </section>
              <section className="grid grid-cols-2">
                <h6 className="title">{t.titles.electronConfiguration}</h6>
                <h6>{renderElectronConfiguration(data.static.electrons.electronConfiguration)}</h6>
              </section>
              <section className="relative h-80">
                <div className="absolute flex items-center justify-center centered size-10 bg-dark text-light rounded-full">
                  <p>{data.symbol}</p>
                </div>

                {data.static.electrons.electronsPerShell.map((e, shellIndex) => {
                  const radius = 40 + shellIndex * 25;

                  return (
                    <div
                      key={shellIndex}
                      style={{ width: `${radius * 2}px` }}
                      className="rounded-full aspect-square border-2 border-dark absolute centered"
                    >
                      <div
                        className="absolute centered"
                        style={{ transform: angles[shellIndex]?.angle ? `rotate(${angles[shellIndex].angle}rad)` : undefined }}
                      >
                        {Array(e)
                          .fill(e)
                          .map((_, electronIndex) => {
                            const electronAngle = (electronIndex / e) * Math.PI * 2;
                            const x = Math.cos(electronAngle) * radius;
                            const y = Math.sin(electronAngle) * radius;
                            return (
                              <div
                                key={`${shellIndex}-${electronIndex}`}
                                className="!-translate-x-2 !-translate-y-2 size-4 rounded-full bg-dark absolute border-2 border-light"
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
          </section>
        </Box>
        <Box title={t.titles.physicalProperties}>
          <section className="flex flex-col">
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.phase}</h6>
              <h6>{t.phase[data.static.physhicalProperties.phase]}</h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.density}</h6>
              <h6>
                {data.static.physhicalProperties.density} {t.unit.density}
              </h6>
            </section>

            <section className="grid grid-cols-2 items-center">
              <h6 className="title">{t.titles.meltingPoint}</h6>
              <h6>
                {data.static.physhicalProperties.meltingPoint} K | {kelvinToCelsius(data.static.physhicalProperties.meltingPoint)}°C |{" "}
                {kelvinToFahrenheit(data.static.physhicalProperties.meltingPoint)}°F
              </h6>
            </section>

            <section className="grid grid-cols-2 items-center">
              <h6 className="title">{t.titles.boilingPoint}</h6>
              <h6>
                {data.static.physhicalProperties.boilingPoint} K | {kelvinToCelsius(data.static.physhicalProperties.boilingPoint)}°C |{" "}
                {kelvinToFahrenheit(data.static.physhicalProperties.boilingPoint)}°F
              </h6>
            </section>

            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.heatOfFusion}</h6>
              <h6>
                {data.static.physhicalProperties.heatOfFusion} {t.unit.heatOfFusion}
              </h6>
            </section>

            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.heatOfVaporization}</h6>
              <h6>
                {data.static.physhicalProperties.heatOfVaporization} {t.unit.heatOfVaporization}
              </h6>
            </section>

            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.specificHeatCapacity}</h6>
              <h6>
                {data.static.physhicalProperties.specificHeatCapacity} {t.unit.specificHeatCapacity}
              </h6>
            </section>
          </section>
        </Box>

        <Box>
          <section className="flex flex-col">
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.abudanceInEarthCrust}</h6>
              <h6>{data.static.abundance.earth}%</h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.abudanceInUniverse}</h6>
              <h6>{data.static.abundance.universe}%</h6>
            </section>
          </section>
        </Box>

        <Box>
          <img src={`/assets/elements/${data.symbol}.jpg`} alt={tData.name} className="size-full" />
        </Box>
      </section>
      <section className="flex flex-col gap-6">
        <Box title={t.titles.atomicProperties}>
          <section className="flex flex-col">
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.atomicRadius}</h6>
              <h6>
                {data.static.atomicProperties.atomicRadius
                  ? `${data.static.atomicProperties.atomicRadius} ${t.unit.atomicRadius}`
                  : "-"}
              </h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.covalentRadius}</h6>
              <h6>
                {data.static.atomicProperties.covalentRadius
                  ? `${data.static.atomicProperties.covalentRadius} ${t.unit.atomicRadius}`
                  : "-"}
              </h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.electronegativity}</h6>
              <h6>{data.static.atomicProperties.electronegativity ? `${data.static.atomicProperties.electronegativity}` : "-"}</h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.ionizationPotential}</h6>
              <h6>
                {data.static.atomicProperties.ionizationPotential
                  ? `${data.static.atomicProperties.ionizationPotential} ${t.unit.ionizationPotential}`
                  : "-"}
              </h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.atomicVolume}</h6>
              <h6>
                {data.static.atomicProperties.atomicVolume
                  ? `${data.static.atomicProperties.atomicVolume} ${t.unit.atomicVolume}`
                  : "-"}
              </h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.thermalConductivity}</h6>
              <h6>
                {data.static.atomicProperties.thermalConductivity
                  ? `${data.static.atomicProperties.thermalConductivity} ${t.unit.thermalConductivity}`
                  : "-"}
              </h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.oxidationStates}</h6>
              <h6>{data.static.atomicProperties.oxidationStates.join(", ")}</h6>
            </section>
          </section>
        </Box>
        <Box title={t.titles.applications}>
          <h6 className="whitespace-pre-line leading-5">{tData.applications}</h6>
        </Box>
        <Box title={t.titles.isotopes}>
          <section className="grid grid-cols-2">
            <h6 className="title">{t.titles.stable}</h6>
            <h6>{renderIsotopes(data.static.isotopes.stable)}</h6>
          </section>
          <section className="grid grid-cols-2">
            <h6 className="title">{t.titles.unstable}</h6>
            <h6>{renderIsotopes(data.static.isotopes.unstable)}</h6>
          </section>
        </Box>
      </section>
    </article>
  );
}
