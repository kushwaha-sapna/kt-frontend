




import React from "react";
import {
  FaMoneyCheckAlt,
  FaUserClock,
  FaUsers,
  FaUserTie,
  FaCalendarCheck,
  FaChartLine,
  FaFileInvoiceDollar,
  FaClipboardList,
  FaCheckCircle
} from "react-icons/fa";

const HRMS = () => {
  return (
    <div className="pt-24 px-6 md:px-20 bg-gray-50 pb-20">

      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">
          HRMS Solution
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Manage employees, payroll, attendance, and HR operations — all in one smart system.
        </p>
      </div>

      {/* Core Features */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { title: "Payroll", icon: <FaMoneyCheckAlt className="text-blue-600 text-3xl mb-3" /> },
          { title: "Attendance", icon: <FaUserClock className="text-blue-600 text-3xl mb-3" /> },
          { title: "Employee Records", icon: <FaUsers className="text-blue-600 text-3xl mb-3" /> }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg transition">
            {item.icon}
            <h3 className="text-blue-600 font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-2">
              Simplify HR operations and improve efficiency.
            </p>
          </div>
        ))}
      </div>

      {/* About HRMS */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          What is HRMS?
        </h2>
        <p className="text-gray-600">
          HRMS (Human Resource Management System) is a complete solution designed to automate and streamline all HR activities.
          From hiring to payroll and performance tracking, everything is managed efficiently in one platform.
        </p>
      </div>

      {/* Advanced Features */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-10 text-blue-900">
          Advanced Features
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <FaUserTie />, title: "Employee Management" },
            { icon: <FaCalendarCheck />, title: "Leave Management" },
            { icon: <FaChartLine />, title: "Performance Tracking" },
            { icon: <FaFileInvoiceDollar />, title: "Salary & Payslips" },
            { icon: <FaClipboardList />, title: "Task & Workflow Management" },
            { icon: <FaUsers />, title: "Team Management" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="text-blue-600 text-2xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-2">
                Smart tools to manage HR tasks efficiently and accurately.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-6 text-blue-900">
          Benefits of HRMS
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            "Automates HR processes",
            "Reduces paperwork",
            "Improves employee productivity",
            "Accurate payroll management",
            "Better decision making"
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

      {/* Closing Section */}
      <div className="text-center max-w-xl mx-auto">
        <p className="text-gray-600">
          Automate HR workflows, reduce manual effort, and focus more on employee growth and productivity with our powerful HRMS solution.
        </p>
      </div>

    </div>
  );
};

export default HRMS;