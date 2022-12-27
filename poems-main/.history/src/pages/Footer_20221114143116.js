import React from "react";
import { Box, Grid } from "@mui/material/";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box sx={{ px: 10, backgroundColor: "#002233", py: 10 }}>
      <Grid container>
        <Grid item md={3} sx={{ textAlign: "center" }}>
          <Box>Support</Box>
          <Box sx={{ pt: 2 }}>Bug Repair</Box>
          <Box sx={{ pt: 2 }}>Contact Us</Box>
          <Box sx={{ pt: 2 }}>Support</Box>
        </Grid>
        <Grid item md={3} sx={{ textAlign: "center" }}>
          <Box>Involved</Box>
          <Box sx={{ pt: 2 }}>Donate</Box>
          <Box sx={{ pt: 2 }}>Contribute to App</Box>
        </Grid>
        <Grid item md={3} sx={{ textAlign: "center" }}>
          <Box>Support</Box>
          <Box sx={{ pt: 2 }}>About</Box>
          <Box sx={{ pt: 2 }}>Developer</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
