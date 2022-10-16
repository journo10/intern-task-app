import React from "react";
import { useProduct } from "../../context/ProductContext";
import Cart from "../Cart";
import "./Modal.css";

const Modal = () => {
  const { product, openModal, onClose } = useProduct();

  if (!openModal) {
    return null;
  }

  return (
    <div className="m-card">
      <div className="modal">
        <div className="modal-text">
          {product.cart.length === 0 ? <h1>Your cart is empty.</h1> : <Cart />}
          <button type="button" className="m-btn" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
