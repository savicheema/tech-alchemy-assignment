import React from "react";
import "./side-bar.css";

import Logo from "./Logo";

import { UserMenu, UserInfo, Update } from "./";

const SideBar = () => (
  <div className="side-bar">
    <Logo />

    <div className="content">
      <UserMenu />
      <Update />
    </div>

    <UserInfo />
  </div>
);

export default SideBar;
