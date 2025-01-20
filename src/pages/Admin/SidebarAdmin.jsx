import React, { useState } from 'react';
import { Home,School, Subscriptions, Verified, AccountCircle,Assessment, Category, People, ExpandMore, ChevronRight } from "@mui/icons-material";
import './Admin.scss';

const SidebarAdmin = ({ onMenuClick }) => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [expandCourse, setExpandCourse] = useState(false); // Gère l'expansion des sous-menus

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    onMenuClick(menuName);
  };

  const toggleCourseMenu = () => {
    setExpandCourse(!expandCourse); // Inverse l'état des sous-menus
  };

  return (
    <aside className="sidebarAdmin">
      <h2>HEARME</h2>
      <nav>
        <ul>
          <li
            className={activeMenu === "home" ? "active" : ""}
            onClick={() => handleMenuClick("home")}
          >
            <Home className='icon' />
            <p className="list-menu">Accueil</p>
          </li>
          <li
            className={activeMenu === "user" ? "active" : ""}
            onClick={() => handleMenuClick("user")}
          >
            <People className='icon' />
            <p className="list-menu">Utilisateurs</p>
          </li>
          <li
            className={activeMenu === "categorie" ? "active" : ""}
            onClick={() => handleMenuClick("categorie")}
          >
            <Category className='icon' />
            <p className="list-menu">Catégories</p>
          </li>
          {/* Menu Formation avec sous-menus */}
          <li
            className={activeMenu === "course" ? "active" : ""}
            onClick={toggleCourseMenu}
          >
            <School className='icon' />
            <p className="list-menu">Formations</p>
            {expandCourse ? <ExpandMore className="expand-icon" /> : <ChevronRight className="expand-icon" />}
          </li>
          {expandCourse && (
              <div className="submenu">
                <div
                  className={activeMenu === "addCourse" ? "active" : ""}
                  onClick={() => handleMenuClick("addCourse")}
                >
                  <p>Ajouter Formation</p>
                </div>
                <div
                  className={activeMenu === "allCourses" ? "active" : ""}
                  onClick={() => handleMenuClick("allCourses")}
                >
                  <p>Toutes les Formations</p>
                </div>
              </div>
            )}
          <li
            className={activeMenu === "evaluation" ? "active" : ""}
            onClick={() => handleMenuClick("evaluation")}
          >
            <Assessment className='icon' />
            <p className="list-menu">Évaluations</p>
            {expandCourse ? <ExpandMore className="expand-icon" /> : <ChevronRight className="expand-icon" />}
          </li>
          <li
            className={activeMenu === "certification" ? "active" : ""}
            onClick={() => handleMenuClick("certification")}
          >
            <Verified className='icon' />
            <p className="list-menu">Certifications</p>
            {expandCourse ? <ExpandMore className="expand-icon" /> : <ChevronRight className="expand-icon" />}
          </li>
          <li
            className={activeMenu === "abonnement" ? "active" : ""}
            onClick={() => handleMenuClick("abonnement")}
          >
            <Subscriptions className='icon' />
            <p className="list-menu">Abonnements</p>
          </li>
          <li
            className={activeMenu === "account" ? "active" : ""}
            onClick={() => handleMenuClick("account")}
          >
            <AccountCircle className='icon' />
            <p className="list-menu">Compte</p>
            {expandCourse ? <ExpandMore className="expand-icon" /> : <ChevronRight className="expand-icon" />}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
