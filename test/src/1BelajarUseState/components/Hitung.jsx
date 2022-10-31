import React from "react";

export default function Hitung() {
  const [jumlah, setJumlah] = React.useState(0);
  return (
    <div>
      <h1>Hitung</h1>
      <p>Jumlah : {jumlah}</p>
      <button onClick={() => setJumlah(jumlah + 1)}>Tambah</button>
    </div>
  );
}
