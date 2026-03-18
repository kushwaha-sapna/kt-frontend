// import React from "react";
// import {
//   FaHospital,
//   FaUniversity,
//   FaShoppingCart,
//   FaHome,
//   FaCogs,
//   FaBriefcase,
//   FaMoneyBillWave,
//   FaLaptop,
// } from "react-icons/fa";

// const IndustriesSection = () => {
//   const services = [
//     { icon: <FaHospital />, title: "Healthcare" },
//     { icon: <FaMoneyBillWave />, title: "Finance" },
//     { icon: <FaUniversity />, title: "Education" },
//     { icon: <FaShoppingCart />, title: "E-commerce" },
//     { icon: <FaHome />, title: "Hospitality" },
//     { icon: <FaBriefcase />, title: "Real Estate" },
//     { icon: <FaCogs />, title: "Automation" },
//     { icon: <FaLaptop />, title: "Consulting" },
//   ];

//   return (
//     <section className="py-16 px-6 bg-gray-50">

//       {/* Title */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold mb-3">
//           Industries We Serve
//         </h2>
//         <p className="text-gray-600">
//           Delivering tailored digital solutions
//         </p>
//       </div>

//       {/* 4 Cards Per Row */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white 
//             rounded-lg 
//             border border-gray-100 
//             shadow-sm 
//             hover:shadow-lg 
//             transition-all duration-300 
//             hover:-translate-y-2 
//             flex flex-col items-center justify-center 
//             text-center p-6 h-56"
//           >

//             {/* Icon */}
//             <div className="w-12 h-12 flex items-center justify-center 
//             bg-[#c79b2c]/10 text-[#c79b2c] 
//             rounded-md text-xl mb-4">
//               {service.icon}
//             </div>

//             {/* Title */}
//             <h3 className="text-lg font-semibold text-gray-800">
//               {service.title}
//             </h3>

//           </div>
//         ))}

//       </div>
//     </section>
//   );
// };

// export default IndustriesSection;



// import React from "react";
// import {
//   FaHospital,
//   FaUniversity,
//   FaShoppingCart,
//   FaHome,
//   FaCogs,
//   FaBriefcase,
//   FaMoneyBillWave,
//   FaLaptop,
// } from "react-icons/fa";

// const IndustriesSection = () => {
//   const services = [
//     { icon: <FaHospital />, title: "Healthcare" },
//     { icon: <FaMoneyBillWave />, title: "Finance" },
//     { icon: <FaUniversity />, title: "Education" },
//     { icon: <FaShoppingCart />, title: "E-commerce" },
//     { icon: <FaHome />, title: "Hospitality" },
//     { icon: <FaBriefcase />, title: "Real Estate" },
//     { icon: <FaCogs />, title: "Automation" },
//     { icon: <FaLaptop />, title: "Consulting" },
//   ];

//   return (
//     <section className="py-16 px-6 bg-gray-50">

//       {/* Title */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold mb-3">
//           Industries We Serve
//         </h2>
//         <p className="text-gray-600">
//           Delivering tailored digital solutions
//         </p>
//       </div>

//       {/* Responsive Grid (No Animation) */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="bg-white 
//             rounded-lg 
//             border border-gray-200 
//             flex flex-col items-center justify-center 
//             text-center p-6 h-56"
//           >

//             {/* Icon */}
//             <div className="w-12 h-12 flex items-center justify-center 
//             bg-[#c79b2c]/10 text-[#c79b2c] 
//             rounded-md text-xl mb-4">
//               {service.icon}
//             </div>

//             {/* Title */}
//             <h3 className="text-lg font-semibold text-gray-800">
//               {service.title}
//             </h3>

//           </div>
//         ))}

//       </div>
//     </section>
//   );
// };

// export default IndustriesSection;










import React from "react";
import {
  FaHospital,
  FaUniversity,
  FaShoppingCart,
  FaHome,
  FaCogs,
  FaBriefcase,
  FaMoneyBillWave,
  FaLaptop,
} from "react-icons/fa";

const IndustriesSection = () => {
  const services = [
    { icon: <FaHospital />, title: "Healthcare" },
    { icon: <FaMoneyBillWave />, title: "Finance" },
    { icon: <FaUniversity />, title: "Education" },
    { icon: <FaShoppingCart />, title: "E-commerce" },
    { icon: <FaHome />, title: "Hospitality" },
    { icon: <FaBriefcase />, title: "Real Estate" },
    { icon: <FaCogs />, title: "Automation" },
    { icon: <FaLaptop />, title: "Consulting" },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Industries We Serve
        </h2>
        <p className="text-gray-600">
          Delivering tailored digital solutions
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white 
            rounded-lg 
            border border-gray-200 
            flex flex-col items-center justify-center 
            text-center p-6 h-56 
            hover:shadow-lg transition duration-300"
          >

            {/* Icon (Blue) */}
            <div className="w-12 h-12 flex items-center justify-center 
            bg-blue-100 text-blue-600 
            rounded-md text-xl mb-4">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-800">
              {service.title}
            </h3>

          </div>
        ))}

      </div>
    </section>
  );
};

export default IndustriesSection;