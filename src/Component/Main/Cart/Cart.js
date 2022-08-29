import React from "react";
import "./Cart.css";
import { MdOutlineLocalShipping } from "react-icons/md";

const Cart = () => {
  return (
    <div className="cart-main-container">
      <div className="cart-heading-container">
        <h3 className="cart-heading">Your cart</h3>
      </div>

      <div className="cart-items-container">
        <div className="cart-item">
          <div className="cart-item-2">
            <img src="./Assests/white.jpeg" className="cart-image" />
            <div>
              <h4 className="cart-item-heading">T-shirt</h4>
              <h4 className="cart-item-heading">Summer Vibes</h4>
              <p className="cart-item-code">#261311</p>
              
            </div>
          </div>
          <p>$89.99</p>
        </div>

        <div className="cart-item">
          <div className="cart-item-2">
            <img src="./Assests/black.jpg" className="cart-image" />
            <div>
              <h4 className="cart-item-heading">Basic Slim</h4>
              <h4 className="cart-item-heading">Fit T-Shirt</h4>
              <p className="cart-item-code">#212315</p>
            </div>
          </div>
          <p>$69.99</p>
        </div>
      </div>

      <div className="cart-cost-container">
        <p className="cart-cost-heading">Total cost</p>
        <p className="cart-cost-money">$159,98</p>
      </div>

      <div className="cart-ship-container">
        <MdOutlineLocalShipping className="cart-ship-icon"/>
        <div className="cart-ship-heading-container">
          <p className="cart-ship-heading">
            You are <span className="cart-ship-money">$30.02</span> away
          </p>
          <p className="cart-ship-heading">from free shipping</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
