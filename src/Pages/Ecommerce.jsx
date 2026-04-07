import React from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaMobileAlt,
  FaLock,
  FaCheckCircle,
  FaRocket,
  FaChartLine,
  FaUsers,
  FaCreditCard
} from "react-icons/fa";

const Ecommerce = () => {
  return (
    <div className="flex flex-col min-h-[100vh] pt-24 md:pt-20 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-gray-50 to-white">

      <div className="flex-1 max-w-6xl mx-auto w-full">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          E-commerce Development Services
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-10 md:mb-12 text-sm md:text-base">
          We build powerful, scalable, and user-friendly eCommerce websites that help businesses grow online.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all text-center">
            <FaShoppingCart className="text-blue-600 text-3xl md:text-4xl mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Custom Store Development
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Fully customized eCommerce platforms designed for your business.
            </p>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all text-center">
            <FaMobileAlt className="text-green-600 text-3xl md:text-4xl mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Mobile Responsive
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Optimized for all devices for smooth shopping experience.
            </p>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all text-center">
            <FaLock className="text-purple-600 text-3xl md:text-4xl mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Secure & Scalable
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Advanced security with scalable architecture.
            </p>
          </div>

        </div>

        {/* NEW SECTION - Features */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Advanced Features We Provide
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-5 rounded-xl shadow-md text-center">
              <FaRocket className="text-red-500 text-3xl mx-auto mb-3" />
              <p className="font-semibold">Lightning Fast Performance</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md text-center">
              <FaUsers className="text-indigo-500 text-3xl mx-auto mb-3" />
              <p className="font-semibold">User-Friendly UI/UX</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md text-center">
              <FaCreditCard className="text-green-500 text-3xl mx-auto mb-3" />
              <p className="font-semibold">Secure Payment Integration</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-md text-center">
              <FaChartLine className="text-blue-500 text-3xl mx-auto mb-3" />
              <p className="font-semibold">Sales Analytics Dashboard</p>
            </div>

          </div>
        </div>

        {/* Extra Section */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-8 items-center">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Our eCommerce Solutions?
            </h2>

            <p className="text-gray-600 mb-4 text-sm md:text-base">
              We combine modern technology with business strategy to create high-performing platforms.
            </p>

            <ul className="space-y-3 text-gray-600 text-sm md:text-base">
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
                Easy product management
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500 text-sm" />
                Scalable and future-ready
              </li>
            </ul>
          </div>

          <div className="bg-blue-100 p-6 md:p-8 rounded-2xl text-center">
            <h3 className="text-xl font-semibold mb-3">
              Ready to Launch Your Store?
            </h3>

            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Let’s build a powerful eCommerce website that grows your business.
            </p>

            <Link
              to="/contact-us"
              className="bg-blue-600 text-white px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition inline-block"
            >
              Get Started
            </Link>
          </div>

        </div>

        {/* NEW CTA SECTION */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center p-10 rounded-3xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Start Your Online Business Today 🚀
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Transform your idea into a powerful online store with our expert eCommerce solutions.
          </p>

          <Link
            to="/contact-us"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition inline-block"
          >
            Book a Free Consultation
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Ecommerce;