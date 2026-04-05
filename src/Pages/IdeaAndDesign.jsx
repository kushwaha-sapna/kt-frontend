




import React from "react";
import {
  FaPaintBrush,
  FaMobileAlt,
  FaGlobe,
  FaSearch,
  FaLayerGroup,
  FaPalette,
  FaCheckCircle
} from "react-icons/fa";

const IdeaAndDesign = () => {

  const services = [
    {
      icon: <FaPaintBrush />,
      title: "UI Design",
      desc: "Beautiful, intuitive interfaces that enhance user interaction and brand identity.",
      points: ["Visual Design Systems", "Component Libraries", "Responsive Layouts", "Interactive Prototypes"]
    },
    {
      icon: <FaSearch />,
      title: "UX Research",
      desc: "Data-driven insights to understand user behavior and optimize user journeys.",
      points: ["User Interviews", "Usability Testing", "Analytics Analysis", "Persona Development"]
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Design",
      desc: "Optimized mobile interfaces for seamless touch interactions.",
      points: ["iOS & Android Design", "Touch-Optimized UX", "App Store Guidelines", "Performance Optimization"]
    },
    {
      icon: <FaGlobe />,
      title: "Web Design",
      desc: "Responsive websites that work seamlessly across all devices.",
      points: ["Responsive Design", "Landing Page Design", "E-commerce UX", "Cross-browser Testing"]
    },
    {
      icon: <FaLayerGroup />,
      title: "Wireframing & Prototyping",
      desc: "Interactive prototypes to validate concepts before development.",
      points: ["Low-Fi Wireframes", "High-Fi Prototypes", "User Flow Mapping", "Interaction Design"]
    },
    {
      icon: <FaPalette />,
      title: "Brand Identity",
      desc: "Cohesive brand systems that create consistent experiences.",
      points: ["Logo Design", "Color Palettes", "Typography Systems", "Brand Guidelines"]
    }
  ];

  return (
    <div className="pt-10 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-gray-50 to-white min-h-screen">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            UI/UX Design
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Create exceptional user experiences with comprehensive UI/UX design
            solutions focused on user-centered design that drives engagement and conversion.
          </p>
        </div>

        {/* SERVICES */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Design Services
          </h2>
          <p className="text-gray-500 mt-2">
            Complete UI/UX solutions for digital products
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-cyan-600 text-3xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-3">{item.desc}</p>
              <ul className="text-gray-600 text-sm space-y-1">
                {item.points.map((p, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-cyan-600 text-sm" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CHALLENGES */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Common Design Challenges
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Poor User Experience",
              "Mobile Responsiveness",
              "Slow Loading Times",
              "Accessibility Issues"
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-xl">
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SOLUTIONS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Our Design Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "User-Centered Design",
              "Responsive Design",
              "Performance Optimized",
              "Accessibility First",
              "Data-Driven Design",
              "Brand Consistency"
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow text-center">
                <p className="font-semibold text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

       

        {/* PROCESS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center ">
            Our Design Process
          </h2> 

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              ["1", "Discovery", "Understanding your business goals"],
              ["2", "Research", "User research & analysis"],
              ["3", "Design", "Wireframes & UI creation"],
              ["4", "Testing", "Feedback & improvements"]
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-cyan-600 text-2xl font-bold mb-2">
                  {step[0]}
                </div>
                <h3 className="font-semibold mb-2">{step[1]}</h3>
                <p className="text-gray-600 text-sm">{step[2]}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default IdeaAndDesign;