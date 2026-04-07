
import React from "react";
import {
  FaDesktop,
  FaShieldAlt,
  FaTachometerAlt,
  FaCloud,
  FaLock,
  FaUsers,
  FaGlobe,
  FaCheckCircle
} from "react-icons/fa";

const TSPlus = () => {
  return (
    <div className="pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-10 lg:px-20 pb-16 sm:pb-20 bg-gray-50">

      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <h1 className="text-5xl font-bold text-blue-900">TS Plus</h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Secure remote access and powerful business tools to help you work from anywhere efficiently.
        </p>
      </div>

      {/* Core Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          {
            title: "Remote Access",
            icon: <FaDesktop className="text-blue-600 text-3xl mb-3" />
          },
          {
            title: "Security",
            icon: <FaShieldAlt className="text-blue-600 text-3xl mb-3" />
          },
          {
            title: "Performance",
            icon: <FaTachometerAlt className="text-blue-600 text-3xl mb-3" />
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition"
          >
            {item.icon}
            <h3 className="text-blue-600 font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-2">
              Work from anywhere with secure and fast infrastructure.
            </p>
          </div>
        ))}
      </div>

      {/* About TSPlus */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          What is TS Plus?
        </h2>
        <p className="text-gray-600">
          TS Plus is a remote access solution that allows businesses to access their applications and data securely from anywhere.
          It helps organizations improve productivity while maintaining high security and performance standards.
        </p>
      </div>

      {/* Advanced Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-10 text-blue-900">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaCloud />, title: "Cloud Access" },
            { icon: <FaLock />, title: "Data Security" },
            { icon: <FaUsers />, title: "Multi-User Support" },
            { icon: <FaGlobe />, title: "Access Anywhere" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="text-blue-600 text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2">
                Reliable and efficient remote access solutions for your business.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">
          Benefits
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Work from anywhere",
            "Secure data access",
            "Cost-effective solution",
            "Improved productivity",
            "Easy deployment"
          ].map((text, i) => (
            <div
              key={i}
              className="bg-white px-5 py-2 rounded-full shadow flex items-center gap-2"
            >
              <FaCheckCircle className="text-blue-600" />
              <span className="text-gray-600 text-sm">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">
          Why Choose TS Plus?
        </h2>
        <ul className="text-gray-600 space-y-3">
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Easy to use interface
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> High-level security
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Fast performance
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Reliable support
          </li>
        </ul>
      </div>

    </div>
  );
};

export default TSPlus;