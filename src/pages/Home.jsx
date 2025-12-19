import { useCart } from "../components/context/CartContext";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    image: "/images/headphone.png",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2999,
    image: "/images/watch.png",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1499,
    image: "/images/speaker.png",
  },
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <div className="page">
      <h2>Curated Collection</h2>

      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
