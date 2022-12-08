import React from 'react';
import Header from '../../../components/layouts/header/Header';
import Sidebar from '../../../components/layouts/sidebar/Sidebar';
import ShowAbsen from './ShowAbsen';
import AbsensiWrapper from './Absensi.style';

const Absensi = () => {
    return (
        <AbsensiWrapper>
            <ShowAbsen />
        </AbsensiWrapper>
    );
}

export default Absensi;
