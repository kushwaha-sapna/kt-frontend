


// // import React from "react";
// // import { Routes, Route } from "react-router-dom";

// // import Navbar from "./Components/Navbar/Navbar";
// // import Hero from "./Components/Hero/Hero";
// // import About from "./Components/About/About";
// // import Services from "./Components/Services/Services";
// // import IndustriesSection from "./Components/IndustriesSection/IndustriesSection";
// // import CoreValues from "./Components/CoreValues/CoreValues";
// // import Products from "./Components/Products/Products";
// // import Footer from "./Components/Footer/Footer.jsx";
// // import ClientTestimonial from "./Components/ClientTestimonials/ClientTestimonials.jsx";
// // import OurProcess from "./Components/OurProcess/OurProcess.jsx";
// // import Technologies from "./Components/Technologies/Technologies.jsx";
// // import Project from "./Components/Projects/Project.jsx";
// // import TrustedClients from "./Components/TrustedClients/TrustedClients.jsx";

// // // Pages
// // import WebsiteDevelopment from "./Pages/WebsiteDevelopment";
// // import MobileApplication from "./Pages/MobileApplication";
// // import GameApplication from "./Pages/GameApplication";
// // import UIUXDesign from "./Pages/UIUXDesign.jsx";
// // import DigitalMarketing from "./Pages/DigitalMarketing";
// // import GraphicDesigning from "./Pages/GraphicDesigning";
// // import UGC from "./Pages/UGC";
// // import Cybersecurity from "./Pages/Cybersecurity";
// // import ContactUs from "./Pages/ContactUs";
// // import Career from "./Pages/Career.jsx";
// // import AboutUs from "./Pages/AboutUs.jsx"
// // import PermanentStaffing from "./Pages/PermanentStaffing.jsx";
// // import TemporaryStaffing from "./Pages/PermanentStaffing.jsx"
// // import IdeaAndDesign from "./Pages/IdeaAndDesign.jsx";
// // import Security from "./Pages/Security.jsx";
// // import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
// // import TermsAndCondition from "./Pages/TermsAndConditions.jsx";
// // import Support from "./Pages/Support.jsx";
// // import Guidance from "./Pages/Guidance.jsx";

// // const App = () => {
// //   return (
// //     <div>    
// //       <Navbar />

      
// //         <Routes>
// //           {/* Home */}
// //           <Route
// //             path="/"
// //             element={
// //               <>
// //                 <Hero />
// //                 <About />
// //                 <Services />
// //                 <Products />
// //                 <CoreValues />
// //                 <IndustriesSection />
// //                 <ClientTestimonial/>
// //                 <OurProcess/>
// //                 <TrustedClients/>
// //                 <Technologies/>
// //                 <Project/>
// //               </>
// //             }
            
// //           />

// //           {/* Pages */}
// //           <Route path="/website-development" element={<WebsiteDevelopment />} />
// //           <Route path="/mobile-application" element={<MobileApplication />} />
// //           <Route path="/game-application" element={<GameApplication />} />
// //           <Route path="/ui-ux-design" element={<UIUXDesign />} />
// //           <Route path="/digital-marketing" element={<DigitalMarketing />} />
// //           <Route path="/graphic-designing" element={<GraphicDesigning />} />
// //           <Route path="/ugc" element={<UGC />} />
// //           <Route path="/cybersecurity" element={<Cybersecurity />} />
// //           <Route path="/contact-us" element={<ContactUs />} />
// //           <Route path="/career" element={<Career />} />
// //           <Route path="/about-us" element={<AboutUs />} />
// //           <Route path="/temporary-staffing" element={<TemporaryStaffing />} />
// //           <Route path="/permanent-staffing" element={<PermanentStaffing />} />
// //           <Route path="/design" element={<IdeaAndDesign />} />
// //           <Route path="/security" element={<Security/>} />
// //           <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
// //           <Route path="/terms-and-condition" element={<TermsAndCondition/>} />
// //           <Route path="/support" element={<Support/>} />
// //           <Route path="/guidance" element={<Guidance/>} />

// //           {/* Fallback */}
// //           <Route path="*" element={<div>Page Not Found</div>} />
          
