import React, { useState } from "react";

import {
  ChevronRight,
  Image as ImageIcon,
  Play,
  Star,
  Volume2,
} from 'lucide-react';

export const TestimonialCard = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  const MediaIcon = () => {
    switch (testimonial.type) {
      case 'video':
        return <Play className="text-white text-xl" />;
      case 'audio':
        return <Volume2 className="text-white text-xl" />;
      case 'image':
        return <ImageIcon className="text-white text-xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl w-full h-fit">
      {/* Media */}
      {testimonial.mediaUrl && (
        <div
          className={`relative -mx-6 -mt-6 mb-6 ${
            testimonial.type === 'video' ? 'bg-black' : ''
          }`}
        >
          <img
            src={testimonial.mediaUrl}
            alt={`${testimonial.author}'s testimonial`}
            className={`w-full h-48 object-cover object-top rounded-t-xl ${
              testimonial.type === 'image' ? '' : 'opacity-70'
            }`}
          />
          {testimonial.type !== 'image' && (
            <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 bg-opacity-90 rounded-full flex items-center justify-center text-white">
              <MediaIcon />
            </div>
          )}
        </div>
      )}

      {/* Rating */}
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-700 mb-6 border-l-4 border-blue-500 pl-4 italic">
        {isExpanded
          ? testimonial.text
          : testimonial.text.slice(0, 100)} {/* Limit text to 100 characters */}
        {testimonial.text.length > 100 && (
          <button
            onClick={toggleReadMore}
            className="text-blue-600 text-sm ml-2"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        )}
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
          <img
            src={
              testimonial.authorImage ||
              'https://plus.unsplash.com/premium_photo-1670148434900-5f0af77ba500?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHww'
            }
            alt={testimonial.author}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-blue-600">
            {testimonial.author}
          </div>
          <div className="text-sm text-gray-600">{testimonial.status}</div>
        </div>
      </div>
    </div>
  );
};
