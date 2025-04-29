import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import CourseCard from "./CourseCard";
import CourseDetails from "./CourseDetails";
import Head from "../UserComponents/Head";
import axiosInstance from '../../../Auth/services/axiosInstance';


const Courses = () => {
  const [formations,setFormations] = useState([])
  const [selectedFormation, setSelectedFormation] = useState(null);
  const [showIntro, setShowIntro] = useState(true); // Ajout pour masquer l'introduction

  const handleCardClick = (formation) => {
    setSelectedFormation(formation);
  };

  const handleStartFormation = () => {
    setShowIntro(false); // Masquer l'introduction et la liste des formations
  };
  const getAllFormations = async () =>{
    try{
      const response = await axiosInstance.get("/courses/formation/")
      setFormations(response.data)
    }catch(error){
      console.error(error)
    }
  }
  useEffect(()=>{
    getAllFormations()
  },[])

  return (
    <section>
        <Head />
      {showIntro && (
        <article>
          <Box mb={3}>
            <Typography variant="h4" fontWeight="bold">
              Formations
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Alors apprenez les meilleures formations qui pourront vous aider.
            </Typography>
            <Box display="flex" gap={2} mb={1}>
              <Button variant="contained" color="primary">Débutant</Button>
              <Button variant="outlined" color="primary">Intermédiaire</Button>
              <Button variant="outlined">Avancé</Button>
            </Box>
          </Box>
          <hr />
        </article>
      )}
      <article>
        {selectedFormation ? (
          <CourseDetails 
            formation={selectedFormation} 
            onStartFormation={handleStartFormation} // Passe la fonction
          />
        ) : (
          <CourseCard onCardClick={handleCardClick} formations={formations}/>
        )}
      </article>
    </section>
  );
};

export default Courses;
