import React,  { useState }  from "react";
import Sidebar from "./SideBar";
import Content from "./Content";
import "./UserStyle/d.scss";

const Dashboard = () => {
    const [activeMenu, setActiveMenu] = useState("home");

    return (
      <div className="dashboard">
        <Sidebar onMenuClick={(menuName) => setActiveMenu(menuName)} />
        <div className="main-content">
          <Content activeMenu={activeMenu} />
        </div>
      </div>
    );
};

export default Dashboard;