import React from "react";
import { StyledBurger } from "./Hamburger.style";

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
