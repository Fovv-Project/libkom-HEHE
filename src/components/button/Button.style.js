import styled from 'styled-components';

export const ButtonComp = styled.button`
  background-color: #ffbe55;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 6px;
  text-align: center;
`;

export const ButtonTextComp = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
