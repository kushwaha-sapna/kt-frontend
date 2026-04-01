import React from "react";
import { FaTimes } from "react-icons/fa";

const PopupCard = ({ icon, title, desc, onClose, className = "" }) => {
  return (
    <div className={`bg-white rounded-xl shadow-2xl p-8 max-w-md w-full transform transition-all duration-300 scale-100 hover:scale-105 ${className}`}>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
      >
        <FaTimes />
      </button>
      
      {/* Icon Box */}
      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center rounded-2xl mx-auto mb-6 text-3xl shadow-lg">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed text-center mb-8">
        {desc}
      </p>

      {/* Action Button */}
      <div className="text-center">
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default PopupCard;

