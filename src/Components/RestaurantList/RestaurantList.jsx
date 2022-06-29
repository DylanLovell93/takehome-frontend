import "./RestaurantList.css";
import React from "react";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const RestaurantList = ({ mobile }) => {
  const [restaurants, setRestaurants] = useState([]);
  const URL = process.env.REACT_APP_API_URL;
  const location = useLocation();
  const searchObj = new URLSearchParams(location).get("search");
  const search = searchObj
    .replace("?search=", "")
    .replace(/%(\d){1,2}/g, (char) =>
      String.fromCharCode(Number(char.slice(1)) + 12)
    );
  useEffect(() => {
    const getRestaurants = async () => {
      const res = await axios.get(
        `${URL}api/restaurants${search ? `?&searchTerm=${search}` : ""}`
      );
      setRestaurants(res.data.restaurants);
    };

    getRestaurants();
  }, [URL, search]);

  const cards = restaurants.map((e, i) => (
    <div key={"card" + (i + 1)}>{e.name}</div>
  ));

  return (
    <div className="RestaurantList">
      <div className="resHeader">
        {search ? (
          <>
            <Typography variant="h6" component="div" sx={{ mx: "auto" }}>
              Search results for:
            </Typography>
            <Typography variant="h6" component="div" sx={{ mx: "auto" }}>
              {search}
            </Typography>
          </>
        ) : (
          <Typography variant="h5" component="div" sx={{ mx: "auto" }}>
            Browse Restaurants
          </Typography>
        )}
      </div>
      <div className="restCardContainer">{cards}</div>
    </div>
  );
};

export default RestaurantList;
