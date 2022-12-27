import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material/";
import axios from "axios";

function Example() {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  const [data, setData] = useState([]);

  const search = () => {
    axios.get("https://poetrydb.org/title").then((res) => {
      console.log(res);
      if (res) {
        res.data.titles.map((item) => {
          if (item.toUpperCase().includes(value.toUpperCase()))
            setData((data) => [...data, item]);
        });
      }
    });
  };
  console.log(data);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Box>
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
          <Box sx={{ pb: 1 }}>
            Search a poem with author, title, or any words.
          </Box>
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
            // onClick={() => speak({ text: value })}
            onClick={search}
          >
            Search
          </button>
        </Box>
      </Box>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
        We have {data.length} Restuls
      </Box>
    </Box>
  );
}
export default Example;
