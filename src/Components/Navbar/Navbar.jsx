




import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className="w-full bg-white fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 md:px-8 py-1">
        
        {/* LOGO */}
        <Link to="/" onClick={closeAllMenus}>
          <img src={logo} alt="logo" className="w-24 object-contain" />
        </Link>

        {/* DESKTOP (UNCHANGED) */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li><Link to="/" onClick={closeAllMenus}>Home</Link></li>

          {/* SERVICES */}
          <li className="relative" onClick={() => handleMenuClick("services")}>
            <span className="cursor-pointer hover:text-blue-600 flex items-center gap-1">
              Services <FaChevronDown size={12} />
            </span>
          </li>

          {/* PRODUCTS */}
          <li className="relative" onClick={() => handleMenuClick("products")}>
            <span className="cursor-pointer hover:text-blue-600 flex items-center gap-1">
              Products <FaChevronDown size={12} />
            </span>
          </li>

          {/* COMPANY */}
          <li className="relative" onClick={() => handleMenuClick("company")}>
            <span className="cursor-pointer hover:text-blue-600 flex items-center gap-1">
              Company <FaChevronDown size={12} />
            </span>
          </li>

          <li><Link to="/contact-us" onClick={closeAllMenus}>Contact Us</Link></li>
          <li><Link to="/career" onClick={closeAllMenus}>Career</Link></li>
        </ul>

        {/* MOBILE ICON */}
        <div className="md:hidden text-2xl cursor-pointer p-2" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={closeAllMenus}/>
      )}

      {/*  MOBILE DRAWER UPDATED */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 md:hidden overflow-y-auto ${
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="p-5 space-y-4 mt-6 pb-20">

          <Link to="/" onClick={closeAllMenus} className="block border-b pb-2">
            Home
          </Link>

          {/* SERVICES */}
          <div onClick={() => handleMenuClick("services")} className="flex justify-between items-center border-b pb-2 cursor-pointer">
            <span>Services</span>
            <span>{openMenu === "services" ? "−" : "+"}</span>
          </div>

          {/* PRODUCTS */}
          <div onClick={() => handleMenuClick("products")} className="flex justify-between items-center border-b pb-2 cursor-pointer">
            <span>Products</span>
            <span>{openMenu === "products" ? "−" : "+"}</span>
          </div>

          {/* COMPANY */}
          <div onClick={() => handleMenuClick("company")} className="flex justify-between items-center border-b pb-2 cursor-pointer">
            <span>Company</span>
            <span>{openMenu === "company" ? "−" : "+"}</span>
          </div>

          {/*  CONTACT US (FIXED POSITION) */}
          <Link 
            to="/contact-us" 
            onClick={closeAllMenus} 
            className="block border-b pb-2 "
          >
            Contact Us
          </Link>

          {/* CAREER */}
          <Link 
            to="/career" 
            onClick={closeAllMenus} 
            className="block border-b pb-2"
          >
            Career
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;