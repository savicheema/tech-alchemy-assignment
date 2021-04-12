import React from "react";
import "./all-restaurants.css";

import { TopBar, Category, RestaurantGrid, Filter } from "../components";

class AllRestaurants extends React.Component {
  render() {
    let { isLoading, restaurants, isFiltering } = this.state;
    console.log(" AllRestaurants STATE", isLoading);

    return (
      <div className="all-restaurants">
        <TopBar turnOnFilter={this.turnOnFilter} />

        <Category />

        {!isLoading && <RestaurantGrid restaurants={restaurants} />}
        {isLoading && "Loading..."}

        {isFiltering && <Filter turnOfFilter={this.turnOfFilter} />}
      </div>
    );
  }

  constructor(props) {
    super(props);

    let isLoading = false;
    let isFiltering = false;
    let restaurants = [];

    this.state = { isLoading, restaurants, isFiltering };
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

  turnOnFilter = () => {
    this.setState({ isFiltering: true });
  };

  turnOfFilter = () => {
    this.setState({ isFiltering: false });
  };
  componentWillUnmount() {}
}

export default AllRestaurants;
