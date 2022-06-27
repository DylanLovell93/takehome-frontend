import "./MenuItems.css";
import { IconButton, Typography, Toolbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import itemData from "./itemData.js";

const MenuItems = ({ onClose, mobile }) => {
  const listItems = itemData.map((item) => (
    <li>
      <Link to={item.link}>
        <Typography
          variant="h5"
          component="div"
          sx={mobile ? { mr: "auto" } : { m: 0 }}
        >
          {item.text}
        </Typography>
      </Link>
    </li>
  ));
  return (
    <div className="MenuItems">
      <Toolbar className="menuBar">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ mx: "auto" }}>
          Mobile
        </Typography>
        <div className="spacer"></div>
      </Toolbar>
      <ul>{listItems}</ul>
    </div>
  );
};

export default MenuItems;
