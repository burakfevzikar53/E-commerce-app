import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className={`add-to-cart-btn ${added ? "added" : ""}`}
      >
        {added ? "Added!" : "Add to Cart"}
      </button>
      <Link to={`/product/${product.id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
