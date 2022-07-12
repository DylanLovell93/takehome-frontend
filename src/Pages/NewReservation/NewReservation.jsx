import "./NewReservation.css";
import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import NewReservationForm from "../../Components/NewReservationForm/NewReservationForm";

const NewReservation = ({ mobile }) => {
  return (
    <div className="NewReservation">
      <NavBar mobile={mobile} />
      <NewReservationForm mobile={mobile} />
    </div>
  );
};

export default NewReservation;
