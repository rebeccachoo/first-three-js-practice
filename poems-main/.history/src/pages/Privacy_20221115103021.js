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
      <Box sx={{ width: "80%" }}>
        <Box sx={{ fontSize: "32px", pb: 3, pt: 6 }}>
          Privacy Policy for ReadPoem.org
        </Box>

        <p>
          At ReadPoem, accessible from ReadPoem.org, one of our main priorities
          is the privacy of our visitors. This Privacy Policy document contains
          types of information that is collected and recorded by ReadPoem and
          how we use it.
        </p>
        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>

        <p>
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in ReadPoem. This policy is not applicable to
          any information collected offline or via channels other than this
          website. Our Privacy Policy was created with the help of the{" "}
          <a href="https://www.privacypolicygenerator.info/">
            Free Privacy Policy Generator
          </a>
          .
        </p>
        <h2>Consent</h2>

        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>

        <h2>Information we collect</h2>
        <p>
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information.
        </p>
        <p>
          If you contact us directly, we may receive additional information
          about you such as your name, email address, phone number, the contents
          of the message and/or attachments you may send us, and any other
          information you may choose to provide.
        </p>
        <p>
          When you register for an Account, we may ask for your contact
          information, including items such as name, company name, address,
          email address, and telephone number.
        </p>

        <h2>How we use your information</h2>

        <p>We use the information we collect in various ways, including to:</p>

        <ul>
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>
            Communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the website, and for
            marketing and promotional purposes
          </li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>

        <h2>Log Files</h2>
      </Box>
    </Box>
  );
};

export default About;
