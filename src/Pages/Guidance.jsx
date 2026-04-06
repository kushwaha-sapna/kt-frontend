






import React from "react";
import ContactUs from "./ContactUs";
import {
  FaCloud,
  FaCogs,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaQuoteLeft,
  FaCheckCircle
} from "react-icons/fa";

const guidanceSections = [
  {
    title: "Digital Foundation",
    description:
      "Build a strong base by understanding the fundamentals and business impact of digital transformation.",
    points: ["Business Models", "Digital Strategy", "Operating Models"],
    icon: <FaCogs />,
  },
  {
    title: "Technology Stack",
    description:
      "Select the right tools to meet your unique business requirements.",
    points: ["Tech Selection", "Tools & Platforms", "Cloud Options"],
    icon: <FaCloud />,
  },
  {
    title: "Implementation Strategy",
    description:
      "Deliver transformation step by step without disrupting daily operations.",
    points: ["Roadmap", "Best Practices", "Risk Mitigation"],
    icon: <FaCogs />,
  },
  {
    title: "Security & Compliance",
    description:
      "Protect sensitive data and meet industry standards.",
    points: ["Data Protection", "Compliance", "Governance"],
    icon: <FaShieldAlt />,
  },
  {
    title: "Team Training",
    description:
      "Empower your workforce to embrace change and maximize adoption.",
    points: ["Upskilling", "Change Management", "Enablement"],
    icon: <FaUsers />,
  },
  {
    title: "Success Stories",
    description:
      "Learn from real-world examples of successful digital transformations.",
    points: ["Case Studies", "ROI Examples", "Key Outcomes"],
    icon: <FaChartLine />,
  },
];

const clientTestimonials = [
  {
    quote:
      "KT-Technology transformed our business completely — their solution helped us scale faster and smarter.",
    name: "Mr. Vipin",
    designation: "Medical Business Owner",
  },
  {
    quote:
      "KT-Technology helped us scale our online store seamlessly — from design to performance, everything improved.",
    name: "Shivam",
    designation: "E-commerce Website Owner",
  },
  {
    quote:
      "KT-Technology gave my business the boost it needed — their innovative solution made growth effortless.",
    name: "Rishabh",
    designation: "Entrepreneur",
  },
];

const Guidance = () => {
  return (
    <div >
      
      

      {/* Attractive Background */}
      <section className="relative overflow-hidden py-20 px-6 md:px-12 bg-gradient-to-br from-slate-900 via-blue-800 to-cyan-800 ">

        {/* Glow Effects */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-400 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Intro */}
          <div className="text-center mb-12">
            <p className="text-cyan-300 font-semibold text-lg">
              What's Inside the Guide
            </p>
            <p className="text-gray-200 mt-2 max-w-2xl mx-auto">
              A comprehensive resource designed to help you navigate digital transformation
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-14">
            Guidance by <span className="text-cyan-300">KT Technology</span>
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {guidanceSections.map((section, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-7 rounded-2xl border border-white/20 
                shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-3 
                transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center">

                  {/* Icon */}
                  <div className="bg-cyan-400 text-slate-900 p-4 rounded-full mb-4 text-2xl 
                  group-hover:scale-110 transition">
                    {section.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {section.title}
                  </h3>

                  <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                    {section.description}
                  </p>
                </div>

                {/* Points */}
                <ul className="space-y-2 mt-3">
                  {section.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-200 text-sm"
                    >
                      <FaCheckCircle className="text-cyan-300 text-sm" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mt-24">
            <h3 className="text-3xl font-bold text-center text-white mb-12">
              What Our Clients Say
            </h3>

            <div className="grid md:grid-cols-3 gap-10">
              {clientTestimonials.map((client, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md p-7 rounded-2xl border border-white/20 
                  shadow-lg hover:shadow-blue-400/20 hover:-translate-y-2 
                  transition-all duration-300 relative"
                >
                  <FaQuoteLeft className="text-cyan-300 text-3xl absolute top-5 left-5 opacity-30" />

                  <p className="text-gray-200 italic mb-6 relative z-10">
                    "{client.quote}"
                  </p>

                  <h4 className="font-semibold text-white">
                    {client.name}
                  </h4>

                  <p className="text-gray-300 text-sm">
                    {client.designation}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      <div className="mb-16">
        <ContactUs/>
      </div>
    </div>
  );
};

export default Guidance;