// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaFileContract,
//   FaUserCheck,
//   FaBan,
//   FaCopyright,
//   FaExternalLinkAlt,
//   FaExclamationTriangle,
//   FaInfoCircle
// } from "react-icons/fa";

// const TermsAndCondition = () => {

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const sections = [
//     {
//       icon: <FaFileContract />,
//       title: "Overview",
//       content:
//         "By accessing and using our website, you agree to comply with these terms and conditions. These terms form a legally binding agreement between you and our company. You must be at least 18 years old to use this platform."
//     },
//     {
//       icon: <FaUserCheck />,
//       title: "Website Access",
//       content:
//         "We provide you with limited, non-exclusive access to use this website for personal and non-commercial purposes only.",
//       list: [
//         "Do not sell, rent, or commercially exploit the website",
//         "Do not modify or copy any content",
//         "Do not reverse engineer or extract source code",
//         "Do not create competing platforms"
//       ]
//     },
//     {
//       icon: <FaCopyright />,
//       title: "Intellectual Property",
//       content:
//         "All content on this website including text, graphics, and software is owned by the company or its licensors and is protected by intellectual property laws."
//     },
//     {
//       icon: <FaExternalLinkAlt />,
//       title: "External Links",
//       content:
//         "Our website may include links to third-party platforms. We are not responsible for their content, policies, or services."
//     },
//     {
//       icon: <FaExclamationTriangle />,
//       title: "Important Notice",
//       content:
//         "When accessing third-party links, you do so at your own risk. We recommend reviewing their policies before engaging with them."
//     },
//     {
//       icon: <FaInfoCircle />,
//       title: "Disclaimer",
//       content:
//         "The website is provided on an 'as is' and 'as available' basis. We do not guarantee uninterrupted service, accuracy, or reliability at all times."
//     },
//     {
//       icon: <FaBan />,
//       title: "Limitation of Liability",
//       content:
//         "We are not responsible for any direct or indirect damages, including data loss, revenue loss, or service interruptions resulting from your use of the website."
//     }
//   ];

//   return (
//     <div className="bg-gray-50 min-h-screen pt-10">

//       {/* HERO */}
//       <div className="text-center py-16 px-4 bg-gradient-to-r from-indigo-600 to-blue-600">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
//           Terms & Conditions
//         </h1>
//         <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
//           Please read these terms carefully before using our services.
//         </p>
//       </div>

//       {/* ✅ SAME STYLE CARDS (LINE BY LINE) */}
//       <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 space-y-6">

//         {sections.map((section, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
//           >
//             {/* Icon + Title */}
//             <div className="flex items-center gap-3 mb-3">
//               <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg text-xl">
//                 {section.icon}
//               </div>
//               <h2 className="text-lg font-semibold text-gray-800">
//                 {section.title}
//               </h2>
//             </div>

//             {/* Content */}
//             <p className="text-gray-600 text-sm leading-relaxed">
//               {section.content}
//             </p>

//             {/* List */}
//             {section.list && (
//               <ul className="mt-3 space-y-2 text-gray-600 text-sm">
//                 {section.list.map((item, i) => (
//                   <li key={i} className="flex gap-2">
//                     <span className="text-indigo-500">•</span>
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}

//       </div>

//       {/* CTA */}
//       <div className="text-center pb-12">
//         <p className="text-gray-600 mb-4">
//           Have questions about our terms?
//         </p>
//         <Link  to="/contact-us"className="bg-indigo-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-indigo-700 hover:scale-105 transition">
//           Contact Us
//         </Link>
//       </div>

//     </div>
//   );
// };

// export default TermsAndCondition;



import React from "react";
import { Link } from "react-router-dom";
import {
  FaFileContract,
  FaUserCheck,
  FaBan,
  FaCopyright,
  FaExternalLinkAlt,
  FaExclamationTriangle,
  FaInfoCircle,
  FaCheckCircle
} from "react-icons/fa";

const TermsAndCondition = () => {

  const sections = [
    {
      icon: <FaFileContract />,
      title: "Overview",
      content:
        "By accessing and using our website, you agree to comply with these terms and conditions. These terms form a legally binding agreement between you and our company. You must be at least 18 years old to use this platform."
    },
    {
      icon: <FaUserCheck />,
      title: "Website Access",
      content:
        "We provide you with limited, non-exclusive access to use this website for personal and non-commercial purposes only.",
      list: [
        "Do not sell, rent, or commercially exploit the website",
        "Do not modify or copy any content",
        "Do not reverse engineer or extract source code",
        "Do not create competing platforms"
      ]
    },
    {
      icon: <FaCopyright />,
      title: "Intellectual Property",
      content:
        "All content on this website including text, graphics, and software is owned by the company or its licensors and is protected by intellectual property laws."
    },
    {
      icon: <FaExternalLinkAlt />,
      title: "External Links",
      content:
        "Our website may include links to third-party platforms. We are not responsible for their content, policies, or services."
    },
    {
      icon: <FaExclamationTriangle />,
      title: "Important Notice",
      content:
        "When accessing third-party links, you do so at your own risk. We recommend reviewing their policies before engaging with them."
    },
    {
      icon: <FaInfoCircle />,
      title: "Disclaimer",
      content:
        "The website is provided on an 'as is' and 'as available' basis. We do not guarantee uninterrupted service, accuracy, or reliability at all times."
    },
    {
      icon: <FaBan />,
      title: "Limitation of Liability",
      content:
        "We are not responsible for any direct or indirect damages, including data loss, revenue loss, or service interruptions resulting from your use of the website."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-10">

      {/* HERO */}
      <div className="text-center py-16 px-4 bg-gradient-to-r from-indigo-600 to-blue-600">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Terms & Conditions
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Please read these terms carefully before using our services.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 space-y-6">

        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg text-xl">
                {section.icon}
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                {section.title}
              </h2>
            </div>

            {/* Content */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {section.content}
            </p>

            {/* List */}
            {section.list && (
              <ul className="mt-3 space-y-2 text-gray-600 text-sm">
                {section.list.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

      </div>

      {/* CTA */}
      <div className="text-center pb-12">
        <p className="text-gray-600 mb-4">
          Have questions about our terms?
        </p>
        <Link to="/contact-us" className="bg-indigo-600 text-white px-8 py-3 rounded-full shadow-md hover:bg-indigo-700 hover:scale-105 transition">
          Contact Us
        </Link>
      </div>

    </div>
  );
};

export default TermsAndCondition;