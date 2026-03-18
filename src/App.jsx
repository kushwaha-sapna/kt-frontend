// import React from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import Hero from './Components/Hero/Hero'
// import About from './Components/About/About'
// import Services from './Components/Services/Services';
// import IndustriesSection from './Components/IndustriesSection/IndustriesSection';
// import CoreValues from './Components/CoreValues/CoreValues';
// import Products from './Components/Products/Products';
// const App = () => {
//   return (
//     <div>
//      <Navbar/> 
//       <Hero/>
//     <About/>
//      <Services/>  
//      <Products/>
//      <CoreValues/>
//      <IndustriesSection/>
//     </div>
//   )
// }

// export default App






import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import IndustriesSection from "./Components/IndustriesSection/IndustriesSection";
import CoreValues from "./Components/CoreValues/CoreValues";
import Products from "./Components/Products/Products";

// 👉 Import Service Pages
import WebsiteDevelopment from "./Pages/WebsiteDevelopment";
import MobileApplication from "./Pages/MobileApplication";
import GameApplication from "./Pages/GameApplication";
import UIUXDesign from "./Pages/UIUXDesign.jsx";
import DigitalMarketing from "./Pages/DigitalMarketing";
import GraphicDesigning from "./Pages/GraphicDesigning";
import UGC from "./Pages/UGC";
import Cybersecurity from "./Pages/Cybersecurity";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* Home Page */}
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
            </>
          }
        />

        {/* Service Pages */}
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/mobile-application" element={<MobileApplication />} />
        <Route path="/game-application" element={<GameApplication />} />
        <Route path="/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/graphic-designing" element={<GraphicDesigning />} />
        <Route path="/ugc" element={<UGC />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
      </Routes>
    </div>
  );
};

export default App;