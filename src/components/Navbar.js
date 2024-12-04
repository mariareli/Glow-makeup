import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logogm.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo Glow Makeup" className="logo" />
        <h1>Glow Makeup</h1>
      </div>
      <div className="navbar-right">
        <Link to="/" className="navbar-link">Inicio</Link>
        <Link to="/catalog" className="navbar-link">Catálogo</Link>
        <Link to="/about" className="navbar-link">Nosotros</Link>
        <div className="cart-icon">
          <Link to="/cart" className="navbar-link">🛒</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
