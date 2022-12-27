import React from "react";
import { Box } from "@mui/material/";

const Time = () => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  var today = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return (
    <Box sx={{ textAlign: "center", pt: 10, fontSize: "44px" }}>{date}</Box>
  );
};

export default Time;
