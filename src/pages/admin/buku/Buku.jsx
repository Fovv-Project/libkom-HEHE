import React from "react";
import { useState } from "react";
import CardCatalog from "../../../components/elements/card_catalog/CardCatalog";
import BukuWrapper from "./Buku.style";
import { DataBuku } from "./BukuData";
import * as BiIcons from "react-icons/bi";
import KategoriButton from "./components/kategori-button/KategoriButton";
const Buku = () => {
  const [data, setData] = useState(DataBuku);
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);

    console.log(text);
    globalFilter(text);
  };

  const globalFilter = ({input}) => {
    setData(DataBuku.filter(book => book.label === input));
    console.log(data);
  };

  return (
    <BukuWrapper>
      {console.log(text)}
      <div className="filter-wrapper">
        <div className="search-wrapper">
          <div className="icon-search-wrapper">
            <BiIcons.BiSearch className="icon-search" />
          </div>
          <input
            placeholder={`Cari`}
          />
        </div>

        <div className="filter-books">
          <BiIcons.BiFilter />
        </div>
      </div>

      <div className="categories">
        <KategoriButton NamaKategori={"laporan kp"} />
        <KategoriButton NamaKategori={"pemrograman"} />
        <KategoriButton NamaKategori={"fiksi"} />
        <KategoriButton NamaKategori={"non-fiksi"} />
      </div>

      <div className="addBook">
        <a href="#">Tambah Buku <BiIcons.BiPlus /></a>
      </div>

      <div className="books">
        {
          data.map((item, index) => {
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
