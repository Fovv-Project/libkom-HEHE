import React from "react";
import Logo from "./components/logo/Logo";
import Navbar from "./components/navbar/DesktopNavbar/Navbar";
import HeaderWrap from "./Header.style";

const Header = () => {
  return (
    <HeaderWrap>
      <Logo />
      <Navbar />
    </HeaderWrap>
  );
};

export default Header;
