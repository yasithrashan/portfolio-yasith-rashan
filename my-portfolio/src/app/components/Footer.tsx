'use client';

import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10 py-6">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h3 className="text-lg font-semibold mb-1">Yasith Rashan</h3>
        <p className="text-white/60 text-xs uppercase mb-3">Software Engineer Intern</p>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center space-x-1 text-white/50 hover:text-white text-xs transition-colors mb-6"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3 h-3" />
        </button>

        <div className="text-white/40 text-xs flex justify-center items-center space-x-1">
          <span>© {currentYear} Yasith Rashan. Made with</span>
          <Heart className="w-3 h-3 text-red-500 animate-pulse" />
          <span>in Sri Lanka</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
