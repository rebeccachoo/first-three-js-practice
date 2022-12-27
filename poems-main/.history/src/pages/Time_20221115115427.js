import React, { useState, useEffect } from "react";
import { Box } from "@mui/material/";

const Time = () => {
  const [dateToShow, setDateToShow] = useState("");
  const [time, setTimeToShow] = useState("");
  const [zone, setZone] = useState("");

  useEffect(() => {
    set();
  }, []);

  const set = () => {
    let today = new Date();
    setDateToShow(
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
    );
    setTimeToShow(
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    );
    setZone(today.getTimezoneOffset());
    setTimeout(() => {
      set();
    }, 500);
  };

  return (
    <Box sx={{ textAlign: "center", pt: 10, fontSize: "44px" }}>
      {dateToShow}
      <Box sx={{ fontSize: "155px", pt: 2 }}>{time}</Box>
    </Box>
  );
};

export default Time;
