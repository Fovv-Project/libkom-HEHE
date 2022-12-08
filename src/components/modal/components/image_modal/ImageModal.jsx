import React from 'react';
import { ImageWrapper, Image } from './ImageModal.style';

function ImageModal({ code }) {
  const imageSource =
    code >= 200 && code < 300 ? 'success image' : 'failed image';
  return (
    <ImageWrapper className="Image Wrapper">
      <Image className="Image" src={imageSource} />
    </ImageWrapper>
  );
}

export default ImageModal;
