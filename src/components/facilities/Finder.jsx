import FacilityList from "./FacilityList ";
import FilterButton from "./FilterButton ";
import MapView from "./map/MapView";
import Navbar from "../navigation/Navbar";
import SearchBar from "./SearchBar ";
import { Clock, Filter, Menu, MoreVertical } from "lucide-react";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { calculateDistance } from "../../utils/distance";
import { LocationContext } from "./../context/LocationContext";
import { facilities } from "./facilities";

const HealthFacilityFinder = () => {
  
  const { location } = useContext(LocationContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFacilities, setFilteredFacilities] = useState(facilities);
  const [selectedFacility, setSelectedFacility] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
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
        facility.name.toLowerCase().includes(query.toLowerCase()) 
    
    );

  console.log("Filtered Results:", results);
    setFilteredFacilities(results);
    setSelectedFacility(results[0] ||facilities[0]);
  };

  const handleVisit = (facility) => {
    setSelectedFacility(facility);
  };

  return (
    <div className="min-h-screen bg-white  h-auto relative">
      <Navbar isBackground={true}  />
      
      <div className="flex h-[calc(100vh-4rem)]  relative">

        
  {/* Overlay for Small Screens */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        {/* <div className="w-80 border-r p-6 bg-white overflow-y-hidden"> */}
           <div
          className={`absolute z-40 top-0 left-0 w-80 bg-white p-6 border-r transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:relative lg:block transition-transform duration-300 ease-in-out`}
        >
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
        <div className="flex-1 relative z-0 ">
    <button
  className="lg:hidden absolute top-0 right-0 p-2 bg-[#0E1A34] shadow-md rounded-sm z-[9999] w-24 h-24 flex items-center justify-center"
  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
>
  <MoreVertical className="text-white text-xl font-bold " size={24} />
</button>
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
