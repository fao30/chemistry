import { ELEMENT_COLORS, ELEMENT_DATA } from "@/utils/constants";
import { cn } from "@/utils/functions";
import { Fragment, useState } from "react";

export default function Home() {
  const sortedElements = ELEMENT_DATA.sort((a, b) => {
    if (a.period === b.period) return a.group - b.group;
    return a.period - b.period;
  });

  const numRows = Math.max(...sortedElements.map((el) => el.period));
  const numCols = Math.max(...sortedElements.map((el) => el.group));

  const tableRows = [];
  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      const element = sortedElements.find((el) => el.period === i + 1 && el.group === j + 1);
      row.push(element ?? null);
    }
    tableRows.push(row);
  }

  const [hoveredGroup, setHoveredGroup] = useState<null | number>(null);
  const [hoveredPeriod, setHoveredPeriod] = useState<null | number>(null);

  return (
    <article className="grid grid-cols-19 gap-2 w-[96rem] xl:w-full">
      <div className="aspect-square flex flex-col justify-center items-center gap-2">
        <p className={cn({ "text-white/50": hoveredPeriod })}>Group</p>
        <p className={cn({ "text-white/50": hoveredGroup })}>Period</p>
      </div>

      {/* GROUPS */}
      {[...Array(numCols)].map((_, index) => (
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

      {tableRows.map((row, rowIndex) => (
        <Fragment key={rowIndex}>
          {/* PERIODS */}
          <div
            onMouseEnter={() => setHoveredPeriod(rowIndex + 1)}
            onMouseLeave={() => setHoveredPeriod(null)}
            className="aspect-square relative flex items-center justify-center"
          >
            {rowIndex + 1}
            <div
              className={cn("absolute size-full centered animate", {
                "bg-dark/50": (hoveredPeriod && rowIndex + 1 !== hoveredPeriod) || hoveredGroup,
              })}
            />
          </div>

          {row.map((element, colIndex) => (
            <div
              key={colIndex}
              className={cn("relative aspect-square group", { "cursor-pointer": element })}
              style={{
                gridColumn: colIndex + 2,
                gridRow: rowIndex + 2,
                backgroundColor: element ? ELEMENT_COLORS[element.category] : undefined,
              }}
            >
              {element ? (
                <Fragment>
                  <div
                    className={cn("z-10 bg-dark/50 opacity-0 group-hover:opacity-100 absolute size-full centered animate", {
                      "opacity-100":
                        (hoveredGroup && element.group !== hoveredGroup) || (hoveredPeriod && element.period !== hoveredPeriod),
                    })}
                  />
                  <p className="absolute left-1.5 top-1">{element.atomicNumber}</p>
                  <h5 className="absolute centered">{element.symbol}</h5>
                </Fragment>
              ) : null}
            </div>
          ))}
        </Fragment>
      ))}
    </article>
  );
}
