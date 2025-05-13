export default function ProductItem({ name, price, inStock }) {
    return (
      <div className="p-4 border rounded mb-2">
        <h3 className="font-bold">{name}</h3>
        <p>${price}</p>
        <p className={inStock ? 'text-green-600' : 'text-red-600'}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>
    );
  }
  