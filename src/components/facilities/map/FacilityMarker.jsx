import L from "leaflet";
import PropTypes from "prop-types";
import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { CiLocationOn } from "react-icons/ci";
import { Marker, Popup } from "react-leaflet";
import { toast } from "react-toastify";
import { useLocation } from "../../context/LocationContext";

// Create custom marker icon for facilities
const createFacilityIcon = (isSelected) =>
  L.divIcon({
    className: "custom-marker",
    html: ReactDOMServer.renderToString(
      <div
        style={{
          color: isSelected ? "red" : "blue",
          fontSize: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "white",
          boxShadow: "0 0 5px rgba(0,0,0,0.3)",
        }}
      >
        <CiLocationOn />
      </div>
    ),
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

const FacilityMarker = ({ facility, selectedFacility, onSelect }) => {
  const { location, setLocation } = useLocation(); // Get user's current location and setter

  const [loadingLocation, setLoadingLocation] = useState(false);

  // Handle enabling/re-enabling location access
  const handleEnableLocation = () => {
    setLoadingLocation(true);

    // Use Geolocation API to get user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Save the location in context or state
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        toast.success("Location access enabled!");
        setLoadingLocation(false);
      },
      (error) => {
        // Handle errors (permission denied, timeout, etc.)
        if (error.code === error.PERMISSION_DENIED) {
            toast.error(
              <>
                Location access denied. Please allow it in your browser settings.
                <br />
                <a
                  href="https://support.google.com/chrome/answer/142065?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  Learn how to enable location
                </a>
              </>
            );
          }
          else if (error.code === error.POSITION_UNAVAILABLE) {
          toast.error("Location information is unavailable.");
        } else if (error.code === error.TIMEOUT) {
          toast.error("Location request timed out. Try again.");
        } else {
          toast.error("An unknown error occurred while accessing location.");
        }
        setLoadingLocation(false);
      }
    );
  };

  // Handle the "Get Directions" button click
  const handleGetDirections = () => {
    if (location.latitude && location.longitude) {
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${location.latitude},${location.longitude}&destination=${facility.lat},${facility.lng}`;
      window.open(googleMapsUrl, "_blank");
    } else {
      toast.error("Location access is required to get directions.");
    }
  };

  return (
    <Marker
      key={facility.id}
      position={[facility.lat, facility.lng]}
      icon={createFacilityIcon(facility === selectedFacility)}
    >
      <Popup>
        <h3>{facility.name}</h3>
        <p>{facility.description}</p>
        <p>Open {facility.hours}</p>
        <button
          className="mt-2 px-4 py-1 bg-amber-600 text-white rounded"
          onClick={() => onSelect(facility)}
        >
          View Details
        </button>
        <button
          className="mt-2 px-4 py-1 bg-blue-600 text-white rounded"
          onClick={handleGetDirections}
        >
          Get Directions
        </button>
        {!location.latitude && !location.longitude && (
          <button
            className="mt-2 px-4 py-1 bg-green-600 text-white rounded"
            onClick={handleEnableLocation}
            disabled={loadingLocation}
          >
            {loadingLocation ? "Enabling Location..." : "Enable Location Access"}
          </button>
        )}
      </Popup>
    </Marker>
  );
};

FacilityMarker.propTypes = {
  facility: PropTypes.object.isRequired,
  selectedFacility: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
};

export default FacilityMarker;
