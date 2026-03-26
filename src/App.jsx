


import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
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

// Pages
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
import AboutUs from "./Pages/AboutUs.jsx"
import PermanentStaffing from "./Pages/PermanentStaffing.jsx";
import TemporaryStaffing from "./Pages/PermanentStaffing.jsx"
import IdeaAndDesign from "./Pages/IdeaAndDesign.jsx";
import Security from "./Pages/Security.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import TermsAndCondition from "./Pages/TermsAndConditions.jsx";
import Support from "./Pages/Support.jsx";
import Guidance from "./Pages/Guidance.jsx";

const App = () => {
  return (
    <div>    
      <Navbar />

      
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Products />
                <CoreValues />
                <IndustriesSection />
                <ClientTestimonial/>
                <OurProcess/>
                <TrustedClients/>
                <Technologies/>
                <Project/>
              </>
            }
          />

          {/* Pages */}
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/mobile-application" element={<MobileApplication />} />
          <Route path="/game-application" element={<GameApplication />} />
          <Route path="/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/graphic-designing" element={<GraphicDesigning />} />
          <Route path="/ugc" element={<UGC />} />
          <Route path="/cybersecurity" element={<Cybersecurity />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/temporary-staffing" element={<TemporaryStaffing />} />
          <Route path="/permanent-staffing" element={<PermanentStaffing />} />
          <Route path="/design" element={<IdeaAndDesign />} />
          <Route path="/security" element={<Security/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/terms-and-condition" element={<TermsAndCondition/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/guidance" element={<Guidance/>} />

          {/* Fallback */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
        <Footer/>
      </div>

    

    // Footer stays same
  );
};

export default App;










