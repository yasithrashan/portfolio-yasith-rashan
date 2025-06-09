'use client';

import React from 'react';
import { ExternalLink, Github, Code, Brain, Lightbulb, Target, Users, Rocket } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "University Management App - Spacefix",
      description: "A comprehensive university management system enabling seamless student enrollment, course management, and faculty administration with modern UI/UX design.",
      tech: ["React", "Node.js", "Firebase", "JavaScript"],
      githubUrl: "https://github.com/yasithrashan/spacefix",
      liveUrl: "https://spacefix.vercel.app",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=120&h=80&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "Real-Time Event Ticketing System",
      description: "A dynamic event ticketing platform that provides real-time seat availability, secure bookings, and payment processing with live updates.",
      tech: ["Java", "OOP", "Spring Boot", "React"],
      githubUrl: "https://github.com/yasithrashan/event-ticketing",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=120&h=80&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description: "A sleek and responsive personal portfolio website showcasing projects, skills, and experience with modern animations and clean design.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/yasithrashan/portfolio",
      liveUrl: "https://yasithrashan.vercel.app",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=120&h=80&fit=crop&crop=center"
    },
    {
      id: 4,
      title: "Network Flow Algorithm Implementation",
      description: "Implementation of the Ford-Fulkerson algorithm with Edmonds-Karp improvement for finding maximum flow in networks with graph theory principles.",
      tech: ["Java", "OOP", "Algorithms", "Data Structures", "Graph Theory"],
      githubUrl: "https://github.com/yasithrashan/network-flow",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=120&h=80&fit=crop&crop=center"
    },
    {
      id: 5,
      title: "Bookstore RESTful API",
      description: "A comprehensive JAX-RS API for bookstore operations with endpoints for managing books, authors, customers, shopping carts, and orders.",
      tech: ["Java", "JAX-RS", "REST API", "JSON", "Maven", "Java 21"],
      githubUrl: "https://github.com/yasithrashan/bookstore-api",
      liveUrl: "#",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=120&h=80&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-20">
        <div className="max-w-full sm:max-w-6xl">

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
          </div>

          {/* Overview Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-lg border border-white/20 group hover:border-white/40 transition-all duration-500">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop&crop=center"
                  alt="Developer workspace"
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Building Solutions</h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
                  Over the past few years, I've worked on diverse projects ranging from full-stack web applications to algorithm-heavy systems.
                </p>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
                  My portfolio spans multiple domains, showcasing adaptability across frontend, backend, and algorithmic problem-solving.
                </p>
              </div>
            </div>

            {/* Tech Stack Cards */}
            <div className="space-y-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6">Tech Stack</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Code className="w-5 h-5" />, label: 'Full-Stack', desc: 'React, Node.js, Java Spring' },
                  { icon: <Brain className="w-5 h-5" />, label: 'Algorithms', desc: 'Data structures & optimization' },
                  { icon: <Lightbulb className="w-5 h-5" />, label: 'Modern UI', desc: 'Responsive & interactive design' },
                  { icon: <Target className="w-5 h-5" />, label: 'API Design', desc: 'RESTful & scalable backends' }
                ].map(({ icon, label, desc }) => (
                  <div key={label} className="group">
                    <div className="border border-white/20 rounded-lg p-4 hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="text-white/60 group-hover:text-white transition-colors">
                          {icon}
                        </div>
                        <span className="font-medium text-sm sm:text-base">{label}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/50 group-hover:text-white/70 transition-colors">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Projects Listing */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center">Recent Projects</h3>
            <div className="max-w-4xl mx-auto space-y-8">
              {projects.map((project) => (
                <div key={project.id} className="flex flex-col sm:flex-row gap-6 group">
                  <div className="sm:w-32 flex-shrink-0">
                    <div className="relative overflow-hidden rounded border border-white/20 group-hover:border-white/30 transition-all duration-300">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-16 sm:h-20 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                  </div>
                  <div className="flex-1 border-l border-white/20 pl-6 group-hover:border-white/40 transition-colors">
                    <h4 className="font-semibold text-white group-hover:text-white/90 transition-colors mb-2">{project.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 border border-white/20 rounded text-xs text-white/60 hover:border-white/40 hover:text-white/80 transition cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 py-1.5 bg-white/10 text-white text-xs rounded hover:bg-white/20 transition">
                        <ExternalLink className="w-3 h-3" />
                        <span>Demo</span>
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-3 py-1.5 border border-white/30 text-white text-xs rounded hover:border-white/50 hover:bg-white/5 transition">
                        <Github className="w-3 h-3" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold mb-8">Development Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Users className="w-6 h-6" />, title: 'User-Centric', description: 'Every feature designed with the end user in mind' },
                { icon: <Rocket className="w-6 h-6" />, title: 'Performance', description: 'Optimized code for speed and scalability' },
                { icon: <Target className="w-6 h-6" />, title: 'Best Practices', description: 'Clean code, proper architecture, and documentation' }
              ].map(({ icon, title, description }) => (
                <div key={title} className="group text-center">
                  <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-white/40 group-hover:bg-white/5 transition-all duration-300">
                    <div className="text-white/60 group-hover:text-white transition-colors">{icon}</div>
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-white/90 transition-colors">{title}</h4>
                  <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Interested in seeing more of my work? Visit my GitHub or let’s collaborate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xs mx-auto">
              <a
                href="https://github.com/yasithrashan"
                className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition transform hover:scale-105"
              >
                View GitHub
              </a>
              <a
                href="mailto:yasithrashan.dev@gmail.com"
                className="px-6 py-3 border border-white/40 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/60 transition"
              >
                Get in Touch
              </a>
            </div>
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
