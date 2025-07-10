'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    // Get current scroll position
    const currentScroll = window.pageYOffset;

    // Calculate duration based on scroll distance (min 500ms, max 1500ms)
    const duration = Math.min(Math.max(currentScroll / 3, 500), 1500);

    // Smooth animated scroll to top
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeInOutCubic = (progress: number) => {
        return progress < 0.5
          ? 4 * progress * progress * progress
          : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1;
      };

      const scrollPosition = currentScroll * (1 - easeInOutCubic(progress));
      window.scrollTo(0, scrollPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200">
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-12">
        <div className="max-w-full sm:max-w-4xl mx-auto">

          {/* Back to Top Button */}
          <div className="text-center mb-8">
            <motion.button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 px-4 py-2 text-gray-500 hover:text-gray-900 transition text-sm group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to top</span>
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="group-hover:animate-none"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>

          {/* Simple divider */}
          <div className="border-t border-gray-200 pt-8">

            {/* Copyright */}
            <div className="text-center">
              <div className="text-gray-500 text-sm flex justify-center items-center space-x-1">
                <span>© {currentYear} Yasith Rashan</span>
                <span>•</span>
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>in Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
