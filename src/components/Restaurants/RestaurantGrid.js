import React from "react";
import "./restaurant-grid.css";

import Restaurant from "./Restaurant";

const RestaurantGrid = ({ restaurants, goToRestaurant }) => (
  <div className="restaurant-grid">
    <div className="title">Restaurants</div>
    <div className="grid">
      {restaurants.map((restaurant) => {
        console.log("Restaurant", restaurant);
        return (
          <Restaurant
            restaurant={restaurant}
            key={restaurant.id}
            goToRestaurant={goToRestaurant}
          />
        );
      })}
    </div>
  </div>
);

export default RestaurantGrid;
