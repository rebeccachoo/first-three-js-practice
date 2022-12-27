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

  useEffect(() => {
    getLineForSpeak();
  }, [page, value, data]);

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

  const handleChange = async (event) => {
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

  const searchWithAuthor = async () => {
    await axios
      .get("https://poetrydb.org/author/" + capitalizeFirstLetter(value))
      .then((res) => {
        console.log(res);
        if (res.data) {
          setData(res.data);
        }
        setLoading(false);
      });
  };
  const searchWithTitle = async () => {
    await axios
      .get("https://poetrydb.org/title/" + capitalizeFirstLetter(value))
      .then((res) => {
        if (res.data) {
          setData(res.data);
        }
        setLoading(false);
      });
  };
  const searchWithLines = async () => {
    await axios
      .get("https://poetrydb.org/lines/" + capitalizeFirstLetter(value))
      .then((res) => {
        if (res.data) {
          setData(res.data);
        }
        setLoading(false);
      });
  };
  const searchWithLineCount = async () => {
    axios.get("https://poetrydb.org/linecount/" + value).then((res) => {
      if (res.data) {
        setData(res.data);
      }
      setLoading(false);
    });
  };
  const searchWithPoemCount = async () => {
    await axios.get("https://poetrydb.org/poemcount/" + value).then((res) => {
      if (res.data) {
        setData(res.data);
      }
      setLoading(false);
    });
  };

  console.log("data", data);
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
        <Box sx={{ pb: 1 }}>
          Search a poem with author, title, or any words.
        </Box>
      </Box>
    </Box>
  );
}
export default Example;
