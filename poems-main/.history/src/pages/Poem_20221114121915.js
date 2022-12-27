import React from "react";
import Box from "@mui/material/Box";

const Poem = ({ item }) => {
  return (
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
        }}
      >
        {item.title} by <span style={{ color: "#43AA8B" }}>{item.author}</span>
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
