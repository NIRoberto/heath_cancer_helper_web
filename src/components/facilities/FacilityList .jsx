import PropTypes from "prop-types";
import { Card } from "./Card";

const FacilityList = ({ facilities, selectedFacility, onVisit, onSelect }) => {
  return (
    <div className="space-y-4  h-[80vh] overflow-y-auto">
      {facilities.map((facility) => (
        <Card
          key={facility.id}
          facility={facility}
          className={
            selectedFacility?.id === facility.id
              ? "border-amber-600 border-2"
              : ""
          }
          onVisit={onVisit}
          onClick={() => onSelect(facility)}
        />
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
      distance: PropTypes.string.isRequired,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    })
  ).isRequired,
  selectedFacility: PropTypes.object,
  onVisit: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default FacilityList;
