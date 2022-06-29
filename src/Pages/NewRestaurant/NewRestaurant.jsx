import "./NewRestaurant.css";
import React from "react";
import NavBar from "../../Components/NavBar/NavBar";

const NewRestaurant = ({ mobile }) => {
  return (
    <div className="NewRestaurant">
      <NavBar mobile={mobile} />
      NewRestaurant
    </div>
  );
};

export default NewRestaurant;
