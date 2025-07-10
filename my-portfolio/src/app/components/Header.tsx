'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile-img.jpg';
import { Github, Linkedin, Mail, ExternalLink, PenLine, ArrowDown } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const Header = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gray-100 opacity-30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-gray-50 opacity-40 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24">
        <motion.div
          className="max-w-full sm:max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Image */}
          <motion.div
            className="mt-8 mb-10"
            variants={itemVariants}
          >
            <motion.div
              className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full border-2 border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center group hover:border-gray-300 transition-all duration-500 relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src={profilePic}
                alt="Yasith Rashan"
                fill
                quality={100}
                className="object-cover"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 128px"
              />
            </motion.div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            className="mb-12 space-y-4"
            variants={itemVariants}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.span
                className="block font-medium"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Yasith
              </motion.span>
              <motion.span
                className="block text-gray-500"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Rashan
              </motion.span>
            </motion.h1>

            <motion.div
              className="flex items-center justify-center space-x-3"
              variants={itemVariants}
            >
              <motion.div
                className="h-px bg-gray-300 w-12 sm:w-16"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              />
              <p className="text-sm sm:text-base text-gray-600 font-light tracking-wide uppercase">
                Software Engineer Intern @wso2
              </p>
              <motion.div
                className="h-px bg-gray-300 w-12 sm:w-16"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="mb-12 max-w-full sm:max-w-xl mx-auto px-4 sm:px-0"
            variants={itemVariants}
          >
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
              I engineer intelligent digital solutions with precision and creativity.
              Passionate about software craftsmanship and the transformative power of AI,
              I specialize in building scalable, human-centered applications that solve real-world problems.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mb-12 px-4 sm:px-0"
            variants={itemVariants}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-xl mx-auto">
              {[
                { number: "20+", label: "Projects" },
                { number: "3+", label: "Years" },
                { number: "15+", label: "Technologies" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="text-2xl sm:text-3xl font-light mb-1 group-hover:text-gray-700 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="mb-12 px-4 sm:px-0"
            variants={itemVariants}
          >
            <motion.div
              className="flex flex-wrap justify-center gap-3 max-w-md mx-auto"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 1.6
                  }
                }
              }}
            >
              {['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB'].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 border border-gray-200 rounded-full text-xs sm:text-sm text-gray-600 hover:border-gray-300 hover:text-gray-800 transition cursor-default"
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { scale: 1, opacity: 1 }
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="mb-12 space-y-2 text-center"
            variants={itemVariants}
          >
            <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">Based in Sri Lanka</div>
            <div className="text-gray-700 text-sm sm:text-base">yasithrashan.online</div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mb-12 px-4 sm:px-0"
            variants={itemVariants}
          >
            <motion.div
              className="flex flex-wrap justify-center gap-4 max-w-xs mx-auto"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 2
                  }
                }
              }}
            >
              {[{
                href: 'https://github.com/yasithrashan',
                icon: <Github className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />,
                label: 'GitHub'
              }, {
                href: 'https://linkedin.com/in/yasith-rashan-a44b54295/',
                icon: <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />,
                label: 'LinkedIn'
              }, {
                href: 'mailto:@gmail.com',
                icon: <Mail className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />,
                label: 'Email'
              }, {
                href: 'https://yasithrashan.online',
                icon: <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />,
                label: 'Website'
              }, {
                href: 'https://medium.com/@yasithrashan',
                icon: <PenLine className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />,
                label: 'Medium'
              }, {
                href: 'https://instagram.com/yxsiya',
                icon: <FaInstagram className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />,
                label: 'Instagram'
              }, {
                href: 'https://facebook.com/profile.php?id=100087673762639',
                icon: <FaFacebookF className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />,
                label: 'Facebook'
              }, {
                href: 'https://x.com/yxsiya',
                icon: <FaXTwitter className="w-5 h-5 text-gray-500 group-hover:text-gray-900" />,
                label: 'X'
              }].map(({ href, icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:border-gray-300 hover:bg-gray-50 transition group"
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { scale: 1, opacity: 1 }
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="mb-12 px-4 sm:px-0"
            variants={itemVariants}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xs mx-auto">
              <motion.button
                onClick={scrollToProjects}
                className="px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
              <motion.button
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 hover:border-gray-400 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="animate-bounce"
            variants={itemVariants}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowDown className="w-6 h-6 mx-auto text-gray-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Lines */}
      <motion.div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      </motion.div>
      <motion.div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      </motion.div>
    </div>
  );
};

export default Header;
