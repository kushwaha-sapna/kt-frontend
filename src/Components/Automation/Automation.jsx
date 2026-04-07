import React from "react";
import { FaMicrochip, FaBolt, FaDatabase, FaLink } from "react-icons/fa";

const  Automation = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-6">
      
      {/* TOP HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Automation Solutions
        </h2>
        <p className="text-gray-400 mt-2">
          Simplify operations with smart and scalable automation
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-3xl font-bold text-gray-800 leading-tight mb-6">
            Smarter Workflows <br /> With Intelligent Systems
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            Transform your operations with advanced automation tools that reduce
            manual work, improve accuracy, and accelerate business growth.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Workflow Optimization",
              "AI-powered Assistants",
              "Customer Data Automation",
              "Real-time Insights & Analytics",
            ].map((item, i) => (
              <li key={i} className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✔</span> {item}
              </li>
            ))}
          </ul>

          
          <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition duration-300"
     >
      Explore Solution →
    </button>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid sm:grid-cols-2 gap-6">
          
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <FaMicrochip className="text-indigo-600 mb-4 text-3xl" />
            <h3 className="text-xl font-semibold mb-2">Smart Processes</h3>
            <p className="text-gray-600 text-sm">
              Automate routine operations and increase efficiency across teams.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <FaBolt className="text-yellow-500 mb-4 text-3xl" />
            <h3 className="text-xl font-semibold mb-2">AI Assistance</h3>
            <p className="text-gray-600 text-sm">
              Use intelligent systems to enhance decision-making and productivity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <FaDatabase className="text-green-600 mb-4 text-3xl" />
            <h3 className="text-xl font-semibold mb-2">Data Handling</h3>
            <p className="text-gray-600 text-sm">
              Organize, process, and analyze data automatically with precision.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <FaLink className="text-pink-500 mb-4 text-3xl" />
            <h3 className="text-xl font-semibold mb-2">System Connectivity</h3>
            <p className="text-gray-600 text-sm">
              Integrate tools and platforms seamlessly for smooth workflows.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Automation;