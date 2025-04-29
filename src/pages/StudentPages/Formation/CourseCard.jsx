import React from "react";
import data from "../../../utils/data.json";


const CourseCard = ({ onCardClick,formations }) => {
  return (
    <div className="formations-grid">
      {formations.map((formation) => (
        <div
          key={formation.id}
          className="formation-card"
          onClick={() => onCardClick(formation)} 
        >
          <img src={formation.image || "/fond.jfif"} alt={formation.nom} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{formation.nom}</h3>
            <p className="card-description">{formation.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
