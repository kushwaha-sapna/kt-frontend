import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMobileAlt, FaAndroid, FaApple } from "react-icons/fa";

const MobileApplication = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div className="pt-30 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-gray-50 to-white min-h-screen">

      {/* Container */}
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Mobile Application Development
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
          We build powerful, scalable, and user-friendly mobile applications
          that deliver seamless experiences across Android and iOS devices.
        </p>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <FaMobileAlt className="text-cyan-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Custom App Development
            </h3>
            <p className="text-gray-600">
              Tailored mobile applications designed to meet your business goals and user needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <FaAndroid className="text-green-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Android Apps
            </h3>
            <p className="text-gray-600">
              High-performance Android applications with smooth UI and optimized functionality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <FaApple className="text-gray-800 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              iOS Apps
            </h3>
            <p className="text-gray-600">
              Elegant and secure iOS applications built for performance and user experience.
            </p>
          </div>

        </div>

        {/* Extra Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Mobile Solutions?
            </h2>
            <p className="text-gray-600 mb-4">
              We deliver mobile apps that are fast, secure, and designed to scale
              with your business growth.
            </p>

            <ul className="text-gray-600 space-y-2">
              <li>✔ Cross-platform compatibility</li>
              <li>✔ User-friendly interface</li>
              <li>✔ High performance & speed</li>
              <li>✔ Secure & scalable architecture</li>
            </ul>
          </div>

          {/* Right Box */}
          <div className="bg-cyan-100 p-8 rounded-2xl text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Build Your Mobile App Today
            </h3>
            <p className="text-gray-600 mb-6">
              Let us help you transform your ideas into powerful mobile applications.
            </p>

            <Link
              to="/contact-us"
              className="bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-700 hover:scale-105 transition-all duration-300 inline-block"
            >
              Get Started
            </Link>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center py-12 rounded-2xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Take Your Business Mobile
          </h2>
          <p className="mb-6">
            Reach more users and grow faster with our expert mobile app solutions.
          </p>

          <Link
            to="/contact-us"
            className="bg-white text-cyan-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-block"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MobileApplication;