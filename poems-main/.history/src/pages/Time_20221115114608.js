import React from "react";
import { Box, Grid } from "@mui/material/";

const Time = () => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  return <div>{date}</div>;
};

export default Time;
