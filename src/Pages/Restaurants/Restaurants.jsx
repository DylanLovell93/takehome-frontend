import "./Restaurants.css";
import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import RestaurantList from "../../Components/RestaurantList/RestaurantList";

const Restaurants = ({ mobile }) => {
  return (
    <div className="Restaurants">
      <NavBar mobile={mobile} />
      <RestaurantList mobile={mobile} />
    </div>
  );
};

export default Restaurants;
