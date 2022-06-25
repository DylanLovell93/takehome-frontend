import "./SingleReservation.css";
import React from "react";
import { useParams } from "react-router-dom";

const SingleReservation = () => {
  const { id } = useParams();
  return <div className="SingleReservation">SingleReservation - {id}</div>;
};

export default SingleReservation;
