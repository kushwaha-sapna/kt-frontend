










import React from "react";
import {
  FaProjectDiagram,
  FaPlug,
  FaExpandArrowsAlt,
  FaCogs,
  FaLayerGroup,
  FaDatabase,
  FaRocket,
  FaCheckCircle
} from "react-icons/fa";

const NoSky = () => {
  return (
    <div className="pt-24 px-6 md:px-20 pb-20 bg-gray-50">

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-blue-900">No Sky</h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Custom-built business software solutions designed to match your exact requirements and scale with your growth.
        </p>
      </div>

      {/* Core Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          {
            title: "Custom Workflows",
            icon: <FaProjectDiagram className="text-blue-600 text-3xl mb-3" />
          },
          {
            title: "Integration",
            icon: <FaPlug className="text-blue-600 text-3xl mb-3" />
          },
          {
            title: "Scalability",
            icon: <FaExpandArrowsAlt className="text-blue-600 text-3xl mb-3" />
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition"
          >
            {item.icon}
            <h3 className="text-blue-600 font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-2">
              Flexible tools designed specifically for your business needs.
            </p>
          </div>
        ))}
      </div>

      {/* About NoSky */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          What is No Sky?
        </h2>
        <p className="text-gray-600">
          No Sky is a custom software development solution that helps businesses build tailored systems based on their unique processes.
          Instead of adjusting your business to software, we build software that fits your business perfectly.
        </p>
      </div>

      {/* Advanced Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-10 text-blue-900">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaCogs />, title: "Fully Customizable" },
            { icon: <FaLayerGroup />, title: "Modular Design" },
            { icon: <FaDatabase />, title: "Data Management" },
            { icon: <FaPlug />, title: "Third-Party Integration" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="text-blue-600 text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2">
                Build scalable and efficient solutions tailored to your workflow.
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
            "Tailored to your business",
            "Improves efficiency",
            "Scalable architecture",
            "Seamless integrations",
            "Future-ready solutions"
          ].map((text, i) => (
            <div
              key={i}
              className="bg-white px-5 py-2 rounded-full shadow flex items-center gap-2"
            >
              <FaRocket className="text-blue-600" />
              <span className="text-gray-600 text-sm">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">
          Why Choose No Sky?
        </h2>
        <ul className="text-gray-600 space-y-3">
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> 100% Custom Solutions
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Scalable & Flexible
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Expert Development Team
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Ongoing Support & Updates
          </li>
        </ul>
      </div>

    </div>
  );
};

export default NoSky;