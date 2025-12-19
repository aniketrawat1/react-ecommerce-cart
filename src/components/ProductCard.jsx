import { useCart } from "./context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card fade-in">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">₹{product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}
