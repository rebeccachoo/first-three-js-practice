import React, { useEffect, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material/";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Poem from "./Poem";
import CircularProgress from "@mui/material/CircularProgress";
import { motion } from "framer-motion";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { HashLink } from "react-router-hash-link";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
    },
  },
}));

function Example() {
  const classes = useStyles();
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const { cancel, speak, speaking, supported, voices, pause, resume } =
    useSpeechSynthesis({});
  const [data, setData] = useState([]);
  const [select, setSelect] = React.useState("Title");
  const [page, setPage] = useState(1);
  const MAX_ITEM_OF_PAGE = 3;
  const [read, setRead] = useState([]);

  const getLineForSpeak = () => {
    if (data.length > 0) {
      data.slice((page - 1) * 3, page * 3).map((obj) => {
        console.log(obj.lines.join(" "));

        setRead((read) => [
          ...read,
          obj.title +
            " by " +
            obj.author +
            "  " +
            obj.lines.join(" ").replace("-", " ") +
            "     ",
        ]);
      });
    }
  };
  const speakHandle = async () => {
    getLineForSpeak();
    speak({
      text: read.map((str) => `${str}`).join(" "),
      voice: voices[11],
      rate: 0.9,
    });
  };

  const handleTextFieldChange = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  const handleChange = (event) => {
    setSelect(event.target.value);
  };
  const search = () => {
    setData([]);
    setTouched(true);
    setPage(1);
    if (value.length === 0 || !value) {
    } else {
      setLoading(true);
      if (select === "Author") {
        searchWithAuthor();
      } else if (select === "Title") {
        searchWithTitle();
      } else if (select === "Lines") {
        searchWithLines();
      } else if (select === "Linecount") {
        searchWithLineCount();
      } else if (select === "Poemcount") {
        searchWithPoemCount();
      }
    }
  };

  const searchWithAuthor = () => {
    axios
      .get("https://poetrydb.org/author/" + capitalizeFirstLetter(value))
      .then((res) => {
        console.log(res);
        if (res.data) {
          setData(res.data);
        }
        setLoading(false);
      });
  };
  const searchWithTitle = () => {
    axios
      .get("https://poetrydb.org/title/" + capitalizeFirstLetter(value))
      .then((res) => {
        console.log(res);
        if (res.data) {
          setData(res.data);
        }
        setLoading(false);
      });
  };
  const searchWithLines = () => {
    axios
      .get("https://poetrydb.org/lines/" + capitalizeFirstLetter(value))
      .then((res) => {
        console.log(res);
        if (res.data) {
          setData(res.data);
        }
        setLoading(false);
      });
  };
  const searchWithLineCount = () => {
    axios.get("https://poetrydb.org/linecount/" + value).then((res) => {
      console.log(res);
      if (res.data) {
        setData(res.data);
      }
      setLoading(false);
    });
  };
  const searchWithPoemCount = () => {
    axios.get("https://poetrydb.org/poemcount/" + value).then((res) => {
      console.log(res);
      if (res.data) {
        setData(res.data);
      }
      setLoading(false);
    });
  };

  console.log(data);
  console.log(loading);
  // console.log("page " + page);
  console.log("read " + read);

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
              {/* <InputLabel sx={{ pl: 1 }}>Category</InputLabel> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={select}
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
                <MenuItem value={"Linecount"}>Line Count</MenuItem>
                <MenuItem value={"Poemcount"}>Poem Count</MenuItem>
              </Select>
            </FormControl>
            <TextField
              autoFocus
              value={value}
              variant="outlined"
              onChange={(event) => setValue(event.target.value)}
              onKeyDown={(event) => handleTextFieldChange(event)}
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
          flexDirection: "column",
          alignItems: "center",
          fontSize: "14px",
          pt: 3,
        }}
      >
        {loading ? (
          <CircularProgress
            sx={{
              color: "white",
              position: "relative",
              top: "+100px",
            }}
          />
        ) : (
          <>
            <Box>
              {data.length > 0
                ? "We have " + data.length + " Restuls. One page shows 3 poems."
                : ""}
            </Box>
            <Box sx={{ position: "fixed", bottom: 10, right: 10 }}>
              <HashLink smooth to="#top">
                <ExpandLessIcon sx={{ fontSize: "32px" }} />
              </HashLink>
            </Box>

            {data.length > 3 ? (
              <Box sx={{ color: "white", pt: 3 }}>
                <Stack spacing={2} sx={{ color: "white" }}>
                  <Pagination
                    classes={{ ul: classes.ul }}
                    sx={{ color: "white" }}
                    count={Math.ceil(data.length / MAX_ITEM_OF_PAGE)}
                    variant="outlined"
                    color="primary"
                    onChange={(event, pageNumber) => setPage(pageNumber)}
                  />
                </Stack>
              </Box>
            ) : (
              ""
            )}
            {data && data.length > 0 ? (
              <Box sx={{ display: "flex", pt: 2 }}>
                <Box onClick={() => speakHandle()}>
                  <PlayCircleIcon
                    sx={{ fontSize: "60px", cursor: "pointer" }}
                  />
                </Box>
                <Box onClick={cancel}>
                  <StopCircleIcon
                    sx={{ fontSize: "60px", cursor: "pointer" }}
                  />
                </Box>

                {/* <select>
                {voices.map((option, index) => (
                  <option key={option.voiceURI} value={index}>
                    {`${index} ${option.lang} - ${option.name} ${
                      option.default ? "- Default" : ""
                    }`}
                  </option>
                ))}
              </select> */}
              </Box>
            ) : (
              ""
            )}
            <Box sx={{ pt: 3, display: "flex" }}>
              <Box>
                {data && data.length > 0
                  ? data.slice((page - 1) * 3, page * 3).map((item, index) => {
                      return <Poem key={index} item={item} />;
                    })
                  : touched
                  ? "Not Found"
                  : ""}
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
export default Example;
