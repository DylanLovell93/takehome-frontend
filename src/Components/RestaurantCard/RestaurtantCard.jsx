import "./RestaurantCard.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { uuidToRandomImageURL } from "../../helper/stringManipulation";

const RestaurantCard = ({ data }) => {
  const { name, description, location, id, price } = data;
  const nav = useNavigate();

  const seeMore = () => {
    nav(`/restaurants/${id}`);
  };

  return (
    <Card
      className="RestaurantCard"
      sx={{
        maxWidth: 345,
        mx: "auto",
        my: 2,
        background: "#303030",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={uuidToRandomImageURL(id)}
        alt={`${name}'s image`}
      />
      <CardContent sx={{ mb: "auto" }}>
        <span className="resNameAndLocation">
          <Typography
            gutterBottom
            variant="h5"
            color="white"
            sx={{ mb: 0, display: "inline", maxWidth: "200px" }}
          >
            {name}
          </Typography>
          <span className="location">- {location}</span>
        </span>
        <Typography variant="body2" color="white" sx={{ mb: 2 }}>
          {`Price: ${price}`}
        </Typography>
        <Typography
          variant="body2"
          color="white"
          sx={{ width: 313, height: 50 }}
        >
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={seeMore} size="small" variant="contained">
          More Info
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{
            ml: 1,
            backgroundColor: "rgb(205, 127, 0)",
            "&:hover": { backgroundColor: "rgb(147, 90, 0)" },
          }}
          href={`/restaurants/${id}/newReservation`}
        >
          Make Reservation
        </Button>
      </CardActions>
    </Card>
  );
};

export default RestaurantCard;
