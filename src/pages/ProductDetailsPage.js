import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetailsPage.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = {
    id,
    name: `Product ${id}`,
    price: 29.99,
    image: "https://via.placeholder.com/300",
    description: "This is a detailed description of the product."
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <h1>{product.name}</h1>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
    </div>
  );
};

export default ProductDetailsPage;
