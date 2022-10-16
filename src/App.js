import React from "react";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

const App = () => {
  return (
    <>
      <Navbar />
      <Product />
      <Modal />
    </>
  );
};

export default App;
