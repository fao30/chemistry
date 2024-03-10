import Box from "@/components/Box";
import { CRYSTAL_STRUCTURES } from "@/components/CrystalStructures";
import useSetting from "@/hooks/useSetting";
import { CATEGORIES, ELEMENT_DATA } from "@/lib/constants";
import { Navigate, useParams } from "react-router-dom";

export default function ElementBySymbol() {
  const { symbol } = useParams();

  const data = ELEMENT_DATA.find((e) => e.symbol === symbol);
  if (!data) return <Navigate to="/" />;

  const { t, setting } = useSetting();
  const tData = t.elements[data.symbol];

  //   {/* <img src={`/assets/elements/${data.symbol}.jpg`} alt={tData.name} /> */}

  return (
    <article className="p-6 grid grid-cols-4 gap-6 text-dark">
      {/* FIRST COLUMN */}
      <section className="flex flex-col gap-6">
        <Box classNameDiv="p-6 flex items-center justify-center">
          <h5>{tData.name}</h5>
        </Box>
        <section className="grid grid-cols-2 gap-6">
          <Box classNameDiv="relative aspect-square">
            <h5 className="absolute top-2 left-2.5">{data.static.generalProperties.atomicNumber}</h5>
            <h1 className="absolute centered">{data.symbol}</h1>
          </Box>
          <Box classNameDiv="aspect-square flex flex-col justify-between">
            <div className="grid grid-cols-2">
              <h6 className="title">{t.titles.group}</h6>
              <h6>{data.group}</h6>
            </div>
            <div className="grid grid-cols-2">
              <h6 className="title">{t.titles.period}</h6>
              <h6>{data.period}</h6>
            </div>
            <div className="grid grid-cols-2">
              <h6 className="title">{t.titles.block}</h6>
              <h6>{data.block}</h6>
            </div>
          </Box>
        </section>
        <Box classNameDiv="grid grid-cols-3">
          <section className="flex items-center justify-center flex-col gap-4">
            <h6 className="title">{t.titles.protons}</h6>
            <h6>{data.static.unGrouped.protons}</h6>
          </section>
          <section className="flex items-center justify-center flex-col gap-4">
            <h6 className="title">{t.titles.electrons}</h6>
            <h6>{data.static.unGrouped.electrons}</h6>
          </section>
          <section className="flex items-center justify-center flex-col gap-4">
            <h6 className="title">{t.titles.neutrons}</h6>
            <h6>{data.static.unGrouped.neutrons}</h6>
          </section>
        </Box>
        <Box title={t.titles.generalProperties}>
          <section className="flex flex-col gap-4">
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.atomicNumber}</h6>
              <h6>{data.static.generalProperties.atomicNumber}</h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.atomicWeight}</h6>
              <h6>{data.static.generalProperties.atomicWeight}</h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.massNumber}</h6>
              <h6>{data.static.generalProperties.massNumber}</h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.category}</h6>
              <h6>{t.elementCategories[data.category]}</h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.color}</h6>
              <h6>{t.colors[data.static.generalProperties.color]}</h6>
            </section>
            <section className="grid grid-cols-2">
              <h6 className="title">{t.titles.radioactive}</h6>
              <h6>{data.static.generalProperties.radioActive ? t.titles.yes : t.titles.no}</h6>
            </section>
          </section>
        </Box>
        <Box classNameDiv="flex flex-col gap-4">
          <p>{tData.nameOrigin}</p>
        </Box>
        <Box>
          <section className="grid grid-cols-2">
            <h6 className="title">{t.titles.crystalStructure}</h6>
            <h6>{t.crystalStructures[data.static.crystalStructure]}</h6>
          </section>
          {CRYSTAL_STRUCTURES[data.static.crystalStructure].component}
        </Box>
      </section>
      <div className="rounded-md bg-light border-t-2 h-fit">dasdasdads</div>
      <div className="rounded-md bg-light border-t-2 h-fit">dasdas</div>
    </article>
  );
}
