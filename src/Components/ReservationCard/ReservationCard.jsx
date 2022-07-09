import "./ReservationCard.css";
import React from "react";

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { formatTimeAndDate } from "../../helper/stringManipulation";

const ReservationCard = ({ reservationData, variant }) => {
  const [restaurant, setRestaurant] = useState({});
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getRestaurant = async () => {
      const targetRestaurant = await axios.get(
        `${URL}api/restaurants/${reservationData.restaurantId}`
      );
      await setRestaurant(targetRestaurant.data);
    };
    getRestaurant();
  }, [URL, reservationData.restaurantId]);

  return (
    <Card
      className="ReservationCard"
      sx={{ minWidth: 275, backgroundColor: "#606060" }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ color: "white" }}>
          {variant === "allRes" ? (
            <Link
              className="restaurantLink"
              to={`/restaurants/${restaurant.id}`}
            >
              {restaurant.name}
            </Link>
          ) : (
            reservationData.firstName + " " + reservationData.lastName
          )}
        </Typography>
        {variant === "allRes" ? (
          <Typography sx={{ fontSize: 14, color: "white" }}>
            Name: {reservationData.firstName + " " + reservationData.lastName}
          </Typography>
        ) : null}
        <Typography sx={{ fontSize: 14, color: "white" }}>
          # of Guest: {reservationData.numGuests}
        </Typography>
        <Typography sx={{ fontSize: 14, color: "white" }}>
          {"Date & Time"}: {formatTimeAndDate(reservationData.time)}
        </Typography>
      </CardContent>
      <CardActions>
        {variant === "allRes" ? null : (
          <>
            <Button size="small" variant="contained" color="error">
              <CloseIcon />
            </Button>
            <Button size="small" variant="contained" color="success">
              <EditIcon />
            </Button>
          </>
        )}
        <Button
          size="small"
          variant="contained"
          href={`/reservations/${reservationData.id}`}
          sx={{
            backgroundColor: "#484848",
            "&:hover": {
              backgroundColor: "#363636",
            },
            ml: "auto",
          }}
        >
          More Info
        </Button>
      </CardActions>
    </Card>
  );
};

export default ReservationCard;
