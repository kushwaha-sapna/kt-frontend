


import React from "react";
import {
  FaLightbulb,
  FaUsers,
  FaBookOpen,
  FaBalanceScale,
  FaMoneyBillWave,
  FaGlobe,
} from "react-icons/fa";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const Career = () => {
  const benefits = [
    {
      icon: <FaLightbulb />,
      title: "Innovation First",
      desc: "Work with cutting-edge technologies and be part of projects shaping the future.",
    },
    {
      icon: <FaUsers />,
      title: "Collaborative Culture",
      desc: "Be part of a diverse team where your ideas are valued and teamwork drives success.",
    },
    {
      icon: <FaBookOpen />,
      title: "Continuous Learning",
      desc: "Access workshops, training, and conferences to upgrade your skills constantly.",
    },
    {
      icon: <FaBalanceScale />,
      title: "Work-Life Balance",
      desc: "Flexible hours, remote work options, and wellness support for a healthy lifestyle.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Competitive Benefits",
      desc: "Attractive salary packages, bonuses, and comprehensive employee benefits.",
    },
    {
      icon: <FaGlobe />,
      title: "Global Impact",
      desc: "Work on projects that impact users worldwide and create meaningful change.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-16">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Careers
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join our innovative team shaping the future of technology. Build your
          career with purpose, passion, and endless possibilities.
        </p>
      </div>

      {/* Why Choose */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-blue-800">
          Why Choose Us?
        </h2>
        <p className="text-gray-500 mt-2">
          We offer more than just a job — we provide a platform for growth,
          innovation, and success.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {benefits.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center h-full">
              <div className="text-blue-900 text-3xl mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA */}
      <div className="mt-16 bg-blue-900 text-white rounded-xl p-10 text-center shadow-lg">
        <h2 className="text-2xl font-semibold mb-3">
          Ready to Start Your Journey?
        </h2>
        <p className="mb-6 text-gray-200">
          Explore exciting opportunities and become part of a team that values
          innovation, creativity, and growth.
        </p>
        <button className="bg-white text-blue-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
          View Open Positions
        </button>
      </div>
    </div>
  );
};

export default Career;