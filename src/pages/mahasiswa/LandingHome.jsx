import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../../components/layouts/footer/Footer.jsx';
import Header from '../../components/layouts/header/Header.jsx';
import { ilustration } from '../../assets/index.js';

const LandingHome = () => {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
}

export default LandingHome;
