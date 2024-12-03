import FacilityMarker from "./FacilityMarker";
import FlyToMap from "./FlyToMap";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import UserLocationMarker from "./UserLocationMarker";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { MAPKEY } from "./KEYS.JS";

// Set Google Maps container style
const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

// Default map options
const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
};

const MapView = ({ facilities, selectedFacility, onSelect }) => {
  const [userLocation, setUserLocation] = useState(null);

  // Load Google Maps API
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: MAPKEY,
  });

  // Get user's current location
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

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  const mapCenter = {
    lat: userLocation?.lat || facilities[0].lat,
    lng: userLocation?.lng || facilities[0].lng,
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={mapCenter}
      zoom={13}
      options={mapOptions}
    >
      {/* User's current location marker */}
      {userLocation && <UserLocationMarker userLocation={userLocation} />}

      {/* Facility markers */}
      {facilities.map((facility) => (
        <FacilityMarker
          key={facility.id}
          facility={facility}
          selectedFacility={selectedFacility}
          onSelect={onSelect}
        />
      ))}

      {/* Fly to the selected facility */}
      <FlyToMap facility={selectedFacility} />
    </GoogleMap>
  );
};

MapView.propTypes = {
  facilities: PropTypes.array.isRequired,
  selectedFacility: PropTypes.object,
  onSelect: PropTypes.func.isRequired,
};

export default MapView;
