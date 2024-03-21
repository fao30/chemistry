import useSetting from "@/hooks/useSetting";
import { ELEMENT_DATA_COMPLETE } from "@/lib/constants";
import { cn } from "@/lib/functions";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

type SortBy = "atomicNumber" | "name" | "symbol";

export default function List() {
  const { color, t } = useSetting();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = (searchParams.get("q") as string) ?? "";
  const sortBy: SortBy = (searchParams.get("sortBy") as SortBy) ?? "atomicNumber";
  const sortOrder: "asc" | "desc" = (searchParams.get("sortOrder") as "asc" | "desc") ?? "asc";

  const defaultData = ELEMENT_DATA_COMPLETE.map((e) => ({
    ...e,
    name: t.elements[e.symbol].name,
    symbol: e.symbol,
    atomicNumber: e.static.generalProperties.atomicNumber,
  }));

  const [data, setData] = useState(defaultData);

  const handleSort = (sort: "atomicNumber" | "name" | "symbol") => {
    if (sort === sortBy) {
      searchParams.set("sortOrder", sortOrder === "asc" ? "desc" : "asc");
      setSearchParams(searchParams);
    } else {
      searchParams.set("sortBy", sort);
      searchParams.set("sortOrder", "asc");
      setSearchParams(searchParams);
    }
  };

  useEffect(() => {
    let updatedData = structuredClone(data);

    if (search || !search) {
      updatedData = defaultData.filter(
        (e) => e.name.toLowerCase().includes(search.toLowerCase()) || e.symbol.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (sortBy) {
      if (sortOrder === "asc") {
        updatedData = updatedData.sort((a, b) => {
          if (a[sortBy] < b[sortBy]) return -1;
          if (a[sortBy] > b[sortBy]) return 1;
          return 0;
        });
      } else {
        updatedData = updatedData.sort((a, b) => {
          if (a[sortBy] > b[sortBy]) return -1;
          if (a[sortBy] < b[sortBy]) return 1;
          return 0;
        });
      }
    }

    setData(updatedData);
  }, [search, sortBy, sortOrder]);

  return (
    <article className="p-6 flex flex-col gap-6">
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          className="h-12 2k:h-24 h6 bg-black text-light border-2 border-gray-600 px-6 outline-none"
          placeholder="Search"
          value={search}
          onChange={(e) => {
            searchParams.set("q", e.target.value);
            setSearchParams(searchParams);
          }}
        />
        <button
          type="button"
          className="hover:opacity-80 h-12 2k:h-24 text-light px-6 outline-none flex items-center justify-center"
          style={{ backgroundColor: color }}
          onClick={() => handleSort("atomicNumber")}
        >
          {sortBy === "atomicNumber" ? (
            <Icon
              icon="mdi:arrow-down-thin"
              width={25}
              className={cn("animate", { "rotate-180": sortOrder === "asc" }, { "rotate-270": sortOrder === "desc" })}
            />
          ) : null}
          <h6>{t.navbar.sortByNumber}</h6>
        </button>

        <button
          type="button"
          className="hover:opacity-80 h-12 2k:h-24 text-light px-6 outline-none flex items-center justify-center"
          style={{ backgroundColor: color }}
          onClick={() => handleSort("name")}
        >
          {sortBy === "name" ? (
            <Icon
              icon="mdi:arrow-down-thin"
              width={25}
              className={cn("animate", { "rotate-180": sortOrder === "asc" }, { "rotate-270": sortOrder === "desc" })}
            />
          ) : null}
          <h6>{t.navbar.sortByName}</h6>
        </button>

        <button
          type="button"
          className="hover:opacity-80 h-12 2k:h-24 text-light px-6 outline-none flex items-center justify-center"
          style={{ backgroundColor: color }}
          onClick={() => handleSort("symbol")}
        >
          {sortBy === "symbol" ? (
            <Icon
              icon="mdi:arrow-down-thin"
              width={25}
              className={cn("animate", { "rotate-180": sortOrder === "asc" }, { "rotate-270": sortOrder === "desc" })}
            />
          ) : null}
          <h6>{t.navbar.sortBySymbol}</h6>
        </button>
      </section>
      <section className="grid md:grid-cols-3 lg:grid-cols-5 4k:grid-cols-4 gap-4">
        {data.map((e) => {
          return (
            <button
              type="button"
              key={e.symbol}
              onClick={() => navigate(`/element/${e.symbol}`)}
              className="relative w-full py-4 flex items-center justify-center bg-gray-600 hover:opacity-80"
            >
              <h6
                className="left-0 top-0 text-light h-full aspect-square absolute flex items-center justify-center"
                style={{ backgroundColor: color }}
              >
                {e.symbol}
              </h6>
              <h6>{t.elements[e.symbol].name}</h6>
              <h6 className="absolute right-2.5 top-2">{e.static.generalProperties.atomicNumber}</h6>
            </button>
          );
        })}
      </section>
    </article>
  );
}
