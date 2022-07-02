import "./NewRestaurantForm.css";
import React from "react";
import { Box, Typography, TextField, MenuItem } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const NewRestaurantForm = () => {
  const sx = {
    mx: "auto",
    flexGrow: 1,
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
        borderWidth: "1.5px",
      },
    },
    "& .MuiOutlinedInput-root:hover": {
      "& fieldset": {
        borderColor: "white",
        borderWidth: "1.5px",
      },
    },
    "& .MuiInputBase-formControl": {
      color: "white",
    },
    "& .MuiInputLabel-root": {
      color: "#606060",
    },
    "& .MuiOutlinedInput-root:focus-within": {
      "& fieldset": {
        borderColor: "white",
        borderWidth: "1.5px",
      },
    },
    ".MuiSelect-icon": {
      color: "white",
    },
  };

  const options = [
    { value: "$", label: "$" },
    { value: "$$", label: "$$" },
    { value: "$$$", label: "$$$" },
  ];
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
            id="name"
            label="Name"
            variant="outlined"
            sx={sx}
          />
        </div>
        <div className="formControl">
          <TextField
            required
            id="description"
            label="Description"
            variant="outlined"
            sx={sx}
          />
        </div>
        <div className="formControl">
          <TextField
            required
            select
            id="price"
            label="Price"
            variant="outlined"
            sx={sx}
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
            id="cuisine"
            label="Cuisine"
            variant="outlined"
            sx={sx}
          />
        </div>
        <div className="formControl">
          <TextField
            required
            id="location"
            label="Location"
            variant="outlined"
            sx={sx}
          />
        </div>
        <div className="formControl">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label="Basic example"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>
    </Box>
  );
};

export default NewRestaurantForm;
