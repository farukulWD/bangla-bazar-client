import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <HelmetProvider>
      <div className="my-container">
        <Helmet>
          <title>Home</title>
        </Helmet>
        This is home page
      </div>
    </HelmetProvider>
  );
};

export default Home;
