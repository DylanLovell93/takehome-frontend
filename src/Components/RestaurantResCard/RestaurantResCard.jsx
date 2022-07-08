import "./RestaurantResCard.css";
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

import { formatTimeAndDate } from "../../helper/stringManipulation";

const RestaurantResCard = ({ reservationData, restaurantData }) => {
  return (
    <Card
      className="RestaurantResCard"
      sx={{ minWidth: 275, backgroundColor: "#606060" }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ color: "white" }}>
          {reservationData.firstName + " " + reservationData.lastName}
        </Typography>
        {restaurantData ? (
          <Typography sx={{ fontSize: 14, color: "white" }}>
            Restaurant Name: {restaurantData.name}
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
        <Button size="small" variant="contained" color="error">
          <CloseIcon />
        </Button>
        <Button size="small" variant="contained" color="success">
          <EditIcon />
        </Button>
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

export default RestaurantResCard;
