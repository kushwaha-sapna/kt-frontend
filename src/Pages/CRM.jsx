import React from "react";
import {
  FaUserTie,
  FaCalendarCheck,
  FaPlaneDeparture,
  FaTasks,
  FaClock,
  FaChartLine,
  FaMoneyCheckAlt,
  FaShieldAlt,
  FaRocket,
  FaChartBar,
  FaHourglassHalf,
  FaFolderOpen,
  FaLock,
  FaCheckCircle
} from "react-icons/fa";

const CRM = () => {
  return (
    <div className="pt-24 px-6 md:px-20 bg-gradient-to-br from-blue-50 to-white pb-20">

      {/* Top Heading */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-blue-900 tracking-wide">
          CRM
        </h1>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Transform Your Business with Smart CRM Solutions
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Manage your leads, employees, attendance, and business operations — all in one powerful dashboard.
          Our CRM helps you save time, increase productivity, and grow faster.
        </p>
        <p className="mt-4 text-blue-600 font-semibold">
          Simple. Secure. Scalable.
        </p>
      </div>

      {/* About CRM */}
      <div className="mb-20 max-w-4xl mx-auto text-center bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          About CRM
        </h2>
        <h3 className="text-xl font-semibold mb-3">
          What is Our CRM System?
        </h3>
        <p className="text-gray-600 mb-4">
          Our CRM (Customer Relationship Management) system is designed to simplify your daily business operations.
          From managing leads to tracking employee performance, everything is available in one place.
        </p>

        <p className="font-semibold">It is perfect for:</p>
        <ul className="text-gray-600 mt-2 space-y-1">
          <li>• Small businesses</li>
          <li>• Startups</li>
          <li>• Service providers</li>
          <li>• Growing companies</li>
        </ul>
      </div>

      {/* Key Features */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-center mb-10 text-blue-900">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaUserTie />, title: "Employee Management" },
            { icon: <FaCalendarCheck />, title: "Attendance Tracking" },
            { icon: <FaPlaneDeparture />, title: "Leave Management" },
            { icon: <FaTasks />, title: "Task Management" },
            { icon: <FaClock />, title: "Timesheets" },
            { icon: <FaChartLine />, title: "Performance Monitoring" },
            { icon: <FaMoneyCheckAlt />, title: "Payroll & Salary Slips" },
            { icon: <FaShieldAlt />, title: "Secure Dashboard" }
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
                Efficient and easy to manage with our smart CRM system.
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
            <FaRocket className="text-blue-600" /> Increase productivity
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow flex items-center gap-2">
            <FaChartBar className="text-blue-600" /> Better decision making
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow flex items-center gap-2">
            <FaHourglassHalf className="text-blue-600" /> Save time and effort
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow flex items-center gap-2">
            <FaFolderOpen className="text-blue-600" /> Organized data management
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow flex items-center gap-2">
            <FaLock className="text-blue-600" /> Secure & reliable
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
            <FaCheckCircle className="text-blue-600" /> Easy to use interface
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Customizable features
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Affordable pricing
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Dedicated support
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Fast and reliable system
          </li>
        </ul>
      </div>

    </div>
  );
};

export default CRM;