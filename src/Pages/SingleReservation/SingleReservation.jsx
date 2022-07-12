import "./SingleReservation.css";
import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import ReservationInfo from "../../Components/ReservationInfo/ReservationInfo";

const SingleReservation = ({ mobile }) => {
  return (
    <div className="SingleReservation">
      <NavBar mobile={mobile} />
      <ReservationInfo mobile={mobile} />
    </div>
  );
};

export default SingleReservation;
