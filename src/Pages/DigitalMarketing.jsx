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
            social media, paid ads, and content marketing that drive real results. We focus on
            increasing visibility, generating leads, and maximizing your ROI through data-driven
            marketing approaches.
          </p>
        </div>

        {/* SERVICES HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Our Digital Marketing Services
          </h2>
          <p className="text-gray-500 mt-2">
            Complete online growth solutions for your brand with proven strategies and measurable results
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
              Improve your website ranking and attract high-quality organic traffic.
            </p>

            <p className="text-gray-600 mb-4">
              We implement advanced SEO techniques including keyword optimization, content strategy,
              and technical improvements to boost your search engine rankings and increase visibility.
            </p>

            <ul className="text-gray-600 space-y-2">
              <li>✔ Keyword Research & Competitor Analysis</li>
              <li>✔ On-Page & Off-Page SEO Optimization</li>
              <li>✔ Technical SEO & Site Performance</li>
              <li>✔ Organic Traffic & Ranking Growth</li>
              <li>✔ Link Building & Authority Building</li>
            </ul>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <FaShareAlt className="text-cyan-600 text-4xl mb-4" />

            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Social Media Marketing
            </h3>

            <p className="text-gray-500 mb-4">
              Build a strong and engaging brand presence across all social platforms.
            </p>

            <p className="text-gray-600 mb-4">
              We create high-quality content and run targeted campaigns to connect with your audience,
              increase engagement, and grow your brand community.
            </p>

            <ul className="text-gray-600 space-y-2">
              <li>✔ Content Creation & Strategy</li>
              <li>✔ Paid Ads Campaign Management</li>
              <li>✔ Audience Targeting & Analytics</li>
              <li>✔ Engagement & Brand Awareness Growth</li>
              <li>✔ Influencer & Trend Marketing</li>
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
              Run high-converting ad campaigns across Google Ads, Meta Ads, and other platforms with
              measurable ROI. Our data-driven approach ensures every rupee spent delivers maximum results.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-2xl">
            <FaPenNib className="text-cyan-600 text-3xl mb-3" />
            <h3 className="text-xl font-semibold mb-3">
              Content Marketing
            </h3>
            <p className="text-gray-600">
              Create valuable and engaging content including blogs, videos, and graphics that build
              trust, improve SEO rankings, and establish your brand authority in your industry.
            </p>
          </div>

        </div>

        {/* EXTRA SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Why Choose Our Digital Marketing?
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            We combine creativity, strategy, and analytics to deliver marketing solutions that
            drive real business growth. From startups to established brands, we help you reach
            the right audience at the right time.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-center py-12 rounded-2xl shadow-lg">
          
          <FaBullhorn className="text-4xl mx-auto mb-4" />

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Boost Your Online Presence Today
          </h2>

          <p className="mb-6 max-w-2xl mx-auto">
            Start growing your business with our expert digital marketing strategies.
            Increase traffic, generate leads, and maximize your revenue with us.
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