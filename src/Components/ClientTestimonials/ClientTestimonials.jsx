


import React from "react";
import clientTestimonials from "../../data/clientTestimonials";

const ClientTestimonial = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">

      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Client Testimonials
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          What our clients say 💬
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">

        {clientTestimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            {/* User */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-sm">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.role}</p>
              </div>
            </div>

            {/* Feedback */}
            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
              “{item.feedback}”
            </p>

            {/* Rating */}
            <div className="flex text-yellow-400 text-sm">
              {Array.from({ length: item.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
              {Array.from({ length: 5 - item.rating }).map((_, i) => (
                <span key={i} className="text-gray-300">★</span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ClientTestimonial;