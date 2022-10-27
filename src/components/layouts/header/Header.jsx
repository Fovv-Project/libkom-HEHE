import React from 'react';
import Logo from './components/logo/Logo';
import Navbar from './components/navbar/Navbar';
import HeaderWrap from './Header.style';

const Header = () => {
    return (
        <HeaderWrap>
            <Navbar />
        </HeaderWrap>
    );
}

export default Header;
