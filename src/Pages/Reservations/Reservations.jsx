import "./Reservations.css";
import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import ReservationList from "../../Components/ReservationList/ReservationList";

const Reservations = ({ mobile }) => {
  return (
    <div className="Reservations">
      <NavBar mobile={mobile} />
      <ReservationList mobile={mobile} />
    </div>
  );
};

export default Reservations;
