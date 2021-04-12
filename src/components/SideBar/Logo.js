import React from "react";
import "./logo.css";

import logo from "../../assets/logo.svg";

const Logo = () => (
  <div className="logo">
    <img src={logo} alt="logo" />
    <span> Pomo & co </span>
  </div>
);

export default Logo;
