import React, { useState,useEffect } from "react";
import { Agriculture, Campaign, Brush, Devices } from "@mui/icons-material"; // Updated icon for Marketing
import EvaluationDetail from "./EvaluationDetails"; // Import the new component
import Head from "../UserComponents/Head";

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
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Détecter la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (evaluation) => {
    setSelectedEvaluation(evaluation);
  };

  // Styles responsives
  const styles = {
    container: {
      padding: windowWidth < 600 ? "12px" : "16px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    heading: {
      fontWeight: "bold",
      fontSize: windowWidth < 600 ? "1.75rem" : "2rem",
    },
    description: {
      color: "gray",
      marginBottom: "16px",
      fontSize: windowWidth < 600 ? "0.9rem" : "1rem",
    },
    buttonsContainer: {
      display: "flex",
      flexDirection: windowWidth < 600 ? "column" : "row",
      gap: windowWidth < 600 ? "8px" : "16px",
      marginBottom: "16px",
      width: "100%",
    },
    primaryButton: {
      padding: "8px 16px",
      backgroundColor: "#1976d2",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      width: windowWidth < 600 ? "100%" : "auto",
    },
    secondaryButton: {
      padding: "8px 16px",
      width: windowWidth < 600 ? "100%" : "auto",
    },
    cardsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: windowWidth < 768 ? "16px" : "24px",
      justifyContent: "center",
    },
    card: {
      width: windowWidth < 768 ? "100%" : windowWidth < 1024 ? "45%" : "48%",
      padding: windowWidth < 600 ? "16px" : "24px",
      borderRadius: "8px",
      position: "relative",
      cursor: "pointer",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "box-shadow 0.3s, transform 0.2s",
      "&:hover": {
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
        transform: "translateY(-2px)",
      },
    },
    cardHeader: {
      display: "flex",
      alignItems: "center",
      gap: windowWidth < 600 ? "8px" : "16px",
      flexWrap: windowWidth < 480 ? "wrap" : "nowrap",
    },
    cardTitle: {
      fontWeight: "bold",
      marginBottom: "8px",
      fontSize: windowWidth < 600 ? "1.1rem" : "1.25rem",
    },
    cardDescription: {
      color: "gray",
      fontSize: windowWidth < 600 ? "0.9rem" : "1rem",
    },
    statusBadge: {
      position: "absolute",
      top: "10px",
      right: "10px",
      padding: "4px 8px",
      backgroundColor: "#1976d2",
      color: "#fff",
      borderRadius: "4px",
      fontWeight: "bold",
      fontSize: windowWidth < 600 ? "0.7rem" : "0.8rem",
    },
  };

  return (
    <div style={styles.container}>
      <Head />
      {!selectedEvaluation && (
        <div style={{ marginBottom: "24px" }}>
          <h1 style={styles.heading}>Evaluations</h1>
          <p style={styles.description}>
            Découvrez votre niveau de compétence et recevez des recommandations
            d'apprentissage personnalisées.
          </p>
          <div style={styles.buttonsContainer}>
            <button style={styles.primaryButton}>Débutant</button>
            <button style={styles.secondaryButton}>Intermédiaire</button>
            <button style={styles.secondaryButton}>Avancé</button>
          </div>
          <hr />
        </div>
      )}
      
      {selectedEvaluation ? (
        <EvaluationDetail evaluation={selectedEvaluation} />
      ) : (
        <div style={styles.cardsContainer}>
          {evaluations.map((evaluation) => (
            <div
              key={evaluation.id}
              style={styles.card}
              onClick={() => handleClick(evaluation)}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={styles.cardHeader}>
                {evaluation.icon}
                <h3 style={styles.cardTitle}>{evaluation.title}</h3>
              </div>
              <p style={styles.cardDescription}>{evaluation.description}</p>
              {evaluation.status && (
                <div style={styles.statusBadge}>{evaluation.status}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Evaluation;
