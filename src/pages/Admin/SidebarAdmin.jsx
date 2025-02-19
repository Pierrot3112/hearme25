import React, { useState } from 'react';
import { Home,School, Subscriptions, Verified, AccountCircle,Assessment, Category, People, ExpandMore, ChevronRight } from "@mui/icons-material";
import './Admin.scss';

const SidebarAdmin = ({ onMenuClick }) => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [expandCourse, setExpandCourse] = useState(false); 
  const [expandEvaluation, setExpandEvaluation] = useState(false); 
  const [expandCertificat, setExpandCertificat] = useState(false); 
  const [expandAbonment, setExpandAbonment] = useState(false); 

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    onMenuClick(menuName);
  };

  const toggleCourseMenu = () => {
    setExpandCourse(!expandCourse); 
  };

  const toggleEvaluationMenu = () => {
    setExpandEvaluation(!expandEvaluation); 
  };

  const toggleCertificationMenu = () => {
    setExpandCertificat(!expandCertificat);
  }

  const toggleAbonmentMenu = () => {
    setExpandAbonment(!expandAbonment);
  }
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
            onClick={toggleEvaluationMenu}
          >
            <Assessment className='icon' />
            <p className="list-menu">Évaluations</p>
            {expandEvaluation ? <ExpandMore className="expand-icon" /> : <ChevronRight className="expand-icon" />}
          </li>
            {expandEvaluation && (
              <div className="submenu">
                <div
                  className={activeMenu === "addEvaluation" ? "active" : ""}
                  onClick={() => handleMenuClick("addEvaluation")}
                >
                  <p>Ajouter Evaluation</p>
                </div>
                <div
                  className={activeMenu === "allEvaluation" ? "active" : ""}
                  onClick={() => handleMenuClick("evaluation")}
                >
                  <p>Toutes Evaluations</p>
                </div>
              </div>
            )}
          <li
            onClick={toggleCertificationMenu}
          >
            <Verified className='icon' />
            <p className="list-menu">Certifications</p>
            {expandCertificat ? <ExpandMore className="expand-icon" /> : <ChevronRight className="expand-icon" />}
          </li>
            {expandCertificat && (
              <div className="submenu">
                <div
                  className={activeMenu === "addCertificat" ? "active" : ""}
                  onClick={() => handleMenuClick("addCertificat")}
                >
                  <p>Ajouter Certificat</p>
                </div>
                <div
                  className={activeMenu === "allCertificat" ? "active" : ""}
                  onClick={() => handleMenuClick("allCertificat")}
                >
                  <p>Toutes Certificats</p>
                </div>
              </div>
            )}
          <li
            onClick={toggleAbonmentMenu}
          >
            <Subscriptions className='icon' />
            <p className="list-menu">Abonnements</p>
            {expandAbonment ? <ExpandMore className="expand-icon" /> : <ChevronRight className="expand-icon" />}
          </li>
          {expandAbonment && (
              <div className="submenu">
                <div
                  className={activeMenu === "infoAbonment" ? "active" : ""}
                  onClick={() => handleMenuClick("infoAbonment")}
                >
                  <p>Info Abonnement</p>
                </div>
                <div
                  className={activeMenu === "abonnement" ? "active" : ""}
                  onClick={() => handleMenuClick("abonnement")}
                >
                  <p>Abonnements</p>
                </div>
              </div>
            )}
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
