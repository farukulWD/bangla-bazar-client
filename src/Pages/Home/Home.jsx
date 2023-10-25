import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Categories from "../../Components/Categories/Categories";

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
      </div>
    </HelmetProvider>
  );
};

export default Home;
