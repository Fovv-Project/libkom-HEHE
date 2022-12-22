import React from "react";
import Logo from "../logo/Logo";
import NavbarWrap from "./Navbar.style";

const Navbar = () => {
  return (
    <NavbarWrap>
      <ul className="list-navbar">
        <li>
          <Logo />
        </li>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Katalog</a>
        </li>
        <li>
          <a href="#">Peminjaman</a>
        </li>
        <li>
          <a href="#">Absensi</a>
        </li>
        <li>
          <a href="#">Log Out</a>
        </li>
      </ul>
    </NavbarWrap>
  );
};

export default Navbar;
