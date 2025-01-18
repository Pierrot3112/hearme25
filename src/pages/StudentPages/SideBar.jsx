import React, { useState } from "react";
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
import "./d.scss";
import UserImage from "../../assets/images/user.jpg";
import ProfileMenu from "./ProfileMenu";

const Sidebar = ({ onMenuClick }) => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null); // Track hovered menu item

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    onMenuClick(menuName); // Change le contenu dans le composant parent
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen((prev) => !prev);
  };

  const handleMouseEnter = (menuName) => {
    setHoveredMenu(menuName);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <div className="sidebar">
      <div className="logo">HEARME</div>
      <nav className="menu">
        <ul className="sidemenu">
          <li
            className={activeMenu === "home" ? "active" : ""}
            onClick={() => handleMenuClick("home")}
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}
          >
            {activeMenu === "home" ? (
              <Home fontSize="large" />
            ) : (
              <HomeOutlined fontSize="large" />
            )}
            {hoveredMenu === "home" && <span className="menu-label">Accueeil</span>}
          </li>
          <li
            className={activeMenu === "courses" ? "active" : ""}
            onClick={() => handleMenuClick("courses")}
            onMouseEnter={() => handleMouseEnter("courses")}
            onMouseLeave={handleMouseLeave}
          >
            {activeMenu === "courses" ? (
              <MenuBook fontSize="large" />
            ) : (
              <MenuBookOutlined fontSize="large" />
            )}
            {hoveredMenu === "courses" && <span className="menu-label">Cours</span>}
          </li>
          <li
            className={activeMenu === "evaluation" ? "active" : ""}
            onClick={() => handleMenuClick("evaluation")}
            onMouseEnter={() => handleMouseEnter("evaluation")}
            onMouseLeave={handleMouseLeave}
          >
            {activeMenu === "evaluation" ? (
              <School fontSize="large" />
            ) : (
              <SchoolOutlined fontSize="large" />
            )}
            {hoveredMenu === "evaluation" && <span className="menu-label">Evaluation</span>}
          </li>
          <li
            className={activeMenu === "certification" ? "active" : ""}
            onClick={() => handleMenuClick("certification")}
            onMouseEnter={() => handleMouseEnter("certification")}
            onMouseLeave={handleMouseLeave}
          >
            {activeMenu === "certification" ? (
              <WorkspacePremium fontSize="large" />
            ) : (
              <WorkspacePremiumOutlined fontSize="large" />
            )}
            {hoveredMenu === "certification" && <span className="menu-label">Certification</span>}
          </li>
        </ul>
        <div className="profile-icon" onClick={toggleProfileMenu}>
          <img src={UserImage} alt="User" />
        </div>
        {profileMenuOpen && <ProfileMenu />}
      </nav>
    </div>
  );
};

export default Sidebar;
