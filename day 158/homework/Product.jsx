import PropTypes from "prop-types";

export default function Product({ name, price, inStock }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-semibold text-lg">{name}</h2>
      <p>Price: ${price}</p>
      <p className={inStock ? "text-green-600" : "text-red-500"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  inStock: PropTypes.bool.isRequired,
};
