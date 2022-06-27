import "./SingleReservation.css";
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
const SingleReservation = () => {
  const { id } = useParams();
  return (
    <div className="SingleReservation">
      <Navbar />
      SingleReservation - {id}
    </div>
  );
};

export default SingleReservation;
