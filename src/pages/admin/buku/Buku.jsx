import React from 'react';
import CardCatalog from '../../../components/elements/card_catalog/CardCatalog';
import BukuWrapper from './Buku.style';
import { DataBuku } from './BukuData';
const Buku = () => {
    console.log(DataBuku)
    return (
        <BukuWrapper>
            {
                DataBuku.map((item,index)=>{
                    return (
                        <CardCatalog 
                            key={index}
                            label={item.label}
                            bookImg={item.bookImg}
                            bookPath={item.path}
                        />
                    )
                })
            }
        </BukuWrapper>
    );
}

export default Buku;
