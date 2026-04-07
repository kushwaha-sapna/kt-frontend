import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaPaintBrush,
  FaPalette,
  FaPenNib,
  FaBullseye,
  FaBolt,
  FaMobileAlt,
  FaLightbulb
} from "react-icons/fa";

const GraphicDesigning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 px-4 md:px-16 lg:px-28 bg-white min-h-screen">

      <div className="max-w-6xl mx-auto">

        {/* Heading Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-transparent bg-clip-text mb-6">
            Graphic Designing Services
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your brand with visually stunning and creative designs.
            We craft unique graphics that capture attention, communicate your message clearly,
            and leave a lasting impression on your audience across all digital and print platforms.
          </p>
        </div>

        {/* Creative Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Big Card */}
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-10 rounded-3xl shadow-xl hover:scale-[1.02] transition">
            <FaPaintBrush className="text-4xl mb-4" />

            <h2 className="text-2xl font-bold mb-4">
              Creative Visual Design
            </h2>

            <p className="mb-6">
              We design eye-catching visuals that communicate your brand message
              effectively and creatively. Our designs are built to engage users,
              increase brand recall, and deliver impactful storytelling through visuals.
            </p>

            <Link
              to="/contact-us"
              className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition inline-block"
            >
              Start Project
            </Link>
          </div>

          {/* Right Cards */}
          <div className="grid gap-6">

            <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
              <FaPalette className="text-pink-500 text-3xl mb-3" />
              <h3 className="text-lg font-semibold mb-2">Brand Identity</h3>
              <p className="text-gray-600">
                Complete brand identity design including logos, typography, color palettes,
                and brand guidelines to create a strong and memorable brand presence.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
              <FaPenNib className="text-purple-500 text-3xl mb-3" />
              <h3 className="text-lg font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600">
                Modern, user-friendly interface designs for web and mobile applications
                with a focus on usability, accessibility, and smooth user experience.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition">
              <FaPaintBrush className="text-orange-400 text-3xl mb-3" />
              <h3 className="text-lg font-semibold mb-2">Marketing Creatives</h3>
              <p className="text-gray-600">
                High-converting social media posts, banners, posters, and ad creatives
                designed to boost engagement, clicks, and brand visibility.
              </p>
            </div>

          </div>

        </div>

        {/* Why Choose Us */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Why Choose Our Design Services?
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            We focus on delivering designs that are not only visually appealing but also strategically
            aligned with your business goals. Every design we create is crafted with creativity,
            precision, and user psychology in mind.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white border p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition flex flex-col items-center">
              <FaBullseye className="text-pink-500 text-2xl mb-2" />
              <p className="font-medium">Unique & Creative</p>
              <p className="text-gray-500 text-sm text-center mt-2">
                Custom designs tailored to your brand identity and audience.
              </p>
            </div>

            <div className="bg-white border p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition flex flex-col items-center">
              <FaBolt className="text-yellow-500 text-2xl mb-2" />
              <p className="font-medium">Fast Delivery</p>
              <p className="text-gray-500 text-sm text-center mt-2">
                Quick turnaround time without compromising quality.
              </p>
            </div>

            <div className="bg-white border p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition flex flex-col items-center">
              <FaMobileAlt className="text-blue-500 text-2xl mb-2" />
              <p className="font-medium">Modern Designs</p>
              <p className="text-gray-500 text-sm text-center mt-2">
                Trend-based, responsive, and visually appealing designs.
              </p>
            </div>

            <div className="bg-white border p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition flex flex-col items-center">
              <FaLightbulb className="text-purple-500 text-2xl mb-2" />
              <p className="font-medium">Client Focused</p>
              <p className="text-gray-500 text-sm text-center mt-2">
                We prioritize your vision and ensure satisfaction at every step.
              </p>
            </div>

          </div>
        </div>

        {/* Extra Content Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Our Design Philosophy
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            We believe great design is a combination of creativity, strategy, and purpose.
            Our goal is to create visuals that not only look beautiful but also drive engagement,
            build trust, and convert visitors into customers.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white text-center py-12 rounded-3xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let’s Design Something Amazing
          </h2>

          <p className="mb-6 max-w-2xl mx-auto">
            Bring your ideas to life with our creative graphic design solutions that
            elevate your brand and make it stand out in the market.
          </p>

          <Link
            to="/contact-us"
            className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:scale-105 transition inline-block"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
};

export default GraphicDesigning;