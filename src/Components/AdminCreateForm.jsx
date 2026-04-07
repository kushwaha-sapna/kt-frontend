import React, { useState } from 'react';

const API_BASE = 'https://kt-technology-backend.onrender.com/api';

export const AdminCreateForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('adminToken');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${API_BASE}/admin/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Admin created successfully ✅');
        setEmail('');
        setPassword('');
      } else {
        setMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      setMessage('Server error. Try again.');
    }

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-lg mx-auto">
      <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        Create New Admin
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input
            type="password"
            placeholder="Minimum 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            minLength="6"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2.5 rounded-xl font-medium shadow hover:scale-105 transition disabled:opacity-50"
        >
          {loading ? 'Creating...' : 'Create Admin'}
        </button>
      </form>

      {message && (
        <div
          className={`mt-5 p-3 rounded-xl text-sm text-center ${
            message.toLowerCase().includes('success')
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

// ---- Stats Card Component ----
const Card = ({ title, value }) => (
  <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
    <p className="text-gray-500 text-sm">{title}</p>
    <h2 className="text-2xl font-bold text-gray-800 mt-2">{value}</h2>
  </div>
);



export default AdminCreateForm

