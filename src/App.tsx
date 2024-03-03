import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { getLang, setLang } from "./utils/functions";

export default function App() {
  useEffect(() => {
    const lang = getLang();
    if (!lang) setLang("ru");
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
