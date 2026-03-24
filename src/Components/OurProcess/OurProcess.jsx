import React from "react";
import {
  FaSearch,
  FaDraftingCompass,
  FaCode,
  FaBug,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const processData = [
  {
    id: "01",
    title: "Discovery & Analysis",
    desc: "Understanding your business, goals, and challenges to define project scope.",
    icon: <FaSearch />,
  },
  {
    id: "02",
    title: "Planning & Design",
    desc: "Creating detailed plans, wireframes, and designs aligned with your vision.",
    icon: <FaDraftingCompass />,
  },
  {
    id: "03",
    title: "Development",
    desc: "Building with agile methodologies, clean code, and regular updates.",
    icon: <FaCode />,
  },
  {
    id: "04",
    title: "Testing & QA",
    desc: "Rigorous testing for bug-free, secure, and optimal performance.",
    icon: <FaBug />,
  },
  {
    id: "05",
    title: "Deployment",
    desc: "Smooth deployment with minimal downtime and seamless transition.",
    icon: <FaRocket />,
  },
  {
    id: "06",
    title: "Support & Maintenance",
    desc: "Ongoing support, updates, and optimization for perfect performance.",
    icon: <FaHeadset />,
  },
];

const OurProcess = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">Our Process</h2>
        <p className="text-gray-500 mt-3">
          A proven methodology that delivers results
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* Vertical Line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-200 transform -translate-x-1/2"></div>

        {processData.map((step, index) => (
          <div
            key={step.id}
            className={`mb-12 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Content */}
            <div className="md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
                <div className="flex items-center gap-4 mb-3">
                  
                  {/* Icon */}
                  <div className="text-white bg-blue-600 p-3 rounded-full text-xl">
                    {step.icon}
                  </div>

                  {/* Step Number */}
                  <span className="text-blue-600 font-bold text-lg">
                    {step.id}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {step.desc}
                </p>
              </div>
            </div>

            {/* Empty Side */}
            <div className="hidden md:block md:w-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;