import React from "react";
import "./all-restaurants.css";

import { TopBar, Category, RestaurantGrid } from "../components";

class AllRestaurants extends React.Component {
  render() {
    let { isLoading, restaurants } = this.state;
    console.log(" AllRestaurants STATE", isLoading);

    return (
      <div className="all-restaurants">
        <TopBar />

        <Category />

        {!isLoading && <RestaurantGrid restaurants={restaurants} />}
        {isLoading && "Loading..."}
      </div>
    );
  }

  constructor(props) {
    super(props);

    let isLoading = false;
    let restaurants = [];

    this.state = { isLoading, restaurants };
  }

  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      const url =
        "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants";

      fetch(url)
        .then((response) => {
          console.log("got it!");
          return response.json();
        })
        .then((data) => {
          console.log("data", data);
          this.setState({ isLoading: false, restaurants: data.allRestaurants });
        })
        .catch((err) => {
          console.error(err);
          this.setState({ isLoading: false });
        });
    });
  }
  componentWillUnmount() {}
}

export default AllRestaurants;
