import React from "react";
import { Box, Grid } from "@mui/material/";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box sx={{ px: 10, backgroundColor: "#002233", py: 10 }}>
      <Grid container>
        <Grid
          item
          md={3}
          sm={12}
          xs={12}
          sx={{ textAlign: "center", pb: { xs: 3 } }}
        >
          <Box sx={{ color: "grey" }}>Support</Box>
          <Box sx={{ pt: 2 }}>
            <a href="">Bug Repair</a>
          </Box>
          <Box sx={{ pt: 2 }}>Contact Us</Box>
          <Box sx={{ pt: 2 }}>Support</Box>
        </Grid>
        <Grid item md={3} sm={12} xs={12} sx={{ textAlign: "center" }}>
          <Box sx={{ color: "grey" }}>Involved</Box>
          <Box sx={{ pt: 2 }}>Donate</Box>
          <Box sx={{ pt: 2 }}>Contribute to App</Box>
        </Grid>
        <Grid item md={3} sm={12} xs={12} sx={{ textAlign: "center" }}>
          <Box sx={{ color: "grey" }}>Support</Box>
          <Box sx={{ pt: 2 }}>About</Box>
          <Box sx={{ pt: 2 }}>Developer</Box>
        </Grid>
        <Grid item md={3} sm={12} xs={12} sx={{ textAlign: "center" }}>
          <Box sx={{ color: "grey" }}>Legal</Box>
          <Box sx={{ pt: 2 }}>Terms of Service</Box>
          <Box sx={{ pt: 2 }}>Privacy Policy</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