// //         </Routes>
        
// //         <Footer/>
// //       </div>

    

// //     // Footer stays same
// //   );
// // };

// // export default App;










// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Navbar from "./Components/Navbar/Navbar";
// import Hero from "./Components/Hero/Hero";
// import About from "./Components/About/About";
// import Services from "./Components/Services/Services";
// import IndustriesSection from "./Components/IndustriesSection/IndustriesSection";
// import CoreValues from "./Components/CoreValues/CoreValues";
// import Products from "./Components/Products/Products";
// import Footer from "./Components/Footer/Footer.jsx";
// import ClientTestimonial from "./Components/ClientTestimonials/ClientTestimonials.jsx";
// import OurProcess from "./Components/OurProcess/OurProcess.jsx";
// import Technologies from "./Components/Technologies/Technologies.jsx";
// import Project from "./Components/Projects/Project.jsx";
// import TrustedClients from "./Components/TrustedClients/TrustedClients.jsx";

// // Pages
// import WebsiteDevelopment from "./Pages/WebsiteDevelopment";
// import MobileApplication from "./Pages/MobileApplication";
// import GameApplication from "./Pages/GameApplication";
// import UIUXDesign from "./Pages/UIUXDesign.jsx";
// import DigitalMarketing from "./Pages/DigitalMarketing";
// import GraphicDesigning from "./Pages/GraphicDesigning";
// import UGC from "./Pages/UGC";
// import Cybersecurity from "./Pages/Cybersecurity";
// import ContactUs from "./Pages/ContactUs";
// import Career from "./Pages/Career.jsx";
// import AboutUs from "./Pages/AboutUs.jsx";
// import PermanentStaffing from "./Pages/PermanentStaffing.jsx";
// import TemporaryStaffing from "./Pages/TemporaryStaffing.jsx";
// import IdeaAndDesign from "./Pages/IdeaAndDesign.jsx";
// import Security from "./Pages/Security.jsx";
// import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
// import TermsAndCondition from "./Pages/TermsAndConditions.jsx";
// import Support from "./Pages/Support.jsx";
// import Guidance from "./Pages/Guidance.jsx";





// import ERP from "./Pages/ERP.jsx";
// import CRM from "./Pages/CRM.jsx";
// import HRMS from "./Pages/HRMS.jsx";
// import TSPlus from "./Pages/TSPlus.jsx";
// import NoSky from "./Pages/NoSky.jsx";
// import Tally from "./Pages/Tally.jsx";
// import BookingPortal from "./Pages/BookingPortal.jsx";
// import GMB from "./Pages/GMB.jsx";

// // Wrapper for spacing (ONLY pages)
// const PageWrapper = ({ children }) => {
//   return <div className="pt-20">{children}</div>; // adjust if navbar height differs
// };

// const App = () => {
//   return (
//     <div>
//       <Navbar />

//       <Routes>
//   {/* Home - NO spacing */}
//   <Route
//     path="/"
//     element={
//       <>
//         <Hero />
//         <About />
//         <Services />
//         <Products />
//         <CoreValues />
//         <IndustriesSection />
//         <ClientTestimonial/>
//         <OurProcess/>
//         <TrustedClients/>
//         <Technologies/>
//         <Project/>
//       </>
//     }
//   />

