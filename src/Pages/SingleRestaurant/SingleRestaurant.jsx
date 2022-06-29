import "./SingleRestaurant.css";
import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

const SingleRestaurant = ({ mobile }) => {
  const { id } = useParams();
  return (
    <div className="SingleRestaurant">
      <NavBar mobile={mobile} />
      SingleRestaurant - {id}
    </div>
  );
};

export default SingleRestaurant;
