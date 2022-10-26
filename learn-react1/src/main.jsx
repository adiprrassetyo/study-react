import React from "react";
import ReactDOM from "react-dom/client";
// import router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./about";
import File from "./file";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/file" element={<File />} />
    </Routes>
  </BrowserRouter>
);
