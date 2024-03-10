import { cn } from "@/lib/functions";

type Props = {
  children: React.ReactNode;
  classNameDiv?: string;
  title?: string;
};
export default function Box({ children, title, classNameDiv }: Props) {
  return (
    <section className="bg-light border-t-2 rounded-md">
      {title ? <p className="py-1 pl-2 pr-4 rounded-r-lg mt-2 bg-red-500 text-light w-fit">{title}</p> : null}
      <section className={cn(`${classNameDiv} p-6`)}>{children}</section>
    </section>
  );
}
