import { useState } from "react"; // Import useState
import { NavLink, Outlet } from "react-router-dom"; // Import NavLink

import "./Lower_home.css";
function Lower_home() {
  // Use useState to manage active link state
  const [activeLink, setActiveLink] = useState("/get-screened");

  // Define the nav items
  const navItems = [
    { name: "Get screened", to: "/get-screened" },
    { name: "Why Screening ?", to: "/whyScreening" },
    { name: "Cervical Cancer risks", to: "/cancer-risks" },
    // { name: "Reduce Risks", to: "/reduce-risks" },
    { name: "Symptoms", to: "/symptoms" },
    { name: ">", to: "/" },
  ];

  // Function to handle active link change on click
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <nav className="navbar pt-10">
        <ul className="nav-list flex justify-evenly">
          {navItems.map((item) => (
            <li key={item.to} className="nav-item ">
              <NavLink
                to={item.to}
                className={`nav-link  text-xl ${
                  activeLink === item.to
                    ? "text-[#B2871C] font-extrabold lexendDeca"
                    : "active-link PlayFair"
                }`}
                onClick={() => handleLinkClick(item.to)} // Update active link on click
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="min-h-96 py-10">
        <Outlet />
      </div>
      <div className="flex items-center justify-center h-full pb-4">
        <span className="PlayFair text-[#BB8C1A] mx-auto w-fit custom-underline font-bold">
          <NavLink to="nearHospital">Visit nearest Facility</NavLink>
        </span>
      </div>

      {/* <WaveDivider /> */}
    </>
  );
}

export default Lower_home;
