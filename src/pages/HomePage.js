import React from "react";
import ProductList from "../components/ProductList";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Welcome to BFK Store</h2>
      <p>Discover the best products just for you.</p>
      <ProductList />
    </div>
  );
};

export default HomePage;
