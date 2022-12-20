import React from 'react';
import LogoWrap from './Logo.style';
<<<<<<< HEAD
import { LogoSquare } from '../../../../../assets';
=======
import { logo } from '../../../../../assets/images';
>>>>>>> master
const Logo = () => {
    return (
        <LogoWrap>
            <img src={LogoSquare} alt="logo e-lib" />
            <h1>Librarian</h1>
        </LogoWrap>
    );
}

export default Logo;
