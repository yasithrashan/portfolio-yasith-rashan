'use client';

import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
  {
    id: 1,
    title: "University Management App - Spacefix",
    description: "A comprehensive university management system enabling seamless student enrollment, course management, and faculty administration.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&crop=center", // university classroom
    tech: ["React", "Node.js", "Firebase", "JavaScript"],
    githubUrl: "GitHub",
    liveUrl: "Live Demo"
  },
  {
    id: 2,
    title: "Real-Time Event Ticketing System",
    description: "A dynamic event ticketing platform that provides real-time seat availability, secure bookings.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop&crop=center", // event venue with seating
    tech: ["Java", "OOP", "Spring Boot", "React"],
    githubUrl: "GitHub",
    liveUrl: "Live Demo"
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "A sleek and responsive personal portfolio website showcasing my projects, skills, and experience, built with React and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&crop=center", // workspace with laptop and coffee
    tech: ["React", "Tailwind CSS", "JavaScript"],
    githubUrl: "GitHub",
    liveUrl: "Live Demo"
  },
  {
    id: 4,
    title: "Network Flow Algorithm Implementation",
    description: "An implementation of the Ford-Fulkerson algorithm with the Edmonds-Karp improvement for finding maximum flow in a network. Handles integer capacities and follows the conservation of flow principle.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&crop=center", // network cables and flow concept
    tech: ["Java", "OOP", "Algorithms", "Data Structures", "Graph Theory"],
    githubUrl: "GitHub",
    liveUrl: "Live Demo"
  },
  {
    id: 5,
    title: "Bookstore RESTful API",
    description: "A comprehensive JAX-RS API for a bookstore application with endpoints for managing books, authors, customers, shopping carts, and orders following REST architectural principles.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop&crop=center", // books on a shelf
    tech: ["Java", "JAX-RS", "REST API", "JSON", "Maven", "Java 21"],
    githubUrl: "GitHub",
    liveUrl: "Live Demo"
  }
];


  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-20">
        <div className="max-w-full sm:max-w-6xl w-full">

          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="h-px bg-white/20 w-12 sm:w-16"></div>
              <p className="text-sm sm:text-base text-white/80 font-light tracking-wide uppercase">
                My Work
              </p>
              <div className="h-px bg-white/20 w-12 sm:w-16"></div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">
              <span className="block">Featured</span>
              <span className="block text-white/60">Projects</span>
            </h2>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light max-w-2xl mx-auto">
              A showcase of my recent work, featuring full-stack applications, AI integrations, 
              and modern web solutions built with cutting-edge technologies.
            </p>
          </div>

          {/* Projects List */}
          <div className="space-y-8 sm:space-y-12">
            {projects.map((project, index) => (
              <div key={project.id} className="group">
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                  
                  {/* Project Image */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative overflow-hidden rounded-lg border border-white/20 group-hover:border-white/40 transition-all duration-500">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold group-hover:text-white/90 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 border border-white/20 rounded-full text-xs sm:text-sm text-white/70 hover:border-white/40 hover:text-white transition cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center space-x-2 px-4 py-2 bg-white text-black font-medium rounded-full hover:bg-white/90 transition transform hover:scale-105 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                      
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 px-4 py-2 border border-white/40 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/60 transition text-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-16">
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Want to see more of my work? Check out my GitHub for additional projects 
              and open-source contributions.
            </p>
            
            <a
              href="https://github.com/yasithrashan"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-white/40 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/60 transition group"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

export default ProjectsSection;