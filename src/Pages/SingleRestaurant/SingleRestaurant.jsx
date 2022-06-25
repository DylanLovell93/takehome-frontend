import "./SingleRestaurant.css";
import React from "react";
import { useParams } from "react-router-dom";

const SingleRestaurant = () => {
  const { id } = useParams();
  return <div className="SingleRestaurant">SingleRestaurant - {id}</div>;
};

export default SingleRestaurant;
