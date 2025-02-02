import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  HomeOutlined,
  MenuBook,
  MenuBookOutlined,
  School,
  SchoolOutlined,
  WorkspacePremium,
  WorkspacePremiumOutlined,
} from "@mui/icons-material"; // MUI Icon
import "./UserStyle/d.scss";
import UserImage from "../../assets/images/user.jpg";
import ProfileMenu from "./UserComponents/ProfileMenu";


const Sidebar = () => {
    const location = useLocation();
    const [profileMenuOpen, setProfileMenuOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(null);
  
    const toggleProfileMenu = () => {
      setProfileMenuOpen((prev) => !prev);
    };
  
    const handleMouseEnter = (menuName) => setHoveredMenu(menuName);
    const handleMouseLeave = () => setHoveredMenu(null);
  
    return (
      <div className="sidebar">
        <div className="logo">HEARME</div>
        <nav className="menu">
          <ul className="sidemenu">
            <li id="user-side" className={location.pathname === "/home" ? "active" : ""} onMouseEnter={() => handleMouseEnter("home")} onMouseLeave={handleMouseLeave}>
              <Link to="/user/home">
                {location.pathname === "/home" ? <Home fontSize="large" /> : <HomeOutlined fontSize="large" />}
                {hoveredMenu === "home" && <span className="menu-label">Accueil</span>}
              </Link>
            </li>
            <li id="user-side" className={location.pathname === "/user/courses" ? "active" : ""} onMouseEnter={() => handleMouseEnter("courses")} onMouseLeave={handleMouseLeave}>
              <Link to="/user/courses">
                {location.pathname === "/user/courses" ? <MenuBook fontSize="large" /> : <MenuBookOutlined fontSize="large" />}
                {hoveredMenu === "courses" && <span className="menu-label">Cours</span>}
              </Link>
            </li>
            <li id="user-side" className={location.pathname === "/user/evaluation" ? "active" : ""} onMouseEnter={() => handleMouseEnter("evaluation")} onMouseLeave={handleMouseLeave}>
              <Link to="/user/evaluation">
                {location.pathname === "/user/evaluation" ? <School fontSize="large" /> : <SchoolOutlined fontSize="large" />}
                {hoveredMenu === "evaluation" && <span className="menu-label">Évaluation</span>}
              </Link>
            </li>
            <li id="user-side" className={location.pathname === "/user/certification" ? "active" : ""} onMouseEnter={() => handleMouseEnter("certification")} onMouseLeave={handleMouseLeave}>
              <Link to="/user/certification">
                {location.pathname === "/user/certification" ? <WorkspacePremium fontSize="large" /> : <WorkspacePremiumOutlined fontSize="large" />}
                {hoveredMenu === "certification" && <span className="menu-label">Certification</span>}
              </Link>
            </li>
            <li id="user-side" className="profile-icon" onClick={toggleProfileMenu}>
              <img src={UserImage} alt="User" />
            </li>
            {profileMenuOpen && <ProfileMenu />}
          </ul>
        </nav>
      </div>
    );
};

export default Sidebar;
