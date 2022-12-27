import React from "react";
import { Box, Grid } from "@mui/material/";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box sx={{ px: 10, backgroundColor: "#002233", py: 10 }}>
      <Grid container>
        <Grid item>Support</Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
