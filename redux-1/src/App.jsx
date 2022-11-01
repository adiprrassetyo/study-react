import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListKontak from "./components/ListKontak";

function App() {
  const [nama, setNama] = useState("Rizki");

  return (
    <div className="App">
      <h2>Aplikasi Contact App {nama}</h2>
      <ListKontak nama={nama} />
    </div>
  );
}

export default App;
