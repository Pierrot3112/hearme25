import React from "react";
import data from "../../../utils/data.json";

const CourseCard = ({ onCardClick }) => {
  return (
    <div className="formations-grid">
      {data.formations.map((formation) => (
        <div
          key={formation.id}
          className="formation-card"
          onClick={() => onCardClick(formation)} // Passe la formation cliquée
        >
          <img src={formation.image} alt={formation.title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{formation.title}</h3>
            <p className="card-description">{formation.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
