import styled from "styled-components";

export const CardImageWrapper = styled.div`
  width: 150px;
  height: 162.77px;
  flex-basis: 0;
`;

export const CardImage = styled.img`
  border: 1px solid black;
  border-radius: 20px;
`;

export const CardTitleWrapper = styled.div`
  width: 150.38px;
  height: 17.54px;
  text-align: center;
`;

export const CardTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

export const CardDescriptionWrapper = styled.div`
  width: 143px;
  height: 38px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 428px) {
    height: 30px;
  }
`;

export const CardDescription = styled.p`
  font-weight: 500;
  font-size: 16px;

  @media (max-width: 428px) {
    font-size: 12px;
  }
`;
