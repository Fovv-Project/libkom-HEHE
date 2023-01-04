import React from "react";
import { Link } from "react-router-dom";
import { LoginWrapper } from "./Login.style.js";
import { logo, ilustration } from "../../../assets/images";


const Login = () => {
  return (
    <LoginWrapper>
      <div className="container">
        <div className="login-box">
          <img alt="LogoLib" className="logo-lib" src={logo} />
          <img alt="Ilustration" className="ilustration" src={ilustration} />
          <button className="login-button" type="button">
            <Link to="/profile">Login via Safana</Link>
          </button>
        </div>
      </ div>
    </LoginWrapper>
  );

};

export default Login;
