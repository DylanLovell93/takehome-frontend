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

const RestaurantCard = ({ data }) => {
  const { name, description, location, id, price } = data;
  const nav = useNavigate();
  console.log(data);

  const seeMore = () => {
    nav(`/restaurants/${id}`);
  };

  return (
    <Card
      className="RestaurantCard"
      sx={{ maxWidth: 345, mx: "auto", my: 2, background: "#606060" }}
    >
      <CardMedia
        component="img"
        height="140"
        image="https://dreamworldtravel.co.uk/assets/img/img-not-found-01.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color="white"
          sx={{ mb: 0 }}
        >
          {name} <span className="location">- {location}</span>
        </Typography>
        <Typography variant="body2" color="white" sx={{ mb: 2 }}>
          {`Price: ${price}`}
        </Typography>
        <Typography variant="body2" color="white">
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={seeMore}
          size="small"
          variant="contained"
          sx={{
            background: "#484848",
            "&:hover": {
              background: "#363636",
            },
          }}
        >
          More Info
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{
            background: "#484848",
            "&:hover": {
              background: "#363636",
            },
          }}
        >
          Make a Reservation
        </Button>
      </CardActions>
    </Card>
  );
};

export default RestaurantCard;
