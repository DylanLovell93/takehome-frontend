import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Restaurants from "./Pages/Restaurants/Restaurants";
import NewRestaurant from "./Pages/NewRestaurant/NewRestaurant";
import SingleRestaurant from "./Pages/SingleRestaurant/SingleRestaurant";
import Reservations from "./Pages/Reservations/Reservations";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/newRestaurant" element={<NewRestaurant />} />
        <Route path="/restaurants/:id" element={<SingleRestaurant />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </div>
  );
};

export default App;
