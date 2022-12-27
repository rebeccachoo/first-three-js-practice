import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material/";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Poem from "./Poem";

function Example() {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  const [data, setData] = useState([]);
  const [select, setSelect] = React.useState("");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  const search = () => {};

  const searchWithAuthor = () => {
    axios
      .get("https://poetrydb.org/author/" + capitalizeFirstLetter(value))
      .then((res) => {
        console.log(res);
        if (res.data) {
          // res.data.titles.map((item) => {
          //   if (item.toUpperCase().includes(value.toUpperCase()))
          //     setData((data) => [...data, item]);
          // });
          setData(res.data);
        }
      });
  };
  const searchWithTitle = () => {
    axios
      .get("https://poetrydb.org/title/" + capitalizeFirstLetter(value))
      .then((res) => {
        console.log(res);
        if (res.data) {
          // res.data.titles.map((item) => {
          //   if (item.toUpperCase().includes(value.toUpperCase()))
          //     setData((data) => [...data, item]);
          // });
          setData(res.data);
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
              <InputLabel sx={{ pl: 1 }}>Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                sx={{
                  width: "150px",
                  backgroundColor: "white",
                  border: "none",
                  outline: "none",
                  "& fieldset": { border: "none" },
                  position: "relative",
                  left: "-1px",
                }}
              >
                <MenuItem selected value={"Author"}>
                  Author
                </MenuItem>
                <MenuItem value={"Title"}>Title</MenuItem>
                <MenuItem value={"Lines"}>Lines</MenuItem>
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

                textAlign: "center",
                position: "relative",
                left: "-10px",
              }}
              // onClick={() => speak({ text: value })}
              onClick={searchWithTitle}
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
          flexDirection: "column",
          alignItems: "center",
          fontSize: "14px",
          pt: 3,
        }}
      >
        <Box>
          {data.length > 0 ? "We have " + data.length + " Restuls" : ""}
        </Box>
        <Box sx={{ pt: 3 }}>
          {data && data.length > 0
            ? data.map((item, index) => <Poem key={index} item={item} />)
            : "Not Found"}
        </Box>
      </Box>
    </Box>
  );
}
export default Example;
