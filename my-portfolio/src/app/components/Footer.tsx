'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  } as const;

  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200" ref={ref}>
      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 py-24">
        <motion.div
          className="max-w-full sm:max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >

          {/* Footer Header */}
          <motion.div
            className="mb-12"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center justify-center space-x-3 mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="h-px bg-gray-300 w-12 sm:w-16"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <p className="text-sm sm:text-base text-gray-600 font-light tracking-wide uppercase">
                Connect
              </p>
              <motion.div
                className="h-px bg-gray-300 w-12 sm:w-16"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>

            <motion.h3
              className="text-2xl sm:text-3xl font-light tracking-tight leading-tight mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                className="block font-medium"
                initial={{ x: -10, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -10, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Yasith
              </motion.span>
              <motion.span
                className="block text-gray-500"
                initial={{ x: 10, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: 10, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Rashan
              </motion.span>
            </motion.h3>
            <motion.p
              className="text-gray-500 text-sm sm:text-base uppercase tracking-wider font-light"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Software Engineer Intern
            </motion.p>
          </motion.div>

          {/* Back to Top Button */}
          <motion.div
            className="mb-12"
            variants={itemVariants}
          >
            <motion.button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 hover:border-gray-400 transition text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Back to top</span>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowUp className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-gray-500 text-xs sm:text-sm flex justify-center items-center space-x-1 font-light"
            variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              © {currentYear} Yasith Rashan. Made with
            </motion.span>
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              in Sri Lanka
            </motion.span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Lines */}
      <motion.div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      </motion.div>
      <motion.div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      </motion.div>
    </footer>
  );
};

export default Footer;
