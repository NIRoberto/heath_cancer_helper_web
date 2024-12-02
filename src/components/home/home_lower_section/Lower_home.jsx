import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Lower_home.css";
import CancerRisks from "./dynamic_parts/CancerRisks";
import GetScreened from "./dynamic_parts/GetScreened";
import ReduceRisks from "./dynamic_parts/ReduceRisks";
import Slider from "react-slick";
import Symptom from "./dynamic_parts/Symptom";
import WhyScreening from "./dynamic_parts/WhyScreening";
import { useEffect, useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { NavLink } from "react-router-dom";

function Lower_home() {
  const [activeLink, setActiveLink] = useState("/get-screened");
  const [location, setLocation] = useState({ latitude: null, longitude: null }); // Store client location
  const sliderRef = useRef(null);

  useEffect(() => {
    // Capture client's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    beforeChange: (current, next) => {
      setActiveLink(navItems[next].to);
    },
  };

  const navItems = [
    { name: "Get screened", to: "/get-screened" },
    { name: "Why Screening ?", to: "/whyScreening" },
    { name: "Cervical Cancer risks", to: "/cancer-risks" },
    { name: "Symptoms", to: "/symptoms" },
  ];

  const handleLinkClick = (index) => {
    setActiveLink(navItems[index].to);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <>
      <nav className="navbar pt-10 flex justify-center">
        <ul className="nav-list grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {navItems.map((item, index) => (
            <li key={item.to} className="nav-item">
              <NavLink
                to={item.to}
                className={`nav-link text-xl ${
                  activeLink === item.to
                    ? "text-[#B2871C] font-extrabold lexendDeca"
                    : "active-link PlayFair"
                }`}
                onClick={() => handleLinkClick(index)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="pt-10 overflow-x-hidden">
        <div className="slider-container">
          <Slider {...settings} ref={sliderRef}>
            <GetScreened />
            <WhyScreening />
            <CancerRisks />
            <Symptom />
          </Slider>
        </div>
      </div>

      <div className="flex items-center justify-center pb-4">
        <span className="PlayFair text-[#BB8C1A] mx-auto w-fit custom-underline font-bold">
          <NavLink to="nearHospital">Visit nearest Facility</NavLink>
        </span>
      </div>

      {/* Display captured location */}
      <div className="location-display mt-4 text-center">
        {location.latitude && location.longitude ? (
          <p className="text-sm">
            Your current location: Latitude: {location.latitude}, Longitude:{" "}
            {location.longitude}
          </p>
        ) : (
          <p className="text-sm">Fetching your location...</p>
        )}
      </div>
    </>
  );
}

export default Lower_home;
