import PropTypes from "prop-types";
import { Search } from "lucide-react";

const SearchBar = ({ placeholder, value, onChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-2 pr-10 border rounded"
        value={value}
        onChange={onChange}
      />
      <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
