import Navbar from "../navigation/Navbar";
import { facilities } from "./facilities";


import MapView from "./MapView";
import { Clock, Filter } from "lucide-react";
import { useState } from "react";
import SearchBar from "./SearchBar ";
import FilterButton from "./FilterButton ";
import FacilityList from "./FacilityList ";

const HealthFacilityFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFacilities, setFilteredFacilities] = useState(facilities);
  const [selectedFacility, setSelectedFacility] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const results = facilities.filter(
      (facility) =>
        facility.name.toLowerCase().includes(query.toLowerCase()) ||
        facility.country.toLowerCase().includes(query.toLowerCase()) ||
        facility.province.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFacilities(results);
    setSelectedFacility(results[0] || facilities[0]);
  };

  const handleVisit = (facility) => {
    setSelectedFacility(facility);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar isBackground={true} />
      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div className="w-80 border-r p-6 bg-white overflow-y-hidden">
          <h1 className="text-2xl font-semibold text-amber-600 mb-6">
            Health Facilities Nearby
          </h1>
          <SearchBar
            placeholder="Search a Health Facility"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <div className="flex space-x-2 my-4">
            <FilterButton icon={Filter} label="All filters" />
            <FilterButton icon={Clock} label="Hours" />
          </div>
          <FacilityList
            facilities={filteredFacilities}
            selectedFacility={selectedFacility}
            onVisit={handleVisit}
            onSelect={setSelectedFacility}
          />
        </div>
        {/* Map Section */}
        <div className="flex-1 relative">
          <MapView
            facilities={filteredFacilities}
            selectedFacility={selectedFacility}
            onSelect={setSelectedFacility}
          />
        </div>
      </div>
    </div>
  );
};

export default HealthFacilityFinder;
