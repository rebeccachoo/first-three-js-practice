import React from "react";
import { Box } from "@mui/material/";

const Time = () => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  return <Box>{date}</Box>;
};

export default Time;
