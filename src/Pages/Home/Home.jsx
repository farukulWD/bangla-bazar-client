import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Categories from "../../Components/Categories/Categories";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
  return (
    <HelmetProvider>
      <div className="my-container">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div>
          <Categories></Categories>
        </div>
        <div>
          <Banner></Banner>
        </div>
        <div>
          <Products></Products>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;
