import React from 'react';
import Footer from '../../components/layouts/footer/Footer';
import Header from '../../components/layouts/header/Header';
import Carousel from './components/carousel/Carousel';
import CardGallery from './components/card_gallery/CardGallery';
import TextSection from './components/about/TextSection';
import RECOMMENDED_BOOKS from './Landing.data';
import Hamburger from '../../components/layouts/header/components/navbar/hamburger/Hamburger';
import Menu from '../../components/layouts/header/components/navbar/hamburger/menu/Menu';
import { useState } from 'react';

function RecommendationSection() {
  const Header = 'Rekomendasi';
  const Navigation = {
    url: '#',
    text: 'Lihat Selengkapnya →',
  };
  return (
    <CardGallery
      header={Header}
      data={RECOMMENDED_BOOKS}
      navigation={Navigation}
    />
  );
}

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
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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

function AboutSection() {
  const header = 'Tentang';
  const body = `Ruang Baca merupakan sebuah ruangan yang biasa digunakan oleh mahasiswa Fakultas Ilmu Komputer untuk belajar dan mencari referensi tugas kuliah maupun referensi hal-hal lain. Lokasi Ruang Baca ada di lantai 1 Gedung Fakultas Ilmu Komputer Kampus Bukit, Palembang. Ruang Baca ini dilengkapi dengan fasilitas berupa buku-buku yang sesuai dengan jurusan yang ada di Fakultas Ilmu Komputer. Terdapat pula meja, kursi, terminal listrik, serta pendingin ruangan yang membuat pengunjung merasa nyaman berada di Ruang Baca. 

Untuk menambah pengalaman Ruang Baca, Fakultas Ilmu Komputer menyediakan website yang dapat digunakan oleh pengunjung untuk kebutuhan Ruang Baca. Website ini juga diharapkan dapat mempermudah kegiatan di Ruang Baca bagi pengunjung.`;

  return <TextSection header={header} body={body} />;
}

function LandingHome() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* <Header /> */}
      <div>
        <Hamburger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
      {/* <ImageGallery />
      <RecommendationSection />
      <AboutSection /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default LandingHome;
