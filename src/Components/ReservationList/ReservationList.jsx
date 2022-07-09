import "./ReservationList.css";
import React from "react";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import RestaurantResCard from "../ReservationCard/ReservationCard";

const ReservationList = ({ mobile }) => {
  const [reservations, setReservations] = useState([]);
  const URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const getReservations = async () => {
      const res = await axios.get(`${URL}api/reservations`);
      setReservations(res.data.reservations);
    };

    getReservations();
  }, [URL]);

  const cards = reservations?.map((e, i) => (
    <RestaurantResCard
      reservationData={e}
      key={"card" + (i + 1)}
      variant="allRes"
    />
  ));

  return (
    <div className="ReservationList">
      <div className="resHeader">
        <Typography
          variant="h5"
          component="div"
          sx={{ mx: "auto", width: "100%" }}
        >
          All Reservations
        </Typography>
      </div>
      <div className="resCardContainer">{cards}</div>
    </div>
  );
};

export default ReservationList;
