import React from 'react';
import Card from './components/card/Card';
import Header from './components/header/Header';
import NavigationButton from './components/navigation_button/NavigationButton';
import { Container, ItemWrapper, Item } from './CardGallery.style.js';

function CardGallery({ header, navigation, data }) {
  return (
    <Container className="Card Gallery Container">
      {header && <Header className="Header">{header}</Header>}

      <ItemWrapper className="Item Wrapper">
        {data.map((item, index) => (
          <Item className="Item" key={index}>
            <Card
              imageUrl={item.image}
              title={item.title}
              description={item.description}
            />
          </Item>
        ))}
      </ItemWrapper>

      {navigation && (
        <NavigationButton url={navigation.url}>
          {navigation.text}
        </NavigationButton>
      )}
    </Container>
  );
}

export default CardGallery;
