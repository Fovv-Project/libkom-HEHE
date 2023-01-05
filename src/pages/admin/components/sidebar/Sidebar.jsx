import React from "react";
import Absensi from "../../absensi/Absensi";
import Logo from "../logo/Logo";
import SidebarWrapper from "./Sidebar.style";
import { SidebarData } from "./SidebarData";
const Sidebar = ({setContent}) => {
  const handleClick = (content) => {
    setContent(content);
  };
  return (
    <SidebarWrapper>
      <Logo className="logo"/>
      <div className="menu-wrapper">
        <ul>
          {
            SidebarData.map((item,index) => {
              return (
                <li key={index} className="list-sidebar" onClick={() => handleClick(item.content)}>
                  <div className='icon-sidebar'>
                    {item.icon}
                  </div>
                  <a href="#">{item.name}</a>
                </li>
              );
            })
          }
        </ul>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
