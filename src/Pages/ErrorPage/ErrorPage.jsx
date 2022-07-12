import "./ErrorPage.css";
import React from "react";
import NavBar from "../../Components/NavBar/NavBar";

const ErrorPage = ({ mobile }) => {
  return (
    <div className="ErrorPage">
      <NavBar mobile={mobile} />
      <div>Error</div>
    </div>
  );
};

export default ErrorPage;
