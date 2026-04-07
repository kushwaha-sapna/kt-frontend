import React from "react";
import { Link } from "react-router-dom";
import {
  FaGamepad,
  FaMobileAlt,
  FaVrCardboard,
  FaCheckCircle
} from "react-icons/fa";

const GameApplication = () => {
  return (
    <div className="flex flex-col min-h-[100vh] pt-6 md:pt-10 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-gray-50 to-white">

      {/* Main Content */}
      <div className="flex-1 max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Game Application Development
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-10 md:mb-12">
          We create engaging, high-performance game applications designed to deliver
          immersive experiences across mobile, web, and next-gen platforms. Our focus
          is on combining creativity, storytelling, and cutting-edge technology to
          build games that users love and remember.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <FaGamepad className="text-purple-600 text-3xl md:text-4xl mb-3 md:mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              Game Design
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Creative and interactive game design with engaging UI/UX, realistic mechanics,
              and captivating gameplay that keeps players engaged for longer sessions.
            </p>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <FaMobileAlt className="text-blue-600 text-3xl md:text-4xl mb-3 md:mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              Mobile Games
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              High-performance Android and iOS games optimized for smooth animations,
              responsive controls, and seamless gameplay across all mobile devices.
            </p>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <FaVrCardboard className="text-pink-600 text-3xl md:text-4xl mb-3 md:mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              AR/VR Games
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Immersive augmented and virtual reality gaming experiences using
              cutting-edge technology to deliver realistic and interactive environments.
            </p>
          </div>

        </div>

        {/* Extra Section */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-8 md:gap-10 items-center">

          {/* Left */}
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Game Solutions?
            </h2>

            <p className="text-gray-600 mb-4 text-sm md:text-base">
              Our team combines creativity with advanced technology to build games
              that stand out in today’s competitive market. We focus on performance,
              scalability, and user engagement to ensure long-term success.
            </p>

            <ul className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Smooth performance & advanced optimization techniques
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Cross-platform compatibility (Mobile, Web & Desktop)
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Highly engaging UI/UX with addictive gameplay loops
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Scalable architecture for future updates & expansions
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Multiplayer & real-time interaction capabilities
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="bg-purple-100 p-6 md:p-8 rounded-2xl text-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
              Ready to Build Your Game?
            </h3>

            <p className="text-gray-600 mb-5 md:mb-6 text-sm md:text-base">
              Whether you have a concept, prototype, or a complete idea — we help you
              transform it into a fully functional, market-ready gaming application.
            </p>

            <Link
              to="/contact-us"
              className="bg-purple-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-purple-700 hover:scale-105 transition-all duration-300 inline-block"
            >
              Get Started
            </Link>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-10 md:py-12 rounded-2xl shadow-lg">
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            Let’s Build the Next Big Game
          </h2>

          <p className="mb-6 text-sm md:text-base max-w-2xl mx-auto">
            Partner with us to create innovative and engaging gaming experiences
            that stand out in the competitive gaming industry and captivate users
            worldwide.
          </p>

          <Link
            to="/contact-us"
            className="bg-white text-purple-600 px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-block"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
};

export default GameApplication;