//   {/* Pages - WITH spacing */}
//   <Route path="/website-development" element={<div className="pt-20"><WebsiteDevelopment /></div>} />
//   <Route path="/mobile-application" element={<div className="pt-20"><MobileApplication /></div>} />
//   <Route path="/game-application" element={<div className="pt-20"><GameApplication /></div>} />
//   <Route path="/ui-ux-design" element={<div className="pt-20"><UIUXDesign /></div>} />
//   <Route path="/digital-marketing" element={<div className="pt-20"><DigitalMarketing /></div>} />
//   <Route path="/graphic-designing" element={<div className="pt-20"><GraphicDesigning /></div>} />
//   <Route path="/ugc" element={<div className="pt-20"><UGC /></div>} />
//   <Route path="/cybersecurity" element={<div className="pt-20"><Cybersecurity /></div>} />
//   <Route path="/contact-us" element={<div className="pt-20"><ContactUs /></div>} />
//   <Route path="/career" element={<div className="pt-20"><Career /></div>} />
//   <Route path="/about-us" element={<div className="pt-20"><AboutUs /></div>} />
//   <Route path="/temporary-staffing" element={<div className="pt-20"><TemporaryStaffing /></div>} />
//   <Route path="/permanent-staffing" element={<div className="pt-20"><PermanentStaffing /></div>} />
//   <Route path="/design" element={<div className="pt-20"><IdeaAndDesign /></div>} />
//   <Route path="/security" element={<div className="pt-20"><Security/></div>} />
//   <Route path="/privacy-policy" element={<div className="pt-20"><PrivacyPolicy/></div>} />
//   <Route path="/terms-and-condition" element={<div className="pt-20"><TermsAndCondition/></div>} />
//   <Route path="/support" element={<div className="pt-20"><Support/></div>} />
//   <Route path="/guidance" element={<div className="pt-20"><Guidance/></div>} />


// <Route path="/erp" element={<ERP />} />
//   <Route path="/crm" element={<CRM />} />
//   <Route path="/hrms" element={<HRMS />} />
//   <Route path="/ts-plus" element={<TSPlus />} />
//   <Route path="/no-sky" element={<NoSky />} />
//   <Route path="/tally" element={<Tally />} />
//   <Route path="/booking-portal" element={<BookingPortal />} />
//   <Route path="/gmb" element={<GMB />} />


//   {/* Fallback */}
//   <Route path="*" element={<div className="pt-20">Page Not Found</div>} />
// </Routes>

//       <Footer />
//     </div>
//   );
// };

// export default App;










import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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

const App = () => {
  const location = useLocation();

  //Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
              <ClientTestimonial />
              <OurProcess />
              <TrustedClients />
              <Technologies />
              <Project />
            </>
          }
        />

        {/* Pages */}
        <Route path="/website-development" element={<div className="pt-24"><WebsiteDevelopment /></div>} />
        <Route path="/mobile-application" element={<div className="pt-24"><MobileApplication /></div>} />
        <Route path="/game-application" element={<div className="pt-24"><GameApplication /></div>} />
        <Route path="/ui-ux-design" element={<div className="pt-24"><UIUXDesign /></div>} />
        <Route path="/digital-marketing" element={<div className="pt-24"><DigitalMarketing /></div>} />
        <Route path="/graphic-designing" element={<div className="pt-24"><GraphicDesigning /></div>} />
        <Route path="/ugc" element={<div className="pt-24"><UGC /></div>} />
        <Route path="/cybersecurity" element={<div className="pt-24"><Cybersecurity /></div>} />
        <Route path="/contact-us" element={<div className="pt-24"><ContactUs /></div>} />
        <Route path="/career" element={<div className="pt-24"><Career /></div>} />
        <Route path="/about-us" element={<div className="pt-24"><AboutUs /></div>} />
        <Route path="/temporary-staffing" element={<div className="pt-24"><TemporaryStaffing /></div>} />
        <Route path="/permanent-staffing" element={<div className="pt-24"><PermanentStaffing /></div>} />
        <Route path="/design" element={<div className="pt-24"><IdeaAndDesign /></div>} />
        <Route path="/security" element={<div className="pt-24"><Security /></div>} />
        <Route path="/privacy-policy" element={<div className="pt-24"><PrivacyPolicy /></div>} />
        <Route path="/terms-and-condition" element={<div className="pt-24"><TermsAndCondition /></div>} />
        <Route path="/support" element={<div className="pt-24"><Support /></div>} />
        <Route path="/guidance" element={<div className="pt-24"><Guidance /></div>} />

        {/* Products */}
        <Route path="/erp" element={<ERP />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/hrms" element={<HRMS />} />
        <Route path="/ts-plus" element={<TSPlus />} />
        <Route path="/no-sky" element={<NoSky />} />
        <Route path="/tally" element={<Tally />} />
        <Route path="/booking-portal" element={<BookingPortal />} />
        <Route path="/gmb" element={<GMB />} />

        {/* Fallback */}
        <Route path="*" element={<div className="pt-24">Page Not Found</div>} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;