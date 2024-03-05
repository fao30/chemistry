import { ELEMENT_COLORS, type Element } from "@/utils/constants";
import { cn, getElement } from "@/utils/functions";
import { Fragment, useState } from "react";

export default function Home() {
  const data = getElement();

  const [hoveredElement, setHoveredElement] = useState<null | Element>(null);

  console.log(data);

  return (
    <article className="overflow-auto min-h-screen bg-gradient-to-tr from-[#274786] to-[#229FBC]">
      <article className="mx-auto max-lg:w-[96rem]">
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
                  return (
                    <div
                      key={colIndex}
                      className={cn(
                        "relative group",
                        { "cursor-pointer aspect-square ": element },
                        { "grid grid-cols-subgrid col-span-10 row-span-3 col-start-4 row-start-2": isActive },
                      )}
                      style={{
                        gridColumn: !isActive ? colIndex + 1 : undefined,
                        gridRow: !isActive ? rowIndex + 1 : undefined,
                        backgroundColor: element ? ELEMENT_COLORS[element.category] : undefined,
                      }}
                    >
                      {isActive ? (
                        <section className={cn("flex p-6 gap-4 col-span-10 animate", { "opacity-0": !hoveredElement })}>
                          <div
                            className="aspect-square h-full relative animate"
                            style={{ backgroundColor: hoveredElement ? ELEMENT_COLORS[hoveredElement.category] : undefined }}
                          >
                            <h4 className="absolute left-3 top-2.5">{hoveredElement?.atomicNumber}</h4>
                            <h2 className="absolute centered">{hoveredElement?.symbol}</h2>
                          </div>
                          <div
                            className="size-full animate flex flex-col gap-4 p-3"
                            style={{ backgroundColor: hoveredElement ? ELEMENT_COLORS[hoveredElement.category] : undefined }}
                          >
                            <h6>{hoveredElement?.name.toUpperCase()}</h6>
                          </div>
                        </section>
                      ) : element ? (
                        <Fragment>
                          {firstRow ? (
                            <div className="absolute flex items-center justify-center -top-9 w-full h-8 border-t-2 border-x-2 border-white">
                              <p>{colIndex + 1}</p>
                            </div>
                          ) : null}
                          {firstCol ? (
                            <div className="absolute flex items-center justify-center -left-9 h-full w-8 border-y-2 border-l-2 border-white">
                              <p className="rotate-[270deg]">{rowIndex + 1}</p>
                            </div>
                          ) : null}
                          <div
                            onMouseEnter={() => setHoveredElement(element)}
                            onMouseLeave={() => setHoveredElement(null)}
                            className={cn("z-10 bg-dark/50 opacity-0 absolute size-full centered animate", {
                              "opacity-100": hoveredElement && hoveredElement.atomicNumber !== element.atomicNumber,
                            })}
                          />
                          <p className="absolute left-1.5 top-1">{element.atomicNumber}</p>
                          <h5 className="absolute centered">{element.symbol}</h5>
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
