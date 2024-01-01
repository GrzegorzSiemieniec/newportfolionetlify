import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.button
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-6 right-6 bg-[#DCCFED] text-black rounded-full p-2 transition transform hover:scale-150 w-10 h-10`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToTop}
    >
      ↑
    </motion.button>
  );
};

export default BackToTopButton;
