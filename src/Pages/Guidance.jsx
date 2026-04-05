




import React from "react";
import ContactUs from "./ContactUs";
import {
  FaCheckCircle,
  FaCloud,
  FaCogs,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaQuoteLeft,
  FaDotCircle
} from "react-icons/fa";

const guidanceSections = [
  {
    title: "Digital Foundation",
    description: "Build a strong base by understanding the fundamentals and business impact of digital transformation.",
    points: ["Business Models", "Digital Strategy", "Operating Models"],
    icon: <FaCogs className="text-blue-600 text-3xl mb-3" />,
  },
  {
    title: "Technology Stack",
    description: "Select the right tools to meet your unique business requirements.",
    points: ["Tech Selection", "Tools & Platforms", "Cloud Options"],
    icon: <FaCloud className="text-blue-600 text-3xl mb-3" />,
  },
  {
    title: "Implementation Strategy",
    description: "Deliver transformation step by step without disrupting daily operations.",
    points: ["Roadmap", "Best Practices", "Risk Mitigation"],
    icon: <FaCogs className="text-blue-600 text-3xl mb-3" />,
  },
  {
    title: "Security & Compliance",
    description: "Protect sensitive data and meet industry standards.",
    points: ["Data Protection", "Compliance", "Governance"],
    icon: <FaShieldAlt className="text-blue-600 text-3xl mb-3" />,
  },
  {
    title: "Team Training",
    description: "Empower your workforce to embrace change and maximize adoption.",
    points: ["Upskilling", "Change Management", "Enablement"],
    icon: <FaUsers className="text-blue-600 text-3xl mb-3" />,
  },
  {
    title: "Success Stories",
    description: "Learn from real-world examples of successful digital transformations.",
    points: ["Case Studies", "ROI Examples", "Key Outcomes"],
    icon: <FaChartLine className="text-blue-600 text-3xl mb-3" />,
  },
];

const clientTestimonials = [
  {
    quote: "KT-Technology transformed our business completely-their solution helped us scale faster and smarter .",
    name: "Mr. Vipin",
    designation: "Medical Business Owner.",
  },
  {
    quote: "KT-Technology helped us scale our online store seamlessly-from design to performance,everything improved.",
    name: "Shivam",
    designation: "E-commerce Website Owner",
  },
  {
    quote: "KT-Technology gave my business the boost it needed-their innovation solution made growth effortless..",
    name: "Rishabh",
    designation: "Entrepreneur",
  },
];

const Guidance = () => {
  return (
    <div>
     <div className="mb-16">
        <ContactUs />
      </div>
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Intro */}
        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold text-lg">
            What's Inside the Guide
          </p>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            A comprehensive resource designed to help you navigate digital transformation
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
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {section.icon}

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {section.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm">
                  {section.description}
                </p>
              </div>

              {/* Points */}
              <ul className="space-y-2 mt-2">
                {section.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                    <FaDotCircle className="text-blue-500 text-xs" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
            What Our Clients Say
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {clientTestimonials.map((client, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <FaQuoteLeft className="text-blue-600 text-2xl mb-4" />

                <p className="text-gray-600 italic mb-4">
                  "{client.quote}"
                </p>

                <h4 className="font-semibold text-gray-800">
                  {client.name}
                </h4>

                <p className="text-gray-500 text-sm">
                  {client.designation}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
    </div>
  );
};

export default Guidance;