import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, value }) => {
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 hover:-translate-y-2"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <div className="text-gray-600 text-sm md:text-base font-medium uppercase tracking-wide">
        {title}
      </div>
    </motion.div>
  );
};

export default Card;

