import React from "react";
import Box from "@mui/material/Box";

const Poem = ({ item }) => {
  return (
    <Box>
      <Box>{item.title}</Box>
      <Box>{item.author}</Box>
    </Box>
  );
};

export default Poem;
