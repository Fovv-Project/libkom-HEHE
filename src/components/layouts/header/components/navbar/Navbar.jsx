import React from 'react';
import { useState } from 'react';
import Logo from '../logo/Logo';
import NavbarWrap from './Navbar.style';
import { NavbarData } from './NavbarData';
import * as BiIcons from 'react-icons/bi'
import { Link } from 'react-router-dom';
const Navbar = () => {
    
    return (
        <NavbarWrap>
            <ul className='list-navbar'>
                <li><Logo /></li>
                {
                    NavbarData.map((item,index) => {
                        return (
                            <li key={index}>
                                <a href={item.path}>
                                    <span>{item.icon}</span>
                                    {item.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </NavbarWrap>
    );
}

export default Navbar;
