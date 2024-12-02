import L from "leaflet";
import PropTypes from "prop-types";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

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

const MapView = ({ facilities, selectedFacility, onSelect }) => {
  const mapCenter = [
    selectedFacility?.lat || facilities[0].lat,
    selectedFacility?.lng || facilities[0].lng,
  ];

  return (
    <MapContainer
      center={mapCenter}
      zoom={10}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      {facilities.map((facility) => (
        <Marker key={facility.id} position={[facility.lat, facility.lng]}>
          <Popup>
            <h3>{facility.name}</h3>
            <p>{facility.distance}</p>
            <p>Open {facility.hours}</p>
            <button
              className="mt-2 px-4 py-1 bg-amber-600 text-white rounded"
              onClick={() => onSelect(facility)}
            >
              View Details
            </button>
          </Popup>
        </Marker>
      ))}
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
