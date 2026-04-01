


import React from "react";
import { FaProjectDiagram, FaPlug, FaExpandArrowsAlt } from "react-icons/fa";

const NoSky = () => {
  return (
    <div className="pt-24 px-6 md:px-20 pb-16">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">No Sky</h1>
        <p className="text-gray-600 mt-3">
          Custom-built business software solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Custom Workflows", icon: <FaProjectDiagram className="text-blue-600 text-3xl mb-3" /> },
          { title: "Integration", icon: <FaPlug className="text-blue-600 text-3xl mb-3" /> },
          { title: "Scalability", icon: <FaExpandArrowsAlt className="text-blue-600 text-3xl mb-3" /> }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow text-center">
            {item.icon}
            <h3 className="text-blue-600 font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-2">
              Flexible tools designed for your needs.
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default NoSky;