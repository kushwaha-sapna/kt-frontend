


import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserFriends,
  FaVideo,
  FaStar,
  FaCheckCircle,
  FaHeart,
  FaChartLine
} from "react-icons/fa";

const UGC = () => {

  return (
    <div className="pt-20 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-white to-pink-50 min-h-screen">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            User Generated Content (UGC)
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Build trust and boost engagement with authentic content created by real users and creators.
          </p>
        </div>

        {/* Creator Style Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
            <FaUserFriends className="text-pink-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Creator Collaborations
            </h3>
            <p className="text-gray-600">
              Partner with influencers and creators to produce authentic and relatable content.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
            <FaVideo className="text-purple-500 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Short-form Videos
            </h3>
            <p className="text-gray-600">
              Engaging reels, TikToks, and short videos that capture attention instantly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300">
            <FaStar className="text-yellow-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              Product Reviews
            </h3>
            <p className="text-gray-600">
              Real user experiences that build trust and influence purchasing decisions.
            </p>
          </div>

        </div>

        {/* Social Proof Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Why UGC Works So Well?
            </h2>

            <p className="text-gray-600 mb-4">
              People trust people. UGC creates authentic connections that traditional marketing cannot achieve.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Builds trust & credibility
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Increases engagement
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Boosts conversions
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Cost-effective marketing
              </li>
            </ul>
          </div>

          {/* Right Social Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-pink-100 p-6 rounded-2xl text-center flex flex-col items-center gap-2">
              <FaHeart className="text-pink-500 text-2xl" />
              10K+ Likes
            </div>
            <div className="bg-purple-100 p-6 rounded-2xl text-center flex flex-col items-center gap-2">
              <FaVideo className="text-purple-500 text-2xl" />
              500+ Videos
            </div>
            <div className="bg-yellow-100 p-6 rounded-2xl text-center flex flex-col items-center gap-2">
              <FaStar className="text-yellow-500 text-2xl" />
              4.9 Rating
            </div>
            <div className="bg-blue-100 p-6 rounded-2xl text-center flex flex-col items-center gap-2">
              <FaChartLine className="text-blue-500 text-2xl" />
              High Reach
            </div>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-center py-12 rounded-3xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let Your Customers Speak for You
          </h2>
          <p className="mb-6">
            Turn real experiences into powerful marketing content.
          </p>

          <Link
            to="/contact-us"
            className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition inline-block"
          >
            Get Started
          </Link>
        </div>

      </div>
    </div>
  );
};

export default UGC;