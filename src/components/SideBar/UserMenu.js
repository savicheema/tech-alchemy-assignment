import React from "react";
import "./user-menu.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog } from "@fortawesome/free-solid-svg-icons";
import {
  faFileAlt,
  faEnvelope,
  faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";

const UserMenu = () => (
  <div className="user-menu">
    <div className="user-menu-items selected">
      <FontAwesomeIcon icon={faHome} /> <span> Home </span>
    </div>
    <div className="user-menu-items">
      <FontAwesomeIcon icon={faFileAlt} /> <span> Orders</span>
    </div>
    <div className="user-menu-items">
      <FontAwesomeIcon icon={faEnvelope} /> <span> Notification </span>{" "}
      <span className="notification-bubble"> 2</span>
    </div>
    <div className="user-menu-items">
      <FontAwesomeIcon icon={faQuestionCircle} /> <span> Help & Support </span>
    </div>
    <div className="user-menu-items">
      <FontAwesomeIcon icon={faCog} /> <span> Settings </span>
    </div>
  </div>
);

export default UserMenu;
