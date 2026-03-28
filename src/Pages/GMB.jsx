// import React from "react";

// const GMB = () => {
//   return (
//     <div className="pt-24 px-6 md:px-20 pb-16">

//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold">Google My Business</h1>
//         <p className="text-gray-600 mt-3">
//           Improve your local presence and attract more customers.
//         </p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-6">
//         {["Visibility","Reviews","Insights"].map((t,i)=>(
//           <div key={i} className="bg-white p-6 rounded-xl shadow">
//             <h3 className="text-blue-600 font-semibold">{t}</h3>
//             <p className="text-sm text-gray-500 mt-2">
//               Grow your business with local SEO tools.
//             </p>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// };

// export default GMB;










import React, { useEffect } from "react";
import { FaMapMarkerAlt, FaStar, FaChartLine } from "react-icons/fa";

const GMB = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <FaMapMarkerAlt className="text-blue-600 text-3xl mb-3" />,
      title: "Visibility",
      desc: "Increase your business visibility on Google Search and Maps."
    },
    {
      icon: <FaStar className="text-yellow-500 text-3xl mb-3" />,
      title: "Reviews",
      desc: "Build trust with positive customer reviews and ratings."
    },
    {
      icon: <FaChartLine className="text-green-500 text-3xl mb-3" />,
      title: "Insights",
      desc: "Track performance and understand customer behavior."
    }
  ];

  return (
    <div className="pt-10 px-4 md:px-16 lg:px-28 bg-gradient-to-b from-gray-50 to-white min-h-screen">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Google My Business
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Improve your local presence and attract more customers with optimized Google Business profiles.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
            >
              {item.icon}

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Extra Section (to match other pages 🔥) */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why GMB Matters?
            </h2>

            <p className="text-gray-600 mb-4">
              A well-optimized Google Business profile helps customers find you easily,
              trust your brand, and engage with your services.
            </p>

            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-500 text-sm" />
                Higher local search rankings
              </li>
              <li className="flex items-center gap-2">
                <FaStar className="text-yellow-500 text-sm" />
                Better customer trust & reviews
              </li>
              <li className="flex items-center gap-2">
                <FaChartLine className="text-green-500 text-sm" />
                Data-driven business insights
              </li>
            </ul>
          </div>

          {/* Right Box */}
          <div className="bg-blue-100 p-8 rounded-2xl text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Boost Your Local Presence
            </h3>

            <p className="text-gray-600">
              Get discovered by more customers and grow your business locally with our GMB expertise.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default GMB;