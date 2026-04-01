
import React, { useEffect } from "react";
import {
  FaBoxes,
  FaChartLine,
  FaCogs,
  FaCloud,
  FaUsers,
  FaShieldAlt,
  FaCheckCircle, // Tick icon
} from "react-icons/fa";

const ERP = () => {

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 px-6 md:px-20 bg-gray-50 pb-16">

      {/* Hero */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          ERP Solution
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Transform your business with an integrated ERP system that connects
          finance, operations, HR, and inventory into one powerful platform.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          {
            icon: <FaBoxes />,
            title: "Inventory Management",
            desc: "Track stock levels, manage warehouses, and reduce losses with real-time updates.",
          },
          {
            icon: <FaChartLine />,
            title: "Financial Control",
            desc: "Automate accounting, billing, and generate accurate financial reports.",
          },
          {
            icon: <FaCogs />,
            title: "Business Automation",
            desc: "Eliminate repetitive tasks and improve workflow efficiency.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition text-center"
          >
            <div className="text-3xl text-blue-600 mb-3 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Why Choose ERP */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Why Choose Our ERP?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <FaChartLine />, text: "Real-time data insights" },
            { icon: <FaCogs />, text: "Scalable for growing businesses" },
            { icon: <FaUsers />, text: "User-friendly interface" },
            { icon: <FaCloud />, text: "Secure cloud-based system" },
            { icon: <FaBoxes />, text: "Customizable modules" },
            { icon: <FaShieldAlt />, text: "24/7 support" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-blue-50 p-5 rounded-lg text-center text-sm font-medium"
            >
              <div className="text-2xl text-blue-600 mb-2 flex justify-center">
                {item.icon}
              </div>
              {item.text}
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mb-16 grid md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Boost Efficiency & Productivity
          </h2>
          <p className="text-gray-600 mb-4">
            Our ERP helps businesses streamline operations, reduce manual work,
            and improve overall productivity with smart automation tools.
          </p>
          <p className="text-gray-600">
            With centralized data and intelligent reporting, decision-making
            becomes faster and more accurate.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <ul className="space-y-4 text-gray-600 text-sm">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Centralized Data Management
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Improved Team Collaboration
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Faster Decision Making
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Reduced Operational Costs
            </li>
          </ul>
        </div>

      </div>

     
    </div>
  );
};

export default ERP;