




import React from "react";
import {
  FaShieldAlt,
  FaNetworkWired,
  FaBug,
  FaEye,
  FaDatabase,
  FaEnvelope,
  FaUserShield,
  FaHeartbeat,
  FaMoneyBillWave,
  FaBook,
  FaLandmark,
  FaShoppingCart,
  FaBriefcase,
  FaCar,
  FaHotel,
  FaTruck,
  FaHome,
  FaIndustry,
  FaLaptop,
  FaCheckCircle
} from "react-icons/fa";

const Security = () => {

  const services = [
    {
      icon: <FaNetworkWired />,
      title: "Network Security",
      desc: "Prevent unauthorized access with advanced network protection.",
      points: [
        "Advanced Firewall Configuration",
        "Intrusion Detection Systems",
        "Network Traffic Analysis",
        "VPN Setup & Management"
      ]
    },
    {
      icon: <FaBug />,
      title: "Vulnerability Assessment",
      desc: "Identify and fix security weaknesses in your systems.",
      points: [
        "Penetration Testing",
        "Code Security Review",
        "Infrastructure Scanning",
        "Compliance Assessment"
      ]
    },
    {
      icon: <FaEye />,
      title: "Security Monitoring",
      desc: "24/7 monitoring with real-time threat detection.",
      points: [
        "Real-time Monitoring",
        "Threat Intelligence",
        "Incident Response",
        "Security Analytics"
      ]
    },
    {
      icon: <FaDatabase />,
      title: "Data Protection",
      desc: "Secure your sensitive data with advanced protection.",
      points: [
        "Data Encryption",
        "Backup & Recovery",
        "DLP Solutions",
        "Access Control"
      ]
    },
    {
      icon: <FaEnvelope />,
      title: "Email Security",
      desc: "Protect communication from phishing and spam attacks.",
      points: [
        "Anti-Phishing Protection",
        "Email Encryption",
        "Spam Filtering",
        "Email Archiving"
      ]
    },
    {
      icon: <FaUserShield />,
      title: "Security Training",
      desc: "Educate employees to prevent cyber threats.",
      points: [
        "Security Awareness Training",
        "Phishing Simulation",
        "Policy Development",
        "Compliance Training"
      ]
    }
  ];

  const industries = [
    { name: "Healthcare", icon: <FaHeartbeat className="text-cyan-600 text-4xl mb-2" /> },
    { name: "Finance", icon: <FaMoneyBillWave className="text-cyan-600 text-4xl mb-2" /> },
    { name: "Education", icon: <FaBook className="text-cyan-600 text-4xl mb-2" /> },
    { name: "Government", icon: <FaLandmark className="text-cyan-600 text-4xl mb-2" /> },
    { name: "Retail", icon: <FaShoppingCart className="text-cyan-600 text-4xl mb-2" /> },
    { name: "Corporate", icon: <FaBriefcase className="text-cyan-600 text-4xl mb-2" /> },
    { name: "Automotive", icon: <FaCar className="text-cyan-600 text-4xl mb-2" /> },
    { name: "Hospitality", icon: <FaHotel className="text-cyan-600 text-4xl mb-2" /> },
    { name: "Logistics", icon: <FaTruck className="text-cyan-600 text-4xl mb-2" /> },
    { name: "Residential", icon: <FaHome className="text-cyan-600 text-4xl mb-2" /> },
    { name: "Manufacturing", icon: <FaIndustry className="text-cyan-600 text-4xl mb-2" /> },
    { name: "Technology", icon: <FaLaptop className="text-cyan-600 text-4xl mb-2" /> },
  ];

  return (
    <div className="pt-22 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cyber Security
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Protect your digital assets with comprehensive cybersecurity solutions
            including advanced threat detection, prevention, and incident response.
          </p>
        </div>

        {/* SERVICES */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Security Services
          </h2>
          <p className="text-gray-500 mt-2">
            Comprehensive protection for your digital infrastructure
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
                    <FaCheckCircle className="text-cyan-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* THREATS */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Common Cyber Threats
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Malware & Ransomware",
              "Phishing Attacks",
              "Insider Threats",
              "DDoS Attacks"
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
            Our Protection Features
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Real-time Protection",
              "AI-Powered Detection",
              "Cloud Security",
              "Mobile Security",
              "Zero Trust Architecture",
              "Compliance Ready"
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow text-center">
                <p className="font-semibold text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 text-center">
          {[
            ["99.9%", "Uptime Guarantee"],
            ["24/7", "Security Monitoring"],
            ["500+", "Protected Clients"],
            ["<5min", "Incident Response"]
          ].map((item, index) => (
            <div key={index} className="bg-cyan-600 text-white p-6 rounded-xl">
              <h3 className="text-2xl font-bold">{item[0]}</h3>
              <p className="text-sm">{item[1]}</p>
            </div>
          ))}
        </div>

        {/* PROCESS */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Our Security Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              ["1", "Assessment"],
              ["2", "Strategy"],
              ["3", "Implementation"],
              ["4", "Monitoring"]
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-cyan-600 text-2xl font-bold mb-2">
                  {step[0]}
                </div>
                <h3 className="font-semibold">{step[1]}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* INDUSTRIES */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Industries We Protect
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            {industries.map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300">
                {item.icon}
                <p className="mt-2 font-semibold text-gray-700">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Security;