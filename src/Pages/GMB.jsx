




import React, { useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaChartLine,
  FaSearchLocation,
  FaUsers,
  FaBullhorn,
  FaCheckCircle
} from "react-icons/fa";

const GMB = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <FaMapMarkerAlt className="text-blue-600 text-3xl mb-3" />,
      title: "Visibility",
      desc: "Increase your business visibility on Google Search and Maps."
    },
    {
      icon: <FaStar className="text-yellow-500 text-3xl mb-3" />,
      title: "Reviews",
      desc: "Build trust with positive customer reviews and ratings."
    },
    {
      icon: <FaChartLine className="text-green-500 text-3xl mb-3" />,
      title: "Insights",
      desc: "Track performance and understand customer behavior."
    }
  ];

  return (
    <div className="pt-10 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-gray-50 to-white min-h-screen">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Google My Business
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Improve your local presence and attract more customers with optimized Google Business profiles.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              {item.icon}

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            What is Google My Business?
          </h2>
          <p className="text-gray-600">
            Google My Business (GMB) is a powerful tool that helps your business appear in local search results and Google Maps.
            It allows you to showcase your services, connect with customers, and build trust through reviews and ratings.
          </p>
        </div>

        {/* Advanced Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-10 text-gray-900">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaSearchLocation />, title: "Local SEO Optimization" },
              { icon: <FaUsers />, title: "Customer Engagement" },
              { icon: <FaBullhorn />, title: "Business Promotion" }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
              >
                <div className="text-blue-600 text-2xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2">
                  Optimize your presence and reach more local customers effectively.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Benefits
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Increase local visibility",
              "Build customer trust",
              "Get more leads",
              "Improve SEO ranking",
              "Grow your business"
            ].map((text, i) => (
              <div
                key={i}
                className="bg-white px-5 py-2 rounded-full shadow flex items-center gap-2"
              >
                <FaCheckCircle className="text-blue-600" />
                <span className="text-gray-600 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our GMB Services?
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Profile optimization by experts
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Better ranking on Google Maps
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Review management support
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-blue-600" />
                Continuous performance tracking
              </li>
            </ul>
          </div>

          {/* Right Box */}
          <div className="bg-blue-100 p-8 rounded-2xl text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Boost Your Local Presence
            </h3>

            <p className="text-gray-600">
              Get discovered by more customers and grow your business locally with our GMB expertise.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default GMB;