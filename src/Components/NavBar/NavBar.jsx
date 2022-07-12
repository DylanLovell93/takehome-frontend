import "./NavBar.css";
import React from "react";
import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Modal,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import resyCloneWhite from "../../resyCloneWhite.svg";
import MenuItems from "../MenuItems/MenuItems";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = React.forwardRef((props, ref) => {
  const { mobile } = props;
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

  return (
    <Box className="NavBar" sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#202020", width: "100%" }}
      >
        <Toolbar className="toolbar" sx={{ maxWidth: "700px" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Modal
            open={menuOpen}
            onClose={handleMenuClose}
            children={<MenuItems onClose={handleMenuClose} mobile={mobile} />}
          >
            <>
              <MenuItems onClose={handleMenuClose} mobile={mobile} />
            </>
          </Modal>
          <img src={resyCloneWhite} className="navIcon" />
          {mobile ? (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleSearchOpen}
              >
                <SearchIcon />
              </IconButton>
              <Modal
                open={searchOpen}
                onClose={handleSearchClose}
                className="searchModal"
                children={<SearchBar onClose={handleSearchClose} />}
              >
                <>
                  <SearchBar onClose={handleSearchClose} />
                </>
              </Modal>
            </>
          ) : (
            <SearchBar />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
});

export default NavBar;
