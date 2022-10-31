import React from "react";
import LifeCycleFunc from "../LifeCycleFunc";

export default function Home() {
  return (
    <div style={{ padding: "50px" }}>
      <header>
        <h2>Belajar Lifecycle & Use Effect</h2>
      </header>

      <hr />
      <LifeCycleFunc />
      <hr />

      <footer>
        <p>Created by Cipto</p>
      </footer>
    </div>
  );
}
