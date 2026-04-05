import React, { useEffect, useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaCheckCircle,
  FaExclamationTriangle
} from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    source: '',
    service: '',
    budget: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ show: false, type: '', text: '' });

  // Backend API uses Vite proxy - no hardcoded URL visible
const API_BASE ='https://kt-technology-backend.onrender.com/api'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setMessage({ show: false });

    try {
      const response = await fetch(`${API_BASE}/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success) {
        setMessage({ show: true, type: 'success', text: data.message });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          designation: '',
          source: '',
          service: '',
          budget: '',
          message: ''
        });
      } else {
        setMessage({ show: true, type: 'error', text: data.error || 'Submission failed' });
      }
    } catch (error) {
      console.error('Submit error:', error);
      setMessage({ show: true, type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-12 px-4 md:px-16">
      {/* Heading Section */}
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
            +91-8840945936
          </p>
        </div>

      {/* Email */}
<div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl hover:-translate-y-1 transition duration-300">
  <FaEnvelope className="text-blue-900 text-3xl mx-auto mb-3" />
  <h3 className="font-semibold text-lg mb-2">Email</h3>
  <a
    href="mailto:info@zynextro.com"
    className="text-sm text-gray-600 hover:text-blue-600 transition"
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

        {message.show && (
          <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            message.type === 'success' 
              ? 'bg-green-100 border border-green-300 text-green-800' 
              : 'bg-red-100 border border-red-300 text-red-800'
          }`}>
            {message.type === 'success' ? <FaCheckCircle /> : <FaExclamationTriangle />}
            <span>{message.text}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name *"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address *"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number (+91-8882822733)"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            placeholder="Designation"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="source"
            value={formData.source}
            onChange={handleChange}
            placeholder="How did you hear about us?"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select 
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Service Required *</option>
            <option value="Web Development">Web Development</option>
            <option value="App Development">App Development</option>
            <option value="Cyber Security">Cyber Security</option>
            <option value="Cloud Services">Cloud Services</option>
          </select>

          <input
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Project Budget"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Message *"
            className="md:col-span-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`md:col-span-2 py-3 rounded-lg text-white font-medium transition duration-300 hover:scale-[1.02] ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-900 hover:bg-blue-800'
            }`}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
