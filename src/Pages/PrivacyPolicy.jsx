










import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserShield,
  FaDatabase,
  FaInfoCircle,
  FaLock,
  FaQuestionCircle,
  FaCheckCircle
} from "react-icons/fa";

const PrivacyPolicy = () => {

  const sections = [
    {
      icon: <FaUserShield />,
      title: "Our Commitment",
      content:
        "We respect your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data."
    },
    {
      icon: <FaDatabase />,
      title: "Information We Collect",
      list: [
        "Name and email address",
        "Company name and contact number",
        "Location and inquiry details"
      ]
    },
    {
      icon: <FaInfoCircle />,
      title: "Important Note",
      content:
        "Providing your information is completely optional and based on your consent."
    },
    {
      icon: <FaCheckCircle />,
      title: "How We Use Your Data",
      list: [
        "Respond to inquiries and provide consultations",
        "Improve our services and website functionality",
        "Enhance security and prevent fraud",
        "Comply with legal obligations"
      ]
    },
    {
      icon: <FaLock />,
      title: "Data Security",
      content:
        "We implement strong security measures to protect your data. We do not store sensitive financial information and ensure our team follows strict data protection practices."
    },
    {
      icon: <FaUserShield />,
      title: "Third Party Privacy",
      content:
        "We do not share your personal information with any third party."
    },
    {
      icon: <FaQuestionCircle />,
      title: "Have Questions?",
      content:
        "If you have any questions regarding our privacy policy, feel free to contact us anytime."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-10">

      {/* HERO SECTION */}
      <div className="text-center py-16 px-4 bg-gray-900">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Your privacy is our priority. Learn how we collect, use, and protect your information.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg text-xl">
                {section.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                {section.title}
              </h2>
            </div>

            {/* Content */}
            {section.content && (
              <p className="text-gray-600 text-sm leading-relaxed">
                {section.content}
              </p>
            )}

            {/* List */}
            {section.list && (
              <ul className="mt-3 space-y-2 text-gray-600 text-sm">
                {section.list.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center pb-12">
         <Link to="/contact-us">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition">
          Contact Us
        </button>
        </Link>

      </div>
    </div>
  );
};

export default PrivacyPolicy;