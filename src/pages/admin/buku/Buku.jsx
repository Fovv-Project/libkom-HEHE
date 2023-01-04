import React from "react";
import CardCatalog from "../../../components/elements/card_catalog/CardCatalog";
import BukuWrapper from "./Buku.style";
import { DataBuku } from "./BukuData";
import * as BiIcons from "react-icons/bi";
const Buku = () => {
  console.log(DataBuku);
  return (
    <BukuWrapper>
      <div className="search-wrapper">
        <div className="icon-search-wrapper">
          <BiIcons.BiSearch className="icon-search" />
        </div>
        <input

          placeholder={`Cari`}
        />
      </div>

      <div className="books">
        {
          DataBuku.map((item, index) => {
            return (
              <CardCatalog
                key={index}
                label={item.label}
                bookImg={item.bookImg}
                bookPath={item.path}
              />
            );
          })
        }
      </div>
    </BukuWrapper>
  );
};

export default Buku;
