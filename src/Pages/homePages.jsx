import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";

const HomePages = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </div>
  );
};

export default HomePages;