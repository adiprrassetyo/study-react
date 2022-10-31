import React from "react";
import Hitung from "../components/Hitung";

export default function Home() {
  return (
    <div style={{ padding: "50px" }}>
      <header>
        <h2>Aplikasi Penghitung</h2>
      </header>

      <hr />
      <Hitung />
      <hr />

      <footer>
        <p>Created by Cipto</p>
      </footer>
    </div>
  );
}
