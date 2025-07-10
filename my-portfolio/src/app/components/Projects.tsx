'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import ballerinaElastic from '../assets/projects/ballerinax-elasticcloud.png';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      name: "Ballerina Elasticsearch Connector",
      description: "A comprehensive Elasticsearch connector for Ballerina language providing seamless integration with Elasticsearch clusters. Features practical examples, comprehensive setup guides, and build automation with Gradle.",
      technologies: ["Ballerina", "Elasticsearch", "Java", "Docker", "Gradle", "REST API"],
      github: "https://github.com/yasithrashan/module-ballerinax-elasticsearch",
      demo: "",
      image: ballerinaElastic,
      date: "2025"
    }
  ];

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
    <div id="projects" className="bg-white text-gray-900 relative overflow-hidden" ref={ref}>
      {/* Main Content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 py-24">
        <motion.div
          className="max-w-full sm:max-w-4xl mx-auto text-center"
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
                Portfolio
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
              <span className="block font-medium">Featured</span>
              <span className="block text-gray-500">Projects</span>
            </motion.h2>
          </motion.div>

          {/* Projects Section */}
          <motion.div
            className="mb-16"
            variants={itemVariants}
          >
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col lg:flex-row gap-6 group"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Project Image */}
                    <motion.div
                      className="lg:w-80 flex-shrink-0"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative overflow-hidden rounded-lg border border-gray-200 group-hover:border-gray-300 transition-colors">
                        <motion.img
                          src={project.image.src}
                          alt={project.name}
                          className="w-full h-48 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                          initial={{ scale: 1.1 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.8 }}
                        />
                        <div className="absolute inset-0 bg-white/20 group-hover:bg-white/10 transition-colors duration-300"></div>

                        {/* Date Badge */}
                        <motion.div
                          className="absolute top-3 left-3"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.5, delay: 1 }}
                        >
                          <div className="flex items-center space-x-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200">
                            <Calendar className="w-3 h-3 text-gray-600" />
                            <span className="text-xs text-gray-600 font-mono">{project.date}</span>
                          </div>
                        </motion.div>

                        {/* Links Overlay */}
                        <motion.div
                          className="absolute top-3 right-3 flex space-x-2"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.5, delay: 1.2 }}
                        >
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="w-4 h-4" />
                          </motion.a>
                          {project.demo && (
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-all duration-300"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </motion.a>
                          )}
                        </motion.div>
                      </div>
                    </motion.div>

                    {/* Project Content */}
                    <motion.div
                      className="flex-1 border-l border-gray-200 pl-6 group-hover:border-gray-300 transition-colors text-left"
                      initial={{ opacity: 0, x: 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      <motion.h4
                        className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors text-lg sm:text-xl mb-4"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                      >
                        {project.name}
                      </motion.h4>
                      <motion.p
                        className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 group-hover:text-gray-700 transition-colors font-light"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                      >
                        {project.description}
                      </motion.p>

                      {/* Technologies */}
                      <motion.div
                        className="flex flex-wrap gap-2 mb-4"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={{
                          hidden: {},
                          visible: {
                            transition: {
                              staggerChildren: 0.1,
                              delayChildren: 1.4
                            }
                          }
                        }}
                      >
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600 group-hover:border-gray-300 group-hover:text-gray-700 transition-colors"
                            variants={{
                              hidden: { opacity: 0, scale: 0.8 },
                              visible: { opacity: 1, scale: 1 }
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </motion.div>

                      {/* Links for larger screens */}
                      <motion.div
                        className="hidden sm:flex space-x-4"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                      >
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 transition-colors text-sm"
                          whileHover={{ x: 5 }}
                        >
                          <Github className="w-4 h-4" />
                          <span>View Code</span>
                        </motion.a>
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 transition-colors text-sm"
                            whileHover={{ x: 5 }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </motion.a>
                        )}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
          >
            <motion.p
              className="text-gray-600 mb-8 max-w-xl mx-auto text-sm sm:text-base font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              Want to see more of my work or collaborate on a project?
              Check out my GitHub for additional repositories and contributions.
            </motion.p>
            <motion.a
              href="https://github.com/yasithrashan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 hover:border-gray-400 transition"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              <span>View All Projects</span>
            </motion.a>
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

export default Projects;
