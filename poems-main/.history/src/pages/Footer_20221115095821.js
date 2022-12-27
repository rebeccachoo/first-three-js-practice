import React from "react";
import { Box, Grid } from "@mui/material/";
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
            <HashLink smooth to="/contact#top">
              Contact The Developer
            </HashLink>
          </Box>
          <Box sx={{ pt: 2 }}>
            <HashLink smooth to="/request#top">
              Sugguest a Feature
            </HashLink>
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
          <Box sx={{ pt: 2 }}>
            <HashLink smooth to="/donate#top">
              Donate
            </HashLink>
          </Box>
          <Box sx={{ pt: 2 }}>
            <HashLink smooth to="/">
              Contribute to App
            </HashLink>
          </Box>
        </Grid>
        <Grid
          item
          md={3}
          sm={12}
          xs={12}
          sx={{ textAlign: "center", pb: { md: 0, xs: 3 } }}
        >
          <Box sx={{ color: "grey" }}>Support</Box>
          <Box sx={{ pt: 2 }}>
            <HashLink smooth to="/about#top" smooth>
              About
            </HashLink>
          </Box>
          <Box sx={{ pt: 2 }}>
            <HashLink to="/website-request#top" smooth>
              Website Development Request
            </HashLink>
          </Box>
        </Grid>
        <Grid
          item
          md={3}
          sm={12}
          xs={12}
          sx={{ textAlign: "center", pb: { md: 0, xs: 3 } }}
        >
          <Box sx={{ color: "grey" }}>Legal</Box>
          <Box sx={{ pt: 2 }}>
            <HashLink smooth to="/terms#top">
              Terms of Service
            </HashLink>
          </Box>
          <Box sx={{ pt: 2 }}>
            {" "}
            <HashLink smooth to="/privacy#top">
              Privacy Policy
            </HashLink>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
