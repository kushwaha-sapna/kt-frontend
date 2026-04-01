



import React from "react";
import { FaMoneyCheckAlt, FaUserClock, FaUsers } from "react-icons/fa";

const HRMS = () => {
  return (
    <div className="pt-24 px-6 md:px-20 bg-gray-50 pb-16">

      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold mb-4">HRMS Solution</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Manage employees, payroll, and attendance in one place.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { title: "Payroll", icon: <FaMoneyCheckAlt className="text-blue-600 text-3xl mb-3" /> },
          { title: "Attendance", icon: <FaUserClock className="text-blue-600 text-3xl mb-3" /> },
          { title: "Employee Records", icon: <FaUsers className="text-blue-600 text-3xl mb-3" /> }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
            {item.icon}
            <h3 className="text-blue-600 font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-2">
              Simplify HR operations and improve efficiency.
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mb-16">
        <p className="text-gray-600 max-w-xl mx-auto">
          Automate HR workflows and focus more on employee growth and productivity.
        </p>
      </div>

    </div>
  );
};

export default HRMS;