import React from "react";

const ERP = () => {
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
            title: "Inventory Management",
            desc: "Track stock levels, manage warehouses, and reduce losses with real-time updates.",
          },
          {
            title: "Financial Control",
            desc: "Automate accounting, billing, and generate accurate financial reports.",
          },
          {
            title: "Business Automation",
            desc: "Eliminate repetitive tasks and improve workflow efficiency.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition"
          >
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
            "Real-time data insights",
            "Scalable for growing businesses",
            "User-friendly interface",
            "Secure cloud-based system",
            "Customizable modules",
            "24/7 support",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-blue-50 p-5 rounded-lg text-center text-sm font-medium"
            >
              {item}
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
          <ul className="space-y-3 text-gray-600 text-sm">
            <li>✔ Centralized Data Management</li>
            <li>✔ Improved Team Collaboration</li>
            <li>✔ Faster Decision Making</li>
            <li>✔ Reduced Operational Costs</li>
          </ul>
        </div>

      </div>

      {/* CTA
      <div className="text-center">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition">
          Request Demo
        </button>
      </div> */}

    </div>
  );
};

export default ERP;