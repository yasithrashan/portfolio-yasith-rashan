'use client';

import React from 'react';
import Image from 'next/image';
import profilePic from '../assets/profile-img.jpg'; 

import { Github, Linkedin, Mail, ExternalLink, PenLine, ArrowDown } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-white opacity-3 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-full sm:max-w-4xl text-center">

          {/* Profile Image */}
          <div className="mt-8 mb-10">
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full border-2 border-white/20 overflow-hidden backdrop-blur-sm bg-white/5 flex items-center justify-center group hover:border-white/40 transition-all duration-500 relative">
              <Image
                src={profilePic}
                alt="Yasith Rashan"
                fill
                quality={100}
                className="object-cover"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 128px"
              />
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-12 space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              <span className="block">Yasith</span>
              <span className="block text-white/60">Rashan</span>
            </h1>

            <div className="flex items-center justify-center space-x-3">
              <div className="h-px bg-white/20 w-12 sm:w-16"></div>
              <p className="text-sm sm:text-base text-white/80 font-light tracking-wide uppercase">
                Software Engineer Intern
              </p>
              <div className="h-px bg-white/20 w-12 sm:w-16"></div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12 max-w-full sm:max-w-xl mx-auto px-4 sm:px-0">
            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
              I engineer intelligent digital solutions with precision and creativity.
              Passionate about software craftsmanship and the transformative power of AI,
              I specialize in building scalable, human-centered applications that solve real-world problems.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 px-4 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-xl mx-auto">
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold mb-1 group-hover:text-white/90 transition-colors">20+</div>
                <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold mb-1 group-hover:text-white/90 transition-colors">3+</div>
                <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider">Years</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold mb-1 group-hover:text-white/90 transition-colors">15+</div>
                <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider">Technologies</div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-12 px-4 sm:px-0">
            <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
              {['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-white/20 rounded-full text-xs sm:text-sm text-white/70 hover:border-white/40 hover:text-white transition cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="mb-12 space-y-2 text-center">
            <div className="text-white/60 text-xs sm:text-sm uppercase tracking-wider">Based in Sri Lanka</div>
            <div className="text-white/80 text-sm sm:text-base">yasithrashan.online</div>
          </div>

          {/* Social Links */}
          <div className="mb-12 px-4 sm:px-0">
            <div className="flex flex-wrap justify-center gap-4 max-w-xs mx-auto">
              {[{
                href: 'https://github.com/yasithrashan',
                icon: <Github className="w-5 h-5 text-white/60 group-hover:text-white" />,
                label: 'GitHub'
              }, {
                href: 'https://linkedin.com/in/yasith-rashan-a44b54295/',
                icon: <Linkedin className="w-5 h-5 text-white/60 group-hover:text-white" />,
                label: 'LinkedIn'
              }, {
                href: 'mailto:@gmail.com',
                icon: <Mail className="w-5 h-5 text-white/60 group-hover:text-white" />,
                label: 'Email'
              }, {
                href: 'https://yasithrashan.online',
                icon: <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white" />,
                label: 'Website'
              }, {
                href: 'https://medium.com/@yasithrashan',
                icon: <PenLine className="w-5 h-5 text-white/60 group-hover:text-white" />,
                label: 'Medium'
              }, {
                href: 'https://instagram.com/yxsiya',
                icon: <FaInstagram className="w-5 h-5 text-white/60 group-hover:text-white" />,
                label: 'Instagram'
              }, {
                href: 'https://facebook.com/profile.php?id=100087673762639',
                icon: <FaFacebookF className="w-5 h-5 text-white/60 group-hover:text-white" />,
                label: 'Facebook'
              }, {
                href: 'https://x.com/yxsiya',
                icon: <FaXTwitter className="w-5 h-5 text-white/60 group-hover:text-white" />,
                label: 'X'
              }].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:border-white/60 hover:bg-white/5 transition"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mb-12 px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xs mx-auto">
              <button 
                onClick={scrollToProjects}
                className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition transform hover:scale-105"
              >
                View Projects
              </button>
              <button className="px-6 py-3 border border-white/40 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/60 transition">
                Download CV
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-white/40" />
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      </div>
    </div>
  );
};

export default HeroSection;