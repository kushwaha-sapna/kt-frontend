import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Marquee from "./Components/Marquee/Marquee";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import IndustriesSection from "./Components/IndustriesSection/IndustriesSection";
import CoreValues from "./Components/CoreValues/CoreValues";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer.jsx";
import ClientTestimonial from "./Components/ClientTestimonials/ClientTestimonials.jsx";
import OurProcess from "./Components/OurProcess/OurProcess.jsx";
import Technologies from "./Components/Technologies/Technologies.jsx";
import Project from "./Components/Projects/Project.jsx";
import TrustedClients from "./Components/TrustedClients/TrustedClients.jsx";

import HomePopup from "./Components/HomePopup/HomePopup.jsx";
import WhatsAppFloating from "./Components/WhatsAppFloating/WhatsAppFloating.jsx";

import WebsiteDevelopment from "./Pages/WebsiteDevelopment";
import MobileApplication from "./Pages/MobileApplication";
import GameApplication from "./Pages/GameApplication";
import UIUXDesign from "./Pages/UIUXDesign.jsx";
import DigitalMarketing from "./Pages/DigitalMarketing";
import GraphicDesigning from "./Pages/GraphicDesigning";
import UGC from "./Pages/UGC";
import Cybersecurity from "./Pages/Cybersecurity";
import ContactUs from "./Pages/ContactUs";
import Career from "./Pages/Career.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import PermanentStaffing from "./Pages/PermanentStaffing.jsx";
import TemporaryStaffing from "./Pages/TemporaryStaffing.jsx";
import IdeaAndDesign from "./Pages/IdeaAndDesign.jsx";
import Security from "./Pages/Security.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import TermsAndCondition from "./Pages/TermsAndConditions.jsx";
import Support from "./Pages/Support.jsx";
import Guidance from "./Pages/Guidance.jsx";

import ERP from "./Pages/ERP.jsx";
import CRM from "./Pages/CRM.jsx";
import HRMS from "./Pages/HRMS.jsx";
import TSPlus from "./Pages/TSPlus.jsx";
import NoSky from "./Pages/NoSky.jsx";
import Tally from "./Pages/Tally.jsx";
import BookingPortal from "./Pages/BookingPortal.jsx";
import GMB from "./Pages/GMB.jsx";
import AdminLogin from "./Pages/AdminLogin.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";

const App = () => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(location.pathname === '/');

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsHome(location.pathname === '/');
  }, [location]);

  return (
    <div>
      {isHome && <Marquee />}
      <Navbar isHome={isHome} />
      
      <div style={{ paddingTop: isHome ? '4rem' : '0' }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePopup />
                <Hero />
                <About />
                <Services />
                <Products />
                <CoreValues />
                <IndustriesSection />
                <ClientTestimonial />
                <OurProcess />
                <TrustedClients />
                <Technologies />
                <Project />
              </>
            }
          />

          <Route path="/website-development" element={<div className="pt-20"><WebsiteDevelopment /></div>} />
          <Route path="/mobile-application" element={<div className="pt-20"><MobileApplication /></div>} />
          <Route path="/game-application" element={<div className="pt-20"><GameApplication /></div>} />
          <Route path="/ui-ux-design" element={<div className="pt-20"><UIUXDesign /></div>} />
          <Route path="/digital-marketing" element={<div className="pt-20"><DigitalMarketing /></div>} />
          <Route path="/graphic-designing" element={<div className="pt-20"><GraphicDesigning /></div>} />
          <Route path="/ugc" element={<div className="pt-20"><UGC /></div>} />
          <Route path="/cybersecurity" element={<div className="pt-20"><Cybersecurity /></div>} />
          <Route path="/contact-us" element={<div className="pt-20"><ContactUs /></div>} />
          <Route path="/career" element={<div className="pt-20"><Career /></div>} />
          <Route path="/about-us" element={<div className="pt-20"><AboutUs /></div>} />
          <Route path="/temporary-staffing" element={<div className="pt-20"><TemporaryStaffing /></div>} />
          <Route path="/permanent-staffing" element={<div className="pt-20"><PermanentStaffing /></div>} />
          <Route path="/design" element={<div className="pt-20"><IdeaAndDesign /></div>} />
          <Route path="/security" element={<div className="pt-20"><Security /></div>} />
          <Route path="/privacy-policy" element={<div className="pt-20"><PrivacyPolicy /></div>} />
          <Route path="/terms-and-condition" element={<div className="pt-20"><TermsAndCondition /></div>} />
          <Route path="/support" element={<div className="pt-20"><Support /></div>} />
          <Route path="/guidance" element={<div className="pt-20"><Guidance /></div>} />

          <Route path="/erp" element={<div className="pt-20"><ERP /></div>} />
          <Route path="/crm" element={<div className="pt-20"><CRM /></div>} />
          <Route path="/hrms" element={<div className="pt-20"><HRMS /></div>} />
          <Route path="/ts-plus" element={<div className="pt-20"><TSPlus /></div>} />
          <Route path="/no-sky" element={<div className="pt-20"><NoSky /></div>} />
          <Route path="/tally" element={<div className="pt-20"><Tally /></div>} />
          <Route path="/booking-portal" element={<div className="pt-20"><BookingPortal /></div>} />
          <Route path="/gmb" element={<div className="pt-20"><GMB /></div>} />
          <Route path="/admin/login" element={<div className="pt-20"><AdminLogin /></div>} />
         
          <Route path="/admin/dashboard" element={<div className="pt-20"><AdminDashboard /></div>} />

          <Route path="*" element={<div className="pt-20">Page Not Found</div>} />

        </Routes>
      </div>

      <WhatsAppFloating />
      <Footer />
    </div>
  );
};

export default App;

