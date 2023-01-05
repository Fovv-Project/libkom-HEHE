import React from "react";
import LogoWrap from "./Logo.style";
import { LogoSquare } from "../../../../assets";

const Logo = () => {
  return (
    <LogoWrap>
      <img src={LogoSquare} alt="logo e-lib" />
      <h1>Librarian</h1>
    </LogoWrap>
  );
};

export default Logo;
