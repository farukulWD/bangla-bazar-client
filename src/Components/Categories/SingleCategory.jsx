import React from "react";

const SingleCategory = ({ category }) => {
  return (
    <>
      <div className="text-center rounded cursor-pointer h-24 w-28 mx-auto p-1 ">
        <img
          className="w-10 flex mx-auto h-10"
          src={category?.picture}
          alt=""
        />
        <p className="">{category?.category_name}</p>
      </div>
    </>
  );
};

export default SingleCategory;
