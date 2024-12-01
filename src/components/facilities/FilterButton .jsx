import PropTypes from "prop-types";

const FilterButton = ({ icon: Icon, label }) => {
  return (
    <button className="flex items-center space-x-1 border rounded px-3 py-1">
      <Icon size={16} />
      <span>{label}</span>
    </button>
  );
};

FilterButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
};

export default FilterButton;
