import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Head from "./Head";
import data from "../../utils/data.json";
import Img from '../../assets/images/imgr.png';
import User from '../../assets/images/user.jpg';
import Video from '../../assets/video/backHomee.mp4';
import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import FormationSelected from "../../Components/FormationSelected"; // Import du nouveau composant
import './course.scss';

const Courses = () => {
  const [showFormationSelected, setShowFormationSelected] = useState(false); // État pour basculer l'affichage
  const [selectedFormation, setSelectedFormation] = useState(null);

  const handleStartFormation = () => {
    setShowFormationSelected(true); // Affiche le composant FormationSelected
  };

  return (
    <Box className="course" sx={{ padding: 1 }}>
      {showFormationSelected ? (
        <FormationSelected /> // Rendu du composant FormationSelected
      ) : (
        <>
          <Head />
          <Box mb={3}>
            <Typography variant="h4" fontWeight="bold">
              Formations
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Alors apprenez les meilleures formations qui pourront vous aider.
            </Typography>
            <Box display="flex" gap={2} mb={1}>
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

          <div className="courses">
            <div className="left">
              <img src={Img} alt="sary sary" className="image-representation" />
              <div className="head-tittle">
                <h2>Agri-business</h2>
                <span> Gratuit {'>>'} </span>
              </div>
              <p>
                Praesentium cupiditate, a iste similique fuga quasi beatae
                veritatis mollitia laboriosam dolore autem aliquid quia nulla?
              </p>
              <div className="lead">
                <div className="teacher">
                  <img src={User} alt="teacher" />
                  <p>Mr Jeff</p>
                </div>
                <div className="followers">1,5k</div>
              </div>
            </div>
            <div className="right">
              <h2>Sommaire</h2>
              <div className="course-list">
                <p>Module 1: Initiation à l'agri-business</p>
                <p>Module 2: L'agri-business et l'IA</p>
                <p>Module 3: Startup avec l'agribusiness</p>
              </div>
              <button className="btn" onClick={handleStartFormation}>
                Commencer votre formation
              </button>
              <div className="videos">
                <video src={Video} style={{ position: "relative" }} />
                <IconButton
                  style={{
                    position: "absolute",
                    top: "90%",
                    left: "62.5%",
                    backgroundColor: "#43A8FF",
                    color: "white",
                  }}
                >
                  <PlayArrowIcon fontSize="large" />
                </IconButton>
              </div>
            </div>
          </div>
        </>
      )}
    </Box>
  );
};

export default Courses;
