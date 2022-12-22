import React from 'react';
import { number, func } from 'prop-types';

import { ButtonComp, ButtonTextComp } from './Button.style';

function Button({ width, height, onClick, children }) {
  return (
    <ButtonComp className="Button" onClick={onClick}>
      <ButtonTextComp>{children}</ButtonTextComp>
    </ButtonComp>
  );
}

Button.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
  onClick: func.isRequired,
};

export default Button;
