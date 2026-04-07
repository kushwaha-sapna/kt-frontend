import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaLock,
  FaBug,
  FaNetworkWired,
  FaDatabase,
  FaUserShield,
  FaEye
} from "react-icons/fa";

const Cybersecurity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
    <div className="flex flex-col min-h-screen pt-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 bg-gradient-to-b from-gray-50 to-white">
      

      {/* Main Content */}
      <div className="flex-1">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Cybersecurity Services
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Protect your systems, data, and digital infrastructure with advanced,
            enterprise-level cybersecurity solutions. We help you prevent, detect,
            and respond to modern cyber threats with confidence.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* Card 1 */}
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <FaNetworkWired className="text-blue-500 text-3xl mb-3" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              Network Security
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Protect your infrastructure with advanced firewalls, intrusion detection systems,
              and real-time monitoring to prevent unauthorized access.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <FaDatabase className="text-purple-500 text-3xl mb-3" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              Data Protection
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Ensure complete data safety using encryption, secure backups, access control,
              and advanced data protection strategies.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <FaBug className="text-red-500 text-3xl mb-3" />
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              Risk Assessment
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Identify vulnerabilities, detect weak points, and strengthen your system with
              expert security audits and penetration testing.
            </p>
          </div>

        </div>

        {/* Extra Added Section */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-6 text-center">

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <FaShieldAlt className="text-green-500 text-3xl mx-auto mb-3" />
            <h4 className="font-semibold">24/7 Protection</h4>
            <p className="text-gray-600 text-sm mt-2">
              Continuous monitoring to keep your systems secure all the time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <FaUserShield className="text-blue-500 text-3xl mx-auto mb-3" />
            <h4 className="font-semibold">Identity Security</h4>
            <p className="text-gray-600 text-sm mt-2">
              Protect user accounts, credentials, and sensitive information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <FaEye className="text-purple-500 text-3xl mx-auto mb-3" />
            <h4 className="font-semibold">Threat Detection</h4>
            <p className="text-gray-600 text-sm mt-2">
              Advanced tools to detect and respond to cyber threats in real-time.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 bg-blue-600 text-white text-center py-8 md:py-10 rounded-xl">

          <h2 className="text-xl md:text-3xl font-bold mb-4">
            Secure Your Business Today
          </h2>

          <p className="mb-6 text-sm md:text-base">
            Don’t wait for a cyber attack — protect your business with proactive security solutions.
          </p>

          <Link
            to="/contact-us"
            className="bg-white text-blue-600 px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Cybersecurity;