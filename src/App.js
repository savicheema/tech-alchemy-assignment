import React from "react";
import "./App.css";

import { SideBar } from "./components";
import { AllRestaurants } from "./screens";

const App = () => (
  <div className="App">
    <SideBar />
    <AllRestaurants />
  </div>
);

export default App;
