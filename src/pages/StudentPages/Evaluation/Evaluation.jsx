import React, { useState } from "react";
import { Agriculture, Campaign, Brush, Devices } from "@mui/icons-material"; // Updated icon for Marketing
import EvaluationDetail from "./EvaluationDetails"; // Import the new component
import Head from "../UserComponents/Head";

// Evaluations data
const evaluations = [
  {
    id: 1,
    title: "Agri-business",
    description:
      "Ce cours est dédié aux passionnés et débutants dans le domaine de l’agri-business. Avec des modules de formations complètes.",
    status: "Gratuit",
    icon: <Agriculture /> // Agri-business icon
  },
  {
    id: 2,
    title: "Marketing Digitale",
    description:
      "Ce cours est dédié aux passionnés et débutants dans le domaine du marketing digital. Avec des modules de formations complètes.",
    status: "25 questions",
    icon: <Campaign /> // Marketing icon (replaced with Campaign)
  },
  {
    id: 3,
    title: "Art Digital",
    description:
      "Ce cours est dédié aux passionnés et débutants dans le domaine de l’art digital. Avec des modules de formations complètes.",
    icon: <Brush /> // Art Digital icon
  },
  {
    id: 4,
    title: "Médias & Technologie",
    description:
      "Ce cours est dédié aux passionnés et débutants dans le domaine des médias et de la technologie. Avec des modules de formations complètes.",
    icon: <Devices /> // Media & Tech icon
  },
];

const Evaluation = () => {
  const [selectedEvaluation, setSelectedEvaluation] = useState(null);

  // Handle the click on a formation
  const handleClick = (evaluation) => {
    setSelectedEvaluation(evaluation);
  };

  return (
    <div style={{ padding: "16px" }}>
      <Head />

      {/* Section Header */}
      {!selectedEvaluation && (
        <div style={{ marginBottom: "24px" }}>
          <h1 style={{ fontWeight: "bold" }}>Evaluations</h1>
          <p style={{ color: "gray", marginBottom: "16px" }}>
            Découvrez votre niveau de compétence et recevez des recommandations
            d'apprentissage personnalisées.
          </p>
          <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "#1976d2",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Débutant
            </button>
            <button
              style={{
                padding: "8px 16px",
              }}
            >
              Intermédiaire
            </button>
            <button
              style={{
                padding: "8px 16px",
              }}
            >
              Avancé 
            </button>
            <hr />
          </div>
        </div>
      )}


      {/* Conditional rendering of either the Evaluation list or the selected evaluation detail */}
      {/* Conditional rendering of either the Evaluation list or the selected evaluation detail */}
      {selectedEvaluation ? (
        // Render EvaluationDetail component when an evaluation is clicked
        <EvaluationDetail evaluation={selectedEvaluation} />
      ) : (
        // List of evaluations with icons
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          {evaluations.map((evaluation) => (
            <div
              key={evaluation.id}
              style={{
                width: "48%",
                padding: "24px",
                borderRadius: "8px",
                position: "relative",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "box-shadow 0.3s",
              }}
              onClick={() => handleClick(evaluation)} // On click, show details
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                {evaluation.icon}
                <h3 style={{ fontWeight: "bold", marginBottom: "8px" }}>
                  {evaluation.title}
                </h3>
              </div>
              <p style={{ color: "gray" }}>{evaluation.description}</p>
              {evaluation.status && (
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    padding: "4px 8px",
                    backgroundColor: "#1976d2",
                    color: "#fff",
                    borderRadius: "4px",
                    fontWeight: "bold",
                  }}
                >
                  {evaluation.status}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Evaluation;
