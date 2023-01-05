import { DummyBook1, DummyBook2, DummyBook3, DummyBook4, DummyBook5 } from "../../../assets";

import React from "react";

const BukuData = () => {
  const Books = [];
  for (let index = 0; index < 4; index++) {
    Books.push(
      {
        label : "Milk and Honey",
        bookImg : DummyBook1,
        path : "/"
      }
    );
    Books.push(
      {
        label : "Laskar Pelangi",
        bookImg : DummyBook2,
        path : "/"
      }
    );
    Books.push(
      {
        label : "Ikigai",
        bookImg : DummyBook3,
        path : "/"
      }
    );
    Books.push(
      {
        label : "The Happiness Project",
        bookImg : DummyBook4,
        path : "/"
      }
    );
    Books.push(
      {
        label : "Algorithm",
        bookImg : DummyBook5,
        path : "/"
      }
    );
  }

  return Books;
};

const DataBuku = BukuData();

export { DataBuku };
