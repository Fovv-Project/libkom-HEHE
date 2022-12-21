import React from 'react';
import Logo from './components/logo/Logo';
import Navbar from './components/navbar/Navbar';
import HeaderWrap from './Header.style';
// import * as BiIcons from 'react-icons/bi';
// import { useState } from "react";
// import Sidebar from '../sidebar/Sidebar';
const Header = () => {
  return (
    <HeaderWrap>
      <Logo />
      <Navbar />
    </HeaderWrap>
  );
};

export default Header;
