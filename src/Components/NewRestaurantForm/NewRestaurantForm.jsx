import "./NewRestaurantForm.css";
import React from "react";
import { Box, Typography, TextField, MenuItem } from "@mui/material";

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
  };

  const options = [
    { value: "$", label: "$" },
    { value: "$$", label: "$$" },
    { value: "$$$", label: "$$$" },
  ];
  return (
    <Box className="NewRestaurantForm" component="form" autoComplete="off">
      <Typography
        variant="h5"
        component="div"
        sx={{ mx: "auto", color: "white" }}
      >
        New Restaurant
      </Typography>
      <div className="formControl">
        <TextField required id="name" label="Name" variant="outlined" sx={sx} />
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
    </Box>
  );
};

export default NewRestaurantForm;
