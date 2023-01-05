import styled from "styled-components";

export const ButtonWrapper = styled.div`
  @media (max-width: ${({ mobileBreakpoint }) => mobileBreakpoint}px) {
    display: none;
  }
`;

export const Button = styled.span`
  position: absolute;
  top: calc(50% - 17.5px);
  height: 35px;
  width: 35px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 5px 0 #0009;
  z-index: 10;
  cursor: pointer;
  font-size: 10px;
  opacity: 0.6;
  transition: opacity 0.25s;
  left: ${({ type }) => (type === "prev" ? "5px" : "initial")};
  right: ${({ type }) => (type === "next" ? "5px" : "initial")};
  &:hover {
    opacity: 1;
  }
  &::before {
    content: '';
    height: 10px;
    width: 10px;
    background: transparent;
    border-top: 2px solid #000;
    border-right: 2px solid #000;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${({ type }) =>
    type === "prev"
      ? "translate(-25%, -50%) rotate(-135deg)"
      : "translate(-75%, -50%) rotate(45deg)"};
  }
`;
