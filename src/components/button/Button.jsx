
import { NavLink } from "react-router-dom"; // Import NavLink
import "./Button.css";

// eslint-disable-next-line react/prop-types
const CustomButton = ({ text, to, isBold = false }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `custom-button ${isBold ? "font-bold" : ""} ${
          isActive ? "active-link" : ""
        }`
      }
    >
      {text}
    </NavLink>
  );
};

export default CustomButton;
