import React from "react";
import { ImageWrapper, Image } from "./ImageModal.style";

import { successIcon, failedIcon } from "../../../../assets";

function ImageModal({ code }) {
  const imageSource = code >= 200 && code < 300 ? successIcon : failedIcon;
  return (
    <ImageWrapper className="Image Wrapper">
      <Image className="Image" src={imageSource} />
    </ImageWrapper>
  );
}

export default ImageModal;
