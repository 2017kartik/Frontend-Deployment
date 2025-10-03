import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "My listener connected me with a psychologist. It felt like a safe space.",
      author: "Priya",
      location: "Mumbai",
      rating: 5,
      avatar: "P",
    },
    {
      quote: "I found balance with Rudraksha and yoga guidance from an expert.",
      author: "Rohit",
      location: "Pune",
      rating: 5,
      avatar: "R",
    },
    {
      quote: "Donation pool let me sponsor a healer session for a friend.",
      author: "Neha",
      location: "Delhi",
      rating: 5,
      avatar: "N",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-yellow-50 py-15">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Title */}
        <div className="mb-15 text-center">
          <span className="px-4 py-1 text-sm font-medium tracking-wider text-[#0B1E38] uppercase">
            Testimonials
          </span>
          <h2 className="my-6 text-5xl font-bold tracking-tight text-[#0B1E38]">
            Real Stories of <span className="text-yellow-500">Support</span>
          </h2>
          <p className="text-md mx-auto max-w-3xl leading-relaxed text-[#0B1E38] opacity-80">
            Hear from our community about their transformative experiences
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Avatar */}
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-xl font-bold text-white shadow-lg">
                  {testimonial.avatar}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mb-6 text-center leading-relaxed text-gray-700">
                "{testimonial.quote}"
              </blockquote>

              {/* Star Rating */}
              <div className="mb-4 flex justify-center space-x-1">
                {renderStars(testimonial.rating)}
              </div>

              {/* Author Info */}
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-800">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Stories Button */}
        <div className="text-center">
          <button className="group inline-flex cursor-pointer items-center space-x-2 rounded-2xl bg-[#0B1E38] px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B1E38]/90 hover:shadow-lg">
            See More Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
