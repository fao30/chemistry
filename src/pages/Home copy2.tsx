import { ELEMENT_COLORS, type Element } from "@/utils/constants";
import { cn, getElement } from "@/utils/functions";
import { Fragment, useState } from "react";

export default function Home() {
  const data = getElement();

  const [hoveredGroup, setHoveredGroup] = useState<null | number>(null);
  const [hoveredPeriod, setHoveredPeriod] = useState<null | number>(null);
  const [hoveredElement, setHoveredElement] = useState<null | Element>(null);

  return (
    <article className="overflow-auto">
      <article className="mx-auto max-lg:w-[96rem]">
        <section className="grid grid-cols-19 gap-2 animate overflow-x-auto">
          <div className="aspect-square flex flex-col justify-center items-center gap-2">
            <p className={cn({ "text-white/50": hoveredPeriod })}>Group</p>
            <p className={cn({ "text-white/50": hoveredGroup })}>Period</p>
          </div>

          {/* GROUPS */}
          {[...Array(18)].map((_, index) => (
            <div
              onMouseEnter={() => setHoveredGroup(index + 1)}
              onMouseLeave={() => setHoveredGroup(null)}
              className="aspect-square flex justify-center items-center relative"
              key={index}
            >
              {index + 1}
              <div
                className={cn("absolute size-full centered animate", {
                  "bg-dark/50": (hoveredGroup && index + 1 !== hoveredGroup) || hoveredPeriod,
                })}
              />
            </div>
          ))}

          {data.map((row, rowIndex) => {
            return (
              <Fragment key={rowIndex}>
                {/* PERIODS */}
                <div
                  onMouseEnter={() => setHoveredPeriod(rowIndex + 1)}
                  onMouseLeave={() => setHoveredPeriod(null)}
                  className="aspect-square relative flex items-center justify-center col-start-1"
                >
                  {rowIndex + 1}
                  <div
                    className={cn("absolute size-full centered animate", {
                      "bg-dark/50": (hoveredPeriod && rowIndex + 1 !== hoveredPeriod) || hoveredGroup,
                    })}
                  />
                </div>

                {row.map((element, colIndex) => {
                  const isActive = rowIndex === 0 && colIndex === 2;
                  return (
                    <div
                      key={colIndex}
                      className={cn(
                        "relative group",
                        { "cursor-pointer aspect-square ": element },
                        { "grid grid-cols-subgrid col-span-10 row-span-3 col-start-4 row-start-2": isActive },
                      )}
                      style={{
                        gridColumn: !isActive ? colIndex + 2 : undefined,
                        gridRow: !isActive ? rowIndex + 2 : undefined,
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
                          <div
                            onMouseEnter={() => setHoveredElement(element)}
                            onMouseLeave={() => setHoveredElement(null)}
                            className={cn("z-10 bg-dark/50 opacity-0 group-hover:opacity-100 absolute size-full centered animate", {
                              "opacity-100":
                                (hoveredGroup && element.group !== hoveredGroup) ||
                                (hoveredPeriod && element.period !== hoveredPeriod),
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
