import React from 'react';
import LogoWrap from './Logo.style';
import { logo } from '../../../../../assets/images';
const Logo = () => {
    return (
        <LogoWrap>
            <img src={logo} alt="logo e-lib" />
        </LogoWrap>
    );
}

export default Logo;
