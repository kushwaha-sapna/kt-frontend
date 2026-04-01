

import React from "react";
import { Link } from "react-router-dom";
import { FaPenNib, FaUsers, FaLayerGroup, FaCheckCircle } from "react-icons/fa";

const UIUXDesign = () => {

  return (
    <div className="pt-30 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-white to-gray-100 min-h-screen">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            UI/UX Design Services
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We design intuitive, user-friendly, and visually stunning interfaces
            that deliver seamless digital experiences.
          </p>
        </div>

        {/* Minimal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl border hover:shadow-lg transition-all duration-300">
            <FaPenNib className="text-indigo-500 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              UI Design
            </h3>
            <p className="text-gray-600 text-sm">
              Clean and modern interfaces designed to enhance usability and visual appeal.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border hover:shadow-lg transition-all duration-300">
            <FaUsers className="text-pink-500 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              User Experience
            </h3>
            <p className="text-gray-600 text-sm">
              Research-driven UX strategies focused on improving user satisfaction and engagement.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border hover:shadow-lg transition-all duration-300">
            <FaLayerGroup className="text-purple-500 text-3xl mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Prototyping
            </h3>
            <p className="text-gray-600 text-sm">
              Interactive prototypes to visualize and test design concepts before development.
            </p>
          </div>

        </div>

        {/* Process Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Our Design Process
            </h2>

            <p className="text-gray-600 mb-4">
              We follow a user-centered design approach to ensure every product
              is intuitive, efficient, and enjoyable to use.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Research & Analysis
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Wireframing & Prototyping
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                UI Design & Testing
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Continuous Improvement
              </li>
            </ul>
          </div>

          {/* Right Mock UI Box */}
          <div className="bg-white p-6 rounded-2xl shadow-md border">
            <div className="bg-gray-100 p-4 rounded-xl mb-3"></div>
            <div className="bg-gray-200 h-3 w-3/4 rounded mb-2"></div>
            <div className="bg-gray-200 h-3 w-1/2 rounded mb-2"></div>
            <div className="bg-gray-200 h-3 w-2/3 rounded"></div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-12 rounded-2xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Design Experiences Users Love
          </h2>
          <p className="mb-6">
            Let’s craft intuitive and engaging designs for your product.
          </p>

          <Link
            to="/contact-us"
            className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 inline-block"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
};

export default UIUXDesign;