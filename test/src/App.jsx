import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("cipto");
  const [age, setAge] = useState(15);
  const [jumlah, setJumlah] = useState(0);

  const handleNameChange = () => {
    setName("John");
  };
  const handleAgeChange = () => {
    setAge(20);
  };
  return (
    <div className="App">
      <h1>{name}</h1>
      <h1>{age}</h1>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleAgeChange}>Change Age</button>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>Jumlah Pengunjung : {jumlah} pengunjung</p>
        <button onClick={() => setJumlah(jumlah + 1)}>Tambah Pengunjung</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
