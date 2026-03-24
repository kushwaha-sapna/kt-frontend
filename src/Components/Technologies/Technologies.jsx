import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

// Icons
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAngular,
  FaAws,
  FaDocker,
  FaPhp,
  FaJava,
  FaAndroid,
  FaApple,
} from "react-icons/fa";

import { SiLaravel, SiVuedotjs, SiReact } from "react-icons/si";

const techData = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "Angular", icon: <FaAngular className="text-red-500" /> },
  { name: "AWS", icon: <FaAws className="text-orange-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
  { name: "Vue.js", icon: <SiVuedotjs className="text-green-400" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
  { name: "Java", icon: <FaJava className="text-orange-600" /> },
  { name: "React Native", icon: <SiReact className="text-blue-400" /> },
  { name: "Android", icon: <FaAndroid className="text-green-600" /> },
  { name: "iOS", icon: <FaApple className="text-gray-700" /> },
];

const Technologies = () => {
  return (
    <section className="bg-white py-16 px-6">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Technologies We Master
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Leveraging cutting-edge technologies to build innovative solutions
          that drive your success
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {techData.map((tech, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-xl transition duration-300">
                
                {/* Icon */}
                <div className="text-4xl mb-3">
                  {tech.icon}
                </div>

                {/* Name */}
                <h3 className="text-gray-700 font-medium">
                  {tech.name}
                </h3>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Technologies;