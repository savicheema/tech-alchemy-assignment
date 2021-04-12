import React from "react";
import "./update.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import AccentButton from "../utils/AccentButton";

const Update = () => (
  <div className="update">
    <FontAwesomeIcon icon={faClock} />

    <div className="message">Your order is now Ready</div>

    <div className="update-info">
      <div className="upper">Splint Doumo</div>
      <div className="lower">Order id: #ED564F</div>
    </div>

    <AccentButton>
      <span>Details</span>
      <FontAwesomeIcon icon={faArrowRight} />
    </AccentButton>
  </div>
);

export default Update;
