import React,  { useState }  from "react";

import SidebarAdmin from './SidebarAdmin';
import ContentAdmin from './ContentAdmin';


const Admin = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  
  return (
    <div className="admin">
      <SidebarAdmin onMenuClick={(menuName) => setActiveMenu(menuName)} />
      <div className="main-content">
        <ContentAdmin  activeMenu={activeMenu} />
      </div>
    </div>
  );
};

export default Admin;

