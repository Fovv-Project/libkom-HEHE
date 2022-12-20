import React from 'react';
import { useState } from 'react';
import NavbarWrap from './Navbar.style';
import { NavbarData } from './NavbarData';
import * as BiIcons from 'react-icons/bi';
const Navbar = () => {
    const [dropDown, setDropdown] = useState(false);

    const showDropdown = () => {
        if (dropDown) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }
    return (
        <NavbarWrap>
            <div className='list-navbar'>
                {
                    NavbarData.map((item, index) => {
                        return (
                            <div key={index} className="nav-menu">
                                <a href={item.path}>
                                    <span className='icon-menu'>{item.icon}</span>
                                    {item.name}</a>
                            </div>
                        )
                    })
                }

                <div className="nav-menu profile-dropdown">
                    <a href="#" className='profile-dropdown' onClick={showDropdown}>
                        Profile
                        <span className='Chevron'>{ !dropDown ? (<BiIcons.BiChevronDown />) : (<BiIcons.BiChevronUp />) }</span>
                    </a>

                    {
                        dropDown ? 
                        (
                            <div className='profile-menu'>
                                <a href="#" className='profile-dropdown top'>
                                    Absensi
                                </a>
                                <a href="#" className='profile-dropdown bottom'>
                                    Log out
                                </a>
                            </div>
                        ) : null
                    }
                </div>
            </div>


        </NavbarWrap>
    );
}

export default Navbar;
