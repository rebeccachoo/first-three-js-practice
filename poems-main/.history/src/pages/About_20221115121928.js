import React from "react";
import Box from "@mui/material/Box";
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
      <Box sx={{ fontSize: "32px", pb: 4 }}>About</Box>
      This website is developed with React.js and Material UI. <br />
      This website is SPA(Single Page Application) App. <br />
      <br />
      Axios is used for sending requests to get API.
      <br />
      <a target={"_blank"} href="https://axios-http.com/docs/intro">
        https://axios-http.com/docs/intro
      </a>
      <br />
      Framer is used for animations.
      <a target={"_blank"} href="https://www.framer.com/motion/">
        https://www.framer.com/motion/
      </a>
      <Box sx={{ pt: 3 }}>
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
