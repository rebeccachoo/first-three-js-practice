import React from "react";
import Box from "@mui/material/Box";

const Poem = ({ item }) => {
  return (
    <Box
      sx={{
        background: "white",
        p: 3,
        borderRadius: "20px",
        mb: 3,
        color: "black",
        borderTop: "3px solid grey",
        borderBottom: "3px solid grey",
        maxWidth: "400px",
      }}
    >
      <Box
        sx={{
          fontWeight: "bold",
          fontSize: "15px",
          borderBottom: "2px solid gray",
          pb: 1,
        }}
      >
        {item.title} by <span style={{ color: "#AAC0AA" }}>{item.author}</span>
      </Box>
      <Box sx={{ pt: 1 }}>
        {item.lines.map((line, index) => (
          <Box key={index} sx={{ paddingTop: "4px", lineHeight: "2.0em" }}>
            {line}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Poem;
