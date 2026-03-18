





import React from "react";
import { Link } from "react-router-dom";  

import {
  FaLaptopCode,
  FaMobileAlt,
  FaGamepad,
  FaPalette,
  FaBullhorn,
  FaPenNib,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
      link: "/website-development",
      items: ["Responsive, SEO-optimized websites for all devices."],
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Application",
      link: "/mobile-application",
      items: ["iOS & Android apps to enhance engagement"],
    },
    {
      icon: <FaGamepad />,
      title: "Game Application",
      link: "/game-application",
      items: ["Fun and interactive gaming experiences."],
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      link: "/ui-ux-design",
      items: ["Stunning interfaces for better user experience."],
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      link: "/digital-marketing",
      items: ["Social media, SEO, and ad campaigns that convert"],
    },
    {
      icon: <FaPenNib />,
      title: "Graphic Designing",
      link: "/graphic-designing",
      items: ["Creative designs for branding & marketing."],
    },
    {
      icon: <FaUsers />,
      title: "UGC",
      link: "/ugc",
      items: ["User-generated content to increase trust & visibility."],
    },
    {
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      link: "/cybersecurity",
      items: ["Protect your business with advanced security solutions."],
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-12">

      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Our Services
        </h2>
        <p className="text-gray-600">
          Comprehensive technology solutions tailored to your business needs
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >

        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white p-8 rounded-lg border border-gray-200 
              transition duration-300 hover:-translate-y-2 
              hover:shadow-xl hover:border-blue-500 
              h-full max-w-sm mx-auto"
            >

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 
                flex items-center justify-center 
                rounded-md text-xl">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>
              </div>

              {/* List */}
              <ul className="space-y-2 text-gray-600 mb-5 ml-6">
                {service.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              {/* React Router Link */}
              <Link
                to={service.link}
                className="text-blue-600 font-semibold hover:underline transition"
              >
                Learn More →
              </Link>

            </div>
          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
};

export default Services;