import React from 'react';
import Header from '../header/Header';
import SidebarWrapper from './Sidebar.style';
import { SidebarData } from './SidebarData';
const Sidebar = () => {
    return (
            <SidebarWrapper>
                <Header />
                <ul className='sidebar'>
                    {
                        SidebarData.map((item,index) => {
                            return (
                                <li key={index} className="list-sidebar">
                                    <div className='icon-sidebar'>
                                        {item.icon}
                                    </div>
                                    <a href={item.path}>{item.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </SidebarWrapper>
    );
}

export default Sidebar;
