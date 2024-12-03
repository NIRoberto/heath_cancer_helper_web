import PropTypes from "prop-types";
import { useMap } from "react-leaflet";

// FlyToMap.js

const FlyToMap = ({ facility }) => {
  const map = useMap();
  if (facility) {
    map.flyTo([facility.lat, facility.lng], 13, { animate: true });
  }
  return null;
};

FlyToMap.propTypes = {
  facility: PropTypes.object,
};

export default FlyToMap;
