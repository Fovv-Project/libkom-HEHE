import React from "react";
import { bool, func } from "prop-types";

import Hamburger from "./Components/Hamburger/Hamburger";
import Menu from "./Components/Menu/Menu";

function MobileNavbar({ open, setOpen }) {
  return (
    <div className="Mobile Navbar">
      <Hamburger open={open} setOpen={setOpen} />
      <Menu open={open} />
    </div>
  );
}

MobileNavbar.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default MobileNavbar;
