import React, { useEffect, useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material/";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Poem from "./Poem";

import { makeStyles } from "@mui/styles";
import { HashLink } from "react-router-hash-link";
import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
    },
  },
}));

function Example() {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

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
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          width: "70%",
          maxWidth: "400px",
          display: "flex",
          justifyContent: "center",
          minHeight: "100px",
          alignItems: "center",
          pt: 5,
          flexDirection: "column",
        }}
      >
        <Box onClick={searchWithAuthor} sx={{ color: "white" }}>
          Random Pick
        </Box>
        <Box sx={{ pb: 1 }}>
          {data && data.length > 0 ? <Poem item={data[0]} /> : ""}
        </Box>
      </Box>
    </Box>
  );
}
export default Example;
