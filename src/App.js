import React from "react";
import Header from "./Component/Header/Header";
import Heading from "./Component/Heading/Heading";
import Login from "./Component/Main/Login/Login";
import Payment from "./Component/Main/Payment/Payment";
import Cart from "./Component/Main/Cart/Cart";
import Footer from "./Component/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Heading />
      <div className="main-adjustment">
        <Login />
        <Payment />
        <Cart />
      </div>
      <Footer />
    </>
  );
};

export default App;
