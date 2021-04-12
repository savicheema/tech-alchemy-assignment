import React from "react";
import "./restaurant-page.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faGlobe } from "@fortawesome/free-solid-svg-icons";

import Time from "../utils/Time";

class RestaurantPage extends React.Component {
  render() {
    let { isLoading, allRestaurantsDetails } = this.state;
    console.log(" RestaurantPage STATE", isLoading);
    let { restaurantID } = this.props;

    var restaurant;
    for (let i = 0; i < allRestaurantsDetails.length; i++) {
      const details = allRestaurantsDetails[i];

      console.log("compare", restaurantID, details);
      if (restaurantID === details.id) {
        restaurant = details;
        break;
      }
    }

    if (isLoading || !restaurant) return "Loading...";
    else
      return (
        <div className="restaurant-page">
          <div className="info">
            <div className="name">{restaurant.restaurantName}</div>
            <div className="description">
              {restaurant.restaurantDescription}
            </div>
            <Time time={restaurant.openingHours} />
            <div className="phone">
              <FontAwesomeIcon icon={faPhone} />{" "}
              <span>{restaurant.contactNumber}</span>
            </div>

            <div className="website">
              {" "}
              <FontAwesomeIcon icon={faGlobe} />{" "}
              <span>{restaurant.websiteUrl}</span>
            </div>
          </div>
          <img src={restaurant.restaurantImage} alt="example" />
        </div>
      );
  }

  constructor(props) {
    super(props);

    let isLoading = false;
    let allRestaurantsDetails = [];

    this.state = { isLoading, allRestaurantsDetails };
  }

  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      const url =
        "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/restaurantDetails";

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.setState({
            isLoading: false,
            allRestaurantsDetails: data.restaurantDetails,
          });
        })
        .catch((err) => {
          console.error(err);
          this.setState({ isLoading: false });
        });
    });
  }
  componentWillUnmount() {}
}

export default RestaurantPage;
