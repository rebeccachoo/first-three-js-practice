import React from "react";
import { Box, Grid } from "@mui/material/";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <Box sx={{ px: 10, backgroundColor: "#002233", py: 10 }}>
      <Grid container>
        <Grid
          item
          md={3}
          sm={12}
          xs={12}
          sx={{ textAlign: "center", pb: { md: 0, xs: 3 } }}
        >
          <Box sx={{ color: "grey" }}>Support</Box>
          <Box sx={{ pt: 2 }}>
            <HashLink to="/bug#top" smooth>
              Bug Repair
            </HashLink>
          </Box>
          <Box sx={{ pt: 2 }}>
            <HashLink to="/contact">Contact The Developer</HashLink>
          </Box>
          <Box sx={{ pt: 2 }}>
            <HashLink to="/request">Request Improvements</HashLink>
          </Box>
        </Grid>
        <Grid
          item
          md={3}
          sm={12}
          xs={12}
          sx={{ textAlign: "center", pb: { md: 0, xs: 3 } }}
        >
          <Box sx={{ color: "grey" }}>Involved</Box>
          <Box sx={{ pt: 2 }}>Donate</Box>
          <Box sx={{ pt: 2 }}>Contribute to App</Box>
        </Grid>
        <Grid
          item
          md={3}
          sm={12}
          xs={12}
          sx={{ textAlign: "center", pb: { md: 0, xs: 3 } }}
        >
          <Box sx={{ color: "grey" }}>Support</Box>
          <Box sx={{ pt: 2 }}>About</Box>
          <Box sx={{ pt: 2 }}>Developer</Box>
        </Grid>
        <Grid
          item
          md={3}
          sm={12}
          xs={12}
          sx={{ textAlign: "center", pb: { md: 0, xs: 3 } }}
        >
          <Box sx={{ color: "grey" }}>Legal</Box>
          <Box sx={{ pt: 2 }}>Terms of Service</Box>
          <Box sx={{ pt: 2 }}>Privacy Policy</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
