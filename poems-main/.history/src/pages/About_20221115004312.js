import React from "react";
import Box from "@mui/material/Box";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        border: "1px solid white",
      }}
    >
      This website is built with React.js and Material UI. Axios is used for
      sending request to get API.
    </Box>
  );
};

export default About;
