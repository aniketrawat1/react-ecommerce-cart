import { useCart } from "../components/context/CartContext";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    clearCart,
  } = useCart();

  const { user } = useAuth();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <h2 className="page">Cart is empty</h2>;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleProceed = () => {
    if (!user) {
      navigate("/login");
    } else {
      alert("Checkout coming next 🚀");
      // later → navigate("/checkout")
    }
  };

  return (
    <div className="page">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>

          <div className="qty-controls">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <div style={{ display: "flex", gap: "12px" }}>
        <button onClick={handleProceed}>Proceed to Checkout</button>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
}
