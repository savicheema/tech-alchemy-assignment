import React from "react";
import "./filter.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

import AccentButton from "../utils/AccentButton";

const Filter = ({ turnOfFilter }) => (
  <div className="filter">
    <div className="filter-panel">
      <div className="title">
        Search filter <span onClick={turnOfFilter}>X</span>
      </div>

      <div className="sort">
        <div className="sort-title">Sort by</div>
        <div className="option">
          <FontAwesomeIcon icon={faFire} /> <span> Open </span>
        </div>
      </div>

      <div className="cuisine">
        <div className="cuisine-title">Cuisine</div>
        <div className="cuisine-options">
          <div className="option">All</div>
          <div className="option">Fast food</div>
          <div className="option">American food</div>
          <div className="option">Pizza</div>
          <div className="option">Asian</div>
          <div className="option">Dessert</div>
          <div className="option">Mexican</div>
          <div className="option">Breakfast</div>
        </div>
        <div className="see-more">See more</div>
      </div>

      <AccentButton action={turnOfFilter}> Apply filters</AccentButton>
    </div>
  </div>
);

export default Filter;
