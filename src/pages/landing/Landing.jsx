import React from 'react';
import Footer from '../../components/layouts/footer/Footer';
import Header from '../../components/layouts/header/Header';
import Carousel from './components/carousel/Carousel';

function ImageGallery() {
  return (
    <Carousel
      cols={1}
      rows={1}
      gap={10}
      loop={true}
      autoplay={4000}
      containerClassName={'Container'}
      containerStyle={{
        width: '75%',
        height: '300px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
      }}
    >
      <Carousel.Item>
        <img width={'100%'} src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width={'100%'} src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width={'100%'} src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
    </Carousel>
  );
}

function LandingHome() {
  return (
    <div>
      <Header />
      <ImageGallery />
      {/* <Reccomendation />
      <About /> */}
      <Footer />
    </div>
  );
}

export default LandingHome;
