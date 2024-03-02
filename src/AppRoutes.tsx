import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
    </Routes>
  );
}
