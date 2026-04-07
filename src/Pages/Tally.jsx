





import React from "react";
import {
  FaFileInvoiceDollar,
  FaChartBar,
  FaShieldAlt,
  FaCalculator,
  FaReceipt,
  FaChartLine,
  FaDatabase,
  FaCheckCircle
} from "react-icons/fa";

const Tally = () => {
  return (
   <div className="pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 md:px-10 lg:px-20 pb-16 sm:pb-20 bg-gray-50">

      {/* Header */}
      <div className="text-center mb-10 md:mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">Tally</h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Complete accounting and financial management solution to handle your business finances efficiently.
        </p>
      </div>

      {/* Core Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          {
            title: "GST Management",
            icon: <FaFileInvoiceDollar className="text-blue-600 text-3xl mb-3" />
          },
          {
            title: "Reports & Analytics",
            icon: <FaChartBar className="text-blue-600 text-3xl mb-3" />
          },
          {
            title: "Data Security",
            icon: <FaShieldAlt className="text-blue-600 text-3xl mb-3" />
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition"
          >
            {item.icon}
            <h3 className="text-blue-600 font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-2">
              Manage finances with ease and accuracy.
            </p>
          </div>
        ))}
      </div>

      {/* About Tally */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          What is Tally?
        </h2>
        <p className="text-gray-600">
          Tally is a powerful accounting software designed to manage financial transactions, GST compliance,
          inventory, and reporting. It helps businesses maintain accurate records and make informed financial decisions.
        </p>
      </div>

      {/* Advanced Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-10 text-blue-900">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <FaCalculator />, title: "Accounting Management" },
            { icon: <FaReceipt />, title: "GST Filing & Billing" },
            { icon: <FaChartLine />, title: "Financial Reports" },
            { icon: <FaDatabase />, title: "Data Backup & Storage" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="text-blue-600 text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2">
                Powerful tools to manage your accounting and financial data efficiently.
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
            "Accurate financial tracking",
            "Easy GST compliance",
            "Real-time reporting",
            "Secure data management",
            "Saves time and effort"
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
          Why Choose Tally?
        </h2>
        <ul className="text-gray-600 space-y-3">
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Easy to use interface
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Reliable & accurate system
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Secure financial data
          </li>
          <li className="flex justify-center items-center gap-2">
            <FaCheckCircle className="text-blue-600" /> Ideal for all business sizes
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Tally;