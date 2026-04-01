import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloating = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = '91 884 094 5936'; // Replace with actual number
  const message = 'Hello! I am interested in your services.';

  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-[999] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className={`w-16 h-16 bg-green-500 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-green-500/25 group-hover:rotate-12 ${isHovered ? 'animate-pulse' : ''}`}>
          <FaWhatsapp />
        </div>
        {isHovered && (
          <div className="absolute -bottom-12 -right-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm shadow-lg whitespace-nowrap transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            Chat on WhatsApp
          </div>
        )}
      </div>
    </a>
  );
};

export default WhatsAppFloating;

