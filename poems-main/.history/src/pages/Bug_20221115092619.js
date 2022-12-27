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
        width: "90%",
        lineHeight: "1.5em",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      Repair <br />
      If Timer Tab doesn't work, send this pre-filled email. <br />
      It gives information for Romuald to fix the bug, which he usually does
      within 24 hours. <br />
      If the pre-filled email link above doesn't work then write an email to
      timertab@brillout.com with your user ID: My user ID: bKYKeZLiQsMg
      <br />
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
