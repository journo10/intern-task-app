import React, { useState } from "react";
import { useProduct } from "../../context/ProductContext";
import "./Product.css";
import { images } from "../../data/data";

const Product = () => {
  const [activeImg, setActiveImg] = useState(images[0]);
  const { product,setProduct, addToCart } = useProduct();
  const [form, setForm] = useState({ sizes: "", colors: "" });

  //colors, sizes
  const handleFilterForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  
  // console.log(form);

  return (
    <main>
      <div className="container">
        {/* Left */}
        <div className="product-left">
          <img src={activeImg} alt="active-images" className="active-img" />
          <div className="p-image">
            {images.map((img, index) => (
              <img
                key={index}
                className="img"
                src={img}
                alt="img"
                onClick={() => setActiveImg(img)}
                style={{
                  border: activeImg === img ? "2px solid #f27a1a" : "",
                  opacity: activeImg === img ? "1" : "",
                }}
              />
            ))}
          </div>
        </div>
        {/* Right */}
        {product.productList.map((p) => (
          <div className="product-right" key={p.id}>
            <div className="product-text">
              <h1 className="p-title">{p.title}</h1>
              <p className="p-desc">{p.desc}</p>
              <span className="p-price">
                <b>$</b>
                {p.price}
              </span>
            </div>
            <form className="p-form">
              <label htmlFor="sizes">Sizes:</label>
              <select
                value={form.sizes}
                name="sizes"
                id="sizes"
                className="select"
                onChange={handleFilterForm}
              >
                <option defaultValue="Seçiniz">Seçiniz</option>
                {p.sizes.map((s) => (
                  <option key={s.id} value={s.size}>
                    {s.size}
                  </option>
                ))}
              </select>
              <label htmlFor="colors">Colors:</label>
              <select
                value={form.colors}
                name="colors"
                id="colors"
                className="select"
                onChange={handleFilterForm}
              >
                <option defaultValue="Seçiniz">Seçiniz</option>
                {p.colors.map((c) => (
                  <option key={c.id} value={c.color}>
                    {c.color}
                  </option>
                ))}
              </select>
            </form>
            <div className="product-count">
              {/* <div className="p-count">
                <button>-</button>
                <span>0</span>
                <button>+</button>
              </div> */}
              <div className="product-add">
                <button onClick={() => addToCart(p)}>
                  <i className="fa-solid fa-cart-plus"></i>Add To Card
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Product;
