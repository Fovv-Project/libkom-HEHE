import React from "react";
import { LoginWrapper } from "./Login.style.js";
import { logo, ilustration } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <LoginWrapper>
      <div className="login-box">
        <img alt="LogoLib" className="logo-lib" src={logo} />
        <img alt="Ilustration" className="ilustration" src={ilustration} />
        <button
          onClick={() => navigate("/profile")}
          className="login-button"
          type="button"
        >
          Login via Safana
        </button>
      </div>
    </LoginWrapper>
  );
};

export default Login;
