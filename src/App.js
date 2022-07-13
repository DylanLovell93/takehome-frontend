import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Restaurants from "./Pages/Restaurants/Restaurants";
import NewRestaurant from "./Pages/NewRestaurant/NewRestaurant";
import SingleRestaurant from "./Pages/SingleRestaurant/SingleRestaurant";
import Reservations from "./Pages/Reservations/Reservations";
import SingleReservation from "./Pages/SingleReservation/SingleReservation";
import UpdateRestaurant from "./Pages/UpdateRestaurant/UpdateRestaurant";
import NewReservation from "./Pages/NewReservation/NewReservation";
import UpdateReservation from "./Pages/UpdateReservation/UpdateReservation";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const App = () => {
  const mobileQuery = window.matchMedia("(max-width: 600px)");
  const [mobile, setMobile] = useState(mobileQuery.matches);
  mobileQuery.onchange = (e) => {
    setMobile(e.matches);
  };

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage mobile={mobile} />} />
        <Route path="/restaurants" element={<Restaurants mobile={mobile} />} />
        <Route
          path="/restaurants/:id"
          element={<SingleRestaurant mobile={mobile} />}
        />
        <Route
          path="/restaurants/:id/edit"
          element={<UpdateRestaurant mobile={mobile} />}
        />
        <Route
          path="/restaurants/:id/newReservation"
          element={<NewReservation mobile={mobile} />}
        />
        <Route
          path="/newRestaurant"
          element={<NewRestaurant mobile={mobile} />}
        />
        <Route
          path="/reservations"
          element={<Reservations mobile={mobile} />}
        />
        <Route
          path="/reservations/:id"
          element={<SingleReservation mobile={mobile} />}
        />
        <Route
          path="/reservations/:id/edit"
          element={<UpdateReservation mobile={mobile} />}
        />
        <Route path="*" element={<ErrorPage mobile={mobile} />} />
      </Routes>
    </div>
  );
};

export default App;
