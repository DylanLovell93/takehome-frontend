import "./NewRestaurantForm.css";
import React, { useState } from "react";
import { Box, Typography, TextField, MenuItem } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { formSx } from "../Styles/MuiFormStyle";
import PhoneNumberMask from "../../helper/imask";

const NewRestaurantForm = () => {
  const [value, setValue] = useState({
    name: "",
    phoneNumber: "",
    description: "",
    price: "",
    cuisine: "",
    location: "",
    openingTime: "",
    closingTime: "",
  });

  const options = [
    { value: "$", label: "$" },
    { value: "$$", label: "$$" },
    { value: "$$$", label: "$$$" },
  ];

  const handleFormChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
    console.log(value);
  };

  return (
    <Box className="NewRestaurantForm" component="form" autoComplete="off">
      <div className="inputWrapper">
        <Typography
          variant="h5"
          component="div"
          sx={{ mx: "auto", color: "white" }}
        >
          New Restaurant
        </Typography>
        <div className="formControl">
          <TextField
            required
            name="name"
            id="name"
            label="Name"
            variant="outlined"
            sx={formSx}
            value={value.name}
            onChange={handleFormChange}
          />
        </div>
        <div className="formControl">
          <TextField
            name="phoneNumber"
            id="phoneNumber"
            label="Phone Number"
            variant="outlined"
            sx={formSx}
            onChange={handleFormChange}
            value={value.phoneNumber}
            InputProps={{
              inputComponent: PhoneNumberMask,
            }}
          />
        </div>
        <div className="formControl">
          <TextField
            required
            name="description"
            id="description"
            label="Description"
            variant="outlined"
            sx={formSx}
            onChange={handleFormChange}
            value={value.description}
          />
        </div>
        <div className="formControl">
          <TextField
            required
            select
            name="price"
            id="price"
            label="Price"
            variant="outlined"
            sx={formSx}
            onChange={handleFormChange}
            value={value.price}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="formControl">
          <TextField
            required
            name="cuisine"
            id="cuisine"
            label="Cuisine"
            variant="outlined"
            sx={formSx}
            onChange={handleFormChange}
            value={value.cuisine}
          />
        </div>
        <div className="formControl">
          <TextField
            required
            name="location"
            id="location"
            label="Location"
            variant="outlined"
            sx={formSx}
            onChange={handleFormChange}
            value={value.location}
          />
        </div>
        <div className="formControl">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Opening Time"
              value={value.openingTime}
              onChange={(newValue) => {
                setValue({ ...value, openingTime: newValue });
              }}
              id="openingTime"
              renderInput={(params) => (
                <TextField
                  name="openingTime"
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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Closing Time"
              value={value.closingTime}
              onChange={(newValue) => {
                setValue({ ...value, closingTime: newValue });
              }}
              renderInput={(params) => (
                <TextField
                  name="closingTime"
                  id="closingTime"
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
      </div>
    </Box>
  );
};

export default NewRestaurantForm;
