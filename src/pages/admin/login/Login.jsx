import React from "react";
import { Link } from "react-router-dom";
import { LoginWrapper } from "./Login.style.js";
import { logo, ilustrationAdminLogin } from "../../../assets/images";

const LoginAdmin = () => {
  return (
    <LoginWrapper>
      <div className="login-box">
        <img
          alt="ilustrationAdminLogin"
          className="ilustrationAdminLogin"
          src={ilustrationAdminLogin}
        />
        <img alt="LogoLib" className="logo-lib" src={logo} />

        <form>
          <label>
            Email
            <input type="text" name="name" placeholder="Name@gmail.com" />
          </label>
          <label>
            Password
            <input type="text" name="name" placeholder="Password" />
          </label>
          <button className="login-button" type="button">
            <Link to="/profile">Login</Link>
          </button>
        </form>
      </div>
    </LoginWrapper>
  );
};

export default LoginAdmin;
