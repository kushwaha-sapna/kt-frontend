// import React from "react";
// import logo from "../../assets/logo.jpeg";

// const Navbar = () => {
//   return (
//     <nav className="w-full bg-[#fdfafa] text-[#060218] fixed top-0 left-0 z-10 shadow-sm">
//       <div className="container mx-auto flex items-center justify-between px-4 py-2">
        
//         {/* Logo */}
//         <img src={logo} alt="logo" className="w-18 md:w-22 ml-25" />

//         {/* Menu */}
//         <ul className="hidden md:flex items-center gap-8 text-[16px]">
//           <li className="cursor-pointer hover:text-[#d4af37]">Home</li>
//           <li className="cursor-pointer hover:text-[#d4af37]">Service</li>
//           <li className="cursor-pointer hover:text-[#d4af37]">Company</li>
//           <li className="cursor-pointer hover:text-[#d4af37]">Career</li>
//           <li>
//             <button className="bg-[#d4af37] text-[#212121] px-6 py-3 rounded-full cursor-pointer hover:opacity-90 transition">
//               Free Guide
//             </button>
//           </li>
//         </ul>

//         {/* Mobile Button (Optional for now) */}
//         <div className="md:hidden">
//           <button className="text-2xl">☰</button>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  return (
    <nav className="w-full bg-white text-gray-900 fixed top-0 left-0 z-10 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <img 
          src={logo} 
          alt="logo" 
          className="w-22 md:w-25"
        />

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">

          <li className="cursor-pointer hover:text-blue-600 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Service
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Company
          </li>

          <li className="cursor-pointer hover:text-blue-600 transition">
            Career
          </li>

          <li>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition">
              Free Guide
            </button>
          </li>

        </ul>

        {/* Mobile Button */}
        <div className="md:hidden text-2xl cursor-pointer">
          ☰
        </div>

      </div>
    </nav>
  );
};

export default Navbar;