import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import logo from "../../assets/logo.jpeg";
import {
  FaChevronDown,
  FaBars,
  FaCogs,
  FaUsers,
  FaUserTie,
  FaCloud,
  FaRocket,
  FaCalculator,
  FaCalendarAlt,
  FaGlobe
} from "react-icons/fa";

const Navbar = ({ isHome }) => {
  const { isAuthenticated } = useAuth();
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef(null);

  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
    setOpenSubMenu(null);
  };

  const handleSubMenuClick = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const closeAllMenus = () => {
    setOpenMenu(null);
    setOpenSubMenu(null);
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAllMenus();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`w-full bg-white fixed left-0 z-50 shadow-sm ${
        isHome ? "top-8" : "top-0"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-1">
        
        {/* LOGO */}
        <Link to="/" onClick={closeAllMenus}>
          <img src={logo} alt="logo" className="w-24 object-contain" />
        </Link>

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li><Link to="/">Home</Link></li>

          {/* SERVICES */}
          <li className="relative" onClick={() => handleMenuClick("services")}>
            <span className="cursor-pointer flex items-center gap-1">
              Services <FaChevronDown size={12} />
            </span>
            {openMenu === "services" && (
              <div className="absolute left-0 top-full mt-3 bg-white shadow-xl rounded-xl w-64 border">
                <Link to="/website-development" className="block px-4 py-2 hover:bg-gray-100">Website Development</Link>
                <Link to="/mobile-application" className="block px-4 py-2 hover:bg-gray-100">Mobile App</Link>
                <Link to="/game-application" className="block px-4 py-2 hover:bg-gray-100">Game Development</Link>
                <Link to="/ecommerce" className="block px-4 py-2 hover:bg-gray-100">E-commerce</Link>
              </div>
            )}
          </li>

          {/* PRODUCTS */}
          <li className="relative" onClick={() => handleMenuClick("products")}>
            <span className="cursor-pointer flex items-center gap-1">
              Products <FaChevronDown size={12} />
            </span>
            {openMenu === "products" && (
              <div className="absolute left-0 top-full mt-3 bg-white shadow-xl rounded-xl w-64 border">
                <Link to="/erp" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"><FaCogs /> ERP</Link>
                <Link to="/crm" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"><FaUsers /> CRM</Link>
                <Link to="/hrms" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"><FaUserTie /> HRMS</Link>
                <Link to="/ts-plus" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"><FaCloud /> TS Plus</Link>
                <Link to="/booking-portal" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"><FaCalendarAlt /> Booking</Link>
                <Link to="/gmb" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"><FaGlobe /> GMB</Link>
              </div>
            )}
          </li>

          {/* COMPANY */}
          <li className="relative" onClick={() => handleMenuClick("company")}>
            <span className="cursor-pointer flex items-center gap-1">
              Company <FaChevronDown size={12} />
            </span>
            {openMenu === "company" && (
              <div className="absolute left-0 top-full mt-3 bg-white shadow-xl rounded-xl w-64 border">
                <Link to="/about-us" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
                <Link to="/support" className="block px-4 py-2 hover:bg-gray-100">Support</Link>
                <Link to="/privacy-policy" className="block px-4 py-2 hover:bg-gray-100">Privacy Policy</Link>
                <Link to="/terms-and-condition" className="block px-4 py-2 hover:bg-gray-100">Terms</Link>
              </div>
            )}
          </li>

          <li><Link to="/contact-us">Contact</Link></li>
          <li><Link to="/career">Career</Link></li>

          {/* ADMIN */}
          {isAuthenticated ? (
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
          ) : (
            <li><Link to="/admin/login">Login</Link></li>
          )}

          {/* CTA */}
          <li>
            <Link to="/guidance">
              <button className="bg-yellow-400 px-6 py-2 rounded-xl font-semibold">
                Free Guide
              </button>
            </Link>
          </li>
        </ul>

        {/* MOBILE ICON */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={closeAllMenus}/>
      )}

      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform ${
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform`}>
        <div className="p-5 space-y-4 mt-6">
          <Link to="/" onClick={closeAllMenus}>Home</Link>
          <Link to="/contact-us" onClick={closeAllMenus}>Contact</Link>
          <Link to="/career" onClick={closeAllMenus}>Career</Link>

          {isAuthenticated ? (
            <Link to="/admin/dashboard" onClick={closeAllMenus}>Dashboard</Link>
          ) : (
            <Link to="/admin/login" onClick={closeAllMenus}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;