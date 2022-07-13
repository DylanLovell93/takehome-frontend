import "./MenuItems.css";
import { IconButton, Typography, Toolbar } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import itemData from "./itemData.js";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const MenuItems = React.forwardRef((props, ref) => {
  const { onClose } = props;

  const iconKeys = {
    home: <HomeIcon />,
    food: <RestaurantIcon />,
    plus: <AddIcon />,
    calen: <CalendarMonthIcon />,
  };

  const listItems = itemData.map((item, idx) => (
    <li key={"li" + (idx + 1)}>
      <Link to={item.link} onClick={onClose}>
        <Typography
          variant="h5"
          component="div"
          sx={{ mr: "auto" }}
          className="listItem"
        >
          {iconKeys[item.icon]}
          {item.text}
        </Typography>
      </Link>
    </li>
  ));
  return (
    <div className="MenuItems" ref={ref}>
      <Toolbar className="menuBar" sx={{ backgroundColor: "#202020" }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" component="div" sx={{ mx: "auto" }}>
          Menu
        </Typography>
        <div className="spacer"></div>
      </Toolbar>
      <ul>{listItems}</ul>
    </div>
  );
});

export default MenuItems;
