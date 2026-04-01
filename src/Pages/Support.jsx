

import React from "react";
import {
  FaHeadset,
  FaBug,
  FaTools,
  FaRocket,
  FaShieldAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaCheckCircle
} from "react-icons/fa";

const Support = () => {

  const supportServices = [
    { icon: <FaTools />, name: "Website & Application Support" },
    { icon: <FaBug />, name: "Bug Fixing & Issue Resolution" },
    { icon: <FaRocket />, name: "Performance Optimization" },
    { icon: <FaShieldAlt />, name: "Security Assistance" },
    { icon: <FaHeadset />, name: "Technical Consultation" },
    { icon: <FaTools />, name: "Maintenance & Updates" },
  ];

  const promises = [
    "Quick response times",
    "Effective solutions",
    "Clear communication",
    "Continuous support",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-600 text-white py-16 px-6 text-center">
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Technical Support & Customer Service
        </h1>

        <p className="max-w-3xl mx-auto text-sm md:text-lg opacity-90">
          We are here to help you with reliable solutions, quick responses,
          and expert guidance whenever you need it.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
          At KT Technology, we ensure your systems run smoothly by providing
          dedicated support for all your technical needs. Whether it's fixing
          issues, improving performance, or guiding you — we've got you covered.
        </p>
      </section>

      {/* SUPPORT SERVICES */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          How We Help
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {supportServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-3xl text-blue-900 mb-3 flex justify-center">
                {service.icon}
              </div>
              <p className="font-medium text-gray-700">{service.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR PROMISE */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Promise
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
          {promises.map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-3"
            >
              <FaCheckCircle className="text-green-500 text-xl" />
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Get in Touch
        </h2>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition cursor-pointer">
            <FaEnvelope className="text-blue-900 text-2xl mx-auto mb-2" />
            <p className="font-medium">support@kttechnology.com</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaPhoneAlt className="text-blue-900 text-2xl mx-auto mb-2" />
            <p className="font-medium">+91-XXXXXXXXXX</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaClock className="text-blue-900 text-2xl mx-auto mb-2" />
            <p className="font-medium">Mon – Sat (9 AM – 6 PM)</p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-10 text-center px-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">
          Need Immediate Help?
        </h2>
        <p className="text-sm md:text-base opacity-90">
          Contact our support team and we’ll resolve your issue as quickly as possible.
        </p>
      </section>

    </div>
  );
};

export default Support;