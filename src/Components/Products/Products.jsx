// // // import React, { useState } from "react";
// // // import {
// // //   FaLightbulb,
// // //   FaShieldAlt,
// // //   FaStar,
// // //   FaHandshake,
// // //   FaUserCheck,
// // //   FaBookOpen,
// // // } from "react-icons/fa";

// // // const Products = () => {
// // //   const [currentIndex, setCurrentIndex] = useState(0);

// // //   const products = [
// // //     {
// // //       icon: <FaLightbulb />,
// // //       title: "ERP",
// // //       desc: "Streamline your business operations efficiently.",
// // //     },
// // //     {
// // //       icon: <FaShieldAlt />,
// // //       title: "CRM",
// // //       desc: "Manage customer relationships & data effectively.",
// // //     },
// // //     {
// // //       icon: <FaStar />,
// // //       title: "HRMS",
// // //       desc: "Automate HR processes and employee management.",
// // //     },
// // //     {
// // //       icon: <FaHandshake />,
// // //       title: "TS Plus",
// // //       desc: "Tools for business analysis and operations",
// // //     },
// // //     {
// // //       icon: <FaUserCheck />,
// // //       title: "No Sky",
// // //       desc: "Specialized software product for [brief purpose].",
// // //     },
// // //     {
// // //       icon: <FaBookOpen />,
// // //       title: "Tally",
// // //       desc: "Accounting & finance management made simple.",
// // //     },
// // //     {
// // //       icon: <FaBookOpen />,
// // //       title: "Booking  Portal",
// // //       desc: "Online booking system for your services.",
// // //     },
// // //     {
// // //       icon: <FaBookOpen />,
// // //       title: "Google My Business",
// // //       desc: "Boost online presence & manage reviews easily.",
// // //     },
// // //   ];

// // //   const nextSlide = () => {
// // //     if (currentIndex < products.length - 1) {
// // //       setCurrentIndex(currentIndex + 1);
// // //     }
// // //   };

// // //   const prevSlide = () => {
// // //     if (currentIndex > 0) {
// // //       setCurrentIndex(currentIndex - 1);
// // //     }
// // //   };

// // //   return (
// // //     <section className="py-16 px-6 md:px-20 bg-gray-50">

// // //       {/* Title */}
// // //       <div className="text-center mb-12">
// // //         <h2 className="text-3xl md:text-4xl font-bold mb-3">
// // //           Our Products
// // //         </h2>
// // //         <p className="text-gray-600">
// // //           We offer powerful digital products that help businesses manage, automate, and grow with ease.
// // //         </p>
// // //       </div>

// // //       {/* Desktop Grid */}
// // //       <div className="hidden md:grid grid-cols-3 gap-6">
// // //         {products.map((item, index) => (
// // //           <div
// // //             key={index}
// // //             className="bg-white p-6 rounded-xl shadow-sm text-center 
// // //             hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
// // //           >
// // //             <div className="w-10 h-10 flex items-center justify-center 
// // //             bg-[#c79b2c]/10 text-[#c79b2c] 
// // //             rounded-lg text-lg mb-3 mx-auto">
// // //               {item.icon}
// // //             </div>

// // //             <h3 className="font-semibold mb-2">
// // //               {item.title}
// // //             </h3>

// // //             <p className="text-sm text-gray-500">
// // //               {item.desc}
// // //             </p>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Mobile Slider */}
// // //       <div className="md:hidden relative mt-8">

// // //         <div className="overflow-hidden">
// // //           <div
// // //             className="flex transition-transform duration-500 ease-in-out"
// // //             style={{
// // //               transform: `translateX(-${currentIndex * 100}%)`,
// // //             }}
// // //           >
// // //             {products.map((item, index) => (
// // //               <div key={index} className="min-w-full px-2">

// // //                 <div className="bg-white p-6 rounded-xl shadow-sm text-center
// // //                 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">

// // //                   <div className="w-10 h-10 flex items-center justify-center 
// // //                   bg-[#c79b2c]/10 text-[#c79b2c] 
// // //                   rounded-lg text-lg mb-3 mx-auto">
// // //                     {item.icon}
// // //                   </div>

// // //                   <h3 className="font-semibold mb-2">
// // //                     {item.title}
// // //                   </h3>

// // //                   <p className="text-sm text-gray-500">
// // //                     {item.desc}
// // //                   </p>

// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Arrows */}
// // //         <div className="flex justify-center items-center gap-10 mt-6">

// // //           <button
// // //             onClick={prevSlide}
// // //             disabled={currentIndex === 0}
// // //             className="text-2xl text-gray-600 hover:text-[#c79b2c] 
// // //             transition-all duration-300 disabled:opacity-30"
// // //           >
// // //             ❮
// // //           </button>

// // //           <button
// // //             onClick={nextSlide}
// // //             disabled={currentIndex === products.length - 1}
// // //             className="text-2xl text-gray-600 hover:text-[#c79b2c] 
// // //             transition-all duration-300 disabled:opacity-30"
// // //           >
// // //             ❯
// // //           </button>

// // //         </div>

// // //       </div>

// // //     </section>
// // //   );
// // // };

// // // export default Products;













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