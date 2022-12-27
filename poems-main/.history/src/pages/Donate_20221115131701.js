import React from "react";
import { Box, Button } from "@mui/material/";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "500px",
        // border: "1px solid white",
        fontSize: "22px",
        width: "100%",
        lineHeight: "1.5em",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Box sx={{ fontSize: "32px", pb: 4 }}>Donate</Box>
      You can donate for thie website. It will be used to for hosting and
      development.
      <a href="https://buy.stripe.com/test_aEUaIleN351e4hO7su">
        <Button sx={{ mt: 1 }} variant="outlined">
          Donate $10
        </Button>
      </a>
      <Box sx={{ pt: 5 }}>
        If you have more questions, email the developer.{" "}
        <a href="mailto:rnwldms@gmail.com" target={"_blank"}>
          <MailOutlinedIcon
            sx={{ position: "relative", top: "+4px", color: "lightblue" }}
          />
        </a>
      </Box>
    </Box>
  );
};

export default About;
