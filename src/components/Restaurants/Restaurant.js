import React from "react";
import "./restaurant.css";

import LinesEllipsis from "react-lines-ellipsis";

const Restaurant = ({ restaurant }) => (
  <div className="restaurant">
    <img src={restaurant.restaurantImage} alt="restaurant image" />
    <div className="info">
      <div className="name">Burger Mania</div>
      <div className="status">Open Now</div>
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
