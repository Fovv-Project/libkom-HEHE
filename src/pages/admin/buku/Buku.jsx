import React from "react";
import { useState } from "react";
import CardCatalog from "../../../components/elements/card_catalog/CardCatalog";
import BukuWrapper from "./Buku.style";
import { DataBuku } from "./BukuData";
import * as BiIcons from "react-icons/bi";
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
      <div className="search-wrapper">
        <div className="icon-search-wrapper">
          <BiIcons.BiSearch className="icon-search" />
        </div>
        <input
          onChange={handleChange}
          placeholder={`Cari`}
        />
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
