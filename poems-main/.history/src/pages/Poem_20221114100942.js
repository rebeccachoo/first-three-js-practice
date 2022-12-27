import React from "react";
import Box from "@mui/material/Box";

const Poem = ({ item }) => {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Box sx={{ fontWeight: "bold", fontSize: "22px" }}>
        {item.title} by {item.author}
      </Box>
      <Box sx={{ pt: 1 }}>
        {item.lines.map((line) => (
          <Box sx={{ paddingTop: "4px" }}>{line}</Box>
        ))}
      </Box>
    </Box>
  );
};

export default Poem;
