import React, { useState } from "react";
import { useProduct } from "../../context/ProductContext";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { setOpenModal, totalCartCount} = useProduct();

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
          <button className="basket-btn" onClick={() => setOpenModal(true)}>
            <i className="fa-solid fa-cart-plus"></i>
            <span>{totalCartCount}</span>
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
