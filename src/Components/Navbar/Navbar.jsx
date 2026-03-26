

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef(null); // ✅ reference to the navbar

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

  // ✅ Close menus when clicking outside
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

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">

          <li>
            <Link to="/" onClick={closeAllMenus}>Home</Link>
          </li>

          {/* SERVICES */}
          <li className="relative" onClick={() => handleMenuClick("services")}>
            <span className="cursor-pointer hover:text-blue-600">Services ▾</span>
            {openMenu === "services" && (
              <div className="absolute left-0 top-full mt-3 bg-white shadow-xl rounded-xl w-64 border">

                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={(e) => { e.stopPropagation(); handleSubMenuClick("development"); }}
                >
                  Development
                  {openSubMenu === "development" && (
                    <div className="absolute top-0 left-full ml-2 bg-white shadow-lg rounded-lg w-56 border">
                      <Link to="/website-development" onClick={closeAllMenus} className="block px-4 py-2">Website Development</Link>
                      <Link to="/game-application" onClick={closeAllMenus} className="block px-4 py-2">Game Development</Link>
                      <Link to="/mobile-application" onClick={closeAllMenus} className="block px-4 py-2">Mobile App</Link>
                    </div>
                  )}
                </div>

                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={(e) => { e.stopPropagation(); handleSubMenuClick("it"); }}
                >
                  IT Services
                  {openSubMenu === "it" && (
                    <div className="absolute top-0 left-full ml-2 bg-white shadow-lg rounded-lg w-56 border">
                      <Link to="/permanent-staffing" onClick={closeAllMenus} className="block px-4 py-2">Permanent</Link>
                      <Link to="/temporary-staffing" onClick={closeAllMenus} className="block px-4 py-2">Temporary</Link>
                    </div>
                  )}
                </div>

                <Link to="/design" onClick={closeAllMenus} className="block px-4 py-2">Ideas & Design</Link>
                <Link to="/security" onClick={closeAllMenus} className="block px-4 py-2">Security</Link>
              </div>
            )}
          </li>

          {/* COMPANY */}
          <li className="relative" onClick={() => handleMenuClick("company")}>
            <span className="cursor-pointer hover:text-blue-600">Company ▾</span>
            {openMenu === "company" && (
              <div className="absolute left-0 top-full mt-3 bg-white shadow-xl rounded-xl w-64 border">

                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={(e) => { e.stopPropagation(); handleSubMenuClick("about"); }}
                >
                  About Company
                  {openSubMenu === "about" && (
                    <div className="absolute top-0 left-full ml-2 bg-white shadow-lg rounded-lg w-56 border">
                      <Link to="/about-us" onClick={closeAllMenus} className="block px-4 py-2">About Us</Link>
                      <Link to="/support" onClick={closeAllMenus} className="block px-4 py-2">Support</Link>
                      <Link to="/contact-us" onClick={closeAllMenus} className="block px-4 py-2">Contact</Link>
                    </div>
                  )}
                </div>

                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={(e) => { e.stopPropagation(); handleSubMenuClick("legal"); }}
                >
                  Legal & Policies
                  {openSubMenu === "legal" && (
                    <div className="absolute top-0 left-full ml-2 bg-white shadow-lg rounded-lg w-56 border">
                      <Link to="/privacy-policy" onClick={closeAllMenus} className="block px-4 py-2">Privacy Policy</Link>
                      <Link to="/terms-and-condition" onClick={closeAllMenus} className="block px-4 py-2">Terms and Conditions</Link>
                    </div>
                  )}
                </div>

              </div>
            )}
          </li>

          <li>
            <Link to="/career" onClick={closeAllMenus}>Career</Link>
          </li>

          <li>
            <Link to="/guidance" onClick={closeAllMenus}>
              <button className="bg-yellow-400 px-6 py-2 rounded-xl font-semibold">
                Free Guide
              </button>
            </Link>
          </li>

        </ul>

        {/* MOBILE ICON */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>☰</div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white px-5 py-4 space-y-4 shadow-md">
          <Link to="/" onClick={closeAllMenus}>Home</Link>

          <div onClick={() => handleMenuClick("services")}>Services</div>
          {openMenu === "services" && (
            <div className="ml-4 flex flex-col space-y-2">
              <Link to="/website-development" onClick={closeAllMenus}>Website</Link>
              <Link to="/game-application" onClick={closeAllMenus}>Game</Link>
              <Link to="/mobile-application" onClick={closeAllMenus}>Mobile</Link>
              <Link to="/permanent-staffing" onClick={closeAllMenus}>Permanent</Link>
              <Link to="/temporary-staffing" onClick={closeAllMenus}>Temporary</Link>
              <Link to="/design" onClick={closeAllMenus}>Design</Link>
              <Link to="/security" onClick={closeAllMenus}>Security</Link>
            </div>
          )}

          <div onClick={() => handleMenuClick("company")}>Company</div>
          {openMenu === "company" && (
            <div className="ml-4 flex flex-col space-y-2">
              <Link to="/about-us" onClick={closeAllMenus}>About</Link>
              <Link to="/support" onClick={closeAllMenus}>Support</Link>
              <Link to="/contact-us" onClick={closeAllMenus}>Contact</Link>
            </div>
          )}

          <Link to="/career" onClick={closeAllMenus}>Career</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;