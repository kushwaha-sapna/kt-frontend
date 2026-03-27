import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

const ParmanentStaffing = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-10 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-gray-50 to-white min-h-screen">

      {/* Container */}
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          IT Staffing (Permanent)
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Long-term hiring solutions with skilled IT professionals to help your
          organization grow and scale efficiently.
        </p>

        {/* Main Card */}
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

          {/* Top Section */}
          <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
            <FiSettings className="text-cyan-600 text-4xl" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Permanent Hiring Solutions
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div>
              <p className="text-gray-600 mb-6">
                We provide experienced and pre-screened IT professionals who
                align perfectly with your company’s long-term goals. Our hiring
                process ensures quality, efficiency, and cultural fit.
              </p>

              <ul className="text-gray-600 space-y-3">
                <li>✔ End-to-End Recruitment Process</li>
                <li>✔ Skilled & Pre-Screened IT Professionals</li>
                <li>✔ Dedicated Hiring Support</li>
                <li>✔ Cultural & Technical Fit Matching</li>
              </ul>
            </div>

            {/* Right Box */}
            <div className="bg-cyan-100 p-8 rounded-2xl text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Hire the Right Talent Today
              </h3>
              <p className="text-gray-600 mb-6">
                Build a strong and reliable team with our expert permanent
                staffing solutions.
              </p>

              <Link
                to="/contact-us"
                className="bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-700 hover:scale-105 transition-all duration-300 inline-block"
              >
                Get Started
              </Link>
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center py-12 rounded-2xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Build Your Dream Team
          </h2>
          <p className="mb-6">
            Hire top IT professionals and accelerate your business growth with
            our permanent staffing services.
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

export default ParmanentStaffing;