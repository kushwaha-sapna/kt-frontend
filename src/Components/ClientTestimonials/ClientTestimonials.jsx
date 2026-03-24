import React from "react";

import clientTestimonials from "../../data/clientTestimonials";

const ClientTestimonial = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Client Testimonials
        </h2>
        <p className="text-gray-500 mt-2">
          What our clients say about us 💬
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {clientTestimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            {/* User */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>

            {/* Feedback */}
            <p className="text-gray-600 mb-4">
              “{item.feedback}”
            </p>

            {/* Rating */}
            <div className="flex text-yellow-400">
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