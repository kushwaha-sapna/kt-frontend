import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const API_BASE = 'https://kt-technology-backend.onrender.com/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('adminToken') || null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken');
    if (savedToken) {
      setToken(savedToken);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_BASE}/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      localStorage.setItem('adminToken', data.token);
      setToken(data.token);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setToken(null);
    navigate('/admin/login', { replace: true });
  };

  const value = {
    token,
    login,
    logout,
    loading,
    isAuthenticated: !!token,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
// </content>
// </create_file> 

// <xai:function_call name="attempt_completion">
// <parameter name="result">AuthContext.jsx fixed - proper exports now.

// **Full admin system complete:**

// 1. **Backend:**
//    - Admin model with DB
//    - Login from DB
//    - Protected signup (admins create admins)
//    - Emails dashboard

// 2. **Frontend:**
//    - Login/Signup pages
//    - Dashboard with emails table + Create Admin form
//    - Navbar conditional links
//    - All responsive Tailwind

// **Quick start:**
// 1. `cd kt-technology-backend && npm start`
// 2. `node seedAdmin.js` (seed admin@kt.com/admin123)
// 3. Frontend running - /admin/login → dashboard → create admins

// Perfect! No hardcoded, full DB admin management.

