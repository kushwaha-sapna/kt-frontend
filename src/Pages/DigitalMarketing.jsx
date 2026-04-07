import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBullhorn,
  FaChartLine,
  FaSearch,
  FaShareAlt,
  FaLaptopCode,
  FaPenNib
} from "react-icons/fa";

const DigitalMarketing = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-10 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-gray-50 to-white min-h-screen">

      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Digital Marketing Services
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Grow your business online with powerful digital marketing strategies including SEO,
            social media, paid ads, and content marketing that drive real results.
          </p>
        </div>

        {/* SERVICES HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Digital Marketing Services
          </h2>
          <p className="text-gray-500 mt-2">
            Complete online growth solutions for your brand
          </p>
        </div>

        {/* SERVICES CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          {/* SEO */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <FaSearch className="text-cyan-600 text-4xl mb-4" />

            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              SEO & Organic Growth
            </h3>

            <p className="text-gray-500 mb-4">
              Improve your website ranking and attract organic traffic.
            </p>

            <p className="text-gray-600 mb-4">
              We optimize your website with advanced SEO strategies to increase visibility on search engines.
            </p>

            <ul className="text-gray-600 space-y-2">
              <li>✔ Keyword Research & Optimization</li>
              <li>✔ On-Page & Off-Page SEO</li>
              <li>✔ Technical SEO</li>
              <li>✔ Traffic Growth</li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <FaShareAlt className="text-cyan-600 text-4xl mb-4" />

            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Social Media Marketing
            </h3>

            <p className="text-gray-500 mb-4">
              Build your brand presence on social platforms.
            </p>

            <p className="text-gray-600 mb-4">
              We create engaging content and run targeted campaigns on social media platforms.
            </p>

            <ul className="text-gray-600 space-y-2">
              <li>✔ Content Creation</li>
              <li>✔ Paid Ads Campaigns</li>
              <li>✔ Audience Targeting</li>
              <li>✔ Engagement Growth</li>
            </ul>
          </div>

        </div>

        {/* DETAIL SECTION */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <div className="bg-gray-100 p-8 rounded-2xl">
            <FaLaptopCode className="text-cyan-600 text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-3">
              Performance Marketing
            </h3>
            <p className="text-gray-600">
              Run high-converting ad campaigns with measurable ROI using data-driven strategies.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl">
            <FaPenNib className="text-cyan-600 text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-3">
              Content Marketing
            </h3>
            <p className="text-gray-600">
              Create engaging blogs, videos, and content that builds trust and authority.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center py-12 rounded-2xl shadow-lg">
          
          <FaBullhorn className="text-4xl mx-auto mb-4" />

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Boost Your Online Presence Today
          </h2>

          <p className="mb-6">
            Let’s grow your business with powerful digital marketing strategies.
          </p>

          <Link
            to="/contact-us"
            className="bg-white text-cyan-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-block"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
};

export default DigitalMarketing;