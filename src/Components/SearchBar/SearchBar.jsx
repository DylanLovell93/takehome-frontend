import "./SearchBar.css";
import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = React.forwardRef((props, ref) => {
  const { onClose } = props;
  const [searchInput, setSearch] = useState("");
  const nav = useNavigate();

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchInput.replace(/[^a-z]/gi, "")) {
      setSearch("");
      alert("Searches require a letter");
      return;
    } else {
      nav("/restaurants?search=" + searchInput);
      setSearch("");
      onClose();
    }
  };

  return (
    <form
      className="SearchBar"
      autoComplete="off"
      onSubmit={handleSubmit}
      ref={ref}
    >
      <input
        id="searchInput"
        type="text"
        value={searchInput}
        onChange={handleInput}
        placeholder="Search for restaurants..."
      />
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
        type="submit"
        id="submitButton"
      >
        <SearchIcon />
      </IconButton>
    </form>
  );
});

export default SearchBar;
