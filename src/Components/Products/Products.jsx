




import React from "react";
import { Link } from "react-router-dom";
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
    {
      icon: <FaCogs className="text-blue-600" />,
      title: "ERP",
      desc: "Streamline business operations efficiently.",
      path: "/erp",
    },
    {
      icon: <FaUsers className="text-blue-600" />,
      title: "CRM",
      desc: "Manage customer relationships effectively.",
      path: "/crm",
    },
    {
      icon: <FaUserTie className="text-blue-600" />,
      title: "HRMS",
      desc: "Automate HR and employee management.",
      path: "/hrms",
    },
    {
      icon: <FaChartLine className="text-blue-600" />,
      title: "TS Plus",
      desc: "Business analysis & operations tools.",
      path: "/ts-plus",
    },
    {
      icon: <FaClipboardList className="text-blue-600" />,
      title: "No Sky",
      desc: "Specialized business software solution.",
      path: "/no-sky",
    },
    {
      icon: <FaFileInvoice className="text-blue-600" />,
      title: "Tally",
      desc: "Accounting & finance management.",
      path: "/tally",
    },
    {
      icon: <FaCalendarCheck className="text-blue-600" />,
      title: "Booking Portal",
      desc: "Online booking system.",
      path: "/booking-portal",
    },
    {
      icon: <FaGoogle className="text-blue-600" />,
      title: "Google My Business",
      desc: "Boost online presence easily.",
      path: "/gmb",
    },
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
            
            <div
              className="bg-white p-6 rounded-xl shadow-sm text-center
              hover:shadow-lg hover:-translate-y-2 transition-all duration-300 h-full flex flex-col justify-between"
            >

              {/* Top Content */}
              <div>
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
                <p className="text-sm text-gray-500 mb-4">
                  {item.desc}
                </p>
              </div>

              {/* ✅ Learn More → Link Button */}
              <Link
                to={item.path}
                className="inline-flex items-center justify-center gap-1 text-blue-600 font-medium text-sm group"
              >
                <span className="relative after:block after:h-[2px] after:bg-blue-600 after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100 after:origin-left">
                  Learn More
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Products;