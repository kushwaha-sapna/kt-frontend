import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaClock, FaUsers } from "react-icons/fa";
// import IndustriesWeServe from "../Components/IndustriesWeServe";

const TemporaryStaffing = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-10 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-gray-50 to-white min-h-screen">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            IT Staffing Services
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT staffing solutions for your business including expert
            database design, optimization, migration, and management services.
          </p>
        </div>

        {/* 🔹 SERVICES HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Our IT Staffing Services
          </h2>
          <p className="text-gray-500 mt-2">
            Comprehensive database solutions for modern businesses
          </p>
        </div>

        {/*  SERVICES CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* TEMPORARY */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <FaClock className="text-cyan-600 text-4xl mb-4" />

            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              IT Staffing (Temporary)
            </h3>
            <p className="text-gray-500 mb-4">
              Short-term / contract based hiring
            </p>

            <p className="text-gray-600 mb-4">
              Are you looking for temporary IT staffing solutions? We excel in
              offering IT recruitment services for varied industries.
            </p>

            <ul className="text-gray-600 space-y-2">
              <li>✔ Short-Term Project-Based Hiring</li>
              <li>✔ Quick Deployment of IT Resources</li>
              <li>✔ Flexible Contract Staffing Solutions</li>
              <li>✔ Cost-Effective Workforce Management</li>
            </ul>
          </div>

          {/* PERMANENT */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <FaUsers className="text-cyan-600 text-4xl mb-4" />

            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              IT Staffing (Permanent)
            </h3>
            <p className="text-gray-500 mb-4">
              Long-term hiring
            </p>

            <p className="text-gray-600 mb-4">
              Required IT professionals who can help you drive success in your
              organization? We provide knowledgeable IT experts through an
              end-to-end recruitment process.
            </p>

            <ul className="text-gray-600 space-y-2">
              <li>✔ End-to-End Recruitment Process</li>
              <li>✔ Skilled & Pre-Screened IT Professionals</li>
              <li>✔ Culture & Role Fit Assessment</li>
              <li>✔ Long-Term Talent Acquisition Strategy</li>
            </ul>
          </div>

        </div>

        {/*  DETAIL SECTION */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          {/* TEMP DETAIL */}
          <div className="bg-gray-100 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              IT Staffing - Temporary
            </h3>
            <p className="text-gray-600 mb-4">
              Are you looking for temporary IT staffing solutions? We excel in offering IT recruitment services for varied industries.
            </p>
            <p className="text-gray-600">
              As a leading provider of IT Staffing Services, we create solutions by understanding the specific skills required and meeting your overall business standards, while utilizing smart technology to identify qualified IT professionals for various organizations.
            </p>
          </div>

          {/* GENERAL IT STAFFING */}
          <div className="bg-gray-100 p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              IT Staffing
            </h3>
            <p className="text-gray-600 mb-4">
              We provide end-to-end IT staffing services tailored to your business needs.
            </p>
            <p className="text-gray-600">
              Our approach focuses on aligning the right talent with your business goals, ensuring efficiency, productivity, and long-term success.
            </p>
          </div>

        </div>

        {/*  INDUSTRIES */}
        {/* <div className="mt-20">
          <IndustriesWeServe />
        </div> */}

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center py-12 rounded-2xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Build Your IT Team Today
          </h2>
          <p className="mb-6">
            Get the right talent at the right time with our expert IT staffing solutions.
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

export default TemporaryStaffing;