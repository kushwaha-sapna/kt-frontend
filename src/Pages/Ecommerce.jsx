import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaMobileAlt,
  FaLock,
  FaCheckCircle
} from "react-icons/fa";

const Ecommerce = () => {


  return (
    <div className="pt-10 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-gray-50 to-white min-h-screen">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          E-commerce Development Services
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
          We build powerful, scalable, and user-friendly eCommerce websites that help businesses grow online, attract customers, and boost sales.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <FaShoppingCart className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Custom Store Development
            </h3>
            <p className="text-gray-600">
              Fully customized eCommerce platforms designed according to your business needs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <FaMobileAlt className="text-green-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Mobile Responsive
            </h3>
            <p className="text-gray-600">
              Optimized for all devices to ensure a smooth shopping experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <FaLock className="text-purple-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Secure & Scalable
            </h3>
            <p className="text-gray-600">
              Advanced security and scalable architecture for growing businesses.
            </p>
          </div>

        </div>

        {/* Extra Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our eCommerce Solutions?
            </h2>

            <p className="text-gray-600 mb-4">
              We combine modern technology with business strategy to create high-performing eCommerce platforms.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500 text-sm" />
                Fast loading & optimized performance
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500 text-sm" />
                SEO-friendly architecture
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500 text-sm" />
                Easy product & order management
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500 text-sm" />
                Scalable and future-ready solutions
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="bg-blue-100 p-8 rounded-2xl text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Ready to Launch Your Store?
            </h3>

            <p className="text-gray-600 mb-6">
              Let’s build a powerful eCommerce website that grows your business.
            </p>

            <Link
              to="/contact-us"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300 inline-block"
            >
              Get Started
            </Link>
          </div>

        </div>

        

      </div>
    </div>
  );
};

export default Ecommerce;