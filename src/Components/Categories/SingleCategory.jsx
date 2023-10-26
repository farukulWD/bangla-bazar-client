import React from "react";

const SingleCategory = ({ category }) => {
  return (
    <>
      <div className="text-center rounded cursor-pointer h-24 w-28 mx-auto p-1 ">
        <img
          className="w-14 flex mx-auto h-14"
          src={category?.picture}
          alt=""
        />
        <p className="">{category?.category_name}</p>
      </div>
    </>
  );
};

export default SingleCategory;
