import useSetting from "@/hooks/useSetting";
import { ELEMENT_CATEGORIES } from "@/lib/constants";
import { cn, formatDate, getElement } from "@/lib/functions";
import type { Element } from "@/types";
import { Fragment, useState } from "react";

export default function Home() {
  const data = getElement();
  const [hoveredElement, setHoveredElement] = useState<null | Element>(null);
  const { t, setting } = useSetting();

  return (
    <article className="overflow-auto min-h-screen bg-gradient-to-r from-[#274786] to-[#229FBC]">
      <article className="mx-auto max-xl:w-[100rem]">
        <section className="grid grid-cols-18 gap-2.5 animate overflow-x-auto p-12">
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

                  const hovered = hoveredElement && element && hoveredElement.no === element.no;
                  const notHovered = hoveredElement && element && hoveredElement.no !== element.no;

                  const tHoveredElement = hoveredElement && t.elements[hoveredElement.symbol];
                  const tElement = element && t.elements[element.symbol];
                  return (
                    <div
                      key={colIndex}
                      className={cn(
                        { "border-4 bg-light aspect-square relative group": element },
                        { "grid grid-cols-subgrid col-span-10 row-span-3 col-start-4 row-start-2": isActive },
                      )}
                      style={{
                        gridColumn: !isActive ? colIndex + 1 : undefined,
                        gridRow: !isActive ? rowIndex + 1 : undefined,
                        borderColor: element ? ELEMENT_CATEGORIES[element.category].color : undefined,
                        color: hovered ? "#FEFEFE" : element ? ELEMENT_CATEGORIES[element.category].color : undefined,
                        backgroundColor: hovered ? ELEMENT_CATEGORIES[element.category].color : undefined,
                      }}
                    >
                      {isActive ? (
                        <section className="col-span-10 row-span-3 relative">
                          {/* HOVERED ELEMENT */}
                          <div
                            className={cn("aspect-square relative animate border-[4px] w-[30%] ml-24", {
                              "opacity-0": !hoveredElement,
                            })}
                            style={{ borderColor: hoveredElement ? ELEMENT_CATEGORIES[hoveredElement.category].color : undefined }}
                          >
                            <h4 className="absolute left-3 top-2.5 text-light">
                              <span>{hoveredElement?.no}</span>
                            </h4>
                            <h5 className="absolute right-3 top-3 text-light">
                              <span>{hoveredElement?.no}</span>
                            </h5>
                            <h1
                              className="absolute centered font-bold"
                              style={{ color: hoveredElement ? ELEMENT_CATEGORIES[hoveredElement.category].color : undefined }}
                            >
                              {hoveredElement?.symbol}
                            </h1>
                            <h5 className="absolute centered-bottom -translate-y-6 text-light">{tHoveredElement?.name}</h5>

                            {/* DESC */}
                            <p className="text-light -left-56 top-4 absolute text-right w-44">Ordinal Period</p>
                            <div className="h-1 bg-light w-11 absolute -left-[2.5rem] top-7" />

                            <p className="text-light -left-56 top-1/2 absolute -translate-y-1 text-right w-44">Symbol</p>
                            <div className="h-1 bg-light w-[7.75rem] absolute -left-[2.5rem] top-1/2 translate-y-2" />

                            <p className="text-light -left-56 bottom-7 absolute text-right w-44">Name</p>
                            <div className="h-1 bg-light w-[6.5rem] absolute -left-[2.5rem] bottom-11 translate-y-2" />

                            <div className="absolute right-4 -top-[4.2rem] flex flex-col gap-1 items-end justify-center">
                              <p className="text-light">Atomic Mass</p>
                              <div className="w-1 h-12 bg-light" />
                            </div>
                          </div>
                          {/* MENDELEEV */}

                          <div className="absolute right-0 top-0 h-full w-[60%] animate flex gap-4 p-3 bg-light text-dark">
                            <img alt={t.tableFounder.name} src="/assets/mendeleev.jpg" className="object-cover size-full" />
                            <section className="flex flex-col gap-2">
                              <header className="text-center flex flex-col">
                                <h5 className="leading-7">{t.tableFounder.name}</h5>
                                <p>
                                  {formatDate({ date: t.tableFounder.birthDate, lang: setting.lang, style: "long" })} —{" "}
                                  {formatDate({ date: t.tableFounder.deathDate, lang: setting.lang, style: "long" })}
                                </p>
                              </header>
                              <section className="flex flex-col overflow-y-auto h-44">
                                <small className="indent-6">{t.tableFounder.history.text1}</small>
                                <small className="indent-6">{t.tableFounder.history.text2}</small>
                                <small className="indent-6">{t.tableFounder.history.text3}</small>
                              </section>
                            </section>
                          </div>
                        </section>
                      ) : null}

                      {element ? (
                        <Fragment>
                          {firstRow ? (
                            <div className="absolute flex items-center text-center justify-center -top-9 w-full h-8 border-t-2 border-x-2 border-light">
                              <p className="text-light">Group {colIndex + 1}</p>
                            </div>
                          ) : null}
                          {firstCol ? (
                            <div className="rotate-[270deg] absolute flex items-center text-center w-full justify-center h-8 -left-5 centered border-x-2 border-t-2 border-light">
                              <p className=" text-light">Period {rowIndex + 1}</p>
                            </div>
                          ) : null}
                          <div
                            onMouseEnter={() => setHoveredElement(element)}
                            onMouseLeave={() => setHoveredElement(null)}
                            className={cn("z-10 bg-dark/50 opacity-0 absolute size-full centered animate cursor-pointer", {
                              "opacity-100": notHovered,
                            })}
                          />
                          <p className="absolute left-1 top-0.5 text-dark font-semibold">{element.no}</p>
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
      </article>
    </article>
  );
}
