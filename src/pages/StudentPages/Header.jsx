import React from "react";
import user from "../../assets/images/user.jpg"; 
import fond from '../../assets/images/usersLearn.jpg';
import "./header.scss";

const Header = () => {
  return (
    <div className="user-header">
      <h1>HEARME</h1>
      <div className="header">
        <img className="bg-img" src={fond} alt="Background" />
        <div className="user-info">
          <img
            src={user}
            alt="Eddy"
            className="profile-picture"
          />
          <div className="welcome-text">
            <h2>Bienvenue Eddy!</h2>
            <p>Débutant</p>
            <span>+0 Points</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
