import React from "react";
import "./user-info.css";

import ArrowSwitch from "../ArrowSwitch";

const UserInfo = () => (
  <div className="user-info">
    <div className="details">
      <div className="name">Mark Clarke</div>
      <div className="email">mark.clarke@gmail.com</div>
    </div>

    <ArrowSwitch type="normal" />
  </div>
);

export default UserInfo;
