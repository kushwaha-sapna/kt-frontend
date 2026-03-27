import React, { useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from "react-icons/fa";

const ContactUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen pt-10 pb-12 px-4 md:px-16">

      {/* Heading Section (Fixed Navbar Overlap) */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-wide">
          Contact Us
        </h1>
        <div className="w-20 h-1 bg-blue-900 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg">
          Get in touch with us. We'd love to hear from you!
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">

        {/* Address */}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <FaMapMarkerAlt className="text-blue-900 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Our Address</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            No. 518, 5th floor, Tower B,<br />
            Bhutani Alphathum,<br />
            Sector 90, Noida,<br />
            Uttar Pradesh - 201305
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <FaPhoneAlt className="text-blue-900 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Phone</h3>
          <p className="text-sm text-gray-600">
            +91-8882822733
          </p>
        </div>

        {/* Email */}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <FaEnvelope className="text-blue-900 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Email</h3>
          <a
            href="mailto:info@zynextro.com"
            className="text-sm text-blue-700 hover:underline"
          >
            info@zynextro.com
          </a>
        </div>

        {/* Working Hours */}
        <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <FaClock className="text-blue-900 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Mon - Fri: 10:00 AM - 7:00 PM <br />
            Sat - Sun: 10:00 AM - 4:00 PM
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl mx-auto border border-gray-100">
        <h2 className="text-2xl font-semibold text-blue-900 mb-8 text-center">
          Send Us a Message
        </h2>

        <form className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Full Name *"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            placeholder="Email Address *"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            placeholder="Phone Number (+91-8882822733)"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Company Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Designation"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="How did you hear about us?"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Service Required *</option>
            <option>Web Development</option>
            <option>App Development</option>
            <option>Cyber Security</option>
            <option>Cloud Services</option>
          </select>

          <input
            type="text"
            placeholder="Project Budget"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Your Message *"
            rows="4"
            className="md:col-span-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            className="md:col-span-2 bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 hover:scale-[1.02] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
