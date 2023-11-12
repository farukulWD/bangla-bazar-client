import React from "react";

const ProductCart = ({ product }) => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={product?.image} alt={product?.product_name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product?.product_name}</h2>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">bye</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
