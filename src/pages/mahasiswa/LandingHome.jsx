import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../../components/layouts/footer/Footer.jsx';
import Header from '../../components/layouts/header/Header';
import { ilustration } from '../../assets/index.js';
const LandingHome = () => {
    return (
        <div>
            {/* <ShowAbsen /> */}
            {/* <Header /> */}
            <a href="/absensi">Absensi</a>
        </div>
    );
}

export default LandingHome;
