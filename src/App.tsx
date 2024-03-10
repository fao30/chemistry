import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ElementBySymbol from "./pages/ElementBySymbol";

const Home = lazy(() => import("@/pages/Home"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ElementBySymbol />} path="/element/:symbol" />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
