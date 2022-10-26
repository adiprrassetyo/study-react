import { useState, useRef } from "react";
import logo from "./assets/react.svg";
import "./App.css";

function File() {
  const [imageFile, setImageFile] = useState(logo);
  const fileRef = useRef();

  function handleChange() {
    const image = fileRef.current.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      setImageFile(reader.result);
    });

    reader.readAsDataURL(image);
  }

  return (
    <div className="File">
      <header className="File-header">
        <img src={imageFile} className="File-logo" alt="logo" />
        <input
          ref={fileRef}
          type="file"
          placeholder="Gambar"
          onChange={handleChange}
        ></input>
      </header>
    </div>
  );
}

export default File;
