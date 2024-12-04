import CustomButton from "../button/Button";
import PropTypes from "prop-types";
import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Navbar = ({ isBackground = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { name: "Home", path: "/" },
    // { name: "Services", path: "/" },
    { name: "Patient story", path: "/patients_stories" },
  ];

  return (
    <nav
      className={`${
        isBackground ? "bg-[#0E1A34]" : "bg-transparent absolute top-30"
      } w-full z-30 navigation`}
    >
      <div className="flex justify-between items-center h-20 w-full px-4 md:px-10 sm:px-0">
        {/* Logo */}
        <div className="w-[150px] flex items-start p-0">
          <img src={logo} alt="MyDocta Logo" className="h-30 object-contain" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="focus:outline-none font-bold z-70"
            onClick={toggleMenu}
          >
            <CiMenuBurger className="font-extrabold text-2xl text-white z-300" />
          </button>
        </div>
        {menuOpen && (
          <div
            className="fixed inset-0 bg-transparent bg-opacity-50 z-3"
            onClick={closeMenu}
          ></div>
        )}

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen
              ? "translate-x-0 bg-gradient-to-r from-gray-900/95 to-gray-900/90  h-[40rem]"
              : "translate-x-full"
          } fixed top-0 right-0  w-3/4 transform transition-transform duration-400 md:static md:flex md:items-center md:space-x-8 md:translate-x-0 md:bg-transparent md:w-auto rounded-3xl`}
        >
          {menuOpen && (
            <div className="flex justify-end p-4">
              <button
                className="text-white text-2xl focus:outline-none"
                onClick={closeMenu}
              >
                &times; {/* Close icon */}
              </button>
            </div>
          )}
          <div className="flex flex-col md:flex-row md:space-x-8 px-6 pt-10 md:pt-0 z-20">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="text-white font-medium hover:text-gray-400 py-2 md:py-0 text-md"
                onClick={closeMenu} // Closes menu on mobile when a link is clicked
              >
                {link.name}
              </NavLink>
            ))}

           
          </div>
        </div>

        {/* Health Status Button for desktop */}
        <div className="hidden md:block mr-[10%] md:mr-0">
          {/* <CustomButton to="myHealth" text="My Health Status" /> */}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  isBackground: PropTypes.bool,
};

export default Navbar;
