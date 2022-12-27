import React, { useState, useEffect } from "react";
import { Box } from "@mui/material/";

const Time = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [dateToShow, setDateToShow] = useState("");
  const [time, setTimeToShow] = useState("");
  const [zone, setZone] = useState("");

  useEffect(() => {
    set();
  }, []);

  const set = () => {
    let today = new Date();
    setDateToShow(
      months[today.getMonth()] +
        " " +
        today.getDate() +
        ", " +
        today.getFullYear()
    );
    if (parseInt(today.getMinutes()) < 10) {
      setTimeToShow(
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      );
    } else {
      setTimeToShow(
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      );
    }

    // setZone(today.timezone());
    setTimeout(() => {
      set();
    }, 500);
  };

  return (
    <Box sx={{ textAlign: "center", pt: 10, fontSize: "44px" }}>
      {dateToShow}
      <Box sx={{ fontSize: "155px", pt: 2 }}>{time}</Box>
      {/* <Box sx={{ fontSize: "155px", pt: 2 }}>{zone}</Box> */}
    </Box>
  );
};

export default Time;
