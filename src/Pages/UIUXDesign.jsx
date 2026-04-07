









import React from "react";
import { Link } from "react-router-dom";
import { FaPenNib, FaUsers, FaLayerGroup, FaCheckCircle } from "react-icons/fa";

const UIUXDesign = () => {
  return (
    <div className="flex flex-col min-h-[100vh] pt-22 md:pt-20 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-white to-gray-100">

      <div className="flex-1 max-w-6xl mx-auto">

        {/* Heading */}
       
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            UI/UX Design Services
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            We design intuitive, user-friendly, and visually stunning interfaces
            that deliver seamless digital experiences. Our goal is to create
            designs that not only look beautiful but also solve real user problems
            and improve engagement.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          <div className="bg-white p-5 md:p-6 rounded-2xl border hover:shadow-lg transition">
            <FaPenNib className="text-indigo-500 text-3xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">UI Design</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Clean, modern, and visually appealing interfaces crafted with
              attention to typography, colors, spacing, and accessibility to
              enhance user interaction.
            </p>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-2xl border hover:shadow-lg transition">
            <FaUsers className="text-pink-500 text-3xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">User Experience</h3>
            <p className="text-gray-600 text-sm md:text-base">
              UX strategies focused on deep user understanding, journey mapping,
              and usability optimization to increase engagement and satisfaction.
            </p>
          </div>

          <div className="bg-white p-5 md:p-6 rounded-2xl border hover:shadow-lg transition">
            <FaLayerGroup className="text-purple-500 text-3xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">Prototyping</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Interactive prototypes that help visualize concepts, test usability,
              and validate ideas before moving into full-scale development.
            </p>
          </div>

        </div>

        {/* Process Section */}
        <div className="mt-12 md:mt-20 grid md:grid-cols-2 gap-8 items-center">

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Our Design Process
            </h2>

            <p className="text-gray-600 mb-4 text-sm md:text-base">
              We follow a user-centered design approach focused on research,
              creativity, and continuous improvement to ensure the best possible
              outcomes for your product.
            </p>

            <ul className="space-y-3 text-gray-600 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Deep Research & Market Analysis
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Wireframing & Low-Fidelity Design
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                High-Fidelity UI Design & Prototyping
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                User Testing & Continuous Iteration
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                Final Optimization & Handoff
              </li>
            </ul>
          </div>

          {/* Mock Box */}
          <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border">
            <div className="bg-gray-100 p-4 rounded-xl mb-3"></div>
            <div className="bg-gray-200 h-3 w-3/4 rounded mb-2"></div>
            <div className="bg-gray-200 h-3 w-1/2 rounded mb-2"></div>
            <div className="bg-gray-200 h-3 w-2/3 rounded"></div>
            <div className="mt-4 text-sm text-gray-500">
              We design real-world layouts focusing on clarity, usability, and
              smooth user journeys across all devices.
            </div>
          </div>

        </div>

        {/* Extra Content Section */}
        <div className="mt-12 md:mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Why Choose Our UI/UX Design?
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
            We combine creativity with strategy to deliver designs that are not
            only visually stunning but also highly functional. Our designs focus
            on user psychology, conversion optimization, and modern design trends
            to ensure your product stands out in the market.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-20 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center py-10 md:py-12 rounded-2xl shadow-lg">

          <h2 className="text-xl md:text-3xl font-semibold mb-4">
            Design Experiences Users Love
          </h2>

          <p className="mb-6 text-sm md:text-base">
            Let’s craft intuitive, modern, and engaging designs that help your
            product grow and succeed in the digital world.
          </p>

          <Link
            to="/contact-us"
            className="bg-white text-indigo-600 px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:scale-105 transition inline-block"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </div>
  );
};

export default UIUXDesign;