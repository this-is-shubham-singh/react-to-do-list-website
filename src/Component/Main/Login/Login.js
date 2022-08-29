import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setemail] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [number, setnumber] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [code, setcode] = useState("");
  const [country, setcountry] = useState("");

  const handlesubmit = (event) => {
    if (
      !email ||
      !firstname ||
      !lastname ||
      !number ||
      !address ||
      !city ||
      !code ||
      !country
    ) {
      return alert("please fill in all fields");
    }

    if (number.length < 10 || number.length > 10) {
      return alert("enter a valid number");
    }

    if (code.length < 6 || code.length > 6) {
      return alert("enter a valid pincode");
    }

    if (city.length < 3) {
      return alert("enter a valid city");
    }
    return alert(`$ Welcome ${firstname} ${lastname}`);
  };
  return (
    <div className="login-main-container">
      <div className="login-buttons-container">
        <button
          className="login-button-login"
          type="submit"
          onClick={handlesubmit}
        >
          LOG IN
        </button>
        <button className="login-button-signup">SIGN UP</button>
      </div>

      <div className="login-heading-container">
        <h3 className="login-heading">shipping information</h3>
      </div>

      <div className="login-third-container">
        <div className="login-third-one">
          <input
            className="login-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            className="login-input"
            type="text"
            placeholder="First name"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
          />
          <input
            className="login-input"
            type="text"
            placeholder="Last name"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          />
          <input
            className="login-input"
            type="number"
            placeholder="Phone number"
            onChange={(e) => setnumber(e.target.value)}
          />
        </div>

        <div className="login-third-two">
          <input
            className="login-input"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          />
          <input
            className="login-input"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setcity(e.target.value)}
          />
          <input
            className="login-input"
            type="number"
            placeholder="Postal code / Zip"
            value={code}
            onChange={(e) => setcode(e.target.value)}
          />
          <input
            className="login-input"
            name="section"
            list="scripts"
            placeholder="Poland"
            value={country}
            onChange={(e) => setcountry(e.target.value)}
          />
          <datalist id="scripts">
            <option value="Poland" />
            <option value="India" />
            <option value="China" />
            <option value="Usa" />
            <option value="Russia" />
          </datalist>
        </div>
      </div>
    </div>
  );
};

export default Login;
