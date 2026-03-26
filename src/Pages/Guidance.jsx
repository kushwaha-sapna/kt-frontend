


import React from "react";
import { FaCheckCircle, FaCloud, FaCogs, FaShieldAlt, FaUsers, FaChartLine, FaQuoteLeft } from "react-icons/fa";

const guidanceSections = [
  {
    title: "Digital Foundation",
    description: "Build a strong base by understanding the fundamentals and business impact of digital transformation.",
    points: ["Business Models", "Digital Strategy", "Operating Models"],
    icon: <FaCogs className="text-blue-600 text-3xl mb-2 mx-auto" />,
  },
  {
    title: "Technology Stack",
    description: "Select the right tools to meet your unique business requirements.",
    points: ["Tech Selection", "Tools & Platforms", "Cloud Options"],
    icon: <FaCloud className="text-blue-600 text-3xl mb-2 mx-auto" />,
  },
  {
    title: "Implementation Strategy",
    description: "Deliver transformation step by step without disrupting daily operations.",
    points: ["Roadmap", "Best Practices", "Risk Mitigation"],
    icon: <FaCogs className="text-blue-600 text-3xl mb-2 mx-auto" />,
  },
  {
    title: "Security & Compliance",
    description: "Protect sensitive data and meet industry standards.",
    points: ["Data Protection", "Compliance", "Governance"],
    icon: <FaShieldAlt className="text-blue-600 text-3xl mb-2 mx-auto" />,
  },
  {
    title: "Team Training",
    description: "Empower your workforce to embrace change and maximize adoption.",
    points: ["Upskilling", "Change Management", "Enablement"],
    icon: <FaUsers className="text-blue-600 text-3xl mb-2 mx-auto" />,
  },
  {
    title: "Success Stories",
    description: "Learn from real-world examples of successful digital transformations.",
    points: ["Case Studies", "ROI Examples", "Key Outcomes"],
    icon: <FaChartLine className="text-blue-600 text-3xl mb-2 mx-auto" />,
  },
];

const clientTestimonials = [
  {
    quote: "KT Technology’s guidance made our digital transformation journey seamless. The structured approach helped us implement changes efficiently.",
    name: "Sarah Johnson",
    designation: "CEO, TechStart Inc.",
  },
  {
    quote: "Following KT Technology’s roadmap allowed us to improve operations without disruption. Immediate efficiency gains were visible.",
    name: "Michael Chen",
    designation: "CTO, InnovateNow",
  },
  {
    quote: "The security insights alone saved us thousands. Real-world examples made the guide highly practical.",
    name: "Emily Rodriguez",
    designation: "IT Director, SecureBase",
  },
];


const Guidance = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Intro Text */}
        <div className="text-center mb-8">
          <p className="text-lg text-blue-600 font-semibold">What's Inside the Guide</p>
          <p className="text-gray-700 mt-2 max-w-2xl mx-auto">
            A comprehensive resource designed to help you navigate the complexities of digital transformation
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Guidance by KT Technology
        </h2>

        {/* Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guidanceSections.map((section, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition"
            >
              {section.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h3>
              <p className="text-gray-600 mb-4">{section.description}</p>
              <ul className="space-y-1">
                {section.points.map((point, idx) => (
                  <li key={idx} className="flex items-center justify-center text-gray-700">
                    <FaCheckCircle className="text-green-500 mr-2" /> {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {clientTestimonials.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition"
              >
                <FaQuoteLeft className="text-blue-600 text-2xl mb-4" />
                <p className="text-gray-600 italic mb-4">"{client.quote}"</p>
                <h4 className="font-semibold text-gray-800">{client.name}</h4>
                <p className="text-gray-500 text-sm">{client.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guidance;