import React from "react";
import "./accent-button.css";

const AccentButton = ({ children, type }) => {
  const buttonClass = ["accent-button", type || ""].join(" ");
  return <button className={buttonClass}>{children}</button>;
};

export default AccentButton;
