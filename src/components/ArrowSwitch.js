import React from "react";
import "./arrow-switch.css";

import down from "../assets/down-arrow.svg";
import up from "../assets/up-arrow.svg";

const ArrowSwitch = ({ type }) => {
  const arrowSwitchClass = ["arrow-switch", type || ""].join(" ");
  return (
    <div className={arrowSwitchClass}>
      <img src={up} alt="up arrow" />
      <img src={down} alt="up arrow" />
    </div>
  );
};

export default ArrowSwitch;
