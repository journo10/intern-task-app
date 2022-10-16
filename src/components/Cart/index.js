import React from "react";
import { useProduct } from "../../context/ProductContext";
import "./Cart.css";

const Cart = () => {
  const { product, inc, dec, removeCart, totalCart } = useProduct();

  return (
    <>
      {product.cart.map((c) => (
        <div className="cart" key={c.id}>
          <img src={c.image} alt={c.title} />
          <div className="container">
            <div className="cart-text">
              <h4>{c.title}</h4>
              <p className="p-desc">{c.desc}</p>
              <p className="p-price">
                <b>$</b>
                {(c.price * c.count).toFixed(2)}
              </p>
            </div>
            <div className="p-btn">
              <div className="p-count">
                <button onClick={() => inc(c.id)} className="btn">
                  +
                </button>
                <span>{c.count}</span>
                <button onClick={() => dec(c.id)} className="btn">
                  -
                </button>
              </div>
              <button onClick={() => removeCart(c.id)} className="btn">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
