

import React from "react";
import {
  FaBullseye,
  FaLightbulb,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  const cards = [
    {
      icon: <FaBullseye />,
      title: "Our Focus",
      desc: "Delivering cutting-edge solutions that solve complex business challenges.",
      active: false,
    },
    {
      icon: <FaLightbulb />,
      title: "Our Approach",
      desc: "Combining technical excellence with strategic thinking for customized solutions.",
      active: false,
    },
    {
      icon: <FaUsers />,
      title: "Our Team",
      desc: "Passionate experts committed to innovation and exceptional results.",
      active: false,
    },
    {
      icon: <FaRocket />,
      title: "Our Vision",
      desc: "To be the global leader in technology innovation and digital transformation.",
      active: false,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-white">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-xl p-8 text-center border transition duration-300
            border-gray-200
            hover:-translate-y-2 hover:shadow-lg hover:border-blue-500`}
          >

            {/* Icon Box (Blue) */}
            <div className="w-16 h-16 bg-blue-100 text-blue-600 
            flex items-center justify-center 
            rounded-xl mx-auto mb-6 text-2xl">
              {card.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {card.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default About;