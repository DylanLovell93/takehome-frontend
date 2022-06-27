import "./SingleRestaurant.css";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const SingleRestaurant = () => {
  const { id } = useParams();
  return (
    <div className="SingleRestaurant">
      <Navbar />
      SingleRestaurant - {id}
    </div>
  );
};

export default SingleRestaurant;
