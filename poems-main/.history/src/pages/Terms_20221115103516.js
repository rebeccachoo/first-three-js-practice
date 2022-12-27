import React from "react";
import Box from "@mui/material/Box";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "500px",
        fontSize: "22px",
        lineHeight: "1.5em",
        textAlign: "center",
      }}
    >
      <Box sx={{ width: "80%", pb: 3 }}>
        <Box sx={{ fontSize: "32px", pb: 3, pt: 6 }}>
          Privacy Policy for ReadPoem.org
        </Box>
      </Box>
    </Box>
  );
};

export default About;
