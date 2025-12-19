import { Link } from "react-router-dom";
import { useCart } from "./context/CartContext";
import { useAuth } from "./context/AuthContext";

export default function Header() {
  const { cart } = useCart();
  const { user, logout } = useAuth();

  // ✅ CORRECT TOTAL COUNT
  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="header">
      <h2>Mini E-Commerce Store</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({totalItems})</Link>

        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}
