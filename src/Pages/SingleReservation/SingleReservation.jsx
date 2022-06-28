import "./SingleReservation.css";
import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
const SingleReservation = () => {
  const { id } = useParams();
  return (
    <div className="SingleReservation">
      <NavBar />
      SingleReservation - {id}
    </div>
  );
};

export default SingleReservation;
