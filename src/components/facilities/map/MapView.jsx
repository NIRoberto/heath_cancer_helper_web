import FacilityMarker from "./FacilityMarker";
import FlyToMap from "./FlyToMap";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import UserLocationMarker from "./UserLocationMarker";
import { MapContainer, TileLayer } from "react-leaflet";

// MapView.js

const MapView = ({ facilities, selectedFacility, onSelect }) => {
  const [userLocation, setUserLocation] = useState(null);

  // Get user's current location using geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const mapCenter = [
    userLocation?.lat || facilities[0].lat,
    userLocation?.lng || facilities[0].lng,
  ];

  return (
    <MapContainer center={mapCenter} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />

      {/* Display user's current location if available */}
      {userLocation && <UserLocationMarker userLocation={userLocation} />}

      {/* Display all facilities (hospitals) */}
      {facilities.map((facility) => (
        <FacilityMarker
          key={facility.id}
          facility={facility}
          selectedFacility={selectedFacility}
          onSelect={onSelect}
        />
      ))}

      {/* Fly to the selected facility when chosen */}
      <FlyToMap facility={selectedFacility} />
    </MapContainer>
  );
};

MapView.propTypes = {
  facilities: PropTypes.array.isRequired,
  selectedFacility: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
};

export default MapView;
