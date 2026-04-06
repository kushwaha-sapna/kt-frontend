

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

  const API_BASE = 'https://kt-technology-backend.onrender.com/api';

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
        headers: { 'Content-Type': 'application/json' },
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
      setMessage({ show: true, type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
   
  <div className="bg-gradient-to-br from-sky-100 via-blue-400 to-indigo-400 min-h-screen pt-28 pb-12 px-4 md:px-16">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
          Contact Us
        </h1>
        <div className="w-20 h-1 bg-blue-900 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-600 mt-4 text-lg">
          Get in touch with us. We'd love to hear from you!
        </p>
      </div>

      {/*  Info Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">

        {/* Address */}
        <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 text-center group">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-full w-fit mx-auto mb-4 text-2xl group-hover:scale-110 transition">
            <FaMapMarkerAlt />
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Our Address</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            
            Sector 101, Noida,<br />
            Uttar Pradesh - 201305
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 text-center group">
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white p-4 rounded-full w-fit mx-auto mb-4 text-2xl group-hover:scale-110 transition">
            <FaPhoneAlt />
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Phone</h3>
          <p className="text-sm text-gray-500">+91-8840945936</p>
        </div>

        {/* Email */}
        <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 text-center group">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-full w-fit mx-auto mb-4 text-2xl group-hover:scale-110 transition">
            <FaEnvelope />
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Email</h3>
          <a href="mailto:info@zynextro.com" className="text-sm text-gray-500 hover:text-blue-600 transition">
            info@zynextro.com
          </a>
        </div>

        {/* Working Hours */}
        <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 text-center group">
          <div className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white p-4 rounded-full w-fit mx-auto mb-4 text-2xl group-hover:scale-110 transition">
            <FaClock />
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Working Hours</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Mon - Fri: 10:00 AM - 7:00 PM <br />
            Sat - Sun: 10:00 AM - 4:00 PM
          </p>
        </div>

      </div>

      {/* Form */}
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

          <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name *" className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email *" className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          <input name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
          <input name="source" value={formData.source} onChange={handleChange} placeholder="How did you hear about us?" className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />

          <select name="service" value={formData.service} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required>
            <option value="">Service Required *</option>
            <option>Web Development</option>
            <option>App Development</option>
             <option>Game Development</option>
            <option>Cyber Security</option>
            <option>Cloud Services</option>
             <option>AI Automation</option>
              <option>E-commerce Website</option>

          </select>

          <input name="budget" value={formData.budget} onChange={handleChange} placeholder="Budget" className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />

          <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Message *" className="md:col-span-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" required />

          <button type="submit" disabled={loading} className="md:col-span-2 py-3 rounded-lg text-white bg-blue-900 hover:bg-blue-800 transition">
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactUs;