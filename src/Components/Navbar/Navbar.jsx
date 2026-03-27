









import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

//  Only for desktop dropdown
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

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">

          <li>
            <Link to="/" onClick={closeAllMenus}>Home</Link>
          </li>

          {/* SERVICES */}
          <li className="relative" onClick={() => handleMenuClick("services")}>
            <span className="cursor-pointer hover:text-blue-600 flex items-center gap-1">
              Services <FaChevronDown size={12} />
            </span>

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

          {/* PRODUCTS */}
          <li className="relative" onClick={() => handleMenuClick("products")}>
            <span className="cursor-pointer hover:text-blue-600 flex items-center gap-1">
              Products <FaChevronDown size={12} />
            </span>

            {openMenu === "products" && (
              <div className="absolute left-0 top-full mt-3 bg-white shadow-xl rounded-xl w-64 border">
                <Link to="/erp" onClick={closeAllMenus} className="block px-4 py-2">ERP</Link>
                <Link to="/crm" onClick={closeAllMenus} className="block px-4 py-2">CRM</Link>
                <Link to="/hrms" onClick={closeAllMenus} className="block px-4 py-2">HRMS</Link>
                <Link to="/ts-plus" onClick={closeAllMenus} className="block px-4 py-2">TS Plus</Link>
                <Link to="/no-sky" onClick={closeAllMenus} className="block px-4 py-2">No Sky</Link>
                <Link to="/tally" onClick={closeAllMenus} className="block px-4 py-2">Tally</Link>
                <Link to="/booking-portal" onClick={closeAllMenus} className="block px-4 py-2">Booking Portal</Link>
                <Link to="/gmb" onClick={closeAllMenus} className="block px-4 py-2">GMB</Link>
              </div>
            )}
          </li>

          {/* COMPANY */}
          <li className="relative" onClick={() => handleMenuClick("company")}>
            <span className="cursor-pointer hover:text-blue-600 flex items-center gap-1">
              Company <FaChevronDown size={12} />
            </span>
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
        <div className="md:hidden text-2xl cursor-pointer p-2" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={closeAllMenus}/>
      )}

      {/* MOBILE DRAWER */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 md:hidden ${
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      }`}>

        <div className="p-5 space-y-4 mt-6">

          <Link to="/" onClick={closeAllMenus} className="block border-b pb-2">Home</Link>

          {/* SERVICES */}
          <div onClick={() => handleMenuClick("services")} className="flex justify-between border-b pb-2 cursor-pointer">
            Services <span>{openMenu === "services" ? "−" : "+"}</span>
          </div>

          {openMenu === "services" && (
            <div className="ml-3 flex flex-col space-y-2 text-sm text-gray-600">

              <Link to="/website-development" onClick={closeAllMenus}>Website Development</Link>
              <Link to="/game-application" onClick={closeAllMenus}>Game Development</Link>
              <Link to="/mobile-application" onClick={closeAllMenus}>Mobile App</Link>

              <Link to="/permanent-staffing" onClick={closeAllMenus}>Permanent Staffing</Link>
              <Link to="/temporary-staffing" onClick={closeAllMenus}>Temporary Staffing</Link>

              <Link to="/design" onClick={closeAllMenus}>Ideas & Design</Link>
              <Link to="/security" onClick={closeAllMenus}>Security</Link>

            </div>
          )}

          {/* PRODUCTS */}
          <div onClick={() => handleMenuClick("products")} className="flex justify-between border-b pb-2 cursor-pointer">
            Products <span>{openMenu === "products" ? "−" : "+"}</span>
          </div>

          {openMenu === "products" && (
            <div className="ml-3 flex flex-col space-y-2 text-sm text-gray-600">
              <Link to="/erp" onClick={closeAllMenus}>ERP</Link>
              <Link to="/crm" onClick={closeAllMenus}>CRM</Link>
              <Link to="/hrms" onClick={closeAllMenus}>HRMS</Link>
              <Link to="/ts-plus" onClick={closeAllMenus}>TS Plus</Link>
              <Link to="/no-sky" onClick={closeAllMenus}>No Sky</Link>
              <Link to="/tally" onClick={closeAllMenus}>Tally</Link>
              <Link to="/booking-portal" onClick={closeAllMenus}>Booking Portal</Link>
              <Link to="/gmb" onClick={closeAllMenus}>GMB</Link>
            </div>
          )}

          <Link to="/career" onClick={closeAllMenus} className="block border-b pb-2">Career</Link>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;