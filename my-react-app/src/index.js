import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import router dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import "bulma/css/bulma.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/about" element={<About />} />
      <Route path="/file" element={<Contact />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/file" element={<Contact />} />
      <Route path="/edit/:id" element={<EditProduct />} />
    </Routes>
  </BrowserRouter>
);
