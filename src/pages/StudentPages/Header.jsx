import React from "react";
import user from "../../assets/images/user.jpg"; 
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
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
  );
};

export default Header;
