import React from "react";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";

const Poem = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
    >
      <Box
        sx={{
          p: 3,
          borderRadius: "20px",
          mb: 3,
          color: "black",
          borderTop: "3px solid grey",
          borderBottom: "3px solid grey",
          maxWidth: "500px",
          px: 2,
          backgroundColor: "white",
        }}
      >
        <Box
          sx={{
            fontWeight: "bold",
            fontSize: "15px",
            borderBottom: "2px solid gray",
            pb: 1,
            lineHeight: "1.6em",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            {item.title} by{" "}
            <span style={{ color: "#43AA8B" }}>{item.author}</span>
          </Box>
          <a href="">
            <AttachEmailOutlinedIcon sx={{ color: "grey", fontSize: "24px" }} />
          </a>
        </Box>
        <Box sx={{ pt: 1 }}>
          {item.lines.map((line, index) => (
            <Box key={index} sx={{ paddingTop: "4px", lineHeight: "2.0em" }}>
              {line}
            </Box>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};

export default Poem;
