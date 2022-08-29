import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <button className="footer-back-button">
        <span className="footer-back-arrow">&#129044;</span> Back
      </button>
      <div className="footer-dual-button-container">
        <button className="footer-shopping-button">CONTINUE SHOPPING</button>
        <button className="footer-payment-button">PROCEED TO PAYMENT</button>
      </div>
    </div>
  );
};

export default Footer;
