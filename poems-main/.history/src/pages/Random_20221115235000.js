import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import axios from "axios";

import Poem from "./Poem";

import ShuffleOnIcon from "@mui/icons-material/ShuffleOn";

function Example() {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    searchWithAuthor();
  }, []);

  const searchWithAuthor = async () => {
    setLoading(true);
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
        <Box onClick={searchWithAuthor} sx={{ color: "white", pb: 3 }}>
          <ShuffleOnIcon sx={{ fontSize: "30px", cursor: "pointer" }} />
        </Box>
        <Box sx={{ pb: 1 }}>
          {/* {loading ? (
            <CircularProgress
              sx={{
                color: "white",
                position: "relative",
                top: "+100px",
              }}
            />
          ) : (
            ""
          )} */}
          {data && data.length > 0 ? <Poem item={data[0]} /> : ""}
        </Box>
      </Box>
    </Box>
  );
}
export default Example;
