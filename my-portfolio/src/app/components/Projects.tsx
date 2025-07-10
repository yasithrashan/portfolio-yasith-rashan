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
    <div id="projects" className="bg-white text-gray-900 relative overflow-hidden">
      {/* Main Content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 py-24">
        <div className="max-w-full sm:max-w-4xl mx-auto text-center">

          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="h-px bg-gray-300 w-12 sm:w-16"></div>
              <p className="text-sm sm:text-base text-gray-600 font-light tracking-wide uppercase">
                Portfolio
              </p>
              <div className="h-px bg-gray-300 w-12 sm:w-16"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
              <span className="block font-medium">Featured</span>
              <span className="block text-gray-500">Projects</span>
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
                      <div className="relative overflow-hidden rounded-lg border border-gray-200 group-hover:border-gray-300 transition-colors">
                        <img
                          src={project.image.src}
                          alt={project.name}
                          className="w-full h-48 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-white/20 group-hover:bg-white/10 transition-colors duration-300"></div>

                        {/* Date Badge */}
                        <div className="absolute top-3 left-3">
                          <div className="flex items-center space-x-1 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200">
                            <Calendar className="w-3 h-3 text-gray-600" />
                            <span className="text-xs text-gray-600 font-mono">{project.date}</span>
                          </div>
                        </div>

                        {/* Links Overlay */}
                        <div className="absolute top-3 right-3 flex space-x-2">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-all duration-300"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-all duration-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="flex-1 border-l border-gray-200 pl-6 group-hover:border-gray-300 transition-colors text-left">
                      <h4 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors text-lg sm:text-xl mb-4">
                        {project.name}
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 group-hover:text-gray-700 transition-colors font-light">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 border border-gray-200 rounded-full text-xs text-gray-600 group-hover:border-gray-300 group-hover:text-gray-700 transition-colors"
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
                          className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 transition-colors text-sm"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Code</span>
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-500 hover:text-gray-900 transition-colors text-sm"
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
          <div>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto text-sm sm:text-base font-light leading-relaxed">
              Want to see more of my work or collaborate on a project?
              Check out my GitHub for additional repositories and contributions.
            </p>
            <a
              href="https://github.com/yasithrashan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 hover:border-gray-400 transition"
            >
              <Github className="w-4 h-4" />
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
      </div>
    </div>
  );
};

export default Projects;
