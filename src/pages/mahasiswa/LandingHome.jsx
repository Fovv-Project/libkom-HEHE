import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/layouts/footer/Footer.jsx";
import Header from "../../components/layouts/header/Header.jsx";
import { ConfirmationModal } from "../../components/modal/Modal.jsx";
import { ilustration } from "../../assets/index.js";
import { useState } from "react";
import Button from "../../components/button/Button.jsx";

const LandingHome = () => {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  function handleOk() {
    setShowModal(false);
  }

  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

export default LandingHome;
