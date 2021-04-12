import React from "react";
import "./App.css";

import { SideBar } from "./components";
import { AllRestaurants, RestaurantDetails } from "./screens";

class App extends React.Component {
  goToRestaurant = (id) => {
    this.setState({ screen: RestaurantDetails, restaurantID: id });
  };

  goToAllRestaurant = (id) => {
    let { screen } = this.state;
    if (screen === AllRestaurants) return;
    this.setState({ screen: AllRestaurants, restaurantID: undefined });
  };

  render() {
    let { screen, restaurantID } = this.state;
    console.log(" App STATE", screen);

    return (
      <div className="App">
        <SideBar />
        <this.state.screen
          goToRestaurant={this.goToRestaurant}
          goToAllRestaurant={this.goToAllRestaurant}
          restaurantID={restaurantID}
        />
      </div>
    );
  }

  constructor(props) {
    super(props);

    let screen = AllRestaurants;
    let restaurantID = undefined;

    this.state = { screen, restaurantID };
  }

  componentDidMount() {}
  componentWillUnmount() {}
}

export default App;
