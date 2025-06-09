'use client';

import React from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "University Management App - Spacefix",
      description: "A comprehensive university management system enabling seamless student enrollment, course management, and faculty administration.",
      technologies: ["React", "Node.js", "Firebase", "JavaScript"],
      github: "https://github.com/yasithrashan/Spacefix-app",
      demo: "https://www.spacefix.lk/",
      image: "https://images.unsplash.com/photo-1590579491624-f98f36d4c763?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2024",
      featured: true
    },
    {
      name: "Real-Time Event Ticketing System",
      description: "A dynamic event ticketing platform that provides real-time seat availability, secure bookings.",
      technologies: ["Java", "OOP", "Spring Boot", "React"],
      github: "https://github.com/yasithrashan/Real-Time-Event-Ticketing-System",
      demo: "",
      image: "https://images.unsplash.com/photo-1606021643583-b707947f1f02?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2024",
      featured: true
    },
    {
      name: "Personal Portfolio",
      description: "A sleek and responsive personal portfolio website showcasing my projects, skills, and experience, built with React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/yasithrashan/Yasith-Rashan-Portfolio",
      demo: "https://www.yasithrashan.online/",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2025",
      featured: false
    },
    {
      name: "Network Flow Algorithm Implementation",
      description: "An implementation of the Ford-Fulkerson algorithm with the Edmonds-Karp improvement for finding maximum flow in a network. Handles integer capacities and follows the conservation of flow principle.",
      technologies: ["Java", "OOP", "Algorithms", "Data Structures", "Graph Theory"],
      github: "https://github.com/yasithrashan/network-flow-algorithm",
      demo: "",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2025",
      featured: false
    },
    {
      name: "Bookstore RESTful API",
      description: "A comprehensive JAX-RS API for a bookstore application with endpoints for managing books, authors, customers, shopping carts, and orders following REST architectural principles.",
      technologies: ["Java", "JAX-RS", "REST API", "JSON", "Maven", "Java 21"],
      github: "https://github.com/yasithrashan/BookStoreAPIWebApplication",
      demo: "",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "2025",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div id="projects" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-white opacity-3 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-20">
        <div className="max-w-full sm:max-w-7xl w-full">

          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="h-px bg-white/20 w-12 sm:w-16"></div>
              <p className="text-sm sm:text-base text-white/80 font-light tracking-wide uppercase">
                Portfolio
              </p>
              <div className="h-px bg-white/20 w-12 sm:w-16"></div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">
              <span className="block">Featured</span>
              <span className="block text-white/60">Projects</span>
            </h2>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light max-w-2xl mx-auto">
              A showcase of my technical journey through various projects, 
              from full-stack applications to algorithmic implementations.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div key={index} className="group relative">
                  <div className="border border-white/20 rounded-xl overflow-hidden hover:border-white/40 transition-all duration-500 hover:transform hover:scale-[1.02] bg-black/40 backdrop-blur-sm">
                    {/* Project Image */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>

                      {/* Date Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center space-x-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-white/20">
                          <Calendar className="w-3 h-3 text-white/70" />
                          <span className="text-xs text-white/70">{project.date}</span>
                        </div>
                      </div>

                      {/* Links Overlay - Better mobile positioning */}
                      <div className="absolute top-4 right-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-colors"
                        >
                          <Github className="w-4 h-4 text-white" />
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-6">
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-white/90 transition-colors">
                        {project.name}
                      </h3>
                      
                      <p className="text-sm text-white/70 leading-relaxed mb-4 group-hover:text-white/80 transition-colors">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 border border-white/20 rounded text-xs text-white/60 group-hover:border-white/30 group-hover:text-white/70 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects - Improved Layout */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center">Other Projects</h3>
            <div className="space-y-4">
              {otherProjects.map((project, index) => (
                <div key={index} className="group">
                  <div className="border border-white/20 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-300 overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      {/* Project Image - Left side */}
                      <div className="w-full sm:w-48 h-32 sm:h-auto relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                        
                        {/* Date Badge */}
                        <div className="absolute top-2 left-2">
                          <div className="flex items-center space-x-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-white/20">
                            <Calendar className="w-3 h-3 text-white/70" />
                            <span className="text-xs text-white/70">{project.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Project Content - Right side */}
                      <div className="flex-1 p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                          <h4 className="font-semibold mb-2 sm:mb-0 group-hover:text-white/90 transition-colors text-base sm:text-lg">
                            {project.name}
                          </h4>
                          
                          {/* Links - Better positioned for mobile */}
                          <div className="flex space-x-3 sm:space-x-2 mb-3 sm:mb-0">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-1 text-white/50 hover:text-white transition-colors text-sm"
                            >
                              <Github className="w-4 h-4" />
                              <span className="sm:hidden">GitHub</span>
                            </a>
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-1 text-white/50 hover:text-white transition-colors text-sm"
                              >
                                <ExternalLink className="w-4 h-4" />
                                <span className="sm:hidden">Demo</span>
                              </a>
                            )}
                          </div>
                        </div>
                        
                        <p className="text-sm text-white/70 leading-relaxed mb-4 group-hover:text-white/80 transition-colors">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 border border-white/20 rounded text-xs text-white/60 group-hover:border-white/30 group-hover:text-white/70 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Want to see more of my work or collaborate on a project? 
              Check out my GitHub for additional repositories and contributions.
            </p>
            <a
              href="https://github.com/yasithrashan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-white/40 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/60 transition"
            >
              <Github className="w-4 h-4" />
              <span>View All Projects</span>
            </a>
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

export default Projects;