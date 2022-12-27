import React from "react";
import Box from "@mui/material/Box";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "500px",
        // border: "1px solid white",
        fontSize: "33px",
        width: "90%",
      }}
    >
      This website is built with React.js and Material UI. <br />
      Axios is used for sending request to get API.
    </Box>
  );
};

export default About;