import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

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
