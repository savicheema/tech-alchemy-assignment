import React from "react";
import "./restaurant-details.css";

import { TopBar, RestaurantPage } from "../components";

const RestaurantDetails = ({ restaurantID }) => (
  <div className="restaurant-details">
    <TopBar isRestaurant={true} />
    <RestaurantPage restaurantID={restaurantID} />
  </div>
);

export default RestaurantDetails;
