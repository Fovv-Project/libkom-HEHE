import React from 'react';
import { ButtonComp, ButtonTextComp } from './Button.style';

function Button({ onClick, children }) {
  return (
    <ButtonComp className="Button" onClick={onClick}>
      <ButtonTextComp>{children}</ButtonTextComp>
    </ButtonComp>
  );
}

export default Button;
