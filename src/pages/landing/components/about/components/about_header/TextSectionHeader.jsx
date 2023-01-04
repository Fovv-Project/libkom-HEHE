import React from "react";
import { HeaderWrapper, HeaderText } from "./TextSectionHeader.style";

function TextSectionHeader({ text }) {
  return (
    <HeaderWrapper className="Text Header">
      <HeaderText>{text}</HeaderText>
    </HeaderWrapper>
  );
}

export default TextSectionHeader;
