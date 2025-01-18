import React from "react";
import data from "../utils/data.json";
// import "../style/formation.scss";

const FormationCard = ({ onCardClick }) => {
  const formations = data.formations; // Les données des formations depuis le fichier JSON

  return (
    <div className="formations-grid">
      {formations.map((formation) => (
        <div
          key={formation.id}
          className="formation-card"
          onClick={() => onCardClick(formation)} // Appeler la fonction fournie lors du clic
        >
          <img
            src={formation.image}
            alt={formation.title}
            className="card-image"
          />
          <div className="card-content">
            <h3 className="card-title">{formation.title}</h3>
            <p className="card-description">{formation.description}</p>
            <div className="card-foot">
              <img
                src={formation.author || "/logo.jpg"} // Afficher une image par défaut si aucune image n'est définie
                alt="Author"
                className="author-image"
              />
              <span
                className={`card-status ${
                  formation.statut === "Payant >>" ? "status-payant" : ""
                }`}
              >
                {formation.statut}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormationCard;
