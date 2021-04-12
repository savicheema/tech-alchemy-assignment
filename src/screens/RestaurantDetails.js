import React from "react";
import "./restaurant-details.css";

import { TopBar, RestaurantPage } from "../components";

const RestaurantDetails = ({ restaurantID, goToAllRestaurant }) => (
  <div className="restaurant-details">
    <TopBar isRestaurant={true} goToAllRestaurant={goToAllRestaurant} />
    <RestaurantPage restaurantID={restaurantID} />
  </div>
);

export default RestaurantDetails;
