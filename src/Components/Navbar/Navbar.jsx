import "./Navbar.css";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Modal from "@mui/material/Modal";
import MenuItems from "../MenuItems/MenuItems";

const Navbar = () => {
  const mobileQuery = window.matchMedia("(max-width: 600px)");
  const [mobile, setMobile] = useState(mobileQuery.matches);
  const [menuOpen, setMenu] = useState(false);
  const [searchOpen, setSearch] = useState(false);

  const handleMenuOpen = () => {
    setMenu(true);
  };

  const handleMenuClose = () => {
    setMenu(false);
  };

  const handleSearchOpen = () => {
    setSearch(true);
  };

  const handleSearchClose = () => {
    setSearch(false);
  };

  mobileQuery.onchange = (e) => {
    setMobile(e.matches);
  };

  return (
    <Box className="NavBar" sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Modal open={menuOpen} onClose={handleMenuClose}>
            <MenuItems onClose={handleMenuClose} mobile={mobile} />
          </Modal>
          <Typography
            variant="h6"
            component="div"
            sx={mobile ? { mx: "auto" } : { ml: 2, mr: "auto" }}
          >
            {mobile ? "Mobile" : "Desktop"}
          </Typography>
          <IconButton size="large" edge="end" color="inherit" aria-label="menu">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
