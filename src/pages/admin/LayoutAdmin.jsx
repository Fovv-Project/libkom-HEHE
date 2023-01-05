import React from "react";
import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./Dashboard";
import LayoutWrapper from "./LayoutAdmin.style";

const LayoutAdmin = () => {
  const [content, setContent] = useState(<Dashboard />);
  return (
    <LayoutWrapper>
      <div className="bar">
      </div>

      <Sidebar className="sidebar" setContent={setContent}/>
      <div className="content">
        {content}
      </div>
    </LayoutWrapper>
  );
};

export default LayoutAdmin;
