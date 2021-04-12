import React from "react";
import "./update.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Update = () => (
  <div className="update">
    <FontAwesomeIcon icon={faClock} />

    <div className="message">Your order is now Ready</div>

    <div className="update-info">
      <div className="upper">Splint Doumo</div>
      <div className="lower">Order id: #ED564F</div>
    </div>

    <div className="details">
      <span>Details</span>
      <FontAwesomeIcon icon={faArrowRight} />
    </div>
  </div>
);

export default Update;
