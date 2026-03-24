// // import React from 'react'
// // import Navbar from './Components/Navbar/Navbar'
// // import Hero from './Components/Hero/Hero'
// // import About from './Components/About/About'
// // import Services from './Components/Services/Services';
// // import IndustriesSection from './Components/IndustriesSection/IndustriesSection';
// // import CoreValues from './Components/CoreValues/CoreValues';
// // import Products from './Components/Products/Products';
// // const App = () => {
// //   return (
// //     <div>
// //      <Navbar/> 
// //       <Hero/>
// //     <About/>
// //      <Services/>  
// //      <Products/>
// //      <CoreValues/>
// //      <IndustriesSection/>
// //     </div>
// //   )
// // }

// // export default App






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

// // 👉 Import Service Pages
// import WebsiteDevelopment from "./Pages/WebsiteDevelopment";
// import MobileApplication from "./Pages/MobileApplication";
// import GameApplication from "./Pages/GameApplication";
// import UIUXDesign from "./Pages/UIUXDesign.jsx";
// import DigitalMarketing from "./Pages/DigitalMarketing";
// import GraphicDesigning from "./Pages/GraphicDesigning";
// import UGC from "./Pages/UGC";
// import Cybersecurity from "./Pages/Cybersecurity";
// import ContactUs from "./Pages/ContactUs"

// const App = () => {
//   return (
//     <div>
//       <Navbar />

//       <Routes>
//         {/* Home Page */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <About />
//               <Services />
//               <Products />
//               <CoreValues />
//               <IndustriesSection />
//               <Footer/>
//             </>
//           }
//         />

//         {/* Service Pages */}
//         <Route path="/website-development" element={<WebsiteDevelopment />} />
//         <Route path="/mobile-application" element={<MobileApplication />} />
//         <Route path="/game-application" element={<GameApplication />} />
//         <Route path="/ui-ux-design" element={<UIUXDesign />} />
//         <Route path="/digital-marketing" element={<DigitalMarketing />} />
//         <Route path="/graphic-designing" element={<GraphicDesigning />} />
//         <Route path="/ugc" element={<UGC />} />
//         <Route path="/cybersecurity" element={<Cybersecurity />} />
//         <Route path ="/contact-us" element={<ContactUs/>}/>
//       </Routes>
//     </div>
//   );
// };

// export default App;








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

        {/* Fallback */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;