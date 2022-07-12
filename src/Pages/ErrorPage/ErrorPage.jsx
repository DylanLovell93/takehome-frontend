import "./ErrorPage.css";
import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import ErrorCard from "../../Components/ErrorCard/ErrorCard";

const ErrorPage = ({ mobile }) => {
  return (
    <div className="ErrorPage">
      <NavBar mobile={mobile} />
      <ErrorCard mobile={mobile} />
    </div>
  );
};

export default ErrorPage;
