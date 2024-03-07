import { lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}
