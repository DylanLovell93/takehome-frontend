import "./RestaurantInfo.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { formatPhoneNumber, formatTime } from "../../helper/stringManipulation";

const RestaurantInfo = ({ mobile }) => {
  const [restaurant, setRestaurant] = useState({});
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const getRestaurant = async () => {
      const res = await axios.get(`${URL}api/restaurants/${id}`);
      setRestaurant(res.data);
    };
    getRestaurant();
  }, [URL, id]);

  const {
    name,
    phoneNumber,
    cuisine,
    price,
    location,
    openingTime,
    closingTime,
    description,
  } = restaurant;

  return (
    <Card
      className="RestaurantInfo"
      sx={{ background: "#242424", overflow: "scroll" }}
    >
      <CardMedia
        component="img"
        height="250"
        image="https://dreamworldtravel.co.uk/assets/img/img-not-found-01.jpg"
        alt={`${name}'s image`}
      />
      <CardContent id="content">
        <Typography
          className="resTitle"
          variant="h4"
          component="div"
          color="white"
          sx={{ py: 3 }}
        >
          {name}
        </Typography>
        <Typography variant="h7" component="div" color="white" sx={{ pt: 3 }}>
          {phoneNumber && formatPhoneNumber(phoneNumber) + " - "}
          {cuisine + " - "}
          {price}
        </Typography>
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          color="white"
          sx={{ pt: 1, mb: 0 }}
        >
          {location}
        </Typography>
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          color="white"
          sx={{ pt: 1, mb: 0 }}
        >
          {openingTime &&
            `${formatTime(openingTime)} to ${formatTime(closingTime)}`}
        </Typography>
        <Typography
          variant="body1"
          color="white"
          sx={{ my: 3, fontSize: "1.3em" }}
        >
          {description}
        </Typography>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            sx={{ ml: "auto", width: 250, height: 50 }}
          >
            Make Reservation
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
