// // // // // // // import React from "react";
// // // // // // // import {
// // // // // // //   FaHospital,
// // // // // // //   FaUniversity,
// // // // // // //   FaShoppingCart,
// // // // // // //   FaHome,
// // // // // // //   FaCogs,
// // // // // // //   FaBriefcase,
// // // // // // //   FaMoneyBillWave,
// // // // // // //   FaLaptop,
// // // // // // // } from "react-icons/fa";

// // // // // // // const CoreValues = () => {
// // // // // // //   const values = [
// // // // // // //     {
// // // // // // //       icon: <FaHospital />,
// // // // // // //       title: "Healthcare",
// // // // // // //       desc: "Modern digital solutions for hospitals and clinics.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: <FaMoneyBillWave />,
// // // // // // //       title: "Finance",
// // // // // // //       desc: "Secure and scalable financial technology systems.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: <FaUniversity />,
// // // // // // //       title: "Education",
// // // // // // //       desc: "Smart learning platforms and e-learning solutions.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: <FaShoppingCart />,
// // // // // // //       title: "E-commerce",
// // // // // // //       desc: "High-performance online store development.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: <FaHome />,
// // // // // // //       title: "Hospitality",
// // // // // // //       desc: "Digital systems for hotels and travel businesses.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: <FaBriefcase />,
// // // // // // //       title: "Real Estate",
// // // // // // //       desc: "Property management and listing platforms.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: <FaCogs />,
// // // // // // //       title: "Automation",
// // // // // // //       desc: "Process automation and workflow optimization.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       icon: <FaLaptop />,
// // // // // // //       title: "Consulting",
// // // // // // //       desc: "IT consulting and digital transformation services.",
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <section className="py-16 px-10 md:px-20 bg-gray-50">

// // // // // // //       {/* Section Title */}
// // // // // // //       <div className="text-center mb-12">
// // // // // // //         <h2 className="text-3xl md:text-4xl font-bold mb-3">
// // // // // // //           Industries We Serve
// // // // // // //         </h2>
// // // // // // //         <p className="text-gray-600">
// // // // // // //           Delivering tailored digital solutions across industries
// // // // // // //         </p>
// // // // // // //       </div>

// // // // // // //       {/* Cards Grid */}
// // // // // // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

// // // // // // //         {values.map((service, index) => (
// // // // // // //           <div
// // // // // // //             key={index}
// // // // // // //             className="bg-white p-6 rounded-xl 
// // // // // // //             border border-gray-100 shadow-sm 
// // // // // // //             flex flex-col items-center text-center 
// // // // // // //             hover:shadow-md transition"
// // // // // // //           >

// // // // // // //             {/* Icon */}
// // // // // // //             <div className="w-10 h-10 flex items-center justify-center 
// // // // // // //             bg-[#c79b2c]/10 text-[#c79b2c] 
// // // // // // //             rounded-lg text-lg mb-3">
// // // // // // //               {service.icon}
// // // // // // //             </div>

// // // // // // //             {/* Title */}
// // // // // // //             <h3 className="text-base font-semibold text-gray-800 mb-2">
// // // // // // //               {service.title}
// // // // // // //             </h3>

// // // // // // //             {/* Description */}
// // // // // // //             <p className="text-sm text-gray-500">
// // // // // // //               {service.desc}
// // // // // // //             </p>

// // // // // // //           </div>
// // // // // // //         ))}

// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default CoreValues;
















import React, { useState } from "react";
import {
  FaLightbulb,
  FaShieldAlt,
  FaStar,
  FaHandshake,
  FaUserCheck,
  FaBookOpen,
} from "react-icons/fa";

const CoreValues = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const values = [
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      desc: "We embrace cutting-edge technologies and creative thinking to deliver solutions that push boundaries and drive progress.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Integrity",
      desc: "We conduct business with honesty, transparency, and ethical practices, building trust with every interaction.",
    },
    {
      icon: <FaStar />,
      title: "Excellence",
      desc: "We strive for perfection in every project, maintaining the highest standards of quality and professionalism.",
    },
    {
      icon: <FaHandshake />,
      title: "Collaboration",
      desc: "We work closely with our clients and team members, fostering partnerships that lead to shared success.",
    },
    {
      icon: <FaUserCheck />,
      title: "Customer Focus",
      desc: "Our clients' success is our priority. We listen, understand, and deliver solutions that exceed expectations.",
    },
    {
      icon: <FaBookOpen />,
      title: "Continuous Learning",
      desc: "We invest in our team's growth and stay ahead of industry trends to provide the best solutions.",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < values.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Our Core Values
        </h2>
        <p className="text-gray-600">
          The principles that guide everything we do
        </p>
      </div>

      {/* ================= DESKTOP GRID ================= */}
      <div className="hidden md:grid grid-cols-3 gap-6">

        {values.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm text-center 
            hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            {/* Blue Icon */}
            <div className="w-10 h-10 flex items-center justify-center 
            bg-blue-100 text-blue-600 
            rounded-lg text-lg mb-3 mx-auto">
              {service.icon}
            </div>

            <h3 className="font-semibold mb-2">
              {service.title}
            </h3>

            <p className="text-sm text-gray-500">
              {service.desc}
            </p>
          </div>
        ))}

      </div>

      {/* ================= MOBILE SLIDER ================= */}
      <div className="md:hidden relative">

        <div className="overflow-hidden">

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {values.map((service, index) => (
              <div key={index} className="min-w-full px-2">

                <div className="bg-white p-6 rounded-xl shadow-sm 
                text-center hover:shadow-lg 
                hover:-translate-y-2 transition-all duration-300">

                  {/* Blue Icon */}
                  <div className="w-10 h-10 flex items-center justify-center 
                  bg-blue-100 text-blue-600 
                  rounded-lg text-lg mb-3 mx-auto">
                    {service.icon}
                  </div>

                  <h3 className="font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {service.desc}
                  </p>

                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Arrows */}
        <div className="flex justify-center items-center gap-12 mt-6">

          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="text-2xl text-gray-600 
            hover:text-blue-600 hover:scale-110 
            transition-all duration-300 
            disabled:opacity-30"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === values.length - 1}
            className="text-2xl text-gray-600 
            hover:text-blue-600 hover:scale-110 
            transition-all duration-300 
            disabled:opacity-30"
          >
            ❯
          </button>

        </div>

      </div>

    </section>
  );
};

export default CoreValues;