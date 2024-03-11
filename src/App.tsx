import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
const List = lazy(() => import("@/pages/List"));
const ElementBySymbol = lazy(() => import("@/pages/ElementBySymbol"));
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
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
