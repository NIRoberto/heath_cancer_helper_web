import FacilityList from "./FacilityList ";
import FilterButton from "./FilterButton ";
import MapView from "./map/MapView";
import Navbar from "../navigation/Navbar";
import SearchBar from "./SearchBar ";
import { Clock, Filter } from "lucide-react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { calculateDistance } from "../../utils/distance";
import { LocationContext } from "./../context/LocationContext";
import { facilities } from "./facilities";

const HealthFacilityFinder = () => {
  
  const { location } = useContext(LocationContext);
  console.log(location);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFacilities, setFilteredFacilities] = useState(facilities);
  const [selectedFacility, setSelectedFacility] = useState(null);
  useEffect(() => {
    if (location.latitude && location.longitude) {
      // Sort facilities by distance
      const facilitiesWithDistance = facilities.map((facility) => ({
        ...facility,
        distance: calculateDistance(
          location.latitude,
          location.longitude,
          facility.lat,
          facility.lng
        ),
      }));
      facilitiesWithDistance.sort((a, b) => a.distance - b.distance);
      setFilteredFacilities(facilitiesWithDistance);
      setSelectedFacility(facilitiesWithDistance[0]);
    }
  }, [location]);

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
        <div className="flex-1 relativde">
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
