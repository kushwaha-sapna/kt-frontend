// // // // // // // import React from "react";
// // // // // // // import logo from "../../assets/logo.jpeg";

// // // // // // // const Navbar = () => {
// // // // // // //   return (
// // // // // // //     <nav className="w-full bg-[#fdfafa] text-[#060218] fixed top-0 left-0 z-10 shadow-sm">
// // // // // // //       <div className="container mx-auto flex items-center justify-between px-4 py-2">
        
// // // // // // //         {/* Logo */}
// // // // // // //         <img src={logo} alt="logo" className="w-18 md:w-22 ml-25" />

// // // // // // //         {/* Menu */}
// // // // // // //         <ul className="hidden md:flex items-center gap-8 text-[16px]">
// // // // // // //           <li className="cursor-pointer hover:text-[#d4af37]">Home</li>
// // // // // // //           <li className="cursor-pointer hover:text-[#d4af37]">Service</li>
// // // // // // //           <li className="cursor-pointer hover:text-[#d4af37]">Company</li>
// // // // // // //           <li className="cursor-pointer hover:text-[#d4af37]">Career</li>
// // // // // // //           <li>
// // // // // // //             <button className="bg-[#d4af37] text-[#212121] px-6 py-3 rounded-full cursor-pointer hover:opacity-90 transition">
// // // // // // //               Free Guide
// // // // // // //             </button>
// // // // // // //           </li>
// // // // // // //         </ul>

// // // // // // //         {/* Mobile Button (Optional for now) */}
// // // // // // //         <div className="md:hidden">
// // // // // // //           <button className="text-2xl">☰</button>
// // // // // // //         </div>

// // // // // // //       </div>
// // // // // // //     </nav>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Navbar;

// // // // // // import React from "react";
// // // // // // import logo from "../../assets/logo.jpeg";

// // // // // // const Navbar = () => {
// // // // // //   return (
// // // // // //     <nav className="w-full bg-white text-gray-900 fixed top-0 left-0 z-10 shadow-sm">
// // // // // //       <div className="container mx-auto flex items-center justify-between px-6 py-3">

// // // // // //         {/* Logo */}
// // // // // //         <img 
// // // // // //           src={logo} 
// // // // // //           alt="logo" 
// // // // // //           className="w-22 md:w-25"
// // // // // //         />

// // // // // //         {/* Menu */}
// // // // // //         <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">

// // // // // //           <li className="cursor-pointer hover:text-blue-600 transition">
// // // // // //             Home
// // // // // //           </li>

// // // // // //           <li className="cursor-pointer hover:text-blue-600 transition">
// // // // // //             Service
// // // // // //           </li>

// // // // // //           <li className="cursor-pointer hover:text-blue-600 transition">
// // // // // //             Company
// // // // // //           </li>

// // // // // //           <li className="cursor-pointer hover:text-blue-600 transition">
// // // // // //             Career
// // // // // //           </li>

// // // // // //           <li>
// // // // // //             <button className="bg-blue-600 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-blue-700 transition">
// // // // // //               Free Guide
// // // // // //             </button>
// // // // // //           </li>

// // // // // //         </ul>

// // // // // //         {/* Mobile Button */}
// // // // // //         <div className="md:hidden text-2xl cursor-pointer">
// // // // // //           ☰
// // // // // //         </div>

// // // // // //       </div>
// // // // // //     </nav>
// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;




// // import React from "react";
// // import { Link } from "react-router-dom";  // ✅ ADD THIS
// // import logo from "../../assets/logo.jpeg";

// // const Navbar = () => {
// //   return (
// //     <nav className="w-full bg-white text-gray-900 fixed top-0 left-0 z-10 shadow-sm">
// //       <div className="container mx-auto flex items-center justify-between px-6 py-3">

// //         {/* Logo */}
// //         <Link to="/">
// //           <img 
// //             src={logo} 
// //             alt="logo" 
// //             className="w-22 md:w-25"
// //           />
// //         </Link>

// //         {/* Menu */}
// //         <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">

// //           <li>
// //             <Link to="/" className="hover:text-blue-600 transition">
// //               Home
// //             </Link>
// //           </li>

// //           <li>
// //             <Link to="/website-development" className="hover:text-blue-600 transition">
// //               Service
// //             </Link>
// //           </li>

