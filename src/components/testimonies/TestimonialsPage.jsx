import Navbar from "../navigation/Navbar";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Image as ImageIcon, Play, Star, Volume2 } from "lucide-react";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "./testimonials";

const TestimonialsPage = () => {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of testimonials per page

  const filters = [
    { id: "all", label: "All Stories" },
    { id: "video", label: "Video" },
    { id: "audio", label: "Audio" },
    { id: "text", label: "Written" },
    { id: "recent", label: "Recent" },
  ];

  // Filter testimonials
  const filteredTestimonials = testimonials.filter((t) =>
    filter === "all" || filter === "recent" ? true : t.type === filter
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);
  const paginatedTestimonials = filteredTestimonials.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="absolute inset-0 bg-black opacity-10">
          <img
            src={
              "https://plus.unsplash.com/premium_photo-1670148434900-5f0af77ba500?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHww"
            }
            alt="Background pattern"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Stories of Hope & Healing</h1>
          <p className="text-xl opacity-90">Inspiring testimonials from our cancer support community</p>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setFilter(f.id);
                setCurrentPage(1); // Reset to the first page when filter changes
              }}
              className={`px-6 py-2 rounded-full border-2 transition-colors duration-200
                ${
                  filter === f.id
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-blue-600 text-blue-600 hover:bg-blue-50"
                }`}
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
                      ? "bg-blue-600 text-white"
                      : "text-blue-600 hover:bg-blue-50"
                  }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => goToPage(currentPage + 1)}
            className={`w-10 h-10 rounded-lg border border-blue-600 flex items-center justify-center
              ${
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-50"
                  : "text-blue-600 hover:bg-blue-50"
              }`}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
