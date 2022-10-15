import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="logo">
          <div className="logo-title">
            <a href="/" onClick={handleCloseMenu}>
              <h3>T-Shirt</h3>
            </a>
          </div>
        </div>
        <ul className={menu ? "nav-list active" : "nav-list"}>
          <li className="nav-item">
            <a href="/" onClick={handleCloseMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/" onClick={handleCloseMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/" onClick={handleCloseMenu}>
              Contact
            </a>
          </li>
        </ul>
        <div className="basket">
          <button className="basket-btn">
            <i className="fa-solid fa-cart-plus"></i>
            <span>1</span>
          </button>
        </div>
        <div className="menu" onClick={handleMenu}>
          <i className={menu ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
