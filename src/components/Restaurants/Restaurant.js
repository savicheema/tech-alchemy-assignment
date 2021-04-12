import React from "react";
import "./restaurant.css";

import LinesEllipsis from "react-lines-ellipsis";

const Restaurant = ({ restaurant, goToRestaurant }) => (
  <div
    className="restaurant"
    onClick={() => {
      goToRestaurant(restaurant.id);
    }}
  >
    <img src={restaurant.restaurantImage} alt="restaurant" />
    <div className="info">
      <div className="name">{restaurant.restaurantName}</div>
      {restaurant.isOpen && <div className="status open">Open Now</div>}
      {!restaurant.isOpen && <div className="status closed">Closed</div>}
    </div>
    <p>
      <LinesEllipsis
        text={restaurant.restaurantDescription}
        maxLine="3"
        ellipsis="..."
        trimRight
        basedOn="letters"
      />
    </p>
  </div>
);

export default Restaurant;
