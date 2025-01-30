import React from "react";
import { useNavigate } from "react-router-dom"; 
import { Box, Button, Typography, Avatar, IconButton } from "@mui/material";
import img_url from "../../../assets/images/user.jpg";
import poste_icon from "../../../assets/images/user.jpg"; 
import level_icon from "../../../assets/images/user.jpg"; 
import point_icon from "../../../assets/images/user.jpg"; 

const ProfileDetails = () => {
  const navigate = useNavigate(); 

  const second_row = [
    { id: 0, title: "Poste", value: "Graphiste textile", icon: poste_icon },
    { id: 1, title: "Niveau", value: "Débutant", icon: level_icon },
    { id: 2, title: "Point Obtenu", value: "400 PX", icon: point_icon },
  ];

  const handleBack = () => {
    navigate(-1); 
  };

  return (
    <Box className="container-fluid profile-section">
      <Box className="row">
        {/* Première colonne - Profil principal */}
        <Box className="col first-col" display="flex" flexDirection="column" alignItems="center">
          <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 10, left: 10 }}>x</IconButton>
          <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: 2 }}>
            Mon Profil
          </Typography>
          <Avatar src={img_url} alt="Profil image" sx={{ width: 100, height: 100, marginBottom: 2 }} />
          <Typography variant="h6" sx={{ marginBottom: 1 }}>
            Edit Boniface
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
            editboniface@gmail.com
          </Typography>
          <Button variant="contained" color="primary">Modifier Profil</Button>
        </Box>

        {/* Deuxième colonne - Informations supplémentaires */}
        <Box className="col second-col" sx={{ marginTop: 4 }}>
          {second_row.map((item) => (
            <Box key={item.id} display="flex" alignItems="center" sx={{ marginBottom: 2 }}>
              <Avatar src={item.icon} alt={item.title} sx={{ width: 30, height: 30, marginRight: 2 }} />
              <Box>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">{item.value}</Typography>
              </Box>
            </Box>
          ))}
          <Button variant="outlined" color="secondary">Changer de mot de passe</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileDetails;
