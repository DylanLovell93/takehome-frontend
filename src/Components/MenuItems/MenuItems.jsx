import "./MenuItems.css";
import { IconButton, Typography, Toolbar } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import itemData from "./itemData.js";

const MenuItems = React.forwardRef((props, ref) => {
  const { onClose } = props;
  const listItems = itemData.map((item, idx) => (
    <li key={"li" + (idx + 1)}>
      <Link to={item.link} onClick={onClose}>
        <Typography variant="h5" component="div" sx={{ mr: "auto" }}>
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
