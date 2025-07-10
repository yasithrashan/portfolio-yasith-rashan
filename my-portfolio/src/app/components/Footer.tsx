'use client';

import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-900 border-t border-gray-200">
      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 py-24">
        <div className="max-w-full sm:max-w-4xl mx-auto text-center">

          {/* Footer Header */}
          <div className="mb-12">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="h-px bg-gray-300 w-12 sm:w-16"></div>
              <p className="text-sm sm:text-base text-gray-600 font-light tracking-wide uppercase">
                Connect
              </p>
              <div className="h-px bg-gray-300 w-12 sm:w-16"></div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-light tracking-tight leading-tight mb-4">
              <span className="block font-medium">Yasith</span>
              <span className="block text-gray-500">Rashan</span>
            </h3>
            <p className="text-gray-500 text-sm sm:text-base uppercase tracking-wider font-light">
              Software Engineer Intern
            </p>
          </div>

          {/* Back to Top Button */}
          <div className="mb-12">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 hover:border-gray-400 transition text-sm"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-xs sm:text-sm flex justify-center items-center space-x-1 font-light">
            <span>© {currentYear} Yasith Rashan. Made with</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" />
            <span>in Sri Lanka</span>
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;
