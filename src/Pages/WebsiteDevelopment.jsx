import React from "react";
import { Link } from "react-router-dom";
import { FaCode, FaLaptopCode, FaServer } from "react-icons/fa";

const WebsiteDevelopment = () => {

  return (
    <div className="pt-10 px-4 md:px-16 lg:px-28 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white min-h-screen">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Website Development
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            We build fast, responsive, and scalable websites that deliver
            seamless user experiences and powerful performance. From business
            websites to complex web applications, we create solutions that
            drive growth, engagement, and digital success.
          </p>
        </div>

        {/* Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:scale-105 transition duration-300">
            <FaCode className="text-blue-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Frontend Development
            </h3>
            <p className="text-gray-300">
              Modern UI development using React, Tailwind, and advanced web technologies.
              We focus on responsive design, clean UI, accessibility, and performance optimization
              to deliver smooth and engaging user experiences.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:scale-105 transition duration-300">
            <FaServer className="text-green-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Backend Development
            </h3>
            <p className="text-gray-300">
              Secure and scalable backend systems using Node.js, APIs, and databases.
              We ensure high security, optimized performance, authentication systems,
              and efficient data management for your applications.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:scale-105 transition duration-300">
            <FaLaptopCode className="text-purple-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Full Stack Solutions
            </h3>
            <p className="text-gray-300">
              Complete web solutions from frontend to backend with seamless integration.
              We build end-to-end systems that are scalable, maintainable, and
              designed to handle real-world business needs.
            </p>
          </div>

        </div>

        {/* Process Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Development Process
            </h2>
            <p className="text-gray-400 mb-4">
              We follow a structured and efficient approach to deliver high-quality websites.
              Our process ensures clarity, transparency, and on-time delivery.
              From planning to deployment, we focus on quality at every step.
            </p>

            <ul className="space-y-2 text-gray-300">
              <li>✔ Requirement Analysis & Planning</li>
              <li>✔ UI/UX Design & Wireframing</li>
              <li>✔ Frontend & Backend Development</li>
              <li>✔ Testing & Quality Assurance</li>
              <li>✔ Deployment & Hosting</li>
              <li>✔ Maintenance & Support</li>
            </ul>
          </div>

          {/* Right Code Box */}
          <div className="bg-black/70 p-6 rounded-2xl border border-gray-700 font-mono text-sm text-green-400">
            <p>{`<html>`}</p>
            <p className="ml-4">{`<body>`}</p>
            <p className="ml-8">{`<h1>Your Vision</h1>`}</p>
            <p className="ml-8">{`<p>Our Code</p>`}</p>
            <p className="ml-8">{`<p>Scalable • Secure • Fast</p>`}</p>
            <p className="ml-4">{`</body>`}</p>
            <p>{`</html>`}</p>
          </div>

        </div>

        {/* Added Content Section (NEW - same structure style) */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why Choose Our Web Solutions?
          </h2>

          <p className="text-gray-400 mb-6">
            We deliver modern, high-performance websites that are optimized for SEO,
            speed, and user engagement. Our solutions help businesses build strong
            digital presence and increase conversions.
          </p>

          <ul className="text-gray-300 space-y-2">
            <li>✔ Fully Responsive Design (Mobile, Tablet, Desktop)</li>
            <li>✔ SEO Optimized Structure</li>
            <li>✔ Fast Loading & Optimized Performance</li>
            <li>✔ Secure & Scalable Architecture</li>
            <li>✔ Modern UI/UX Design</li>
            <li>✔ Cross-Browser Compatibility</li>
            <li>✔ API Integration & Custom Features</li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-center py-12 rounded-2xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Build Your Website with Experts
          </h2>
          <p className="mb-6 text-gray-100">
            Transform your ideas into a powerful digital presence with our expert team.
            We design and develop websites that are fast, modern, and built for growth.
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

export default WebsiteDevelopment;