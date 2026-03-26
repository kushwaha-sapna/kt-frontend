import React, { useEffect } from "react";
import {
  FaLightbulb,
  FaEye,
  FaCode,
  FaCogs,
  FaPaintBrush,
  FaShieldAlt,
  FaTools,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    { icon: <FaCode />, name: "Web Development" },
    { icon: <FaCogs />, name: "Software Solutions" },
    { icon: <FaPaintBrush />, name: "UI/UX Design" },
    { icon: <FaShieldAlt />, name: "Cyber Security" },
    { icon: <FaHeadset />, name: "Technical Support" },
    { icon: <FaTools />, name: "Maintenance Services" },
  ];

  const features = [
    "Fresh & Innovative Ideas",
    "Client-Centric Approach",
    "Quality & Performance Focus",
    "Affordable Solutions",
    "Continuous Support",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          About KT Technology
        </h1>
        <p className="max-w-3xl mx-auto text-sm md:text-lg opacity-90">
          KT Technology is a forward-thinking digital solutions company dedicated 
          to helping businesses grow, innovate, and succeed in the modern 
          technological landscape.
        </p>
      </section>

      {/* DESCRIPTION */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
          We specialize in building scalable web applications, secure digital 
          systems, and user-focused solutions that empower businesses to stay 
          ahead in a competitive market.
        </p>
        <p className="text-gray-600 text-sm md:text-lg mt-4 leading-relaxed">
          At KT Technology, we believe technology should not just solve problems—it 
          should create opportunities and deliver real value.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="py-12 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-3">
            <FaLightbulb className="text-yellow-500 text-2xl" />
            <h2 className="text-xl font-semibold text-blue-900">
              Our Mission
            </h2>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            To deliver innovative and reliable technology solutions that help 
            businesses grow faster, work smarter, and achieve long-term success.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition">
          <div className="flex items-center gap-3 mb-3">
            <FaEye className="text-cyan-600 text-2xl" />
            <h2 className="text-xl font-semibold text-blue-900">
              Our Vision
            </h2>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            To become a trusted technology partner known for creativity, quality, 
            and excellence in digital transformation.
          </p>
        </div>

      </section>

      {/* SERVICES */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          What We Do
        </h2>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
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

      {/* WHY CHOOSE US */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
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

      {/* CTA */}
      <section className="bg-blue-900 text-white py-10 text-center px-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-3">
          Ready to build something amazing?
        </h2>
        <p className="text-sm md:text-base opacity-90">
          Let’s work together to bring your ideas to life.
        </p>
      </section>

    </div>
  );
};

export default AboutUs;