import React from "react";
import "./LandingPage.css";
import resyCloneWhite from "../../resyCloneWhite.svg";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const LandingPage = ({ mobile }) => {
  const nav = useNavigate();
  const handleClick = () => {
    nav("/restaurants");
  };
  return (
    <div className="LandingPage" onClick={handleClick}>
      <header className="Landing-header">
        <Typography variant="h4">
          Welcome to
          <br />
          <img src={resyCloneWhite} className="Landing-logo" alt="logo" />
          <br />
          Click to enter!
        </Typography>
      </header>
    </div>
  );
};

export default LandingPage;
