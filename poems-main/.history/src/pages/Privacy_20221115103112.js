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

        <h2>Log Files</h2><p>ReadPoem follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>



<h2>Our Advertising Partners</h2>

<p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</p>

<ul>
    <li>
        <p>Google</p>
        <p><a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>
    </li>
</ul>

<h2>Advertising Partners Privacy Policies</h2>

<P>You may consult this list to find the Privacy Policy for each of the advertising partners of ReadPoem.</p>

<p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on ReadPoem, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>

<p>Note that ReadPoem has no access to or control over these cookies that are used by third-party advertisers.</p>

<h2>Third Party Privacy Policies</h2>

<p>ReadPoem's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </p>

      </Box>
    </Box>
  );
};

export default About;
