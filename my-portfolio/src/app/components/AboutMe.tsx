'use client';

import React from 'react';
import { Code, Brain, Lightbulb, Target } from 'lucide-react';

const AboutMe = () => {
    return (
        <div className="bg-gray-50 text-gray-900 relative overflow-hidden">
            {/* Main Content */}
            <div className="relative z-10 px-6 sm:px-10 md:px-16 lg:px-24 py-24">
                <div className="max-w-full sm:max-w-4xl mx-auto text-center">

                    {/* Section Header */}
                    <div className="mb-16">
                        <div className="flex items-center justify-center space-x-3 mb-8">
                            <div className="h-px bg-gray-300 w-12 sm:w-16"></div>
                            <p className="text-sm sm:text-base text-gray-600 font-light tracking-wide uppercase">
                                About Me
                            </p>
                            <div className="h-px bg-gray-300 w-12 sm:w-16"></div>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight mb-6">
                            <span className="block font-medium">Crafting Digital</span>
                            <span className="block text-gray-500">Experiences</span>
                        </h2>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 text-left">
                        {/* Left Column - Story */}
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-xl sm:text-2xl font-medium mb-4">My Journey</h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
                                    I&rsquo;m a passionate Computer Science undergraduate and Software Engineering
                                    Intern with a strong interest in Artificial Intelligence, driven by the endless
                                    possibilities of technology and its power to transform ideas into reality.
                                    My journey began with curiosity about how things work behind the screen,
                                    which evolved into a deep love for creating intelligent, user-centric solutions.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Skills & Approach */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-medium mb-6">What I Bring</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        {
                                            icon: <Code className="w-5 h-5" />,
                                            label: 'Clean Code',
                                            desc: 'Maintainable & scalable solutions'
                                        },
                                        {
                                            icon: <Brain className="w-5 h-5" />,
                                            label: 'AI Integration',
                                            desc: 'Intelligent feature development'
                                        },
                                        {
                                            icon: <Lightbulb className="w-5 h-5" />,
                                            label: 'Innovation',
                                            desc: 'Creative problem solving'
                                        },
                                        {
                                            icon: <Target className="w-5 h-5" />,
                                            label: 'User Focus',
                                            desc: 'Human-centered design'
                                        }
                                    ].map(({ icon, label, desc }) => (
                                        <div key={label} className="group">
                                            <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:bg-white transition-all duration-300">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <div className="text-gray-500 group-hover:text-gray-900 transition-colors">
                                                        {icon}
                                                    </div>
                                                    <span className="font-medium text-sm sm:text-base">{label}</span>
                                                </div>
                                                <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                                                    {desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="mb-16">
                        <h3 className="text-xl sm:text-2xl font-medium mb-8 text-center">Experience</h3>
                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-8">
                                {[
                                    {
                                        period: 'Jun 2025 – Present',
                                        title: 'Software Engineering Intern',
                                        organization: 'WSO2',
                                        description:
                                            "Working with the Ballerina AI team to develop and enhance AI-powered features for the Ballerina programming language and related tools.",
                                        bullets: [
                                            'Onboarded to the Ballerina AI team and familiarised with AI integration workflows and development environment',
                                            'Currently working on code indexing for Ballerina BI Copilot to enhance intelligent code assistance capabilities',
                                        ],
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row gap-6 group text-left">
                                        <div className="sm:w-40 flex-shrink-0">
                                            <span className="text-sm text-gray-500 font-mono">{item.period}</span>
                                        </div>

                                        <div className="flex-1 border-l border-gray-200 pl-6 group-hover:border-gray-300 transition-colors">
                                            <h4 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-500 text-sm mb-2">{item.organization}</p>
                                            <p className="text-gray-600 text-sm leading-relaxed font-light">{item.description}</p>

                                            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 text-xs sm:text-sm">
                                                {item.bullets.map((b, i) => (
                                                    <li key={i}>{b}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="mb-16">
                        <h3 className="text-xl sm:text-2xl font-medium mb-8 text-center">Education</h3>
                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-8">
                                {[
                                    {
                                        period: '2023 – Present',
                                        title: 'BSc (Hons) in Computer Science',
                                        organization: 'IIT / University of Westminster',
                                        description:
                                            'Focusing on algorithms, full-stack development and maintaining a strong academic record while entering coding competitions and hackathons.',
                                        bullets: ['Completed first year with an average 79 %',
                                            'Completed second year with an average 78 %',],
                                    },
                                    {
                                        period: 'Jan 2023 – Sep 2023',
                                        title: 'Foundation Certificate in Higher Education',
                                        organization: 'Informatics Institute of Technology',
                                        description:
                                            'Foundation programme covering core Computer Science, Mathematics and Engineering concepts with hands-on coding and research methodology.',
                                        bullets: ['Achieved a Merit Pass'],
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row gap-6 group text-left">
                                        <div className="sm:w-40 flex-shrink-0">
                                            <span className="text-sm text-gray-500 font-mono">{item.period}</span>
                                        </div>

                                        <div className="flex-1 border-l border-gray-200 pl-6 group-hover:border-gray-300 transition-colors">
                                            <h4 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-500 text-sm mb-2">{item.organization}</p>
                                            <p className="text-gray-600 text-sm leading-relaxed font-light">{item.description}</p>

                                            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600 text-xs sm:text-sm">
                                                {item.bullets.map((b, i) => (
                                                    <li key={i}>{b}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-16">
                        <p className="text-gray-600 mb-8 max-w-xl mx-auto text-sm sm:text-base font-light leading-relaxed">
                            I&rsquo;m always excited to connect with fellow developers, discuss new opportunities,
                            or collaborate on interesting projects. Let&rsquo;s build something amazing together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xs mx-auto">
                            <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition transform hover:scale-105">
                                Let&apos;s Connect
                            </button>
                            <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 hover:border-gray-400 transition">
                                View Resume
                            </button>
                        </div>
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

export default AboutMe;
