import React from "react";
import PropTypes from "prop-types";

import { ButtonWrapper, Button } from "./ArrowButton.style";

const ArrowButton = ({
  type,
  mobileBreakpoint = 1,
  hidden = false,
  CustomBtn,
  onClick,
}) => (
  <ButtonWrapper
    mobileBreakpoint={mobileBreakpoint}
    hidden={hidden}
    onClick={onClick}
  >
    {CustomBtn ? (
      typeof CustomBtn === "function" ? (
        <CustomBtn />
      ) : (
        CustomBtn
      )
    ) : (
      <Button type={type} />
    )}
  </ButtonWrapper>
);

ArrowButton.propTypes = {
  type: PropTypes.oneOf(["prev", "next"]).isRequired,
  mobileBreakpoint: PropTypes.number,
  hidden: PropTypes.bool,
  CustomBtn: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.elementType,
  ]),
  onClick: PropTypes.func.isRequired,
};

export default ArrowButton;
