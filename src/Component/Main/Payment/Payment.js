import React from "react";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment-main-container">
      <h3 className="payment-heading">Payment method</h3>
      <div>
        <div className="payment-method-container">
          <div className="payment-image-container">
            <img src="./Assests/paypal.png" className="payment-image" />
          </div>
          <div className="payment-image-container">
            <img
              src="./Assests/visa-credit-card.png"
              className="payment-image"
            />
          </div>
          <div className="payment-image-container">
            <img src="./Assests/mastercard.png" className="payment-image" />
          </div>
        </div>

        <div className="payment-method-container">
          <div className="payment-image-container">
            <img src="./Assests/maestro.png" className="payment-image" />
          </div>
          <div className="payment-image-container">
            <img
              src="./Assests/discover-network.png"
              className="payment-image"
            />
          </div>
          <div className="payment-image-container">
            <img src="./Assests/ideal.png" className="payment-image" />
          </div>
        </div>

        <div className="payment-delivery-container">
          <h3 className="payment-heading">Delivery method</h3>
          <div>
            <div className="payment-method-container">
              <div className="payment-image-container pic">
                <img src="./Assests/inpost.png" className="payment-image pi" />
                <p>$20.00</p>
              </div>
              <div className="payment-image-container pic">
                <img
                  src="./Assests/DPD-Logo.jpg"
                  className="payment-image pi"
                />
                <p>$12.00</p>
              </div>
            </div>
            <div className="payment-method-container">
              <div className="payment-image-container pic">
                <img
                  src="./Assests/DHL-logo.png"
                  className="payment-image pi"
                />
                <p>$15.00</p>
              </div>
              <div className="payment-image-container pic">
                <img
                  src="./Assests/Fedex-logo.png"
                  className="payment-image pi"
                />
                <p>$10.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
