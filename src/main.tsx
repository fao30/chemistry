import "@/styles/index.css";
import "@/styles/stylesheet.css";
import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: { fontFamily: "Jost" },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
