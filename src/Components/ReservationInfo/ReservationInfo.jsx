import "./ReservationInfo.css";
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
import {
  formatPhoneNumber,
  formatTimeAndDate,
} from "../../helper/stringManipulation";

const ReservationInfo = ({ mobile }) => {
  const [reservation, setReservation] = useState({});
  const [restaurant, setRestaurant] = useState({});
  const { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const nav = useNavigate();

  useEffect(() => {
    const getReservationAndRestaurant = async () => {
      const targetReservation = await axios.get(`${URL}api/reservations/${id}`);
      const targetRestaurant = await axios.get(
        `${URL}api/restaurants/${targetReservation.data.restaurantId}`
      );
      setReservation(targetReservation.data);
      setRestaurant(targetRestaurant.data);
    };
    getReservationAndRestaurant();
  }, [URL, id]);

  const handleDelete = async () => {
    await axios.delete(`${URL}api/reservations/${id}`);
    nav("/restaurants");
  };

  return (
    <Card
      className="ReservationInfo"
      sx={{ background: "#242424", overflow: "scroll" }}
    >
      <CardMedia
        component="img"
        height="125"
        image="https://dreamworldtravel.co.uk/assets/img/img-not-found-01.jpg"
        alt={`${restaurant.name}'s image`}
      />
      <CardContent id="content">
        <Typography variant="h4" component="div" color="white" sx={{ pt: 1 }}>
          {restaurant.name}
        </Typography>
        <Typography
          className="resTitle"
          variant="h6"
          component="div"
          color="white"
          sx={{ pb: 3 }}
        >
          Reservation for {reservation.firstName + " " + reservation.lastName}
        </Typography>
        <Typography variant="h7" component="div" color="white" sx={{ pt: 3 }}>
          {reservation.phoneNumber || reservation.email
            ? [
                reservation.phoneNumber
                  ? formatPhoneNumber(reservation.phoneNumber)
                  : "",
                reservation.email ? reservation.email : "",
              ]
                .filter((e) => (e ? true : false))
                .join(" - ")
            : null}
        </Typography>
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          color="white"
          sx={{ pt: 1, mb: 0 }}
        >
          {formatTimeAndDate(reservation.time)}
        </Typography>
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          color="white"
          sx={{ pt: 1, mb: 0 }}
        >
          # of Guest: {reservation.numGuests}
        </Typography>
        <CardActions sx={{ p: 0 }}>
          <Button
            variant="contained"
            color="error"
            size="large"
            sx={{ ml: "auto", width: "60px" }}
            onClick={handleDelete}
          >
            <CloseIcon />
          </Button>
          <Button
            variant="contained"
            color="success"
            size="large"
            sx={{ mx: 1, width: "60px" }}
            href={`/reservations/${id}/edit`}
          >
            <EditIcon />
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default ReservationInfo;
