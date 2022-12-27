import React from "react";

const Time = () => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  return <div>{date}</div>;
};

export default Time;
