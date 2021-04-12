import React from "react";
import "./time.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Time = ({ time }) => {
  const timeSplit = time.split(",");

  return (
    <div className="time">
      <FontAwesomeIcon icon={faClock} />
      <div className="time-container">
        <div className="weekdays">{timeSplit[0]}</div>
        <div className="weekend">{timeSplit[1]}</div>
      </div>
    </div>
  );
};

export default Time;
