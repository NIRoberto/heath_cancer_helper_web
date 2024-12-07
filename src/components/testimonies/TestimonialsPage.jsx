import Navbar from "../navigation/Navbar";
import React, { useEffect, useState } from "react";
import bgimg from "../../assets/images/bgimg.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "./testimonials";

const TestimonialsPage = () => {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredTestimonials, setFilteredTestimonials] = useState([]);
  const itemsPerPage = 4;

  const filters = [
    { id: "all", label: "All Stories" },
    { id: "video", label: "Video" },
    { id: "audio", label: "Audio" },
    { id: "text", label: "Written" },
    { id: "recent", label: "Recent" },
  ];

  // Update filtered testimonials whenever filter changes
  useEffect(() => {
    const filterTestimonials = () => {
      let filtered = [];
      
      switch(filter) {
        case 'all':
          filtered = [...testimonials];
          break;
        case 'recent':
          filtered = [...testimonials].sort((a, b) => new Date(b.date) - new Date(a.date));
          break;
        default:
          filtered = testimonials.filter(item => item.type.toLowerCase() === filter.toLowerCase());
          break;
      }
      
      setFilteredTestimonials(filtered);
      setCurrentPage(1); // Reset to first page when filter changes
    };

    filterTestimonials();
  }, [filter]);

  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);
  const paginatedTestimonials = filteredTestimonials.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterClick = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isBackground={true} />
      <div className="relative bg-gradient-to-r from-gray-900/95 to-gray-900/20 text-white py-16 px-4">
        <div className="absolute inset-0">
          <img
            src={bgimg}
            alt="Background pattern"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Stories of Hope & Healing</h1>
          <p className="text-xl opacity-90">
            Inspiring testimonials from our cancer support community
          </p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => handleFilterClick(f.id)}
              className={`
                px-6 py-2 
                rounded-full 
                border-2 
                transition-colors 
                duration-200
                cursor-pointer
                z-10
                relative
                select-none
                ${
                  filter === f.id
                    ? "bg-[#B2871C] bg-opacity-[70%] text-white border-[#B2871C]"
                    : "border-[#B2871C] text-[#B2871C] hover:bg-blue-50"
                }
              `}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {paginatedTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => goToPage(currentPage - 1)}
              className={`w-10 h-10 rounded-lg border border-blue-600 flex items-center justify-center
                ${
                  currentPage === 1
                    ? "cursor-not-allowed opacity-50"
                    : "text-blue-600 hover:bg-blue-50"
                }`}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center
                    ${
                      currentPage === page
                        ? "bg-gray-400 text-white"
                        : "text-[#B2871C] hover:bg-[#B2871C]-50"
                    }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => goToPage(currentPage + 1)}
              className={`w-10 h-10 rounded-lg border border-[#B2871C] flex items-center justify-center
                ${
                  currentPage === totalPages
                    ? "cursor-not-allowed opacity-50"
                    : "text-[#B2871C] hover:bg-blue-50"
                }`}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialsPage;