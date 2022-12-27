import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material/";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Example() {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  const [data, setData] = useState([]);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          height: "100px",
          alignItems: "center",
          // border: "1px solid white",
          pt: 5,
        }}
      >
        <Box>
          <Box sx={{ pb: 1 }}>
            Search a poem with author, title, or any words.
          </Box>

          <Box sx={{ display: "flex" }}>
            <FormControl>
              <InputLabel sx={{ pl: 1 }}>Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                sx={{
                  width: "100px",
                  backgroundColor: "white",
                  border: "none",
                  outline: "none",
                  "& fieldset": { border: "none" },
                  position: "relative",
                  left: "-1px",
                }}
              >
                <MenuItem value={"Author"}>Author</MenuItem>
                <MenuItem value={"Title"}>Title</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              autoFocus
              value={value}
              variant="outlined"
              onChange={(event) => setValue(event.target.value)}
              sx={{
                backgroundColor: "white",
                // borderRadius: "20px",
                minWidth: "500px",
                outline: "none",
                "& fieldset": { border: "none" },
              }}
            />

            <button
              style={{
                cursor: "pointer",
                width: "72px",
                height: "72px",
                textAlign: "center",
                position: "relative",
                left: "-10px",
              }}
              // onClick={() => speak({ text: value })}
              onClick={search}
            >
              Search
            </button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontSize: "14px",
          pt: 3,
        }}
      >
        {data.length > 0 ? "We have " + data.length + " Restuls" : ""}
      </Box>
    </Box>
  );
}
export default Example;
