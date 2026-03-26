import React from "react";
import { Star, Trophy, Users, BadgeCheck, Globe } from "lucide-react";

const clients = [
  {
    name: "Hey Step Up",
    rating: 4.8,
    reviews: "245+ reviews",
    tag: "VERIFIED",
  },
  {
    name: "The Achievers Award Council",
    rating: 4.6,
    reviews: "189+ reviews",
    tag: "PARTNER",
  },
  {
    name: "Du Reality & Manpower",
    rating: 4.9,
    reviews: "312+ reviews",
    tag: "TRUSTED",
  },
  {
    name: "Home Service 99",
    rating: 4.7,
    reviews: "156+ reviews",
    tag: "CLIENT",
  },
];

const TrustedClients = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          Trusted by Our Valued Clients
        </h2>
        <p className="text-gray-400 mt-3">
          Join hundreds of satisfied clients who trust our expertise
        </p>
      </div>

      {/* Client Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-gray-100 text-black rounded-xl p-6 text-center shadow-md hover:scale-105 transition"
          >
            {/* Badge */}
            <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
              {client.tag}
            </span>

            {/* Name */}
            <h3 className="font-semibold mt-4 text-lg">
              {client.name}
            </h3>

            {/* Stars */}
            <div className="flex justify-center items-center gap-1 mt-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
              <span className="text-black ml-2 font-medium">
                {client.rating}
              </span>
            </div>

            {/* Reviews */}
            <p className="text-gray-500 text-sm mt-2">
              Based on {client.reviews}
            </p>
          </div>
        ))}
      </div>

      {/* Stats Section
      <div className="mt-12 bg-gradient-to-r from-black to-gray-900 border border-gray-800 rounded-xl p-8 grid md:grid-cols-4 gap-6 text-center">
        
        <div>
          <Trophy className="mx-auto text-yellow-400 mb-2" />
          <h3 className="text-xl font-bold text-yellow-400">4.8</h3>
          <p className="text-gray-400 text-sm">Average Rating</p>
        </div>

        <div>
          <Users className="mx-auto text-yellow-400 mb-2" />
          <h3 className="text-xl font-bold text-yellow-400">120+</h3>
          <p className="text-gray-400 text-sm">Happy Clients</p>
        </div>

        <div>
          <BadgeCheck className="mx-auto text-yellow-400 mb-2" />
          <h3 className="text-xl font-bold text-yellow-400">100%</h3>
          <p className="text-gray-400 text-sm">Verified Reviews</p>
        </div>

        <div>
          <Globe className="mx-auto text-yellow-400 mb-2" />
          <h3 className="text-xl font-bold text-yellow-400">8+</h3>
          <p className="text-gray-400 text-sm">Countries Served</p>
        </div>

      </div> */}
    </section>
  );
};

export default TrustedClients;