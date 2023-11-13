import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import ProductCart from "./ProductCart";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("product.json").then((res) => setProducts(res.data));
  }, []);
  console.log(products);
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCart key={product._id} product={product}></ProductCart>
      ))}
    </div>
  );
};

export default Products;
