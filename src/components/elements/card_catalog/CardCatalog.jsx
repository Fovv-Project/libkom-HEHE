import React from 'react'
import CardWrapper from './CardCatalog.stye'
import * as BiIcons from 'react-icons/bi'
export default function CardCatalog({label, bookImg, bookPath}) {
  return (
    <>
        <CardWrapper>
            <img src={bookImg} alt={label} />

            <h4>{label}</h4>

            <a href={bookPath}>Edit <span><BiIcons.BiEdit /></span></a>
        </CardWrapper>
    </>
  )
}
