




import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0a1f44] text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">KT-Technology</h2>
          <p className="text-sm leading-relaxed">
            Leading technology solutions provider delivering innovative software development and IT consulting services worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-cyan-300">Home</Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-cyan-300">About Us</Link>
            </li>
            <li>
              <Link to="/career" className="hover:text-cyan-300">Careers</Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-cyan-300">Contact</Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-cyan-300">Support</Link>
            </li>
            <li>
              <Link to="/guidance" className="hover:text-cyan-300">Free Guide</Link>
            </li>
          </ul>
        </div>

        {/* Services & Solutions */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Services & Solutions</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <ul className="space-y-1">
              <li><Link to="/website-development" className="hover:text-cyan-300">Website Development</Link></li>
              <li><Link to="/mobile-application" className="hover:text-cyan-300">Mobile Application</Link></li>
              <li><Link to="game-application" className="hover:text-cyan-300">Game Development</Link></li>
              <li><Link to="/ui-ux-design" className="hover:text-cyan-300">UI/UX Design</Link></li>
               
              <li><Link to="/cybersecurity" className="hover:text-cyan-300">Cybersecurity</Link></li>
            
            </ul>
           
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-4">Get In Touch</h3>
          <p className="text-sm mb-2">
            xyz,Noida
          </p>
          <p className="text-sm mb-2">Phone: +91 xzy</p>
          <p className="text-sm mb-2">Email: info@kt-technology.com</p>
          <p className="text-sm">Mon - Sat: 10:00 AM - 19:00 PM</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-400 pt-6 text-center text-sm text-gray-400 space-y-2">
        <p>© 2026 KT-Technology LLP. All rights reserved. | Crafted by KT-Technology Team</p>
        <p>
          <Link to="/privacy-policy" className="hover:text-cyan-300">Privacy Policy</Link> •{" "}
          <Link to="/terms" className="hover:text-cyan-300">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;