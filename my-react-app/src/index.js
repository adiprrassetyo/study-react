import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/file" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
