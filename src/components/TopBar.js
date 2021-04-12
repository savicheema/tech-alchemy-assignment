import React from "react";
import "./top-bar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faFilter,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import back from "../assets/back-arrow.svg";

import ArrowSwitch from "./ArrowSwitch";
import Search from "./Search";
import AccentButton from "./utils/AccentButton";

const TopBar = ({ turnOnFilter }) => (
  <div className="top-bar">
    <div className="back">
      <AccentButton>
        <img src={back} alt="back" />
      </AccentButton>
    </div>
    <div className="all-functions">
      <div className="shop">
        <FontAwesomeIcon icon={faStore} />
        <span> Da Otto </span>
        <ArrowSwitch type="small" />
      </div>
      <Search />
      <AccentButton action={turnOnFilter}>
        <FontAwesomeIcon icon={faFilter} />
      </AccentButton>
    </div>
    <AccentButton type="orange">
      <FontAwesomeIcon icon={faShoppingCart} />
    </AccentButton>
  </div>
);

export default TopBar;
