import React from "react";
import "./all-restaurants.css";

import { TopBar } from "../components";

const AllRestaurants = () => (
  <div className="all-restaurants">
    <TopBar />
    <div className="category">category filter</div>
    <div className="restaurants">
      <div className="restaurant">1</div>
      <div className="restaurant">1</div>
      <div className="restaurant">1</div>
      <div className="restaurant">1</div>
      <div className="restaurant">1</div>
      <div className="restaurant">1</div>
    </div>
  </div>
);

export default AllRestaurants;
