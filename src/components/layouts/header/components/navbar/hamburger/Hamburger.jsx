import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Hamburger.style';

function Hamburger({ open, setOpen }) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

export default Hamburger;
