'use client';

import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10 py-12">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h3 className="text-xl font-bold mb-1">Yasith Rashan</h3>
        <p className="text-white/60 text-sm uppercase mb-4">Software Engineer Intern</p>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors mb-8"
        >
          <span className="text-sm">Back to top</span>
          <ArrowUp className="w-4 h-4" />
        </button>

        <div className="text-white/50 text-sm flex justify-center items-center space-x-2">
          <span>© {currentYear} Yasith Rashan. Made with</span>
          <Heart className="w-4 h-4 text-red-500 animate-pulse" />
          <span>in Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
