import useSetting from "@/hooks/useSetting";
import { cn } from "@/lib/functions";

type Props = {
  children: React.ReactNode;
  classNameDiv?: string;
  title?: string;
};
export default function Box({ children, title, classNameDiv }: Props) {
  const { color } = useSetting();
  return (
    <section className="bg-light border-t-4 rounded-md shadow-lg" style={{ borderColor: color }}>
      {title ? (
        <h6
          className="py-1 4k:py-3 pl-3 pr-6 rounded-r-lg mt-2 2k:mt-3 4k:mt-5 text-light w-fit font-semibold uppercase"
          style={{ backgroundColor: color }}
        >
          {title}
        </h6>
      ) : null}
      <section className={cn(`${classNameDiv} p-3 md:p-4 4k:p-10`)}>{children}</section>
    </section>
  );
}
