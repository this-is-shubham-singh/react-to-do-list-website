import React from "react";
import "./Header.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <>
      <div className="header-main-container">
        <div className="header-logo-container">
          <img src="./Assests/logo.png" className="header-logo-image" />
          <h2 className="header-logo-heading">
            <span style={{ color: "#dd7f2a" }}>E-</span>Shop
          </h2>
        </div>

        <div>
          <ul className="header-list">
            <li className="header-list-items">Men</li>
            <li className="header-list-items">Women</li>
            <li className="header-list-items">Kids</li>
          </ul>
        </div>

        <div className="header-icons-container">
          <FaSearch className="header-icons"/>
          <FaShoppingCart className="header-icons"/>
          <CgProfile className="header-icons"/>
        </div>
      </div>
    </>
  );
};

export default Header;
