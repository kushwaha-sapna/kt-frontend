// import React from "react";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { FaGamepad, FaMobileAlt, FaVrCardboard } from "react-icons/fa";

// const GameApplication = () => {
//   useEffect(() => {
//       window.scrollTo(0, 0);
//     }, []);
  
//   return (
//     // <div className="pt-30 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-gray-50 to-white min-h-screen">
//     <div className="pt-10 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-gray-50 to-white min-h-screen">

//       {/* Heading */}
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
//           Game Application Development
//         </h1>

//         {/* Description */}
//         <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
//           We create engaging, high-performance game applications designed to deliver
//           immersive experiences across mobile, web, and next-gen platforms.
//         </p>

//         {/* Cards Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

//           {/* Card 1 */}
//           <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
//             <FaGamepad className="text-purple-600 text-4xl mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-3">
//               Game Design
//             </h3>
//             <p className="text-gray-600">
//               Creative and interactive game design with engaging UI/UX and captivating gameplay.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
//             <FaMobileAlt className="text-blue-600 text-4xl mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-3">
//               Mobile Games
//             </h3>
//             <p className="text-gray-600">
//               High-performance Android and iOS games optimized for smooth and responsive gameplay.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
//             <FaVrCardboard className="text-pink-600 text-4xl mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold text-gray-800 mb-3">
//               AR/VR Games
//             </h3>
//             <p className="text-gray-600">
//               Immersive augmented and virtual reality gaming experiences using cutting-edge technology.
//             </p>
//           </div>

//         </div>

//         {/* Extra Section */}
//         <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          
//           <div>
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//               Why Choose Our Game Solutions?
//             </h2>
//             <p className="text-gray-600 mb-4">
//               Our team combines creativity with advanced technology to build games
//               that stand out in today’s competitive market.
//             </p>
//             <ul className="text-gray-600 space-y-2">
//               <li>✔ Smooth performance & optimization</li>
//               <li>✔ Cross-platform compatibility</li>
//               <li>✔ Engaging user experience</li>
//               <li>✔ Scalable and future-ready solutions</li>
//             </ul>
//           </div>

//           <div className="bg-purple-100 p-8 rounded-2xl text-center">
//             <h3 className="text-xl font-semibold text-gray-800 mb-3">
//               Ready to Build Your Game?
//             </h3>
//             <p className="text-gray-600 mb-6">
//               Let’s turn your game idea into reality with our expert development team.
//             </p>

//             <Link
//               to="/contact-us"
//               className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 hover:scale-105 transition-all duration-300 inline-block"
//             >
//               Get Started
//             </Link>
//           </div>

//         </div>

//         {/* CTA Section */}
//         <div className="mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-12 rounded-2xl shadow-lg">
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">
//             Let’s Build the Next Big Game
//           </h2>
//           <p className="mb-6">
//             Partner with us to create innovative and engaging gaming experiences.
//           </p>

//           <Link
//             to="/contact-us"
//             className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-block"
//           >
//             Contact Us
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default GameApplication;











import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaGamepad,
  FaMobileAlt,
  FaVrCardboard,
  FaCheckCircle
} from "react-icons/fa";

const GameApplication = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-10 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-gray-50 to-white min-h-screen">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Game Application Development
        </h1>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
          We create engaging, high-performance game applications designed to deliver
          immersive experiences across mobile, web, and next-gen platforms.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <FaGamepad className="text-purple-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Game Design
            </h3>
            <p className="text-gray-600">
              Creative and interactive game design with engaging UI/UX and captivating gameplay.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <FaMobileAlt className="text-blue-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Mobile Games
            </h3>
            <p className="text-gray-600">
              High-performance Android and iOS games optimized for smooth and responsive gameplay.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
            <FaVrCardboard className="text-pink-600 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              AR/VR Games
            </h3>
            <p className="text-gray-600">
              Immersive augmented and virtual reality gaming experiences using cutting-edge technology.
            </p>
          </div>

        </div>

        {/* Extra Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Game Solutions?
            </h2>

            <p className="text-gray-600 mb-4">
              Our team combines creativity with advanced technology to build games
              that stand out in today’s competitive market.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500 text-sm" />
                Smooth performance & optimization
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500 text-sm" />
                Cross-platform compatibility
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500 text-sm" />
                Engaging user experience
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500 text-sm" />
                Scalable and future-ready solutions
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="bg-purple-100 p-8 rounded-2xl text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Ready to Build Your Game?
            </h3>

            <p className="text-gray-600 mb-6">
              Let’s turn your game idea into reality with our expert development team.
            </p>

            <Link
              to="/contact-us"
              className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 hover:scale-105 transition-all duration-300 inline-block"
            >
              Get Started
            </Link>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-12 rounded-2xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Let’s Build the Next Big Game
          </h2>

          <p className="mb-6">
            Partner with us to create innovative and engaging gaming experiences.
          </p>

          <Link
            to="/contact-us"
            className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-block"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
};

export default GameApplication;