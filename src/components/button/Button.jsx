import "./Button.css";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CustomButton = ({ text, to, isBold = false }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `custom-button ${isBold ? "font-bol" : ""} ${
          isActive ? "active-link" : ""
        }`
      }
    >
      {text}
    </NavLink>
  );
};

export default CustomButton;
