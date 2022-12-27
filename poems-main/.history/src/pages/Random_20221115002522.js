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
    searchWithAuthor();
  }, []);

  const searchWithAuthor = async () => {
    await axios.get("https://poetrydb.org/random").then((res) => {
      console.log(res);
      if (res.data) {
        setData(res.data);
      }
      setLoading(false);
    });
  };
  console.log(data);

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
          <Box sx={{ fontSize: "32px" }}>
            {data[0].title} by {data[0].author}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export default Example;
