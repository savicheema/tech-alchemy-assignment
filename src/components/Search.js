import React from "react";
import "./search.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => (
  <div className="search">
    <FontAwesomeIcon icon={faSearch} />
    <input
      type="text"
      placeholder="Search for Restaurants (Press Enter to search)"
    />
  </div>
);

export default Search;
