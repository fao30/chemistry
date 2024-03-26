import useSetting from "@/hooks/useSetting";
import { ELEMENT_REACTIONS, ELEMENT_REACTIONS_DATA, REACTIONS, REACTIONS_DATA } from "@/lib/constants";
import { cn } from "@/lib/functions";

export default function ReactivitySeries() {
  const { t, color, setting } = useSetting();

  return (
    <article className="px-6 py-12 flex flex-col gap-6 2k:gap-12">
      <h1 className="text-center">{t.titles.reactivitySeries}</h1>
      <section className="overflow-auto">
        <div style={{ width: `${setting.tableWidth}%` }} className="mx-auto animate relative h-[70vh] overflow-y-auto">
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
