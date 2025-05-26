import { useState } from "react";
import parts from "./Parts";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (part) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === part.id);
      if (existing) {
        return prev.map((item) =>
          item.id === part.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...part, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧩 PC Parts Store</h1>

      <div className="grid grid-cols-2 gap-4">
        {parts.map((part) => (
          <div key={part.id} className="border p-4 rounded shadow">
            <h2 className="font-bold text-lg">{part.name}</h2>
            <p className="text-sm text-gray-600">{part.description}</p>
            <p className="font-semibold mt-2">${part.price}</p>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
              onClick={() => addToCart(part)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>

      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;
