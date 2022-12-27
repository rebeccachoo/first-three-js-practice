import React, { useState, useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material/";

function Example() {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: "200px",
        alignItems: "center",
      }}
    >
      <Box>
        <Box sx={{ pb: 1 }}>Search a poem with author, line, or any words.</Box>
        <TextField
          autoFocus
          value={value}
          variant="outlined"
          onChange={(event) => setValue(event.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: "20px",
            minWidth: "500px",
            outline: "none",
            "& fieldset": { border: "none" },
          }}
        />

        <button
          style={{
            cursor: "pointer",
            borderRadius: "10px",
            width: "72px",
            height: "55px",
            textAlign: "center",
          }}
          onClick={() => speak({ text: value })}
        >
          Search
        </button>
      </Box>
    </Box>
  );
}
export default Example;
