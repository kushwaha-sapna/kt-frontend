















import React from "react";
import { Link } from "react-router-dom";
import { FaMobileAlt, FaAndroid, FaApple, FaCheckCircle } from "react-icons/fa";

const MobileApplication = () => {
  return (
    <div className="flex flex-col min-h-screen pt-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 bg-gradient-to-b from-gray-50 to-white">
      
      {/* Container */}
      <div className="flex-1 w-full max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
          Mobile Application Development
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-10 md:mb-12 text-sm sm:text-base">
          We build powerful, scalable, and user-friendly mobile applications
          that deliver seamless experiences across Android and iOS devices.
          Our solutions are designed to help businesses grow, engage users, and
          stay ahead in the digital era with modern mobile technology.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {/* Card 1 */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <FaMobileAlt className="text-cyan-600 text-3xl md:text-4xl mb-3 md:mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              Custom App Development
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Tailored mobile applications designed to meet your business goals and user needs.
              We focus on intuitive UI, smooth performance, and scalable architecture.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <FaAndroid className="text-green-600 text-3xl md:text-4xl mb-3 md:mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              Android Apps
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              High-performance Android applications with smooth UI and optimized functionality.
              Built using latest technologies to ensure reliability and scalability.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <FaApple className="text-gray-800 text-3xl md:text-4xl mb-3 md:mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              iOS Apps
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Elegant and secure iOS applications built for performance and user experience.
              Designed with Apple standards to deliver premium quality apps.
            </p>
          </div>

        </div>

        {/* Extra Section */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Mobile Solutions?
            </h2>

            <p className="text-gray-600 mb-4 text-sm md:text-base">
              We deliver mobile apps that are fast, secure, and designed to scale
              with your business growth. Our team ensures best practices in UI/UX,
              performance optimization, and security.
            </p>

            <ul className="text-gray-600 space-y-2 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-600" />
                Cross-platform compatibility
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-600" />
                User-friendly interface
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-600" />
                High performance & speed
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-600" />
                Secure & scalable architecture
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-600" />
                Regular updates & maintenance
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-cyan-600" />
                Seamless API integration
              </li>
            </ul>
          </div>

          {/* Right Box */}
          <div className="bg-cyan-100 p-6 md:p-8 rounded-2xl text-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
              Build Your Mobile App Today
            </h3>

            <p className="text-gray-600 mb-5 md:mb-6 text-sm md:text-base">
              Let us help you transform your ideas into powerful mobile applications.
              Whether it's a startup idea or enterprise solution, we’ve got you covered.
            </p>

            <Link
              to="/contact-us"
              className="bg-cyan-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-cyan-700 hover:scale-105 transition-all duration-300 inline-block"
            >
              Get Started
            </Link>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center py-10 md:py-12 px-4 rounded-2xl shadow-lg">
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            Take Your Business Mobile
          </h2>

          <p className="mb-6 text-sm md:text-base">
            Reach more users and grow faster with our expert mobile app solutions.
            Start your digital journey with us today and unlock new opportunities.
          </p>

          <Link
            to="/contact-us"
            className="bg-white text-cyan-600 px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-block"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MobileApplication;