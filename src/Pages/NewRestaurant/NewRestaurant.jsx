import "./NewRestaurant.css";
import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import NewRestaurantForm from "../../Components/NewRestaurantForm/NewRestaurantForm";

const NewRestaurant = ({ mobile }) => {
  return (
    <div className="NewRestaurant">
      <NavBar mobile={mobile} />
      <NewRestaurantForm mobile={mobile} />
    </div>
  );
};

export default NewRestaurant;
