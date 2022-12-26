import React from "react";
import { ButtonWrapper, ButtonNavigation } from "./NavigationButton.style";

function NavigationButton({ url, children }) {
  return (
    <ButtonWrapper className="Navigation Button">
      <ButtonNavigation href={url}>{children}</ButtonNavigation>
    </ButtonWrapper>
  );
}

export default NavigationButton;
