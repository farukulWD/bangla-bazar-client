import React from "react";
import Home from "../Pages/Home/Home";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Footer />
    </div>
  );
};

export default Main;
