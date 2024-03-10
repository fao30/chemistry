import useSetting from "@/hooks/useSetting";
import { COLOR_SETTING } from "@/lib/constants";
import { cn } from "@/lib/functions";

type Props = {
  children: React.ReactNode;
  classNameDiv?: string;
  title?: string;
};
export default function Box({ children, title, classNameDiv }: Props) {
  const { setting } = useSetting();
  return (
    <section className="bg-light border-t-4 rounded-md shadow-lg" style={{ borderColor: COLOR_SETTING[setting.color] }}>
      {title ? (
        <h6
          className="py-1 pl-3 pr-6 rounded-r-lg mt-2 text-light w-fit font-semibold"
          style={{ backgroundColor: COLOR_SETTING[setting.color] }}
        >
          {title}
        </h6>
      ) : null}
      <section className={cn(`${classNameDiv} p-4`)}>{children}</section>
    </section>
  );
}
