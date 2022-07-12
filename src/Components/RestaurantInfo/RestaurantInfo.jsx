import "./RestaurantInfo.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import { formatPhoneNumber, formatTime } from "../../helper/stringManipulation";
import ReservationCard from "../ReservationCard/ReservationCard";

const RestaurantInfo = ({ mobile }) => {
  const [restaurant, setRestaurant] = useState({});
  const [reset, setReset] = useState(false);
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const nav = useNavigate();

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const res = await axios.get(`${URL}api/restaurants/${id}`);
        setRestaurant(res.data);
      } catch (err) {
        nav("/error");
      }
    };
    getRestaurant();
  }, [URL, id, reset]);

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

  const resetFunction = () => {
    setReset(!reset);
  };

  const handleDelete = async () => {
    await axios.delete(`${URL}api/restaurants/${id}`);
    nav("/restaurants");
  };

  return (
    <Card
      className="RestaurantInfo"
      sx={{
        background: "#242424",
        overflow: "scroll",
        borderRadius: "0px 0px 5px 5px",
        pt: "none",
      }}
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
        <CardActions sx={{ p: 0 }}>
          <Button
            variant="contained"
            color="error"
            size="large"
            sx={{ mr: 1, width: "60px" }}
            onClick={handleDelete}
          >
            <CloseIcon />
          </Button>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ mr: "auto", width: "60px" }}
            href={`/restaurants/${id}/edit`}
          >
            <EditIcon />
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              ml: "auto",
              width: 250,
              backgroundColor: "rgb(205, 127, 0)",
              "&:hover": { backgroundColor: "rgb(147, 90, 0)" },
            }}
            href={`/restaurants/${id}/newReservation`}
          >
            Make Reservation
          </Button>
        </CardActions>
        <div className="resCardContainer">
          {restaurant.reservations && restaurant.reservations[0] && (
            <Typography
              variant="h5"
              component="div"
              sx={{ mx: "auto", width: "100%", color: "white" }}
            >
              Reservations
            </Typography>
          )}
          {restaurant.reservations?.map((e, i) =>
            e ? (
              <ReservationCard
                key={"resCard" + i}
                reservationData={e}
                resetFunction={resetFunction}
              />
            ) : null
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
