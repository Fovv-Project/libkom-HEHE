import React from "react";
import Header from "../../../components/layouts/header/Header";
import Sidebar from "../../../components/layouts/sidebar/Sidebar";
import ShowAbsen from "./ShowAbsen";
import AbsensiWrapper from "./Absensi.style";

const Absensi = () => {
  return (
    <AbsensiWrapper>
      <Header />

      <div className="wrapper">
        <Sidebar />

        <div className="content">
          <ShowAbsen />
        </div>
      </div>
    </AbsensiWrapper>
  );
};

export default Absensi;
