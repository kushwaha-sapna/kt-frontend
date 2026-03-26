

import React from "react";
import {
  FaCogs,
  FaUsers,
  FaUserTie,
  FaChartLine,
  FaClipboardList,
  FaFileInvoice,
  FaCalendarCheck,
  FaGoogle,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Products = () => {
  const products = [
    { icon: <FaCogs className="text-blue-600" />, title: "ERP", desc: "Streamline business operations efficiently." },
    { icon: <FaUsers className="text-blue-600" />, title: "CRM", desc: "Manage customer relationships effectively." },
    { icon: <FaUserTie className="text-blue-600" />, title: "HRMS", desc: "Automate HR and employee management." },
    { icon: <FaChartLine className="text-blue-600" />, title: "TS Plus", desc: "Business analysis & operations tools." },
    { icon: <FaClipboardList className="text-blue-600" />, title: "No Sky", desc: "Specialized business software solution." },
    { icon: <FaFileInvoice className="text-blue-600" />, title: "Tally", desc: "Accounting & finance management." },
    { icon: <FaCalendarCheck className="text-blue-600" />, title: "Booking Portal", desc: "Online booking system." },
    { icon: <FaGoogle className="text-blue-600" />, title: "Google My Business", desc: "Boost online presence easily." },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Our Products
        </h2>
        <p className="text-gray-600 max-w-1xl mx-auto">
          We offer powerful digital products that help businesses manage,
          automate, and grow with ease.
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center
            hover:shadow-lg hover:-translate-y-2 transition-all duration-300 h-full">

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center
              bg-blue-100 text-blue-600
              rounded-lg text-xl mb-4 mx-auto">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500">
                {item.desc}
              </p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Products;