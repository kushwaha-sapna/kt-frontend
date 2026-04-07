






import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import { FaChevronDown ,FaBars,FaCogs, FaUsers, FaUserTie, FaCloud, FaRocket, FaCalculator, FaCalendarAlt, FaGlobe } from "react-icons/fa";

const Navbar = ({ isHome }) => {
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
    <nav ref={navRef} className={`w-full bg-white fixed left-0 z-50 shadow-sm ${isHome ? 'top-8' : 'top-0'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-1">
        
        {/* LOGO */}
        <Link to="/" onClick={closeAllMenus}>
          <img src={logo} alt="logo" className="w-24 object-contain" />
        </Link>

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-8 font-medium   text-gray-700">
          <li className=" hover:text-blue-600">
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
                      <Link to="/website-development" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100">Website Development</Link>
                      <Link to="/game-application" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100">Game Development</Link>
                      <Link to="/mobile-application" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100">Mobile App</Link>
                       <Link to="/ecommerce" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100">E-commerce </Link>
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
                      <Link to="/permanent-staffing" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100">Permanent</Link>
                      <Link to="/temporary-staffing" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100">Temporary</Link>
                    </div>
                  )}
                </div>
                <Link to="/design" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100">Ideas & Design</Link>
                <Link to="/security" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100">Security</Link>
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

  <Link to="/erp" onClick={closeAllMenus} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
    <FaCogs className="text-blue-600" /> ERP
  </Link>

  <Link to="/crm" onClick={closeAllMenus} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
    <FaUsers className="text-blue-600" /> CRM
  </Link>

  <Link to="/hrms" onClick={closeAllMenus} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
    <FaUserTie className="text-blue-600" /> HRMS
  </Link>

  <Link to="/ts-plus" onClick={closeAllMenus} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
    <FaCloud className="text-blue-600" /> TS Plus
  </Link>

  <Link to="/no-sky" onClick={closeAllMenus} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
    <FaRocket className="text-blue-600" /> No Sky
  </Link>

  <Link to="/tally" onClick={closeAllMenus} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
    <FaCalculator className="text-blue-600" /> Tally
  </Link>

  <Link to="/booking-portal" onClick={closeAllMenus} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
    <FaCalendarAlt  className="text-blue-600"/> Booking Portal
  </Link>

  <Link to="/gmb" onClick={closeAllMenus} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
    <FaGlobe  className="text-blue-600"/> GMB
  </Link>

</div>
            )}
          </li>

          {/* COMPANY */}
          <li className="relative" onClick={() => handleMenuClick("company")}>
            <span className="cursor-pointer hover:text-blue-600 flex items-center gap-1">
              Company <FaChevronDown size={12} />
            </span>
            {openMenu === "company" && (
              <div className="absolute left-0 top-full mt-3 bg-white shadow-xl rounded-xl w-64 border">
                <div
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={(e) => { e.stopPropagation(); handleSubMenuClick("aboutCompany"); }}
                >
                  About Company
                  {openSubMenu === "aboutCompany" && (
                    <div className="absolute top-0 left-full ml-2 bg-white shadow-lg rounded-lg w-56 border">
                        <Link to="/about-us" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100">AboutUs</Link>
                      <Link to="/support" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100">Support</Link>
                    
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
                      <Link to="/privacy-policy" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100">Privacy Policy</Link>
                      <Link to="/terms-and-condition" onClick={closeAllMenus} className="block px-4 py-2 hover:bg-gray-100">Terms & Conditions</Link>
                    </div>
                  )}
                </div>
              </div>
            )}
          </li>

          <li className=" hover:text-blue-600"><Link to="/contact-us" onClick={closeAllMenus}>Contact Us</Link></li>
          <li className=" hover:text-blue-600"><Link to="/career" onClick={closeAllMenus}>Career</Link></li>
          <li className=" hover:text-blue-600">
            <Link to="/guidance" onClick={closeAllMenus}>
              <button className="bg-yellow-400 px-6 py-2 rounded-xl font-semibold">Free Guide</button>
            </Link>
          </li>
        </ul>

        <div
          className="md:hidden text-2xl cursor-pointer p-2"
          onClick={toggleMenu}
        >
          <FaBars />
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
          <Link to="/" onClick={closeAllMenus} className="block border-b pb-2 hover:text-blue-600 hover:bg-gray-50 transition-colors">Home</Link>

          {/* SERVICES MOBILE */}
          <div onClick={() => handleMenuClick("services")} className="flex justify-between items-center border-b pb-2 cursor-pointer hover:text-blue-600 transition-colors">
            <span>Services</span>
            <span>{openMenu === "services" ? "−" : "+"}</span>
          </div>
          {openMenu === "services" && (
            <div className="ml-3 flex flex-col space-y-2 text-sm text-gray-600">
              <Link to="/website-development" onClick={closeAllMenus} className="hover:text-blue-600 hover:bg-gray-50 p-1 rounded">Website Development</Link>
              <Link to="/game-application" onClick={closeAllMenus} className="hover:text-blue-600 hover:bg-gray-50 p-1 rounded">Game Development</Link>
              <Link to="/mobile-application" onClick={closeAllMenus} className="hover:text-blue-600 hover:bg-gray-50 p-1 rounded">Mobile App</Link>
              <Link to="/ecommerce" onClick={closeAllMenus} className="hover:text-blue-600 hover:bg-gray-50 p-1 rounded">E-commerce</Link>
              <Link to="/permanent-staffing" onClick={closeAllMenus} className="hover:text-blue-600 hover:bg-gray-50 p-1 rounded">Permanent Staffing</Link>
              <Link to="/temporary-staffing" onClick={closeAllMenus} className="hover:text-blue-600 hover:bg-gray-50 p-1 rounded">Temporary Staffing</Link>
              <Link to="/design" onClick={closeAllMenus} className="hover:text-blue-600 hover:bg-gray-50 p-1 rounded">Ideas & Design</Link>
              <Link to="/security" onClick={closeAllMenus} className="hover:text-blue-600 hover:bg-gray-50 p-1 rounded">Security</Link>
            </div>
          )}

          {/* PRODUCTS MOBILE */}
          <div onClick={() => handleMenuClick("products")} className="flex justify-between items-center border-b pb-2 cursor-pointer hover:text-blue-600 transition-colors">
            <span>Products</span>
            <span>{openMenu === "products" ? "−" : "+"}</span>
          </div>
          {openMenu === "products" && (
            <div className="ml-3 flex flex-col space-y-2 text-sm text-gray-600">
              <Link to="/erp" onClick={closeAllMenus} className="hover:text-blue-600 hover:bg-gray-50 p-1 rounded">ERP</Link>
              <Link to="/crm" onClick={closeAllMenus} className="hover:text-blue-600 hover:bg-gray-50 p-1 rounded">CRM</Link>
              <Link to="/hrms" onClick={closeAllMenus} className="hover:text-blue-600 hover:bg-gray-50 p-1 rounded">HRMS</Link>
              <Link to="/ts-plus" onClick={closeAllMenus} className="hover:text-blue-600 hover:bg-gray-50 p-1 rounded">TS Plus</Link>
              <Link to="/no-sky" onClick={closeAllMenus} className="hover:text-blue-600 hover:bg-gray-50 p-1 rounded">No Sky</Link>
              <Link to="/tally" onClick={closeAllMenus} className="hover:text-blue-600 hover:bg-gray-50 p-1 rounded">Tally</Link>
              <Link to="/booking-portal" onClick={closeAllMenus} className="hover:text-blue-600 hover:bg-gray-50 p-1 rounded">Booking Portal</Link>
              <Link to="/gmb" onClick={closeAllMenus} className="hover:text-blue-600 hover:bg-gray-50 p-1 rounded">GMB</Link>
            </div>
          )}

          {/* COMPANY MOBILE */}
          <div onClick={() => handleMenuClick("company")} className="flex justify-between items-center border-b pb-2 cursor-pointer hover:text-blue-600 transition-colors">
            <span>Company</span>
            <span>{openMenu === "company" ? "−" : "+"}</span>
          </div>
          {openMenu === "company" && (
            <div className="ml-3 flex flex-col space-y-2 text-sm text-gray-600">
              <div onClick={() => handleSubMenuClick("aboutCompany")} className="flex justify-between items-center cursor-pointer hover:text-blue-600">
                <span>About Company</span>
                <span>{openSubMenu === "aboutCompany" ? "−" : "+"}</span>
              </div>
              {openSubMenu === "aboutCompany" && (
                <div className="ml-3 flex flex-col space-y-1">
                   <Link to="/about-us" onClick={closeAllMenus} className="hover:bg-gray-100 hover:text-blue-600 py-1 px-2 rounded">AboutUs</Link>
                  <Link to="/support" onClick={closeAllMenus} className="hover:bg-gray-100 hover:text-blue-600 py-1 px-2 rounded">Support</Link>
                </div>
              )}
              <div onClick={() => handleSubMenuClick("legal")} className="flex justify-between items-center cursor-pointer hover:text-blue-600">
                <span>Legal & Policies</span>
                <span>{openSubMenu === "legal" ? "−" : "+"}</span>
              </div>
              {openSubMenu === "legal" && (
                <div className="ml-3 flex flex-col space-y-1">
                  <Link to="/privacy-policy" onClick={closeAllMenus} className="hover:bg-gray-100 hover:text-blue-600 py-1 px-2 rounded">Privacy Policy</Link>
                  <Link to="/terms-and-condition" onClick={closeAllMenus} className="hover:bg-gray-100 hover:text-blue-600 py-1 px-2 rounded">Terms & Conditions</Link>
                </div>
              )}
            </div>
          )}
          <Link to="/contact-us" onClick={closeAllMenus} className="block border-b pb-2 hover:text-blue-600 hover:bg-gray-50 transition-colors">Contact Us</Link>
          <Link to="/career" onClick={closeAllMenus} className="block border-b pb-2 hover:text-blue-600 hover:bg-gray-50 transition-colors">Career</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
