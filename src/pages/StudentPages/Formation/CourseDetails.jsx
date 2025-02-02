import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { HeartBroken } from "@mui/icons-material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Img from '../../../assets/images/imgr.png';
import User from '../../../assets/images/user.jpg';
import Video from '../../../assets/video/backHomee.mp4';

import FormationSelected from "../UserComponents/FormationSelected";
import './course.scss';

const CourseDetails = ({ formation, onStartFormation }) => {
  const [showFormationSelected, setShowFormationSelected] = useState(false);

  const handleStartFormation = () => {
    setShowFormationSelected(true);
    if (onStartFormation) {
      onStartFormation(); 
    }
  };

  return (
    <Box className="course" sx={{ padding: 1 }}>
      {showFormationSelected ? (
        <FormationSelected formation={formation} />
      ) : (
        <>
          <div className="courses">
            <div className="left">
              <img src={formation.image || Img} alt={formation.title} className="image-representation" />
              <div className="head-title">
                <h2>{formation.title}</h2>
                <span>{formation.statut} {'>>'} </span>
              </div>
              <p>{formation.description}</p>
              <div className="lead">
                <div className="teacher">
                  <img src={formation.author || User} alt="teacher" />
                  <p>{formation.teacher || "Professeur"}</p>
                </div>
                <div className="followers">
                  <HeartBroken />
                  1,5k
                </div>
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

export default CourseDetails;
