import React from "react";
import "./accent-button.css";

const AccentButton = ({ children, type, action }) => {
  const buttonClass = ["accent-button", type || ""].join(" ");
  return (
    <button className={buttonClass} onClick={action}>
      {children}
    </button>
  );
};

export default AccentButton;
