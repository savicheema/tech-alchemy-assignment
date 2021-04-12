import React from "react";
import "./top-bar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faFilter,
  faShoppingCart,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import ArrowSwitch from "./ArrowSwitch";
import Search from "./Search";
import AccentButton from "./utils/AccentButton";

const TopBar = ({ turnOnFilter, isRestaurant, goToAllRestaurant }) => (
  <div className="top-bar">
    <div className="back">
      <AccentButton action={goToAllRestaurant}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </AccentButton>
    </div>
    {!isRestaurant && (
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
    )}

    <AccentButton type="orange">
      <FontAwesomeIcon icon={faShoppingCart} />
    </AccentButton>
  </div>
);

export default TopBar;
