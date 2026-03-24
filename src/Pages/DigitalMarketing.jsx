import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBullhorn, FaSearchDollar, FaChartLine } from "react-icons/fa";

const DigitalMarketing = () => {
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div className="pt-30 px-4 md:px-16 lg:px-28 bg-gray-900 text-white min-h-screen">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Digital Marketing Services
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Grow your brand, reach the right audience, and boost your business
            with data-driven digital marketing strategies.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300">
            <FaBullhorn className="text-cyan-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Social Media Marketing
            </h3>
            <p className="text-gray-400">
              Build your brand presence and engage your audience across all major social platforms.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-green-400 hover:shadow-[0_0_20px_rgba(74,222,128,0.4)] transition-all duration-300">
            <FaSearchDollar className="text-green-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              SEO Optimization
            </h3>
            <p className="text-gray-400">
              Improve your search engine rankings and drive organic traffic to your website.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-pink-400 hover:shadow-[0_0_20px_rgba(244,114,182,0.4)] transition-all duration-300">
            <FaChartLine className="text-pink-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Performance Marketing
            </h3>
            <p className="text-gray-400">
              Data-driven campaigns that maximize ROI and deliver measurable results.
            </p>
          </div>

        </div>

        {/* Growth Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Drive Growth with Smart Strategies
            </h2>
            <p className="text-gray-400 mb-4">
              We combine creativity with analytics to deliver campaigns that
              convert visitors into loyal customers.
            </p>

            <ul className="space-y-2 text-gray-300">
              <li>✔ Targeted audience reach</li>
              <li>✔ Data-driven decisions</li>
              <li>✔ Increased brand visibility</li>
              <li>✔ Higher conversion rates</li>
            </ul>
          </div>

          {/* Right Box */}
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-8 rounded-2xl text-center shadow-lg">
            <h3 className="text-xl font-semibold mb-3">
              Start Growing Today 🚀
            </h3>
            <p className="mb-6">
              Let’s create powerful marketing campaigns that deliver real results.
            </p>

            <Link
              to="/contact-us"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition inline-block"
            >
              Get Started
            </Link>
          </div>

        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-center py-12 rounded-2xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Take Your Business to the Next Level
          </h2>
          <p className="mb-6 text-gray-100">
            Unlock the full potential of digital marketing with our expert team.
          </p>

          <Link
            to="/contact-us"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-block"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
};

export default DigitalMarketing;