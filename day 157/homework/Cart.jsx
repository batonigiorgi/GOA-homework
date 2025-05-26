export default function Cart({ cartItems, removeFromCart }) {
    return (
      <div className="p-4 bg-gray-100 rounded shadow mt-6">
        <h2 className="text-lg font-bold mb-2">🛒 Cart</h2>
        {cartItems.length === 0 ? (
          <p>Cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} x{item.quantity}</span>
              <button
                className="text-red-500"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    );
  }
  