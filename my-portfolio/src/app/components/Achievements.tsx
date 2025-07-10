'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const achievements = [
  {
    id: 1,
    title: "Hult Prize 2025 Participant",
    description: "Contributed to a social entrepreneurship project in the Hult Prize 2025 competition",
    date: "2025"
  },
  {
    id: 2,
    title: "Foundation Certificate Merit Pass",
    description: "Awarded Merit Pass in Foundation Certificate in Higher Education for academic excellence",
    date: "2024"
  },
  {
    id: 3,
    title: "IEEE Member",
    description: "Active member of the Institute of Electrical and Electronics Engineers (IEEE)",
    date: "2024"
  },
  {
    id: 4,
    title: "CodeSprint 8.0 Participant",
    description: "Participated in CodeSprint 8.0, showcasing problem-solving and coding skills in a competitive setting",
    date: "2024"
  }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  } as const;

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <div className="bg-white text-gray-900 relative overflow-hidden" ref={ref}>
      {/* Main Content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 py-24">
        <motion.div
          className="max-w-full sm:max-w-4xl w-full mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >

          {/* Section Header */}
          <motion.div
            className="mb-16"
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
                Recognition
              </p>
              <motion.div
                className="h-px bg-gray-300 w-12 sm:w-16"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block font-medium">Notable</span>
              <span className="block text-gray-500">Achievements</span>
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base text-gray-600 leading-relaxed font-light max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              A collection of academic achievements, recognitions, and milestones
              that demonstrate my commitment to excellence and continuous growth.
            </motion.p>
          </motion.div>

          {/* Notable Achievements Section */}
          <motion.div
            className="mb-16"
            variants={itemVariants}
          >
            <motion.h3
              className="text-xl sm:text-2xl font-medium mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Key Milestones
            </motion.h3>
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="space-y-6"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 1
                    }
                  }
                }}
              >
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    className="flex flex-col sm:flex-row gap-6 group text-left"
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.8,
                          ease: "easeOut"
                        }
                      }
                    }}
                    whileHover={{ x: 10, transition: { duration: 0.3 } }}
                  >
                    {/* Date Column */}
                    <div className="sm:w-32 flex-shrink-0">
                      <span className="text-sm text-gray-500 font-mono">{achievement.date}</span>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 border-l border-gray-200 pl-6 group-hover:border-gray-300 transition-colors">
                      <div className="flex items-start gap-4">
                        {/* Achievement Icon */}
                        <motion.div
                          className="flex-shrink-0 mt-1"
                          whileHover={{
                            rotate: 360,
                            scale: 1.1
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center group-hover:border-gray-300 group-hover:bg-gray-50 transition-all duration-300">
                            <Trophy className="w-4 h-4 text-gray-500 group-hover:text-gray-900 transition-colors" />
                          </div>
                        </motion.div>

                        {/* Achievement Details */}
                        <div className="flex-1 space-y-2">
                          <motion.h4
                            className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors text-sm sm:text-base"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                          >
                            {achievement.title}
                          </motion.h4>
                          <motion.p
                            className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                          >
                            {achievement.description}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
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
    </div>
  );
};

export default Achievements;
