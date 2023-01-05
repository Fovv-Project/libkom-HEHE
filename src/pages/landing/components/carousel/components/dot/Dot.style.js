import styled from "styled-components";

export const DotWrapper = styled.div`
  display: flex;
  margin: 0 5px;
  cursor: pointer;
`;

export const DotDefault = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ color }) => color};
`;
