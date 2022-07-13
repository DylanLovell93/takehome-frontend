import "./EditRestaurantForm.css";
import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { formSx } from "../Styles/MuiFormStyle";
import { PhoneNumberMask, NumberInputMask } from "../../helper/imask";
import {
  formDataToPatch,
  restaurantDataToForm,
} from "../../helper/bodyValidaion";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditRestaurantForm = () => {
  const URL = process.env.REACT_APP_API_URL;
  const nav = useNavigate();
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [value, setValue] = useState({
    name: "",
    phoneNumber: "",
    description: "",
    price: "$",
    cuisine: "",
    location: "",
    openingTime: "",
    closingTime: "",
    diningRestriction: "none",
    tables: {
      twoPersonTables: "",
      fourPersonTables: "",
      eightPersonTables: "",
    },
  });

  const priceOptions = [
    { value: "$", label: "$" },
    { value: "$$", label: "$$" },
    { value: "$$$", label: "$$$" },
  ];

  const diningOptions = [
    { value: "none", label: "None" },
    { value: "Takeout Only", label: "Takeout Only" },
    { value: "Delivery Only", label: "Delivery Only" },
  ];

  const handleFormChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleTableChange = (event) => {
    setValue({
      ...value,
      tables: { ...value.tables, [event.target.name]: event.target.value },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(
        `${URL}api/restaurants/${id}`,
        formDataToPatch(value, restaurant)
      );
      nav(`/restaurants/${id}`);
    } catch (err) {}
  };

  useEffect(() => {
    const prefillForm = async () => {
      try {
        const currentRestaurant = await axios.get(
          `${URL}api/restaurants/${id}`
        );
        setRestaurant(currentRestaurant.data);
        setValue(restaurantDataToForm(currentRestaurant.data));
      } catch (err) {
        nav("/error");
      }
    };
    prefillForm();
  }, [URL, id, nav]);

  return (
    <Box
      className="EditRestaurantForm"
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
          Update Restaurant
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
            inputProps={{ minLength: "14" }}
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
            {priceOptions.map((option) => (
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
        <div className="formControl">
          <TextField
            select
            name="diningRestriction"
            id="diningRestriction"
            label="Dining Restriction"
            variant="outlined"
            sx={formSx}
            onChange={handleFormChange}
            value={value.diningRestriction}
          >
            {diningOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="formControl">
          <Typography
            variant="h6"
            component="div"
            sx={{ mr: "auto", color: "white" }}
          >
            Tables
          </Typography>
        </div>
        <div className="tableContainer">
          <div className="formControl">
            <TextField
              name="twoPersonTables"
              id="twoPersonTables"
              label="Two Person"
              variant="outlined"
              sx={formSx}
              value={value.tables.twoPersonTables}
              onChange={handleTableChange}
              InputProps={{
                inputComponent: NumberInputMask,
              }}
            />
          </div>
          <div className="formControl">
            <TextField
              name="fourPersonTables"
              id="fourPersonTables"
              label="Four Person"
              variant="outlined"
              sx={formSx}
              value={value.tables.fourPersonTables}
              onChange={handleTableChange}
              InputProps={{
                inputComponent: NumberInputMask,
              }}
            />
          </div>
          <div className="formControl">
            <TextField
              name="eightPersonTables"
              id="eightPersonTables"
              label="Eight Person"
              variant="outlined"
              sx={formSx}
              value={value.tables.eightPersonTables}
              onChange={handleTableChange}
              InputProps={{
                inputComponent: NumberInputMask,
              }}
            />
          </div>
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
          Update Restaurant
        </Button>
      </div>
    </Box>
  );
};

export default EditRestaurantForm;
