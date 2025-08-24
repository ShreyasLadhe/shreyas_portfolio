import React from 'react';
import { motion } from "motion/react";

const RedirectCredlyButtonGCP = () => {
  const credlyUrl = "https://www.credly.com/users/shreyas-ladhegcp";

  const redirectToCredly = () => {
    window.open(credlyUrl, '_blank');
  };

  return (
    <motion.button
      onClick={redirectToCredly}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative w-full px-6 py-3 text-sm font-medium text-white text-center rounded-xl bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-green-500/20 hover:border-green-400/40 cursor-pointer overflow-hidden group"
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      <p className="flex items-center justify-center gap-3 relative z-10">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
        </svg>
        View Credly Profile - GCP
      </p>
    </motion.button>
  );
};

export default RedirectCredlyButtonGCP; 