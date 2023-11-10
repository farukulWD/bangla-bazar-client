import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("product.json").then((res) => setProducts(res.data));
  }, []);
  console.log(products);
  return <div>This is products Page</div>;
};

export default Products;
