import React from "react";
import Box from "@mui/material/Box";

const Poem = ({ item }) => {
  return (
    <Box>
      <Box>
        {item.title} by {item.author}
      </Box>
      <Box sx={{ pt: 1 }}>{item.author}</Box>
    </Box>
  );
};

export default Poem;
