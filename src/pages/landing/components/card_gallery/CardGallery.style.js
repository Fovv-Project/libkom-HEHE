import styled from "styled-components";

export const Container = styled.div`
  margin: 31px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 90px;
  row-gap: 64px;

  @media (max-width: 428px) {
    row-gap: 24px;
    column-gap: 16px;
  }
`;

export const Item = styled.div`
  width: 175px;
  height: 260px;
  background-color: #c4b2ae;
  border: 1px solid black;
  border-radius: 17px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
