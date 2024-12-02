import PropTypes from "prop-types";
import { Search } from "lucide-react";

const SearchBar = ({ placeholder, value, onChange }) => {
  return (
    <div className="flex items-center justify-center border rounded px-3">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-2 pr-10 outline-none"
        value={value}
        onChange={onChange}
      />
      <Search className=" text-gray-400" size={20} />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
