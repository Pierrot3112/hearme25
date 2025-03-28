import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Chip,
  IconButton,
} from "@mui/material";
import { Star as StarIcon } from "@mui/icons-material";
import Head from "../UserComponents/Head";
import Certificat from "./Certificat";

const certifications = [
  {
    id: 1,
    title: "Agri-business",
    description:
      "Ce cours est dédié aux passionnés et débutants dans le domaine de l'Agri-business. Avec des modules de formations complexes.",
  },
  {
    id: 2,
    title: "Marketing Digitale",
    description:
      "Ce cours est dédié aux passionnés et débutants dans le domaine du marketing digital. Avec des modules de formations.",
  },
  {
    id: 3,
    title: "Art Digital",
    description:
      "Ce cours est dédié aux passionnés et débutants dans le domaine de l’art digital. Avec des modules de formations.",
  },
  {
    id: 4,
    title: "Médias & Technologie",
    description:
      "Ce cours est dédié aux passionnés et débutants dans le domaine des médias et de la technologie. Avec des modules de formations.",
  },
];

const Certification = () => {
  const [selectedCertif, setSelectedCertif] = useState(certifications[0]); // Par défaut, le premier certificat est affiché

  const handleCertifClick = (certif) => {
    setSelectedCertif(certif);
  };

  return (
    <Box sx={{ padding: 1 }}>
      <Head />

      <Box display="flex" alignItems="center" gap={3} sx={{ marginBottom: 4, flexWrap: "wrap" }}>
        <Box flex={1}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Certifications
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Démarquez-vous des autres et gagnez en crédibilité grâce à la certification Hearme.
          </Typography>

          <Box display="flex" gap={2}>
            <Button variant="contained" color="primary">Débutant</Button>
            <Button variant="outlined" color="primary">Intermédiaire</Button>
            <Button variant="outlined" color="primary">Avancé</Button>
          </Box>
        </Box>
      </Box>

      <hr />

      <Grid container spacing={3}>
        {certifications.map((certif) => (
          <Grid item xs={12} md={6} key={certif.id}>
            <Paper
              elevation={3}
              sx={{ padding: 3, position: "relative", borderRadius: 2, height: "100%", cursor: "pointer" }}
              onClick={() => handleCertifClick(certif)}
            >
              <Box display="flex" alignItems="center" mb={2}>
                <IconButton color="primary">
                  <StarIcon fontSize="large" />
                </IconButton>
              </Box>

              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {certif.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {certif.description}
              </Typography>

              <Chip
                label="POPULAIRE"
                color="primary"
                size="small"
                sx={{ position: "absolute", top: 10, right: 10, fontWeight: "bold" }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Passer la certification sélectionnée au composant Certificat */}
      <Certificat selectedCertif={selectedCertif} />
    </Box>
  );
};

export default Certification;
