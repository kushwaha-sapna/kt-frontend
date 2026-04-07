


import React from "react";
import {
  FaCalendarAlt,
  FaBell,
  FaGlobe,
  FaClock,
  FaUserCheck,
  FaMobileAlt,
  FaChartLine,
  FaCheckCircle
} from "react-icons/fa";

const BookingPortal = () => {
  return (
    <div className="pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-10 lg:px-20 pb-16 sm:pb-20 bg-gray-50">

      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
  
          Booking Portal
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Simplify and automate your online bookings with a smart and user-friendly system.
        </p>
      </div>

      {/* Core Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-12 md:mb-16">
        {[
          {
            title: "Online Booking",
            icon: <FaGlobe className="text-blue-600 text-2xl sm:text-3xl mb-3" />
          },
          {
            title: "Calendar Management",
            icon: <FaCalendarAlt className="text-blue-600 text-2xl sm:text-3xl mb-3" />
          },
          {
            title: "Notifications",
            icon: <FaBell className="text-blue-600 text-2xl sm:text-3xl mb-3" />
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-5 sm:p-6 rounded-xl shadow text-center hover:shadow-lg transition"
          >
            {item.icon}
            <h3 className="text-blue-600 font-semibold text-sm sm:text-base">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Enhance customer experience with automation.
            </p>
          </div>
        ))}
      </div>

      {/* About */}
      <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto px-2 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-blue-900">
          What is Booking Portal?
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg">
          A Booking Portal is an online system that allows customers to schedule appointments, 
          make reservations, and manage bookings easily. It helps businesses automate scheduling, 
          reduce manual work, and improve customer satisfaction.
        </p>
      </div>

      {/* Advanced Features */}
      <div className="mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 md:mb-10 text-blue-900">
          Key Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {[
            { icon: <FaClock />, title: "Real-Time Availability" },
            { icon: <FaUserCheck />, title: "Customer Management" },
            { icon: <FaMobileAlt />, title: "Mobile Friendly" },
            { icon: <FaChartLine />, title: "Booking Analytics" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 sm:p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="text-blue-600 text-xl sm:text-2xl mb-3">
                {item.icon}
              </div>
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                Smart tools to streamline booking and scheduling operations.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="text-center mb-12 md:mb-16 px-2">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-blue-900">
          Benefits
        </h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          {[
            "24/7 online booking",
            "Reduces manual work",
            "Improves customer experience",
            "Real-time scheduling",
            "Increases business efficiency"
          ].map((text, i) => (
            <div
              key={i}
              className="bg-white px-4 sm:px-5 py-2 rounded-full shadow flex items-center gap-2"
            >
              <FaCheckCircle className="text-blue-600 text-sm sm:text-base" />
              <span className="text-gray-600 text-xs sm:text-sm">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center max-w-2xl mx-auto px-2 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-blue-900">
          Why Choose Our Booking Portal?
        </h2>
        <ul className="text-gray-600 space-y-3 text-sm sm:text-base">
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Easy to use interface
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Fast & reliable system
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Secure booking process
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Customizable features
          </li>
        </ul>
      </div>

    </div>
  );
};

export default BookingPortal;