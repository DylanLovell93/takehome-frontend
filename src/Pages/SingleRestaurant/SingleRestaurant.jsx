import "./SingleRestaurant.css";
import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import RestaurantInfo from "../../Components/RestaurantInfo/RestaurantInfo";

const SingleRestaurant = ({ mobile }) => {
  return (
    <div className="SingleRestaurant">
      <NavBar mobile={mobile} />
      <RestaurantInfo mobile={mobile} />
    </div>
  );
};

export default SingleRestaurant;
