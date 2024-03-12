import useSetting from "@/hooks/useSetting";
import { ELEMENT_REACTIONS, ELEMENT_REACTIONS_DATA, REACTIONS, REACTIONS_DATA } from "@/lib/constants";
import { cn } from "@/lib/functions";

export default function ReactivitySeries() {
  const { t, color } = useSetting();
  return (
    <article className="px-6 py-12 flex flex-col gap-6">
      <h3 className="text-center">{t.titles.reactivitySeries}</h3>
      <section className="relative h-[70vh] overflow-y-auto">
        <section className="grid grid-cols-4 sticky top-0 z-10" style={{ backgroundColor: color }}>
          <div />
          {REACTIONS.map((e) => {
            return (
              <section key={e} className="flex items-center justify-center py-2">
                {t.reactivity[e]}
              </section>
            );
          })}
        </section>
        {ELEMENT_REACTIONS.map((e, i) => {
          const reactions = ELEMENT_REACTIONS_DATA[e];
          return (
            <section
              key={e}
              className={cn("grid grid-cols-4 text-center", {
                "bg-gray-600/20": i % 2 !== 0,
              })}
            >
              <a className="bg-light/10 h-full py-4" href={`/element/${e}`}>
                {t.elements[e].name}
              </a>
              <section className="py-4" style={{ color: reactions.CW ? REACTIONS_DATA[reactions.CW].color : undefined }}>
                {reactions.CW ? t.reactions[reactions.CW] : ""}
              </section>
              <section className="py-4" style={{ color: reactions.HW ? REACTIONS_DATA[reactions.HW].color : undefined }}>
                {reactions.HW ? t.reactions[reactions.HW] : ""}
              </section>
              <section className="py-4" style={{ color: reactions.DA ? REACTIONS_DATA[reactions.DA].color : undefined }}>
                {reactions.DA ? t.reactions[reactions.DA] : ""}
              </section>
            </section>
          );
        })}
      </section>
    </article>
  );
}
