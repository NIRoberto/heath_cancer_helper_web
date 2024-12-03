import L from "leaflet";
import PropTypes from "prop-types";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { FaPerson } from "react-icons/fa6";
import { Marker, Popup } from "react-leaflet";

// UserLocationMarker.js

// Create custom marker icon for user location
const createUserLocationIcon = () =>
  L.divIcon({
    className: "user-location-marker",
    html: ReactDOMServer.renderToString(
      <div
        style={{
          color: "green",
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
        <FaPerson />
      </div>
    ),
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

const UserLocationMarker = ({ userLocation }) => (
  <Marker position={[userLocation.lat, userLocation.lng]} icon={createUserLocationIcon()}>
    <Popup>
      <h3>Your Location</h3>
      <p>Latitude: {userLocation.lat}</p>
      <p>Longitude: {userLocation.lng}</p>
    </Popup>
  </Marker>
);

UserLocationMarker.propTypes = {
  userLocation: PropTypes.object.isRequired,
};

export default UserLocationMarker;
