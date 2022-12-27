import React from "react";
import Box from "@mui/material/Box";

const Poem = ({ item }) => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, #0055ff 0%, rgb(0, 153, 255) 100%)",
        p: 3,
        borderRadius: "20px",
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
        {item.title} by {item.author}
      </Box>
      <Box sx={{ pt: 1 }}>
        {item.lines.map((line, index) => (
          <Box key={index} sx={{ paddingTop: "4px" }}>
            {line}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Poem;
