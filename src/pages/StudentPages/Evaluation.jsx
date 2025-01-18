import React, { useState } from "react";
import { Box, Typography, Button, Grid, Paper, Chip } from "@mui/material";
import { Agriculture, Campaign, Brush, Devices } from "@mui/icons-material"; // Updated icon for Marketing
import Head from "./Head";

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
    <Box sx={{ padding: 1 }}>
      <Head />

      {/* Section Header */}
      <Box mb={3}>
        <Typography variant="h4" fontWeight="bold">
          Evaluations
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Découvrez votre niveau de compétence et recevez des recommandations
          d'apprentissage personnalisées.
        </Typography>
        <Box display="flex" gap={2} mb={2}>
          <Button variant="contained" color="primary">
            Débutant
          </Button>
          <Button variant="outlined" color="primary">
            Intermédiaire
          </Button>
          <Button variant="outlined" color="primary">
            Avancé
          </Button>
        </Box>
      </Box>

      <hr />

      {/* Display selected evaluation content */}
      {selectedEvaluation ? (
        <Box>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {selectedEvaluation.title}
          </Typography>
          <Typography variant="body1">{selectedEvaluation.description}</Typography>
          {selectedEvaluation.status && (
            <Chip
              label={selectedEvaluation.status}
              color="primary"
              size="small"
              sx={{
                marginTop: 2,
                fontWeight: "bold",
              }}
            />
          )}
        </Box>
      ) : (
        // List of evaluations with icons
        <Grid container spacing={3}>
          {evaluations.map((evaluation) => (
            <Grid item xs={12} md={6} key={evaluation.id}>
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  borderRadius: 2,
                  position: "relative",
                  height: "100%",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: 3,
                  },
                }}
                onClick={() => handleClick(evaluation)} // On click, show details
              >
                <Box display="flex" alignItems="center" gap={2}>
                  {evaluation.icon}
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {evaluation.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {evaluation.description}
                </Typography>
                {evaluation.status && (
                  <Chip
                    label={evaluation.status}
                    color="primary"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      fontWeight: "bold",
                    }}
                  />
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Evaluation;
