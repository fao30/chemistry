import useSetting from "@/hooks/useSetting";
import { CATEGORIES } from "@/lib/constants";
import { cn, formatDate, getElement } from "@/lib/functions";
import type { Element } from "@/types";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const data = getElement();
  const [hoveredElement, setHoveredElement] = useState<null | Element>(null);
  const { t, setting, lang } = useSetting();
  const navigate = useNavigate();

  return (
    // <article className="overflow-auto bg-gradient-to-r from-[#274786] to-[#229FBC]">
    <article className="overflow-auto">
      <section className="mx-auto max-xl:w-[100rem] overflow-x-auto min-h-screen pt-12">
        <section className="grid grid-cols-18 gap-2.5 animate p-12">
          {data.map((row, rowIndex) => {
            return (
              <Fragment key={rowIndex}>
                {row.map((element, colIndex) => {
                  const isActive = rowIndex === 0 && colIndex === 2;
                  const firstCol = colIndex === 0;
                  const firstRow =
                    rowIndex === 0 ||
                    (rowIndex === 1 && colIndex >= 1 && colIndex <= 16) ||
                    (rowIndex === 3 && colIndex >= 2 && colIndex <= 11);

                  const hovered =
                    hoveredElement &&
                    element &&
                    hoveredElement.static.generalProperties.atomicNumber === element.static.generalProperties.atomicNumber;
                  const notHovered =
                    hoveredElement &&
                    element &&
                    hoveredElement.static.generalProperties.atomicNumber !== element.static.generalProperties.atomicNumber;

                  const tHoveredElement = hoveredElement && t.elements[hoveredElement.symbol];
                  const tElement = element && t.elements[element.symbol];
                  return (
                    <div
                      key={colIndex}
                      className={cn(
                        { "border-4 bg-light aspect-square relative group": element },
                        { "pb-10 grid grid-cols-subgrid col-span-10 row-span-3 col-start-3 row-start-1": isActive },
                      )}
                      style={{
                        gridColumn: !isActive ? colIndex + 1 : undefined,
                        gridRow: !isActive ? rowIndex + 1 : undefined,
                        borderColor: element ? CATEGORIES[element.category].color : undefined,
                        color: hovered ? "#FEFEFE" : element ? CATEGORIES[element.category].color : undefined,
                        backgroundColor: hovered ? CATEGORIES[element.category].color : undefined,
                      }}
                    >
                      {isActive ? (
                        <section className="col-span-10 relative">
                          <section className="absolute right-0 top-0 size-full flex justify-end gap-4">
                            {/* HOVERED ELEMENT */}
                            <div
                              className={cn("aspect-square relative animate border-[4px] w-[30%]", {
                                "opacity-0": !hoveredElement,
                              })}
                              style={{ borderColor: hoveredElement ? CATEGORIES[hoveredElement.category].color : undefined }}
                            >
                              <h4 className="absolute left-3 top-2.5 text-light">
                                <span>{hoveredElement?.static.generalProperties.atomicNumber}</span>
                              </h4>
                              <h5 className="absolute right-3 top-3 text-light">
                                <span>{hoveredElement?.static.generalProperties.atomicWeight}</span>
                              </h5>
                              <h1
                                className="absolute centered font-bold"
                                style={{ color: hoveredElement ? CATEGORIES[hoveredElement.category].color : undefined }}
                              >
                                {hoveredElement?.symbol}
                              </h1>
                              <h5 className="absolute centered-bottom -translate-y-6 text-light">{tHoveredElement?.name}</h5>

                              {/* DESC */}
                              <p className="text-light -left-48 top-4 absolute text-right w-44">{t.titles.atomicNumber}</p>
                              <div className="h-1 bg-light w-5 absolute -left-3 top-7" />

                              <p className="text-light -left-48 top-1/2 absolute -translate-y-1 text-right w-44">{t.titles.symbol}</p>
                              <div className="h-1 bg-light w-[6.75rem] absolute -left-3 top-1/2 translate-y-2" />

                              <p className="text-light -left-48 bottom-7 absolute text-right w-44">{t.titles.title}</p>
                              <div className="h-1 bg-light w-[5.5rem] absolute -left-3 bottom-11 translate-y-2" />

                              <div className="absolute right-4 -top-[3.5rem] flex flex-col items-end justify-center">
                                <p className="text-light">{t.titles.atomicWeight}</p>
                                <div className="w-1 h-10 bg-light" />
                              </div>
                            </div>
                            {/* MENDELEEV */}
                            <div className="w-[60%] animate flex gap-4 p-3 bg-light text-dark">
                              <img alt={t.tableFounder.name} src="/assets/mendeleev.jpg" className="object-cover size-full" />
                              <section className="flex flex-col gap-2">
                                <header className="text-center flex flex-col">
                                  <h5 className="leading-7">{t.tableFounder.name}</h5>
                                  <p>
                                    {`${formatDate({ date: t.tableFounder.birthDate, lang: setting.lang, style: "long" })} —
                                  ${formatDate({ date: t.tableFounder.deathDate, lang: setting.lang, style: "long" })}`}
                                  </p>
                                </header>
                                <section className="flex flex-col overflow-y-auto">
                                  <p className="indent-6 leading-5">{t.tableFounder.history.text1}</p>
                                  <p className="indent-6 leading-5">{t.tableFounder.history.text2}</p>
                                  <p className="indent-6 leading-5">{t.tableFounder.history.text3}</p>
                                </section>
                              </section>
                            </div>
                          </section>
                        </section>
                      ) : null}

                      {element ? (
                        <Fragment>
                          {firstRow ? (
                            <div className="absolute flex items-center text-center justify-center -top-9 w-full h-8 border-t-2 border-x-2 border-light">
                              <p className="text-light">
                                {lang === "en" ? `${t.titles.group} ` : ""}
                                {colIndex + 1}
                                {lang === "ru" ? ` ${t.titles.group.toLowerCase()}` : ""}
                              </p>
                            </div>
                          ) : null}
                          {firstCol ? (
                            <div className="rotate-[270deg] absolute flex items-center text-center w-full justify-center h-8 -left-5 centered border-x-2 border-t-2 border-light">
                              <p className="text-light">
                                {lang === "en" ? `${t.titles.period} ` : ""}
                                {rowIndex + 1}
                                {lang === "ru" ? ` ${t.titles.period.toLowerCase()}` : ""}
                              </p>
                            </div>
                          ) : null}
                          <div
                            onClick={() => navigate(`/element/${element.symbol}`)}
                            onMouseEnter={() => setHoveredElement(element)}
                            onMouseLeave={() => setHoveredElement(null)}
                            className={cn("z-10 bg-dark/50 opacity-0 absolute size-full centered animate cursor-pointer", {
                              "opacity-100": notHovered,
                            })}
                          />
                          <p className="absolute left-1 top-0.5 text-dark font-semibold">
                            {element.static.generalProperties.atomicNumber}
                          </p>
                          <h5 className="absolute centered">{element.symbol}</h5>
                          <small className="absolute centered-bottom text-dark font-semibold">{tElement?.name}</small>
                        </Fragment>
                      ) : null}
                    </div>
                  );
                })}
              </Fragment>
            );
          })}
        </section>
      </section>
    </article>
  );
}
