import React, { useState } from "react";
import { ChevronRight, Image as ImageIcon, Play, Star, Volume2 } from "lucide-react";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    type: 'video',
    rating: 5,
    text: "The support group became my second family during treatment. The counselors here didn't just help me cope with cancer - they helped me find strength I never knew I had. Their holistic approach to healing made all the difference in my journey.",
    author: "Sarah Mitchell",
    status: "Breast Cancer Survivor • 2 years cancer-free",
    mediaUrl: "/api/placeholder/400/225"
  },
  {
    id: 2,
    type: 'audio',
    rating: 4.5,
    text: "During my darkest moments, the counseling team here provided the emotional anchor I needed. They helped me process my fears, celebrate small victories, and maintain hope throughout my treatment journey.",
    author: "James Wilson",
    status: "Lung Cancer Survivor • 3 years post-treatment",
    mediaUrl: "/api/placeholder/400/100"
  },
  {
    id: 3,
    type: 'image',
    rating: 5,
    text: "The individualized support plan helped me not just survive, but thrive. From nutrition guidance to emotional counseling, every aspect of my care was personalized to my needs. I'm now helping other patients as a peer mentor.",
    author: "Maria Rodriguez",
    status: "Lymphoma Survivor • Cancer Support Volunteer",
    mediaUrl: "/api/placeholder/400/300"
  },
  {
    id: 4,
    type: 'text',
    rating: 5,
    text: "When I felt overwhelmed by treatment decisions, the counseling team provided clear, compassionate guidance. They helped me understand my options and find my voice in my cancer journey. Their support extended to my family as well, making us all stronger together.",
    author: "Robert Chen",
    status: "Prostate Cancer Survivor • Family Support Group Leader",
  }
];
const TestimonialCard = ({ testimonial }) => {
    const MediaIcon = () => {
      switch (testimonial.type) {
        case 'video': return <Play className="text-white text-xl" />;
        case 'audio': return <Volume2 className="text-white text-xl" />;
        case 'image': return <ImageIcon className="text-white text-xl" />;
        default: return null;
      }
    };
  
    return (
      <div className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        {testimonial.mediaUrl && (
          <div className={`relative -mx-6 -mt-6 mb-6 ${testimonial.type === 'video' ? 'bg-black' : ''}`}>
            <img 
              src={testimonial.mediaUrl} 
              alt={`${testimonial.author}'s testimonial`} 
              className={`w-full rounded-t-xl ${testimonial.type === 'image' ? '' : 'opacity-70'}`}
            />
            {testimonial.type !== 'image' && (
              <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 bg-opacity-90 rounded-full flex items-center justify-center text-white">
                <MediaIcon />
              </div>
            )}
          </div>
        )}
  
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
          ))}
        </div>
  
        <blockquote className="text-gray-700 mb-6 border-l-4 border-blue-500 pl-4 italic">
          {testimonial.text}
        </blockquote>
  
        <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
            <img 
              src={testimonial.authorImage || "https://plus.unsplash.com/premium_photo-1670148434900-5f0af77ba500?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHww"} 
              alt={testimonial.author}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-semibold text-blue-600">{testimonial.author}</div>
            <div className="text-sm text-gray-600">{testimonial.status}</div>
          </div>
        </div>
      </div>
    );
  };
  


const TestimonialsPage = () => {
  const [filter, setFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Stories' },
    { id: 'video', label: 'Video' },
    { id: 'audio', label: 'Audio' },
    { id: 'text', label: 'Written' },
    { id: 'recent', label: 'Recent' }
  ];

  const filteredTestimonials = testimonials.filter(t => 
    filter === 'all' || filter === 'recent' ? true : t.type === filter
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="absolute inset-0 bg-black opacity-10">
          <img 
            src="https://plus.unsplash.com/premium_photo-1670148434900-5f0af77ba500?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHww" 
            alt="Background pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Stories of Hope & Healing</h1>
          <p className="text-xl opacity-90">Inspiring testimonials from our cancer support community</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-2 rounded-full border-2 transition-colors duration-200
                ${filter === f.id 
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {[1, 2, 3].map(page => (
            <button
              key={page}
              className={`w-10 h-10 rounded-lg border border-blue-600 flex items-center justify-center
                ${page === 1 
                  ? 'bg-blue-600 text-white' 
                  : 'text-blue-600 hover:bg-blue-50'}`}
            >
              {page}
            </button>
          ))}
          <button className="w-10 h-10 rounded-lg border border-blue-600 text-blue-600 flex items-center justify-center hover:bg-blue-50">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;