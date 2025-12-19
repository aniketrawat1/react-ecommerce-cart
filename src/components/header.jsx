import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";

export default function Header() {
  const { cart } = useCart();

  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <h1>Mini E-Commerce Store</h1>
      <Link to="/cart">🛒 Cart ({count})</Link>
    </header>
  );
}
