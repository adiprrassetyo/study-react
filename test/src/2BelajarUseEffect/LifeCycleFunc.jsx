import React from "react";
import { useEffect, useState } from "react";

function LifeCycleFunc() {
  const [name, setName] = useState("");
  const [isUpdate, setUpdate] = useState(false);
  // handle get data from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => {
        setName(json.name);
      });
  }, []);

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users/1", {
      method: "PUT",
      body: JSON.stringify({
        name: name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUpdate(true);
      });
  };

  // component did update
  useEffect(() => {
    if (isUpdate) {
      alert("Data berhasil diupdate");
      setUpdate(false);
    }
  }, [isUpdate]);

  // component will unmount
  useEffect(() => {
    return () => {
      alert("Component akan dihapus");
    };
  }, []);

  return (
    <div>
      <h3>Name : {name}</h3>
      <hr />
      <h3>Update Name</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default LifeCycleFunc;
