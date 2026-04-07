// import React from "react";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// const Cybersecurity = () => {
//   useEffect(() => {
//       window.scrollTo(0, 0);
//     }, []);
  
//   return (
    
//     <div className="pt-10 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-gray-50 to-white min-h-screen">

    
//       {/* Heading */}
//        <div className="text-center mb-16">
//       <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//         Cybersecurity Services
//       </h1>

//       {/* Description */}
//       <p className="text-gray-600 max-w-2xl  mx-auto mb-16">
//         Protect your systems, data, and digital infrastructure with our advanced
//         cybersecurity solutions. We help businesses stay secure against modern
//         cyber threats.
//       </p>
//       </div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//         {/* Card 1 */}
//         <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold text-gray-800 mb-3">
//             Network Security
//           </h3>
//           <p className="text-gray-600">
//             Secure your network with firewalls, monitoring, and intrusion detection systems.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold text-gray-800 mb-3">
//             Data Protection
//           </h3>
//           <p className="text-gray-600">
//             Protect sensitive data using encryption, backups, and secure storage solutions.
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold text-gray-800 mb-3">
//             Risk Assessment
//           </h3>
//           <p className="text-gray-600">
//             Identify vulnerabilities and improve your system security with expert analysis.
//           </p>
//         </div>

//       </div>

//       {/* CTA Section */}
//       <div className="mt-16 bg-blue-600 text-white text-center py-10 rounded-xl">
//         <h2 className="text-2xl md:text-3xl font-bold mb-4">
//           Secure Your Business Today
//         </h2>
//         <p className="mb-6">
//           Get expert cybersecurity solutions tailored to your needs.
//         </p>
       
//         <Link 
//   to="/contact-us" 
//   className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block"
// >
//   Contact Us
// </Link>
//       </div>

//     </div>
//   );
// };

// export default Cybersecurity;















import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Cybersecurity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-[100vh] pt-6 md:pt-10 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-gray-50 to-white">

      {/* Main Content */}
      <div className="flex-1">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Cybersecurity Services
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Protect your systems, data, and digital infrastructure with our advanced
            cybersecurity solutions. We help businesses stay secure against modern
            cyber threats.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* Card 1 */}
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              Network Security
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Secure your network with firewalls, monitoring, and intrusion detection systems.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              Data Protection
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Protect sensitive data using encryption, backups, and secure storage solutions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-5 md:p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 md:mb-3">
              Risk Assessment
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Identify vulnerabilities and improve your system security with expert analysis.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 bg-blue-600 text-white text-center py-8 md:py-10 rounded-xl">
          <h2 className="text-xl md:text-3xl font-bold mb-4">
            Secure Your Business Today
          </h2>

          <p className="mb-6 text-sm md:text-base">
            Get expert cybersecurity solutions tailored to your needs.
          </p>

          <Link
            to="/contact-us"
            className="bg-white text-blue-600 px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Cybersecurity;