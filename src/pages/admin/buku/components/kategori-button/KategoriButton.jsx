import React from "react";
import ButtonWrapper from "./KategoriButton.style";

const KategoriButton = ({NamaKategori}) => {
  return (
    <>
      <ButtonWrapper>
        <button>{NamaKategori}</button>
      </ButtonWrapper>
    </>
  );
};

export default KategoriButton;
