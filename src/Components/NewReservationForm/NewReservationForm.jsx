import "./NewReservationForm.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { formSx } from "../Styles/MuiFormStyle";
import { PhoneNumberMask, NumberInputMask } from "../../helper/imask";
import {
  timeToDateObject,
  validateNewReservation,
} from "../../helper/bodyValidaion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewReservationForm = () => {
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const nav = useNavigate();
  const [restaurant, setRestaurant] = useState({});
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    time: "",
    numGuests: "",
  });

  useEffect(() => {
    const getRestaurant = async () => {
      try {
        const targetRestaurant = await axios.get(`${URL}api/restaurants/${id}`);
        setRestaurant(targetRestaurant.data);
      } catch (error) {
        nav("/error");
      }
    };
    getRestaurant();
  }, [URL, id, nav]);

  const handleFormChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newReservation = await axios.post(`${URL}api/reservations`, {
        ...validateNewReservation(value),
        restaurantId: restaurant.id,
      });
      nav(`/reservations/${newReservation.data.id}`);
    } catch (err) {}
  };

  return (
    <Box
      className="NewReservationForm"
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className="inputWrapper">
        <Typography
          variant="h5"
          component="div"
          sx={{ mx: "auto", color: "white" }}
        >
          New Reservation for: <br />
          {restaurant.name}
        </Typography>
        <div className="formControl">
          <TextField
            required
            name="firstName"
            id="firstName"
            label="First Name"
            variant="outlined"
            sx={formSx}
            value={value.firstName}
            onChange={handleFormChange}
          />
        </div>
        <div className="formControl">
          <TextField
            required
            name="lastName"
            id="lastName"
            label="Last Name"
            variant="outlined"
            sx={formSx}
            value={value.lastName}
            onChange={handleFormChange}
          />
        </div>
        <div className="formControl">
          <TextField
            required
            name="phoneNumber"
            id="phoneNumber"
            label="Phone Number"
            variant="outlined"
            sx={formSx}
            onChange={handleFormChange}
            value={value.phoneNumber}
            inputProps={{ minLength: "14" }}
            InputProps={{
              inputComponent: PhoneNumberMask,
            }}
          />
        </div>
        <div className="formControl">
          <TextField
            name="email"
            id="email"
            label="Email"
            variant="outlined"
            sx={formSx}
            onChange={handleFormChange}
            value={value.email}
            type="email"
          />
        </div>
        <div className="formControl">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Date & Time"
              value={value.time}
              onChange={(newValue) => {
                setValue({ ...value, time: newValue });
              }}
              minDate={new Date(Date.now())}
              minTime={timeToDateObject(restaurant.openingTime)}
              maxTime={timeToDateObject(restaurant.closingTime)}
              renderInput={(params) => (
                <TextField
                  name="time"
                  id="time"
                  required
                  sx={{
                    ...formSx,
                    ".MuiSvgIcon-fontSizeMedium": { color: "white" },
                  }}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </div>
        <div className="formControl">
          <TextField
            required
            name="numGuests"
            id="numGuests"
            label="# of Guests"
            variant="outlined"
            sx={formSx}
            value={value.numGuests}
            onChange={handleFormChange}
            InputProps={{
              inputComponent: NumberInputMask,
            }}
          />
        </div>
      </div>
      <div className="buttonContainer">
        <Button
          variant="contained"
          color="success"
          sx={{
            ml: "auto",
          }}
          type="submit"
        >
          Create Reservation
        </Button>
      </div>
    </Box>
  );
};

export default NewReservationForm;
