import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
function App() {
  // UseState hook memungkinkan kita untuk mendefinisikan suatu state, mendefinisikan initial value pada state, serta mengupdate value suatu state.
  const [products, setProducts] = useState([
    { id: 1, title: "Product 1", price: 899 },
    { id: 2, title: "Product 2", price: 982 },
    { id: 3, title: "Product 3", price: 322 },
    { id: 4, title: "Product 4", price: 763 },
    { id: 5, title: "Product 5", price: 389 },
  ]);

  const deleteProduct = (productId) => {
    const newProducts = products.filter((product) => product.id !== productId);
    setProducts(newProducts);
  };
  //useEffect merupakan function yang berjalan setiap kali terdapat perubahan pada DOM.
  const [name, setName] = useState("Fikri");
  useEffect(() => {
    console.log("Use Effect Running");
  }, [name]);
  return (
    <div>
      <ProductList products={products} deleteProduct={deleteProduct} />
      <button onClick={() => setName("John")}>Change Name</button>
      <p>Name: {name}</p>
    </div>
  );
}

export default App;
