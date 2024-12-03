import PropTypes from "prop-types";
import { Card } from "./Card";

const FacilityList = ({ facilities, selectedFacility, onVisit, onSelect }) => {
  return (
    <div className="space-y-4 h-[80vh] pb-40 overflow-y-auto">
      {facilities.map((facility) => (
        <div
          key={facility.id}
          className={`p-4 border rounded-lg ${
            selectedFacility?.id === facility.id
              ? "border-amber-600 bg-amber-100"
              : "border-gray-300"
          }`}
          onClick={() => onSelect(facility)}
        >
          {/* Facility Name */}
          <h3 className="text-lg font-semibold text-gray-800">{facility.name}</h3>
          
          {/* Distance */}
          {facility.distance && (
            <p className="text-sm text-gray-500">
              Distance: {parseFloat(facility.distance).toFixed(2)} km
            </p>
          )}

          {/* Operating Hours */}
          <p className="text-sm text-gray-600">Open: {facility.hours}</p>

          {/* Visit Button */}
          <button
            className="mt-2 px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering the onSelect event
              onVisit(facility);
            }}
          >
            Visit
          </button>
        </div>
      ))}
    </div>
  );
};

FacilityList.propTypes = {
  facilities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      hours: PropTypes.string.isRequired,
      distance: PropTypes.number, // Distance in kilometers
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    })
  ).isRequired,
  selectedFacility: PropTypes.object,
  onVisit: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default FacilityList;
