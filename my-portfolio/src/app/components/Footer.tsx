'use client';

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, PenLine, Heart, ArrowUp } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Yasith Rashan</h3>
              <p className="text-white/60 text-sm uppercase tracking-wide">Software Engineer Intern</p>
            </div>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              Passionate about crafting intelligent digital solutions that solve real-world problems. 
              Always exploring new technologies and pushing the boundaries of what's possible.
            </p>
            <div className="flex items-center space-x-2 text-white/60">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm">Available for opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-white/90">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Me', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Achievements', href: '#achievements' },
                { label: 'Experience', href: '#experience' }
              ].map(({ label, href }) => (
                <li key={label}>
                  <a 
                    href={href}
                    className="text-white/60 hover:text-white transition-colors text-sm block py-1"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-6 text-white/90">Connect</h4>
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-sm mb-2">Email</p>
                <a 
                  href="" 
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  N/A
                </a>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-2">Location</p>
                <p className="text-white/80 text-sm">Sri Lanka</p>
              </div>
              <div>
                <p className="text-white/60 text-sm mb-2">Website</p>
                <a 
                  href="https://www.yasithrashan.online" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  yasithrashan.online
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-6 sm:mb-0">
            {[{
              href: 'https://github.com/yasithrashan',
              icon: <Github className="w-5 h-5" />,
              label: 'GitHub'
            }, {
              href: 'https://linkedin.com/in/yasith-rashan-a44b54295/',
              icon: <Linkedin className="w-5 h-5" />,
              label: 'LinkedIn'
            }, {
              href: '',
              icon: <Mail className="w-5 h-5" />,
              label: 'Email'
            }, {
              href: 'https://yasithrashan.online',
              icon: <ExternalLink className="w-5 h-5" />,
              label: 'Website'
            }, {
              href: 'https://medium.com/@y.rashan22',
              icon: <PenLine className="w-5 h-5" />,
              label: 'Medium'
            }, {
              href: 'https://instagram.com/yxsiya',
              icon: <FaInstagram className="w-5 h-5" />,
              label: 'Instagram'
            }, {
              href: 'https://facebook.com/profile.php?id=100087673762639',
              icon: <FaFacebookF className="w-5 h-5" />,
              label: 'Facebook'
            }, {
              href: 'https://x.com/yxsiya',
              icon: <FaXTwitter className="w-5 h-5" />,
              label: 'X'
            }].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors group"
          >
            <span className="text-sm">Back to top</span>
            <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/5 transition-all duration-300">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-t border-white/10 text-sm text-white/50">
          <div className="flex items-center space-x-1 mb-4 sm:mb-0">
            <span>© {currentYear} Yasith Rashan. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>in Sri Lanka</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <span>Built with React & Tailwind CSS</span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;