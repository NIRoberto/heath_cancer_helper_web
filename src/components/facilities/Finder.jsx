import { Search, Clock, Filter } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import Navbar from "../navigation/Navbar";

// Card Component
const Card = ({ facility, className = "", onClick, onVisit }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-200 transition-colors ${className}`}
      onClick={onClick}
    >
      <div className={`p-4`}>
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

// Dummy Data for Facilities
const facilities = [
  // Rwanda - Kigali
  {
    id: 1,
    name: "King Faisal Hospital",
    hours: "9 PM - 5 AM",
    distance: "A few kilometers away",
    lat: -1.945,
    lng: 30.059,
    country: "Rwanda",
    province: "Kigali",
  },
  {
    id: 2,
    name: "Kaniynya Health Center",
    hours: "9 PM - 5 AM",
    distance: "A few kilometers away",
    lat: -1.957,
    lng: 30.09,
    country: "Rwanda",
    province: "Kigali",
  },
  {
    id: 3,
    name: "Muhima Health Center",
    hours: "24/7",
    distance: "5 km",
    lat: -1.957,
    lng: 30.061,
    country: "Rwanda",
    province: "Kigali",
  },
  {
    id: 4,
    name: "Remera Health Center",
    hours: "9 AM - 6 PM",
    distance: "8 km",
    lat: -1.961,
    lng: 30.097,
    country: "Rwanda",
    province: "Kigali",
  },

  // Rwanda - Eastern Province
  {
    id: 5,
    name: "Nyundo Health Center",
    hours: "8 AM - 5 PM",
    distance: "12 km",
    lat: -1.696,
    lng: 30.054,
    country: "Rwanda",
    province: "Eastern",
  },
  {
    id: 6,
    name: "Kabarore Health Center",
    hours: "8 AM - 5 PM",
    distance: "15 km",
    lat: -1.552,
    lng: 30.37,
    country: "Rwanda",
    province: "Eastern",
  },

  // Rwanda - Western Province
  {
    id: 7,
    name: "Rubavu Health Center",
    hours: "9 AM - 6 PM",
    distance: "25 km",
    lat: -1.688,
    lng: 29.351,
    country: "Rwanda",
    province: "Western",
  },

  // Rwanda - Northern Province
  {
    id: 8,
    name: "Musanze Health Center",
    hours: "9 AM - 5 PM",
    distance: "22 km",
    lat: -1.676,
    lng: 29.549,
    country: "Rwanda",
    province: "Northern",
  },

  // Rwanda - Southern Province
  {
    id: 9,
    name: "Nyanza Health Center",
    hours: "9 PM - 5 AM",
    distance: "10 km",
    lat: -2.235,
    lng: 29.749,
    country: "Rwanda",
    province: "Southern",
  },

  // Facilities in Congo
  {
    id: 10,
    name: "Kinshasa General Hospital",
    hours: "8 AM - 4 PM",
    distance: "20 km",
    lat: -4.441,
    lng: 15.266,
    country: "Congo",
    province: "Kinshasa",
  },

  // Facilities in Burundi
  {
    id: 11,
    name: "Bujumbura Health Center",
    hours: "9 AM - 6 PM",
    distance: "10 km",
    lat: -3.379,
    lng: 29.358,
    country: "Burundi",
    province: "Bujumbura",
  },

  // Facilities in Tanzania
  {
    id: 12,
    name: "Dar es Salaam Hospital",
    hours: "24/7",
    distance: "15 km",
    lat: -6.792,
    lng: 39.208,
    country: "Tanzania",
    province: "Dar es Salaam",
  },
];

// Main component
const HealthFacilityFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFacilities, setFilteredFacilities] = useState(facilities);
  const [selectedFacility, setSelectedFacility] = useState(null);

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    const results = facilities.filter(
      (facility) =>
        facility.name.toLowerCase().includes(query.toLowerCase()) ||
        facility.country.toLowerCase().includes(query.toLowerCase()) ||
        facility.province.toLowerCase().includes(query.toLowerCase())
    );
    results.length > 0 ?setSelectedFacility(results[0]):setSelectedFacility(facilities[0]);
    
    setFilteredFacilities(results);
  };

  // Handle visit (set selected facility)
  const handleVisit = (facility) => {
    setSelectedFacility(facility);
  };

  // Default to all facilities if no search query is provided
  const facilitiesToDisplay = searchQuery ? filteredFacilities : facilities;

  // Component to manage map flyTo action
  const FlyToMap = ({ facility }) => {
    const map = useMap(); // Hook to access the map instance

    if (facility) {
      map.flyTo([facility.lat, facility.lng], 13, { animate: true });
    }

    return null;
  };

  // Ensure map center is always valid
  const mapCenter = [
    selectedFacility?.lat || facilitiesToDisplay[0].lat,
    selectedFacility?.lng || facilitiesToDisplay[0].lng,
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* <header className="bg-slate-900 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <img
            src="/api/placeholder/40/40"
            alt="My Docta Logo"
            className="h-10"
          />
          <nav>
            <ul className="flex space-x-6 text-white">
              <li>Home</li>
              <li>Services</li>
            </ul>
          </nav>
        </div>
        <button className="bg-amber-600 text-white px-4 py-2 rounded">
          My Health Status
        </button>
      </header> */}
      <Navbar isBackground={true} className="mb-32"/>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div className="w-80 border-r p-6 bg-white overflow-y-auto">
          <h1 className="text-2xl font-semibold text-amber-600 mb-6">
            Health Facilities Nearby
          </h1>

          {/* Search Input */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search a Health Facility"
              className="w-full p-2 pr-10 border rounded"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <Search
              className="absolute right-3 top-2.5 text-gray-400"
              size={20}
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex space-x-2 mb-6">
            <button className="flex items-center space-x-1 border rounded px-3 py-1">
              <Filter size={16} />
              <span>All filters</span>
            </button>
            <button className="flex items-center space-x-1 border rounded px-3 py-1">
              <Clock size={16} />
              <span>Hours</span>
            </button>
          </div>

          {/* Facility List */}
          <div className="space-y-4">
            {facilitiesToDisplay.map((facility) => (
              <Card
                facility={facility}
                key={facility.id}
                className={
                  selectedFacility?.id === facility.id
                    ? "border-amber-600 border-2"
                    : ""
                }
                onClick={() => setSelectedFacility(facility)}
                onVisit={handleVisit}
              />
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="flex-1 relative bg-gray-50">
          <MapContainer
            center={mapCenter}
            zoom={10}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            {/* Markers for each facility */}
            {facilitiesToDisplay.map((facility) => (
              <Marker key={facility.id} position={[facility.lat, facility.lng]}>
                <Popup>
                  <h3>{facility.name}</h3>
                  <p>{facility.distance}</p>
                  <p>Open {facility.hours}</p>
                  <button
                    className="mt-2 px-4 py-1 bg-amber-600 text-white rounded"
                    onClick={() => setSelectedFacility(facility)}
                  >
                    View Details
                  </button>
                </Popup>
              </Marker>
            ))}
            {/* Fly to the selected facility */}
            <FlyToMap facility={selectedFacility} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default HealthFacilityFinder;
