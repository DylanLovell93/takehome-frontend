import "./ErrorCard.css";
import { Card, Typography } from "@mui/material";

const ErrorCard = ({ mobile }) => {
  return (
    <Card className="ErrorCard" sx={{ backgroundColor: "#484848" }}>
      <Typography
        variant="h4"
        sx={{ color: "white", textAlign: "center", mb: 2 }}
      >
        Error 404
      </Typography>
      <Typography variant="h6" sx={{ color: "white", textAlign: "center" }}>
        Sorry, the page you were looking for doesn't exist
      </Typography>
    </Card>
  );
};

export default ErrorCard;
