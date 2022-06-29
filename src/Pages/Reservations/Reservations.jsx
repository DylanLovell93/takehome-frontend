import "./Reservations.css";
import React from "react";
import NavBar from "../../Components/NavBar/NavBar";

const Reservations = ({ mobile }) => {
  return (
    <div className="Reservations">
      <NavBar mobile={mobile} />
      Reservations
    </div>
  );
};

export default Reservations;