// //           <li>
// //             <Link to="/about" className="hover:text-blue-600 transition">
// //               Company
// //             </Link>
// //           </li>

// //           <li>
// //             <Link to="/career" className="hover:text-blue-600 transition">
// //               Career
// //             </Link>
// //           </li>

// //           <li>
// //             <Link to="/contact-us">
// //               <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
// //                 Free Guide
// //               </button>
// //             </Link>
// //           </li>

// //         </ul>

// //         {/* Mobile Button */}
// //         <div className="md:hidden text-2xl cursor-pointer">
// //           ☰
// //         </div>

// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.jpeg";

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(null);
//   const [openSubMenu, setOpenSubMenu] = useState(null);

//   return (
//     <nav className="w-full bg-white fixed top-0 left-0 z-50 shadow-md">
//       <div className="container mx-auto flex items-center justify-between px-6 py-3">

//         {/* Logo */}
//         <Link to="/">
//           <img src={logo} alt="logo" className="w-24" />
//         </Link>

//         {/* Menu */}
//         <ul className="hidden md:flex items-center gap-8 font-medium">

//           <li>
//             <Link to="/" className="hover:text-blue-600">
//               Home
//             </Link>
//           </li>

//           {/* SERVICES DROPDOWN */}
//           <li
//             className="relative"
//             onMouseEnter={() => setOpenMenu("services")}
//             onMouseLeave={() => {
//               setOpenMenu(null);
//               setOpenSubMenu(null);
//             }}
//           >
//             <span className="cursor-pointer hover:text-blue-600">
//               Services ▾
//             </span>

//             {/* MAIN DROPDOWN */}
//             {openMenu === "services" && (
//               <div className="absolute top-10 left-0 bg-white shadow-xl rounded-xl p-6 w-[260px]">

//                 {/* DEVELOPMENT */}
//                 <div
//                   onMouseEnter={() => setOpenSubMenu("development")}
//                   className="relative p-2 hover:bg-gray-100 rounded-md cursor-pointer"
//                 >
//                   Development ▶

//                   {/* SUB MENU */}
//                   {openSubMenu === "development" && (
//                     <div className="absolute top-0 left-[100%] ml-2 bg-white shadow-xl rounded-xl p-4 w-[220px]">
//                       <Link to="/website-development" className="block p-2 hover:bg-gray-100 rounded">
//                         Website Development
//                       </Link>
//                       <Link to="/game-application" className="block p-2 hover:bg-gray-100 rounded">
//                         Game Development
//                       </Link>
//                       <Link to="/mobile-application" className="block p-2 hover:bg-gray-100 rounded">
//                         Mobile Application Development
//                       </Link>
//                     </div>
//                   )}
//                 </div>


//                   <div
//                   onMouseEnter={() => setOpenSubMenu("advertisement & e-Commerce")}
//                   className="relative p-2 hover:bg-gray-100 rounded-md cursor-pointer"
//                 >
//                    Advertisement & E-Commerce 

//                   {/* SUB MENU */}
//                   {openSubMenu === " advertisement & e-Commerce" && (
//                     <div className="absolute top-0 left-[100%] ml-2 bg-white shadow-xl rounded-xl p-4 w-[220px]">
//                       <Link to="/e-commerce" className="block p-2 hover:bg-gray-100 rounded">
//                         E-commerce
//                       </Link>

//                     </div>
//                   )}
//                 </div>

//                 {/* OTHER OPTIONS */}
//                 {/* <Link to="/advertisement" className="block p-2 hover:bg-gray-100 rounded">
//                   Advertisement & E-Commerce
//                 </Link> */}

//                 <Link to="/design" className="block p-2 hover:bg-gray-100 rounded">
//                   Ideas & Design
//                 </Link>

//                 <Link to="/security" className="block p-2 hover:bg-gray-100 rounded">
//                   Security
//                 </Link>

//                 <Link to="/it-services" className="block p-2 hover:bg-gray-100 rounded">
//                   IT Services
//                 </Link>

//               </div>
//             )}
//           </li>

//           <li>
//             <Link to="/about" className="hover:text-blue-600">
//               Company
//             </Link>
//           </li>

//           <li>
//             <Link to="/career" className="hover:text-blue-600">
//               Career
//             </Link>
//           </li>

