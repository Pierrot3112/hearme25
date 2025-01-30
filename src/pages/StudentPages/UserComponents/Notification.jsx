import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Notification = () => {
  return (
    <Box display="flex" alignItems="center" color="#333">
      <IconButton sx={{ color: "black", marginRight: 1 }}>
        <NotificationsIcon />
      </IconButton>
      <Typography variant="body2" sx={{ fontSize: 14 }} className="none">
        0 px
      </Typography>
    </Box>
  );
};

export default Notification;
