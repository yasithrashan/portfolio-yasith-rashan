'use client';

import React from 'react';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import ballerinaElastic from '../assets/projects/ballerinax-elasticcloud.png';

const Projects = () => {
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

  return (
    <div id="projects" className="bg-black text-white relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 py-20">
        <div className="max-w-full sm:max-w-6xl mx-auto">

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
          </div>

          {/* Projects Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {projects.map((project, index) => (
                  <div key={index} className="flex flex-col lg:flex-row gap-6 group">
                    {/* Project Image */}
                    <div className="lg:w-80 flex-shrink-0">
                      <div className="relative overflow-hidden rounded-lg border border-white/20 group-hover:border-white/40 transition-colors">
                        <img
                          src={project.image.src}
                          alt={project.name}
                          className="w-full h-48 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>

                        {/* Date Badge */}
                        <div className="absolute top-3 left-3">
                          <div className="flex items-center space-x-1 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full border border-white/20">
                            <Calendar className="w-3 h-3 text-white/70" />
                            <span className="text-xs text-white/70 font-mono">{project.date}</span>
                          </div>
                        </div>

                        {/* Links Overlay */}
                        <div className="absolute top-3 right-3 flex space-x-2">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all duration-300"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 bg-black/60 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-all duration-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="flex-1 border-l border-white/20 pl-6 group-hover:border-white/40 transition-colors">
                      <h4 className="font-semibold text-white group-hover:text-white/90 transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed mb-4 group-hover:text-white/80 transition-colors">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 border border-white/20 rounded-full text-xs text-white/60 group-hover:border-white/30 group-hover:text-white/70 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links for larger screens */}
                      <div className="hidden sm:flex space-x-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-white/50 hover:text-white transition-colors text-sm"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Code</span>
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-white/50 hover:text-white transition-colors text-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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