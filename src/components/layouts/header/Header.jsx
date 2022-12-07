import React from 'react';
import Logo from './components/logo/Logo';
import Navbar from './components/navbar/Navbar';
import HeaderWrap from './Header.style';
import * as BiIcons from 'react-icons/bi';
import { useState } from "react";
import Sidebar from '../sidebar/Sidebar';
const Header = () => {
    const [sideBar, setsideBar] = useState(false);

    const showSideBar = () => {
        setsideBar(true);
    }

    
    
    return (
        <HeaderWrap>
            <div className='menu-btn'>
                <button onClick={showSideBar}><BiIcons.BiMenu /></button>
            </div>
            <div>
                <Logo />
            </div>
        </HeaderWrap>
    );
}

export default Header;
