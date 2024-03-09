import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function Context(props) {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || [])
  const getproduct = () => {
    setProducts(JSON.parse(localStorage.getItem('products')))
  };
  useEffect(() => {
    getproduct();
    localStorage.setItem('products', JSON.stringify([...products]))
  }, []);
  return <ProductContext.Provider value={[products, setProducts]}>{props.children}</ProductContext.Provider>;
}

export default Context;
