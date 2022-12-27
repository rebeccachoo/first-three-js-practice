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
        minHeight: "500px",
        fontSize: "22px",
        width: "70%",
        lineHeight: "1.5em",

        textAlign: "center",
        border: "1px solid black",
      }}
    >
      <Box sx={{ fontSize: "32px", pb: 4, pt: 6 }}>
        Privacy Policy for ReadPoem.org
      </Box>

      <p>
        At ReadPoem, accessible from ReadPoem.org, one of our main priorities is
        the privacy of our visitors. This Privacy Policy document contains types
        of information that is collected and recorded by ReadPoem and how we use
        it.
      </p>
      <p>
        If you have additional questions or require more information about our
        Privacy Policy, do not hesitate to contact us.
      </p>

      <p>
        This Privacy Policy applies only to our online activities and is valid
        for visitors to our website with regards to the information that they
        shared and/or collect in ReadPoem. This policy is not applicable to any
        information collected offline or via channels other than this website.
        Our Privacy Policy was created with the help of the{" "}
        <a href="https://www.privacypolicygenerator.info/">
          Free Privacy Policy Generator
        </a>
        .
      </p>
      <h2>Consent</h2>

      <p>
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </p>

      <h2>Information we collect</h2>

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
