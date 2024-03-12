import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
const List = lazy(() => import("@/pages/List"));
const ElementBySymbol = lazy(() => import("@/pages/ElementBySymbol"));
const Compare = lazy(() => import("@/pages/Compare"));
const SolubilityChart = lazy(() => import("@/pages/SolubilityChart"));
const ReactivitySeries = lazy(() => import("@/pages/ReactivitySeries"));
const Navbar = lazy(() => import("@/components/Navbar"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ElementBySymbol />} path="/element/:symbol" />
          <Route element={<List />} path="/list" />
          <Route element={<Compare />} path="/compare" />
          <Route element={<SolubilityChart />} path="/solubility-chart" />
          <Route element={<ReactivitySeries />} path="/reactivity-series" />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
