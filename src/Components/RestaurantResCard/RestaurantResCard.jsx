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

import {
  formatPhoneNumber,
  formatTimeAndDate,
} from "../../helper/stringManipulation";

const RestaurantResCard = ({ resData }) => {
  return (
    <Card
      className="RestaurantResCard"
      sx={{ minWidth: 275, backgroundColor: "#606060" }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ color: "white" }}>
          {resData.firstName + " " + resData.lastName}
        </Typography>
        <Typography sx={{ fontSize: 14, color: "white" }}>
          # of Guest: {resData.numGuests}
        </Typography>
        <Typography sx={{ fontSize: 14, color: "white" }}>
          {"Date & Time"}: {formatTimeAndDate(resData.time)}
        </Typography>
        <Typography sx={{ fontSize: 14, color: "white" }}>
          Phone Number:{" "}
          {resData.phoneNumber ? formatPhoneNumber(resData.phoneNumber) : "N/A"}
        </Typography>
        <Typography sx={{ fontSize: 14, color: "white" }}>
          Email: {resData.email ? resData.email : "N/A"}
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
          href={`/reservations/${resData.id}`}
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
