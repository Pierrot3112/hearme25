import React from "react";
import { PermIdentityOutlined, HistoryOutlined, CardTravelOutlined, LogoutOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom"; // Utilisation de Link pour éviter un rechargement complet de la page
import "./menuFlot.scss";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../../Auth/actions/types";


const ProfileMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickLogout = () =>{
    localStorage.removeItem('user');
    dispatch({ type: LOGOUT });
    navigate('/');
  }
  return (
    <div className="profile-menu">
      <div className="profile-menu-content">
        <ul className="profile-options">
          {/* Liens avec React Router */}
          <li id="user-li">
            <Link to="/user/profile" className="lien">
              <PermIdentityOutlined />
              <p>Profile</p>
            </Link>
          </li>
          <li id="user-li">
            <Link to="/user/history" className="lien">
              <HistoryOutlined />
              <p>Historiques</p>
            </Link>
          </li>
          <li id="user-li">
            <Link to="/user/abonment" className="lien">
              <CardTravelOutlined />
              <p>Abonnement</p>
            </Link>
          </li>
          <li id="user-li">
            <div className="lien" onClick={handleClickLogout}>
              <LogoutOutlined />
              <p>Se Deconnecter</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileMenu;
