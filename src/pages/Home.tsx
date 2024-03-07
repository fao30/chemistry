import { ELEMENT_COLORS, type Element } from "@/lib/constants";
import { cn, getElement } from "@/lib/functions";
import { Fragment, useState } from "react";

export default function Home() {
  const data = getElement();
  const [hoveredElement, setHoveredElement] = useState<null | Element>(null);

  return (
    <article className="overflow-auto min-h-screen bg-gradient-to-r from-[#274786] to-[#229FBC]">
      <article className="mx-auto max-2xl:w-[120rem]">
        <section className="grid grid-cols-18 gap-2 animate overflow-x-auto p-24">
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
                  return (
                    <div
                      key={colIndex}
                      className={cn(
                        "relative group",
                        { "border-2 bg-light aspect-square": element },
                        { "grid grid-cols-subgrid col-span-10 row-span-3 col-start-4 row-start-2": isActive },
                      )}
                      style={{
                        gridColumn: !isActive ? colIndex + 1 : undefined,
                        gridRow: !isActive ? rowIndex + 1 : undefined,
                        borderColor: element ? ELEMENT_COLORS[element.category] : undefined,
                        color: hovered ? "#FEFEFE" : element ? ELEMENT_COLORS[element.category] : undefined,
                        backgroundColor: hovered ? ELEMENT_COLORS[element.category] : undefined,
                      }}
                    >
                      {isActive ? (
                        <section className="flex gap-4 justify-end col-span-10">
                          <div
                            className={cn("aspect-square relative animate border-[4px] w-[30%]", { "opacity-0": !hoveredElement })}
                            style={{ borderColor: hoveredElement ? ELEMENT_COLORS[hoveredElement.category] : undefined }}
                          >
                            <h4 className="absolute left-3 top-2.5 text-light">
                              <span>{hoveredElement?.no}</span>
                            </h4>
                            <h5 className="absolute right-3 top-3 text-light">
                              <span>{hoveredElement?.no}</span>
                            </h5>
                            <h1
                              className="absolute centered font-bold"
                              style={{ color: hoveredElement ? ELEMENT_COLORS[hoveredElement.category] : undefined }}
                            >
                              {hoveredElement?.symbol}
                            </h1>
                            <h5 className="absolute centered-bottom -translate-y-6 text-light">{hoveredElement?.name}</h5>

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
                          <div className="h-full w-[60%] animate flex flex-col gap-4 p-3 bg-light text-dark">
                            <h5 className="text-center">Dmitri Ivanovich Mendeleev</h5>
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
                          <p className="absolute left-1.5 top-1 text-dark font-semibold">{element.no}</p>
                          <h5 className="absolute centered">{element.symbol}</h5>
                          <small className="absolute centered-bottom -translate-y-1 text-dark font-semibold">{element.name}</small>
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
