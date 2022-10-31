import ProductList from "./components/ProductList";
function App() {
  return (
    <div>
      <ProductList products={products} deleteProduct={deleteProduct} />
      <button onClick={() => setName("John")}>Change Name</button>
      <p>Name: {name}</p>
    </div>
  );
}

export default App;
