import React from 'react';
import {
  CardImageWrapper,
  CardImage,
  CardTitle,
  CardDescription,
  CardTitleWrapper,
  CardDescriptionWrapper,
} from './Card.style';

function Card({ imageUrl, title, description }) {
  return (
    <>
      <CardImageWrapper className="Card Image">
        <CardImage width={'100%'} src={imageUrl} />
      </CardImageWrapper>
      <CardTitleWrapper className="Card Title">
        <CardTitle className="Title Text">{title}</CardTitle>
      </CardTitleWrapper>
      <CardDescriptionWrapper>
        <CardDescription className="Card Descrition">
          {description}
        </CardDescription>
      </CardDescriptionWrapper>
    </>
  );
}

export default Card;