//           <li>
//             <Link to="/contact-us">
//               <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
//                 Free Guide
//               </button>
//             </Link>
//           </li>

//         </ul>

//         {/* Mobile */}
//         <div className="md:hidden text-2xl">☰</div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;












import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  return (
    <nav className="w-full bg-white fixed top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-24" />
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-medium">

          <li>
            <Link to="/" className="hover:text-blue-600">Home</Link>
          </li>

          {/* SERVICES */}
          <li
            className="relative"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => {
              setOpenMenu(null);
              setOpenSubMenu(null);
            }}
          >
            <span className="cursor-pointer hover:text-blue-600">
              Services 
            </span>

            {openMenu === "services" && (
              <div className="absolute top-10 left-0 bg-white shadow-xl rounded-xl p-6 w-[260px]">

                {/* DEVELOPMENT */}
                <div
                  onMouseEnter={() => setOpenSubMenu("development")}
                  className="relative p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  Development 

                  {openSubMenu === "development" && (
                    <div className="absolute top-0 left-full ml-2 bg-white shadow-xl rounded-xl p-4 w-[220px]">
                      <Link to="/website-development" className="block p-2 hover:bg-gray-100 rounded">
                        Website Development
                      </Link>
                      <Link to="/game-application" className="block p-2 hover:bg-gray-100 rounded">
                        Game Development
                      </Link>
                      <Link to="/mobile-application" className="block p-2 hover:bg-gray-100 rounded">
                        Mobile Application Development
                      </Link>
                    </div>
                  )}
                </div>

                {/* ADVERTISEMENT */}
                <div
                  onMouseEnter={() => setOpenSubMenu("advertisement")}
                  className="relative p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  Advertisement & E-Commerce 

                  {openSubMenu === "advertisement" && (
                    <div className="absolute top-0 left-full ml-2 bg-white shadow-xl rounded-xl p-4 w-[220px]">
                      <Link to="/e-commerce" className="block p-2 hover:bg-gray-100 rounded">
                        E-commerce
                      </Link>
                    </div>
                  )}
                </div>

                {/* DESIGN */}
                <div
                  onMouseEnter={() => setOpenSubMenu("design")}
                  className="relative p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  Ideas & Design 

                  {openSubMenu === "design" && (
                    <div className="absolute top-0 left-full ml-2 bg-white shadow-xl rounded-xl p-4 w-[220px]">
                      <Link to="/ui-ux-design" className="block p-2 hover:bg-gray-100 rounded">
                        UI/UX Design
                      </Link>
                    </div>
                  )}
                </div>

                {/* SECURITY */}
                <div
                  onMouseEnter={() => setOpenSubMenu("security")}
                  className="relative p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  Security 

                  {openSubMenu === "security" && (
                    <div className="absolute top-0 left-full ml-2 bg-white shadow-xl rounded-xl p-4 w-[220px]">
                      <Link to="/cyber-security" className="block p-2 hover:bg-gray-100 rounded">
                        Cyber Security
                      </Link>
                      <Link to="/database" className="block p-2 hover:bg-gray-100 rounded">
                        Database
                      </Link>
                    </div>
                  )}
                </div>

                {/* IT SERVICES */}
                <div
                  onMouseEnter={() => setOpenSubMenu("it-services")}
                  className="relative p-2 hover:bg-gray-100 rounded-md cursor-pointer"
                >
                  IT Services 

                  {openSubMenu === "it-services" && (
                    <div className="absolute top-0 left-full ml-2 bg-white shadow-xl rounded-xl p-4 w-[220px]">
                      <Link to="/temporary-staffing" className="block p-2 hover:bg-gray-100 rounded">
                        IT Staffing (Temporary)
                      </Link>
                      <Link to="/permanent-staffing" className="block p-2 hover:bg-gray-100 rounded">
                        IT Staffing (Permanent)
                      </Link>
                    </div>
                  )}
                </div>

              </div>
            )}
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-600">Company</Link>
          </li>

          <li>
            <Link to="/career" className="hover:text-blue-600">Career</Link>
          </li>

          <li>
            <Link to="/contact-us">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                Free Guide
              </button>
            </Link>
          </li>

        </ul>

        <div className="md:hidden text-2xl">☰</div>
      </div>
    </nav>
  );
};

export default Navbar;