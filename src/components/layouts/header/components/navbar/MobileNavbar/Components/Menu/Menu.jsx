import React from "react";
import { StyledMenu } from "./Menu.style";

function Menu({ open }) {
  return (
    <StyledMenu open={open}>
      <a href="/">Beranda</a>
      <a href="/">Katalog</a>
      <a href="/">Peminjaman</a>
      <a href="/">Profile</a>
    </StyledMenu>
  );
}

export default Menu;
