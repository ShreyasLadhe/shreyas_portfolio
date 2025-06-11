import React from 'react';
import { motion } from "motion/react";

const RedirectCredlyButton = () => {
  const credlyUrl = "https://www.credly.com/users/shreyas-ladhe";

  const redirectToCredly = () => {
    window.open(credlyUrl, '_blank');
  };

  return (
    <motion.button
      onClick={redirectToCredly}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <p className="flex items-center justify-center gap-2">
        View Credly Profile
      </p>
    </motion.button>
  );
};

export default RedirectCredlyButton; 