import "./UpdateRestaurant.css";
import NavBar from "../../Components/NavBar/NavBar";
import EditRestaurantForm from "../../Components/EditRestaurantForm/EditRestaurantForm";

const UpdateRestaurant = ({ mobile }) => {
  return (
    <div className="UpdateRestaurant">
      <NavBar mobile={mobile} />
      <EditRestaurantForm mobile={mobile} />
    </div>
  );
};

export default UpdateRestaurant;
