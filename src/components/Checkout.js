import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "../styles/Checkout.css";
import { processPayment } from "../utils/paymentApi";

const Checkout = () => {
  const { cart } = useCart();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handlePayment = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await processPayment(cart, calculateTotal());
      setMessage(response); // Ödeme başarılı
    } catch (error) {
      setMessage(error); // Ödeme başarısız
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p>Total Items: {cart.length}</p>
      <p>Total Price: ${calculateTotal()}</p>
      {message && <p className="message">{message}</p>}
      <button
        onClick={handlePayment}
        className="checkout-btn"
        disabled={loading}
      >
        {loading ? "Processing..." : "Proceed to Payment"}
      </button>
    </div>
  );
};

export default Checkout;
