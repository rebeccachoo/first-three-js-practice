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
      <Box sx={{ fontSize: "32px", pb: 4 }}>Sugguest A Feature</Box>
      You can sugguest a feature of this website if you have any ideas to
      improve.
      <a href="mailto:rnwldms@gmail.com" target={"_blank"}>
        rnwldms@gmail.com
      </a>
      <br />
      <Box sx={{ pt: 3 }}>
        Contact the developer.{" "}
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
