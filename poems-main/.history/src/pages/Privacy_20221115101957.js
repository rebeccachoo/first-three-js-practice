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
      <Box sx={{ fontSize: "32px", pb: 4 }}>Bug Repaire</Box>
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
      <Box sx={{ fontSize: "32px", pb: 4 }}>Bug Repaire</Box>
      If ReadPoems doesn't work, send this pre-filled email. <br />
      It will help the developer to fix the bug, which it will be fixed within
      24 hours. <br />
      <a href="mailto:rnwldms@gmail.com" target={"_blank"}>
        rnwldms@gmail.com
      </a>
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
