import React from 'react';
import FooterWrap from './Footer.style';
import { logo } from '../../../assets/images';
const Footer = () => {
    return (
        <FooterWrap>
            <footer>
                <img src={logo} alt="" />

                <div className='shortcut'>
                    <ul>
                        <li><a href="#">Dashboard</a></li>
                        <li><a href="#">Katalog</a></li>
                        <li><a href="#">Peminjaman</a></li>
                    </ul>
                </div>

                <div className='copy-right'>
                    <p>© 2022 Fakultas Ilmu Komputer | Universitas Sriwijaya Kampus Bukit Lantai I</p>
                </div>
            </footer>
        </FooterWrap>
    );
}

export default Footer;
