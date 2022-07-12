import "./UpdateReservation.css";
import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import EditReservationForm from "../../Components/EditReservationForm/EditReservationForm";

const UpdateReservation = ({ mobile }) => {
  return (
    <div className="UpdateReservation">
      <NavBar mobile={mobile} />
      <EditReservationForm mobile={mobile} />
    </div>
  );
};

export default UpdateReservation;
