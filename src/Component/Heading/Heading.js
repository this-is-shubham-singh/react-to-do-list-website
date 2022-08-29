import React from "react";
import "./Heading.css";
import { FaShoppingCart, FaShippingFast } from "react-icons/fa";

const Heading = () => {
  return (
    <div className="heading-main-container">
      <div className="heading-heading-container">
        <h3 className="heading-heading">Shipping and Payment</h3>
      </div>

      <div className="heading-icons-container">
        <span className="heading-icons-border">
          <FaShoppingCart />
        </span>
        <span className="heading-icons-line"></span>
        <span className="heading-icons-border fashipping">
          <FaShippingFast />
        </span>
      </div>
    </div>
  );
};

export default Heading;
