import React from "react";
import { Link } from 'react-router-dom';
import logo1 from "../../assets/logo1.png";
import image1 from "../../assets/image1.png";
import { LoginWrapper, LoginBox, LogoImage, LogoLib, LoginButton } from './Login.styled.js'


const Login = () => (
  <LoginWrapper>
    <LoginBox>
      <LogoLib src={logo1} />
      <LogoImage src={image1} />
      <LoginButton type="button">
        <Link to="/profile">Login via Safana</Link>
      </LoginButton>
    </LoginBox>
  </LoginWrapper>

);

export default Login;
