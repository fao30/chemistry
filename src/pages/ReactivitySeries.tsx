import useSetting from "@/hooks/useSetting";
import { ELEMENT_REACTIONS, ELEMENT_REACTIONS_DATA, REACTIONS, REACTIONS_DATA } from "@/lib/constants";
import { cn } from "@/lib/functions";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRef } from "react";

export default function ReactivitySeries() {
  const { t, color, setting } = useSetting();

  const tableContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollDown = () => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollTo({
        top: tableContainerRef.current.scrollTop + 125,
        behavior: "smooth",
      });
    }
  };

  const handleScrollUp = () => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollTo({
        top: tableContainerRef.current.scrollTop - 125,
        behavior: "smooth",
      });
    }
  };

  return (
    <article className="px-6 py-12 flex flex-col gap-6 2k:gap-12">
      <section className="relative">
        <h1 className="text-center">{t.titles.reactivitySeries}</h1>
        <section className="absolute bottom-0 right-0 flex gap-2">
          <button type="button" onClick={handleScrollUp}>
            <Icon icon="mdi:arrow-down-bold" width={40} rotate={2} />
          </button>
          <button type="button" onClick={handleScrollDown}>
            <Icon icon="mdi:arrow-down-bold" width={40} />
          </button>
        </section>
      </section>
      <section className="overflow-auto">
        <div
          ref={tableContainerRef}
          style={{ width: `${setting.tableWidth}%` }}
          className="mx-auto animate relative h-[70dvh] overflow-y-auto"
        >
          <section className="grid grid-cols-4 sticky top-0 z-10" style={{ backgroundColor: color }}>
            <div />
            {REACTIONS.map((e) => {
              return (
                <h6 key={e} className="flex items-center justify-center p-2">
                  {t.reactivity[e]}
                </h6>
              );
            })}
          </section>
          {ELEMENT_REACTIONS.map((e, i) => {
            const reactions = ELEMENT_REACTIONS_DATA[e];
            return (
              <section
                key={e}
                className={cn("grid bg-gray-900 grid-cols-4 text-center", {
                  "bg-gray-900/90": i % 2 !== 0,
                })}
              >
                <a className="bg-gray-900 border-y-[1px] border-gray-700/20 h-full p-2" href={`/element/${e}`}>
                  <h6>{t.elements[e].name}</h6>
                </a>
                <h6
                  className="py-2 flex items-center justify-center"
                  style={{ color: reactions.CW ? REACTIONS_DATA[reactions.CW].color : undefined }}
                >
                  {reactions.CW ? t.reactions[reactions.CW] : ""}
                </h6>
                <h6
                  className="py-2 flex items-center justify-center"
                  style={{ color: reactions.HW ? REACTIONS_DATA[reactions.HW].color : undefined }}
                >
                  {reactions.HW ? t.reactions[reactions.HW] : ""}
                </h6>
                <h6
                  className="py-2 flex items-center justify-center"
                  style={{ color: reactions.DA ? REACTIONS_DATA[reactions.DA].color : undefined }}
                >
                  {reactions.DA ? t.reactions[reactions.DA] : ""}
                </h6>
              </section>
            );
          })}
        </div>
      </section>
    </article>
  );
}
