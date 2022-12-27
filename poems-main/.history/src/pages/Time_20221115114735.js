import React from "react";
import { Box } from "@mui/material/";

const Time = () => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  var today2 = new Date();
  var time2 =
    today2.getHours() + ":" + today2.getMinutes() + ":" + today2.getSeconds();
  return (
    <Box sx={{ textAlign: "center", pt: 10, fontSize: "44px" }}>
      {date}
      <Box sx={{ fontSize: "55px" }}>{time2}</Box>
    </Box>
  );
};

export default Time;
