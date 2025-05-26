import Product from "./Product";

function App() {
  const product = {
    name: "Logitech Mouse",
    price: 49,
    inStock: true,
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">🛍 Product Info</h1>
      <Product name={product.name} price={product.price} inStock={product.inStock} />
    </div>
  );
}

export default App;
