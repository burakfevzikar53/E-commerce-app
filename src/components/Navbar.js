import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/">BFK SHOP</Link>
      </h1>
      <div className="nav-links">
        <Link to="/cart" className="nav-link">
          Cart ({cart.length})
        </Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
