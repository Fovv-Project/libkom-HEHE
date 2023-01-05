import React from "react";
import { HeaderWrapper, HeaderText } from "./Header.style";

function Header({ children }) {
  return (
    <HeaderWrapper className="Header Wrapper">
      <HeaderText className="Header Text">{children}</HeaderText>
    </HeaderWrapper>
  );
}

export default Header;
