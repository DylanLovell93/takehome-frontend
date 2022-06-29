import "./NewRestaurantForm.css";
import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import { orange } from "@mui/material/colors";

const NewRestaurantForm = () => {
  return (
    <Box className="NewRestaurantForm" component="form" autocomplete="off">
      <Typography
        variant="h5"
        component="div"
        sx={{ mx: "auto", color: "white" }}
      >
        New Restaurant
      </Typography>
      <div className="formControl">
        <TextField
          id="test"
          label="Test"
          variant="outlined"
          sx={{
            mx: "auto",
            flexGrow: 1,
            "& fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
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
                borderWidth: "2px",
              },
            },
            "& .MuiInputBase-formControl": {
              color: "white",
            },
            "& .MuiInputLabel-root": {
              color: "white",
            },
            "& .MuiOutlinedInput-root:blur": {
              "& fieldset": {
                borderColor: "white",
                borderWidth: "1.5px",
              },
            },
          }}
        />
      </div>
    </Box>
  );
};

export default NewRestaurantForm;
