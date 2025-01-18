import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, IconButton } from '@mui/material';

const SocialMediaIcons = () => {
  return (
    <Box display="flex" justifyContent="center" gap={1}>
      <IconButton
        href="https://www.facebook.com/"
        target="_blank"
        aria-label="Facebook"
        sx={{ color: 'white' }} 
      >
        <FacebookIcon fontSize="large" />
      </IconButton>
      <IconButton
        href="https://www.instagram.com/"
        target="_blank"
        aria-label="Instagram"
        sx={{ color: 'white' }} // Custom color for Instagram
      >
        <InstagramIcon fontSize="large" />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/"
        target="_blank"
        aria-label="LinkedIn"
        sx={{ color: 'white' }} 
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>
      <IconButton
        href="https://www.whatsapp.com/"
        target="_blank"
        aria-label="WhatsApp"
        sx={{ color: 'white' }} 
      >
        <WhatsAppIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default SocialMediaIcons;
