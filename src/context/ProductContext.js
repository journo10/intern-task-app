import { useState } from "react";
import { createContext, useContext } from "react";
import { data } from "../data/data";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({
    productList: data,
    cart: [],
  });

  //console.log(product.productList);

  //Add To Card
  const addToCart = (item) => {
    setProduct({
      ...product,
      cart: product.cart.find((cartItem) => cartItem.id === item.id)
        ? product.cart.map((cItem) =>
            cItem.id === item.id ? { ...cItem, count: cItem.count + 1 } : cItem
          )
        : [...product.cart, { ...item, count: 1 }],
    });
  };

  //remove cart
  const removeCart = (id) => {
    setProduct({
      ...product,
      cart: product.cart.filter((cartItem) => cartItem.id !== id),
    });
  };

  //increase
  const inc = (id) => {
    setProduct({
      ...product,
      cart: product.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ),
    });
  };

  //decrease
  const dec = (id) => {
    setProduct({
      ...product,
      cart: product.cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
          : cartItem
      ),
    });
  };

  //Total
  const totalCart = product.cart
    .reduce((total, item) => (total = total + item.price * item.count), 0)
    .toFixed(2);

  //Sepeteki ürün sayısı
  const totalCartCount = product.cart.reduce(
    (total, item) => (total = total + item.count),
    0
  );

  const values = {
    product,
    setProduct,
    addToCart,
    removeCart,
    inc,
    dec,
    totalCart,
    totalCartCount,
  };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
