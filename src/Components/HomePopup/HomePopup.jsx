import React, { useState, useEffect } from 'react';
import PopupCard from '../PopupCard';
import { FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';

const HomePopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      icon: <FaRocket />,
      title: "Welcome to KT Technology",
      desc: "Discover our cutting-edge solutions for your business growth and digital transformation.",
    },
    {
      icon: <FaUsers />,
      title: "Our Expert Team",
      desc: "Meet our passionate professionals ready to bring your ideas to life with innovation.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovative Solutions",
      desc: "Explore services like Web Dev, Mobile Apps, ERP, CRM, and more tailored for you.",
    },
  ];

  useEffect(() => {
    // Auto open popup on home page mount
    setIsPopupOpen(true);
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  if (!isPopupOpen) return null;

  const activeCard = cards[currentCard];

  return (
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-[1001] p-4">
      <PopupCard
        icon={activeCard.icon}
        title={activeCard.title}
        desc={activeCard.desc}
        onClose={closePopup}
      />
    </div>
  );
};

export default HomePopup;

