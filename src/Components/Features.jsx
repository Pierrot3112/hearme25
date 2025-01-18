import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import data from "../utils/data.json";

// Mapping des noms d'icônes aux composants réels
const iconMap = {
  LightbulbOutlinedIcon: <LightbulbOutlinedIcon style={{ fontSize: "32px" }} />,
  MenuBookOutlinedIcon: <MenuBookOutlinedIcon style={{ fontSize: "32px" }} />,
  SmartToyOutlinedIcon: <SmartToyOutlinedIcon style={{ fontSize: "32px" }} />,
  WorkspacePremiumOutlinedIcon: <WorkspacePremiumOutlinedIcon style={{ fontSize: "32px" }} />,
};

const Features = () => {
  // État local pour suivre l'élément actif
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Box className="features-container">
      {data.features.map((feature, index) => (
        <Button
          key={index}
          className={`feature-item ${activeIndex === index ? "active" : ""}`} // Ajoute la classe "active"
          onClick={() => setActiveIndex(index)} // Met à jour l'état lors d'un clic
        >
          <Box className="icon-container">
            {iconMap[feature.icon]}
          </Box>
          <Typography className="feature-title">{feature.title}</Typography>
        </Button>
      ))}
    </Box>
  );
};

export default Features;
