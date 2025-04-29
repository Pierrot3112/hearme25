import React, { useEffect, useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { HeartBroken } from "@mui/icons-material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Img from '../../../assets/images/imgr.png';
import User from '../../../assets/images/user.jpg';
import Video from '../../../assets/video/backHomee.mp4';

import FormationSelected from "../UserComponents/FormationSelected";
import './course.scss';
import axiosInstance from "../../../Auth/services/axiosInstance";

const CourseDetails = ({ formation, onStartFormation }) => {
  const [showFormationSelected, setShowFormationSelected] = useState(false);
  const [formationDetail,setFormationDetail] = useState(null)

  const handleStartFormation = () => {
    setShowFormationSelected(true);
    if (onStartFormation) {
      onStartFormation(); 
    }
  };
  const getInfoFormation = async () => {
    const response = await axiosInstance.get(`/courses/formation/${formation.id}/`)
    console.log(response.data)
    setFormationDetail(response.data)
  }
  useEffect(()=>{
    getInfoFormation()
  },[])
  return (
    <Box className="course" sx={{ padding: 1 }}>
      {showFormationSelected ? (
        <FormationSelected formation={formationDetail} />
      ) : (
        <>
          <div className="courses">
            <div className="left">
              <img src={formation.image || Img} alt={formation.nom} className="image-representation" />
              <div className="head-title">
                <h2>{formation.nom}</h2>
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
                {formationDetail && formationDetail.videos.map((video,index)=>(
                  <p key={index}>Module {index+1}: {video.titre}</p>
                ))}
              </div>
              <button className="btn" onClick={handleStartFormation}>
                Commencer votre formation
              </button>
              <div className="videos">
                <video src={formationDetail?.videos[0]?.url || Video} />
                <IconButton className="play-button">
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
