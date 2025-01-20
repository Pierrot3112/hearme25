import React, { useState } from 'react';
import { Home, ExpandMore, ChevronRight } from "@mui/icons-material";
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
            <Home className='icon' />
            <p className="list-menu">Utilisateurs</p>
          </li>
          <li
            className={activeMenu === "categorie" ? "active" : ""}
            onClick={() => handleMenuClick("categorie")}
          >
            <Home className='icon' />
            <p className="list-menu">Catégories</p>
          </li>
          {/* Menu Formation avec sous-menus */}
          <li
            className={activeMenu === "course" ? "active" : ""}
            onClick={toggleCourseMenu}
          >
            <Home className='icon' />
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
            <Home className='icon' />
            <p className="list-menu">Évaluations</p>
          </li>
          <li
            className={activeMenu === "certification" ? "active" : ""}
            onClick={() => handleMenuClick("certification")}
          >
            <Home className='icon' />
            <p className="list-menu">Certifications</p>
          </li>
          <li
            className={activeMenu === "abonnement" ? "active" : ""}
            onClick={() => handleMenuClick("abonnement")}
          >
            <Home className='icon' />
            <p className="list-menu">Abonnements</p>
          </li>
          <li
            className={activeMenu === "account" ? "active" : ""}
            onClick={() => handleMenuClick("account")}
          >
            <Home className='icon' />
            <p className="list-menu">Compte</p>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SidebarAdmin;
