import React, { useEffect } from "react";
import {
  FaBoxes,
  FaChartLine,
  FaCogs,
  FaCloud,
  FaUsers,
  FaShieldAlt,
  FaTasks,
  FaMoneyCheckAlt,
  FaDatabase,
  FaCheckCircle,
  FaSyncAlt,
  FaRocket,
  FaLock
} from "react-icons/fa";

const ERP = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-10 lg:px-20 pb-16 sm:pb-20 bg-gray-50">

      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
       <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
  
          ERP
        </h1>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Transform Your Business with Smart ERP Solutions
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Manage your inventory, finance, HR, and operations — all in one unified platform.
          Our ERP system helps you automate processes, improve efficiency, and scale your business.
        </p>
        <p className="mt-4 text-blue-600 font-semibold">
          Integrated. Intelligent. Efficient.
        </p>
      </div>

      {/* About ERP */}
      <div className="mb-20 max-w-4xl mx-auto text-center bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          About ERP
        </h2>
        <h3 className="text-xl font-semibold mb-3">
          What is Our ERP System?
        </h3>
        <p className="text-gray-600 mb-4">
          Our ERP (Enterprise Resource Planning) system connects all your business processes into a single platform.
          It helps you manage resources, track operations, and make smarter decisions.
        </p>

        <p className="font-semibold">It is perfect for:</p>
        <ul className="text-gray-600 mt-2 space-y-1">
          <li>• Large enterprises</li>
          <li>• Manufacturing units</li>
          <li>• Retail businesses</li>
          <li>• Growing organizations</li>
        </ul>
      </div>

      {/* Key Features */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-center mb-10 text-blue-900">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaBoxes />, title: "Inventory Management" },
            { icon: <FaChartLine />, title: "Financial Tracking" },
            { icon: <FaCogs />, title: "Process Automation" },
            { icon: <FaUsers />, title: "HR Management" },
            { icon: <FaTasks />, title: "Workflow Management" },
            { icon: <FaMoneyCheckAlt />, title: "Accounting System" },
            { icon: <FaDatabase />, title: "Centralized Data" },
            { icon: <FaCloud />, title: "Cloud Based Access" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 border"
            >
              <div className="text-blue-600 text-3xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Smart and efficient module to manage business operations easily.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-20 text-center">
        <h2 className="text-2xl font-bold mb-8 text-blue-900">
          Benefits
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white px-6 py-3 rounded-full shadow flex items-center gap-2">
            <FaRocket className="text-blue-600" /> Boost productivity
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow flex items-center gap-2">
            <FaSyncAlt className="text-blue-600" /> Real-time updates
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow flex items-center gap-2">
            <FaChartLine className="text-blue-600" /> Better insights
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow flex items-center gap-2">
            <FaDatabase className="text-blue-600" /> Centralized control
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow flex items-center gap-2">
            <FaLock className="text-blue-600" /> Secure system
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">
          Why Choose Us?
        </h2>
        <ul className="text-gray-600 space-y-3">
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Easy-to-use interface
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Fully customizable system
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Scalable architecture
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Dedicated support
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Fast & reliable performance
          </li>
        </ul>
      </div>

    </div>
  );
};

export default ERP;