import L from "leaflet";
import PropTypes from "prop-types";
import React from "react";
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
          fontSize: "30px", // Increase the font size here
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px", // Increase the width to accommodate the icon
          height: "40px", // Increase the height
          borderRadius: "50%", // Optional: make the icon circular
          backgroundColor: "white", // Optional: white background for contrast
          boxShadow: "0 0 5px rgba(0,0,0,0.3)", // Optional: add shadow to the icon
        }}
      >
        <CiLocationOn />
      </div>
    ),
    iconSize: [40, 40], // Set the icon size here (width and height)
    iconAnchor: [20, 20], // Adjust the anchor position (center of the icon)
  });

const FacilityMarker = ({ facility, selectedFacility, onSelect }) => {
  // Access user location from context
  const { location } = useLocation(); // Get the user's current location

  // Handle the "Get Directions" button click
  const handleGetDirections = () => {
    if (location.latitude && location.longitude) {
      // Construct the Google Maps directions URL
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${location.latitude},${location.longitude}&destination=${facility.lat},${facility.lng}`;

      // Open Google Maps with directions in a new tab
      window.open(googleMapsUrl, "_blank");
    } else {
      // Show a toast notification if location is unavailable
      toast.error("Location access is required to get directions.");
    }
  };

  return (
    <Marker
      key={facility.id}
      position={[facility.lat, facility.lng]}
      icon={createFacilityIcon(facility === selectedFacility)} // Custom icon with selected facility highlighted
    >
      <Popup>
        <h3>{facility.name}</h3>
        <p>{facility.description}</p>
        <p>Open {facility.hours}</p>
        <button
          className="mt-2 px-4 py-1 bg-amber-600 text-white rounded"
          onClick={() => onSelect(facility)} // Select this facility
        >
          View Details
        </button>
        <button
          className="mt-2 px-4 py-1 bg-blue-600 text-white rounded"
          onClick={handleGetDirections} // Open Google Maps with directions
        >
          Get Directions
        </button>
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
