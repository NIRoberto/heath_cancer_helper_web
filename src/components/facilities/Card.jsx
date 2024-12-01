import PropTypes from "prop-types";

export const Card = ({ facility, className = "", onVisit }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-200 transition-colors ${className}`}
    >
      <div className="p-4">
        <h3 className="font-semibold">{facility.name}</h3>
        <p className="text-red-600 text-sm">Open {facility.hours}</p>
        <p className="text-sm text-gray-600">{facility.distance}</p>
        <button
          className="mt-2 px-6 py-1 bg-amber-600 text-white rounded"
          onClick={() => onVisit(facility)}
        >
          Visit
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  facility: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    distance: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
  onVisit: PropTypes.func.isRequired,
};
