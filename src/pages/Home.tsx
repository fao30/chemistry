import useSetting from "@/hooks/useSetting";
import { CATEGORIES, CATEGORIES_OPTIONS, ELEMENT_DATA2, ELEMENT_DATA3 } from "@/lib/constants";
import { cn, getElement } from "@/lib/functions";
import type { Element, ElementCategory } from "@/types";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const data = getElement();
  const [clickedElement, setClickedElement] = useState<null | Element>(null);
  const [hoveredCategory, setHoveredCategory] = useState<ElementCategory | null>(null);
  const { t, setting, lang } = useSetting();
  const navigate = useNavigate();

  const handleClickElement = (element: Element) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if (clickedElement?.symbol !== element.symbol) return setClickedElement(element);
    return setClickedElement(null);
  };

  return (
    // <article className="overflow-auto bg-gradient-to-r from-[#274786] to-[#229FBC]">
    <article
      onClick={() => {
        if (clickedElement) setClickedElement(null);
      }}
      className="overflow-auto"
    >
      <section
        className="animate mx-auto max-xl:!w-[120rem] overflow-x-auto min-h-screen pb-6 pt-16 2k:pt-44"
        style={{ width: `${setting.tableWidth}%` }}
      >
        <section className="grid grid-cols-18 gap-1 fullHd:gap-2 4k:gap-4 animate pl-12 4k:pl-20 pr-6 mb-6">
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

                  const hovered =
                    (clickedElement && element && clickedElement.symbol === element.symbol) ||
                    (hoveredCategory && element && hoveredCategory === element.category);
                  const notHovered =
                    (clickedElement && element && clickedElement.symbol !== element.symbol) ||
                    (hoveredCategory && element && hoveredCategory !== element.category);

                  const tClickedElement = clickedElement && t.elements[clickedElement.symbol];
                  const tElement = element && t.elements[element.symbol];
                  return (
                    <div
                      key={colIndex}
                      className={cn(
                        { "aspect-square": !isActive },
                        { "border-2 fullHd:border-[3px] bg-light relative group": element },
                        { "pb-8 grid grid-cols-subgrid col-span-10 row-span-3 col-start-3 row-start-1": isActive },
                      )}
                      style={{
                        gridColumn: !isActive ? colIndex + 1 : undefined,
                        gridRow: !isActive ? rowIndex + 1 : undefined,
                        borderColor: element?.category ? CATEGORIES[element.category].color : "#B1C0C9",
                        color:
                          hovered && element.category ? "#FEFEFE" : element?.category ? CATEGORIES[element.category].color : "#B1C0C9",
                        backgroundColor: hovered && element.category ? CATEGORIES[element.category].color : undefined,
                      }}
                    >
                      {isActive ? (
                        <section className="col-span-10 relative">
                          {/* <section className="absolute right-0 top-0 size-full flex justify-end gap-4"> */}
                          <section className="size-full absolute centered flex justify-center items-end gap-2 4k:gap-4 4k:pb-6">
                            {/* HOVERED ELEMENT */}
                            <div
                              className={cn("aspect-square relative animate border-[4px] w-[30%]", {
                                "opacity-0": !clickedElement,
                              })}
                              style={{ borderColor: clickedElement?.category ? CATEGORIES[clickedElement.category].color : "#B1C0C9" }}
                            >
                              <h2 className="absolute left-3 top-2.5 text-light">
                                <span>{clickedElement?.static.generalProperties.atomicNumber}</span>
                              </h2>
                              <h3 className="absolute right-3 top-3 text-light">
                                <span>{clickedElement?.static.generalProperties.atomicWeight}</span>
                              </h3>
                              <h1
                                className="absolute centered font-bold"
                                style={{ color: clickedElement?.category ? CATEGORIES[clickedElement.category].color : "#B1C0C9" }}
                              >
                                {clickedElement?.symbol}
                              </h1>
                              <h2 className="absolute centered-bottom -translate-y-6 text-light">{tClickedElement?.name}</h2>

                              {/* DESC */}
                              <div className="flex gap-2 4k:gap-4 items-center absolute -left-[15rem] top-4 w-96 2k:-left-[18rem] 2k:w-[30rem]">
                                <h6 className="text-light text-right w-[50%]">{t.titles.atomicNumber}</h6>
                                <div className="h-1 bg-light w-[12%] 4k:w-[8%]" />
                              </div>

                              <div className="flex gap-2 4k:gap-4 items-center absolute -left-[15rem] top-1/2 w-96 2k:-left-[18rem] 2k:w-[30rem] -translate-y-4">
                                <h6 className="text-light text-right w-[50%]"> {t.titles.symbol}</h6>
                                <div className="h-1 bg-light w-[20%] fullHd:w-[25%]" />
                              </div>

                              <div className="flex gap-2 4k:gap-4 items-center absolute -left-[15rem] bottom-2 w-96 2k:-left-[18rem] 2k:w-[30rem] -translate-y-4">
                                <h6 className="text-light text-right w-[50%]"> {t.titles.title}</h6>
                                <div className="h-1 bg-light w-[15%] 2k:w-[20%]" />
                              </div>

                              <div className="flex gap-2 4k:gap-4 items-center absolute top-3 -right-[23.6rem] w-96">
                                <div className="w-12 h-1 bg-light" />
                                <h6 className="text-light">{t.titles.atomicWeight}</h6>
                              </div>
                            </div>
                            <button
                              style={{
                                backgroundColor: clickedElement?.category ? CATEGORIES[clickedElement.category].color : "#B1C0C9",
                              }}
                              className={cn("h6 text-light py-1 4k:py-3 px-6 4k:px-8 border-2", {
                                "opacity-0 invisible": !clickedElement,
                              })}
                              onClick={() => navigate(`/element/${clickedElement?.symbol}`)}
                              type="button"
                            >
                              {t.titles.details}
                            </button>
                            {/* MENDELEEV */}
                            {/* <div className="w-[60%] animate flex gap-4 p-3 bg-light text-dark">
                              <img alt={t.tableFounder.name} src="/assets/mendeleev.jpg" className="object-cover size-full" />
                              <section className="flex flex-col gap-2">
                                <header className="text-center flex flex-col">
                                  <h6 className="leading-7 font-semibold">{t.tableFounder.name}</h6>
                                  <p>
                                    {`${formatDate({ date: t.tableFounder.birthDate, lang: setting.lang, style: "long" })} —
                                  ${formatDate({ date: t.tableFounder.deathDate, lang: setting.lang, style: "long" })}`}
                                  </p>
                                </header>
                                <section className="flex flex-col overflow-y-auto">
                                  <p className="indent-6 leading-5">{t.tableFounder.history.text1}</p>
                                  <p className="indent-6 leading-5">{t.tableFounder.history.text2}</p>
                                  <p className="indent-6 leading-5">{t.tableFounder.history.text3}</p>
                                </section>
                              </section>
                            </div> */}
                          </section>
                        </section>
                      ) : null}

                      {element ? (
                        <Fragment>
                          {firstRow ? (
                            <div className="absolute flex items-center text-center justify-center -top-[1.35rem] fullHd:-top-9 4k:h-12 4k:-top-12 w-full h-5 fullHd:h-8 border-t-2 border-x-2 border-light">
                              <p className="text-light">
                                {lang === "en" ? `${t.titles.group} ` : ""}
                                {colIndex + 1}
                                {lang === "ru" ? ` ${t.titles.group.toLowerCase()}` : ""}
                              </p>
                            </div>
                          ) : null}
                          {firstCol ? (
                            <div className="rotate-[270deg] absolute flex items-center text-center w-full justify-center -left-3 h-5 fullHd:h-8 fullHd:-left-5 4k:h-12 4k:-left-7 centered border-x-2 border-t-2 border-light">
                              <p className="text-light">
                                {lang === "en" ? `${t.titles.period} ` : ""}
                                {rowIndex + 1}
                                {lang === "ru" ? ` ${t.titles.period.toLowerCase()}` : ""}
                              </p>
                            </div>
                          ) : null}
                          <button
                            type="button"
                            onDoubleClick={() => navigate(`/element/${element.symbol}`)}
                            onClick={handleClickElement(element)}
                            className={cn("z-10 bg-dark/50 opacity-0 absolute size-full centered animate cursor-pointer", {
                              "opacity-100": notHovered,
                            })}
                          />
                          <p className="absolute leading-3 top-1.5 left-1 hd:top-0 hd:left-0.5 fullHd:top-1 2k:top-2 2k:left-1 4k:left-2 4k:top-4 text-dark font-semibold">
                            {element.static.generalProperties.atomicNumber}
                          </p>
                          <p
                            className={cn(
                              "absolute leading-3 top-1.5 right-1 hd:top-0 hd:right-0.5 fullHd:top-1 2k:top-2 2k:right-1 4k:right-2 4k:top-4 text-dark font-semibold",
                              {
                                "opacity-0": !setting.withAtomicWeight,
                              },
                            )}
                          >
                            {element?.static.generalProperties.atomicWeight.toLocaleString(lang, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </p>
                          <p
                            className={cn("animate absolute centered-bottom text-dark font-semibold", {
                              "opacity-0": !setting.withName,
                            })}
                          >
                            {tElement?.name}
                          </p>

                          <h5 className="absolute centered leading-3">{element.symbol}</h5>
                        </Fragment>
                      ) : null}
                    </div>
                  );
                })}
              </Fragment>
            );
          })}
        </section>

        <section className="flex flex-col gap-2">
          <section className="grid grid-cols-18 gap-1 fullHd:gap-2 4k:gap-4 animate pl-12 4k:pl-20 pr-6">
            {ELEMENT_DATA2.map((element, index) => {
              const hovered =
                (clickedElement && element && clickedElement.symbol === element.symbol) ||
                (hoveredCategory && element && hoveredCategory === element.category);
              const notHovered =
                (clickedElement && element && clickedElement.symbol !== element.symbol) ||
                (hoveredCategory && element && hoveredCategory !== element.category);

              const tElement = element && t.elements[element.symbol];
              return (
                <div
                  key={index}
                  className="border-4 bg-light aspect-square relative group"
                  style={{
                    borderColor: element?.category ? CATEGORIES[element.category].color : "#B1C0C9",
                    color:
                      hovered && element.category ? "#FEFEFE" : element?.category ? CATEGORIES[element.category].color : "#B1C0C9",
                    backgroundColor: hovered && element.category ? CATEGORIES[element.category].color : undefined,
                  }}
                >
                  {element ? (
                    <Fragment>
                      <button
                        type="button"
                        onDoubleClick={() => navigate(`/element/${element.symbol}`)}
                        onClick={handleClickElement(element)}
                        className={cn("z-50 bg-dark/50 opacity-0 absolute size-full centered animate cursor-pointer", {
                          "opacity-100": notHovered,
                        })}
                      />
                      <p className="absolute leading-3 top-1.5 left-1 hd:top-0 hd:left-0.5 fullHd:top-1 2k:top-2 2k:left-1 4k:left-2 4k:top-4 text-dark font-semibold">
                        {element.static.generalProperties.atomicNumber}
                      </p>
                      <p
                        className={cn(
                          "absolute leading-3 top-1.5 right-1 hd:top-0 hd:right-0.5 fullHd:top-1 2k:top-2 2k:right-1 4k:right-2 4k:top-4 text-dark font-semibold",
                          {
                            "opacity-0": !setting.withAtomicWeight,
                          },
                        )}
                      >
                        {element?.static.generalProperties.atomicWeight.toLocaleString(lang, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                      <p
                        className={cn("animate absolute centered-bottom text-dark font-semibold", {
                          "opacity-0": !setting.withName,
                        })}
                      >
                        {tElement?.name}
                      </p>

                      <h5 className="absolute centered leading-3">{element.symbol}</h5>
                    </Fragment>
                  ) : null}
                </div>
              );
            })}
          </section>

          <section className="grid grid-cols-18 gap-1 fullHd:gap-2 4k:gap-4 animate pl-12 4k:pl-20 pr-6">
            {ELEMENT_DATA3.map((element, index) => {
              const hovered =
                (clickedElement && element && clickedElement.symbol === element.symbol) ||
                (hoveredCategory && element && hoveredCategory === element.category);
              const notHovered =
                (clickedElement && element && clickedElement.symbol !== element.symbol) ||
                (hoveredCategory && element && hoveredCategory !== element.category);

              const tElement = element && t.elements[element.symbol];
              return (
                <div
                  key={index}
                  className="border-4 bg-light aspect-square relative group"
                  style={{
                    borderColor: element?.category ? CATEGORIES[element.category].color : "#B1C0C9",
                    color:
                      hovered && element.category ? "#FEFEFE" : element?.category ? CATEGORIES[element.category].color : "#B1C0C9",
                    backgroundColor: hovered && element.category ? CATEGORIES[element.category].color : undefined,
                  }}
                >
                  {element ? (
                    <Fragment>
                      <button
                        type="button"
                        onDoubleClick={() => navigate(`/element/${element.symbol}`)}
                        onClick={handleClickElement(element)}
                        className={cn("z-50 bg-dark/50 opacity-0 absolute size-full centered animate cursor-pointer", {
                          "opacity-100": notHovered,
                        })}
                      />
                      <p className="absolute leading-3 top-1.5 left-1 hd:top-0 hd:left-0.5 fullHd:top-1 2k:top-2 2k:left-1 4k:left-2 4k:top-4 text-dark font-semibold">
                        {element.static.generalProperties.atomicNumber}
                      </p>
                      <p
                        className={cn(
                          "absolute leading-3 top-1.5 right-1 hd:top-0 hd:right-0.5 fullHd:top-1 2k:top-2 2k:right-1 4k:right-2 4k:top-4 text-dark font-semibold",
                          {
                            "opacity-0": !setting.withAtomicWeight,
                          },
                        )}
                      >
                        {element?.static.generalProperties.atomicWeight.toLocaleString(lang, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                      <p
                        className={cn("animate absolute centered-bottom text-dark font-semibold", {
                          "opacity-0": !setting.withName,
                        })}
                      >
                        {tElement?.name}
                      </p>

                      <h5 className="absolute centered leading-3">{element.symbol}</h5>
                    </Fragment>
                  ) : null}
                </div>
              );
            })}
          </section>
          <section className="flex justify-between items-end pl-12 4k:pl-20 pr-6">
            <section className="grid grid-cols-3 gap-4 mt-8 w-[50%] xl:w-[70%]">
              {CATEGORIES_OPTIONS.map((e) => {
                const notHovered = hoveredCategory && hoveredCategory !== e.value;
                return (
                  <section
                    onMouseEnter={() => setHoveredCategory(e.value)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    key={e.value}
                    className="flex gap-3 4k:gap-6 items-center"
                  >
                    <div className="size-12 4k:size-32 aspect-square relative" style={{ backgroundColor: e.color }}>
                      <div
                        className={cn("z-50 bg-dark/50 opacity-0 absolute size-full centered animate cursor-pointer", {
                          "opacity-100": notHovered,
                        })}
                      />
                    </div>
                    <h6 className="leading-5">{t.elementCategories[e.value]}</h6>
                  </section>
                );
              })}
            </section>
            <img alt="Logo" src="/logo.svg" className="size-20 bg-light rounded-md shadow-md" />
          </section>
        </section>
      </section>
    </article>
  );
}
