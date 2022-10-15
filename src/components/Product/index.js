import React, { useState } from "react";
import "./Product.css";
import { images } from "../../data/data";

const Product = () => {
  const [activeImg, setActiveImg] = useState(images[0]);

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
        <div className="product-right">
          <div className="product-text">
            <h1 className="p-title">Customizable Modern T-shirt</h1>
            <p className="p-desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              nesciunt vero recusandae! Odit placeat doloribus iusto corrupti
              voluptates odio possimus, nostrum aliquid voluptate quae,
              recusandae qui eum maiores, fuga vero officiis inventore cum
              numquam fugiat reprehenderit. Hic nihil veritatis tenetur ullam
              saepe laudantium eaque nostrum quasi minus, quod molestias
              corrupti obcaecati pariatur officiis labore facere assumenda a?
              Fuga eum laudantium delectus quam qui, veritatis voluptatibus,
              necessitatibus eius deserunt, debitis corrupti reiciendis a
              reprehenderit nobis odio? Vel quis omnis natus, repellendus vitae
              libero dolore facilis quod tempora debitis, dolorem repellat non
              error tenetur temporibus. Ipsam quasi amet autem cumque eius.
              Perspiciatis?
            </p>
            <span className="p-price">$89.99</span>
          </div>
          <form className="p-form">
            <label htmlFor="colors">Colors:</label>
            <select name="colors" id="colors" className="select">
              <option defaultValue="Seçiniz">Seçiniz</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Yellow">Yellow</option>
            </select>
            <label htmlFor="sizes">Sizes:</label>
            <select name="sizes" id="sizes" className="select">
              <option defaultValue="Seçiniz">Seçiniz</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </form>
          <div className="product-count">
            <div className="p-count">
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>
            <div className="product-add">
              <button>
                <i className="fa-solid fa-cart-plus"></i>Add To Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
