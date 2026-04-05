

import React from "react";
import {
  FaBullseye,
  FaLightbulb,
  FaUsers,
  FaRocket,
   FaAtom ,
   FaHandshake,
} from "react-icons/fa";

const About = () => {
  const cards = [
    {
      icon: <FaBullseye />,
      title: "Our Focus",
      desc: "Empowering businesses with innovative technology to overcome complex challenges.",
      active: false,
    },
    {
      icon: <FaLightbulb />,
      title: "Our Approach",
      desc: "Engineering smarter solutions with a human-centered strategy.",
      active: false,
    },
    {
      icon: <FaUsers />,
      title: "Our Team",
      desc: "A dynamic collective of innovators,driven by passion and united in delivering transformative results.",
      active: false,
    },
    {
      icon: <FaRocket />,
      title: "Our Vision",
      desc: "To shape the future of digital transformation by creating innovative technologies that empower businesses worldwide.",
      active: false,
    },
     {
      icon:  <FaAtom />,
      title: "Innovation",
      desc: "Combining visionary thinking with advanced tech to deliver impart beyond boundaries.",
      active: false,
    },
     {
      icon: <FaHandshake />,
      title: "Customer Focus",
      desc: "Your vision becomes our blueprint completely-their solutions helped us scale faster and smarter.",
      active: false,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-white ">

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

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