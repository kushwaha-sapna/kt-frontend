import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import AdminCreateForm from '../Components/AdminCreateForm';
import Card from '../Components/Card/Card.jsx';
import { motion } from 'framer-motion';

const API_BASE = 'https://kt-technology-backend.onrender.com/api';

const AdminDashboard = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchEmails();
  }, [token, navigate]);

  const fetchEmails = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE}/admin/emails`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      setEmails(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => logout();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Admin Dashboard
        </h1>

        <div className="flex gap-3">
          <button
            onClick={fetchEmails}
            className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:scale-105 transition"
          >
            Refresh
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-xl shadow hover:scale-105 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <Card title="Total Emails" value={emails.length} />
        <Card
          title="Today"
          value={emails.filter(e => new Date(e.createdAt).toDateString() === new Date().toDateString()).length}
        />
        <Card
          title="With Phone"
          value={emails.filter(e => e.phone).length}
        />
      </div>

      {/* Error */}
      {error && (
        <div className="max-w-7xl mx-auto mb-4 p-4 bg-red-100 text-red-700 rounded-xl">
          {error}
        </div>
      )}

      {/* Table */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow overflow-hidden">
        {loading ? (
          <div className="p-10 text-center text-gray-500">Loading...</div>
        ) : emails.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
            No emails yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-left">Phone</th>
                  <th className="px-6 py-3 text-left">Service</th>
                  <th className="px-6 py-3 text-left">Date</th>
                </tr>
              </thead>

              <tbody>
                {emails.map((email, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {email.fullName}
                    </td>
                    <td className="px-6 py-4">{email.email}</td>
                    <td className="px-6 py-4">
                      {email.phone || (
                        <span className="text-gray-400">N/A</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {email.service || (
                        <span className="text-gray-400">N/A</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {new Date(email.createdAt).toLocaleDateString()}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Form */}
      <div className="max-w-7xl mx-auto mt-8">
        <AdminCreateForm />
      </div>
    </div>
  );
};


export default AdminDashboard;
