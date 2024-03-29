import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Layout from "./components/Layout";
import Timeline from "./components/Timeline";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route index path=":element" element={<App />} />
        <Route path="timeline" element={<Timeline />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
