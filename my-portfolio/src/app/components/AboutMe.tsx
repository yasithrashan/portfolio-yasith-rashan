'use client';

import React from 'react';
import { Code, Brain, Lightbulb, Target, Users, Rocket } from 'lucide-react';

const AboutMe = () => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-20">
                <div className="max-w-full sm:max-w-6xl">

                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center space-x-3 mb-8">
                            <div className="h-px bg-white/20 w-12 sm:w-16"></div>
                            <p className="text-sm sm:text-base text-white/80 font-light tracking-wide uppercase">
                                About Me
                            </p>
                            <div className="h-px bg-white/20 w-12 sm:w-16"></div>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">
                            <span className="block">Crafting Digital</span>
                            <span className="block text-white/60">Experiences</span>
                        </h2>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
                        {/* Left Column - Story */}
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-xl sm:text-2xl font-semibold mb-4">My Journey</h3>
                                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
                                    I&rsquo;m a passionate Software Engineer Intern based in Sri Lanka, driven by the endless possibilities
                                    of technology and its power to transform ideas into reality. My journey began with curiosity
                                    about how things work behind the screen, which evolved into a deep love for creating
                                    intelligent, user-centric solutions.
                                </p>
                                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
                                    With over 3 years of experience and 25+ projects under my belt, I specialize in full-stack
                                    development with a particular focus on modern web technologies. I believe in writing clean,
                                    scalable code that not only solves problems but creates delightful user experiences.
                                </p>
                                <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
                                    When I&rsquo;m not coding, you&rsquo;ll find me exploring the latest AI innovations, contributing to
                                    open-source projects, or sharing my insights through technical writing on Medium.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Skills & Approach */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-semibold mb-6">What I Bring</h3>
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
                    </div>

                    {/* ───────────────────── EXPERIENCE ───────────────────── */}
                    <div className="mb-16">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center">Experience</h3>
                        <div className="max-w-4xl mx-auto">
                            <div className="space-y-8">
                                {[
                                    {
                                        period: 'Jun 2025 – Present',
                                        title: 'Engineering Intern',
                                        organization: 'WSO2',
                                        description:
                                            'Working with the Engineering team to develop and enhance WSO2’s enterprise middleware solutions and open-source integration platform.',
                                        bullets: [
                                            'Onboarded to the Engineering team and familiarised with WSO2’s products and dev environment',
                                            'Collaborating with mentors and senior engineers on project workflows and codebases',
                                        ],
                                    },
                                ].map((item, index) => (
                                    <div key={index} className="flex flex-col sm:flex-row gap-6 group">
                                        <div className="sm:w-40 flex-shrink-0">
                                            <span className="text-sm text-white/50 font-mono">{item.period}</span>
                                        </div>

                                        <div className="flex-1 border-l border-white/20 pl-6 group-hover:border-white/40 transition-colors">
                                            <h4 className="font-semibold text-white group-hover:text-white/90 transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-white/60 text-sm mb-2">{item.organization}</p>
                                            <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>

                                            {/* bullet points */}
                                            <ul className="list-disc pl-5 mt-2 space-y-1 text-white/70 text-xs sm:text-sm">
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

                    {/* ───────────────────── EDUCATION ───────────────────── */}
                    <div className="mb-16">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center">Education</h3>
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
                                    <div key={index} className="flex flex-col sm:flex-row gap-6 group">
                                        <div className="sm:w-40 flex-shrink-0">
                                            <span className="text-sm text-white/50 font-mono">{item.period}</span>
                                        </div>

                                        <div className="flex-1 border-l border-white/20 pl-6 group-hover:border-white/40 transition-colors">
                                            <h4 className="font-semibold text-white group-hover:text-white/90 transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-white/60 text-sm mb-2">{item.organization}</p>
                                            <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>

                                            {/* bullet points */}
                                            <ul className="list-disc pl-5 mt-2 space-y-1 text-white/70 text-xs sm:text-sm">
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

                    {/* Philosophy Section */}
                    <div className="text-center max-w-4xl mx-auto">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-8">Philosophy</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Users className="w-6 h-6" />,
                                    title: 'Collaboration',
                                    description: 'Great software is built by great teams working together'
                                },
                                {
                                    icon: <Rocket className="w-6 h-6" />,
                                    title: 'Innovation',
                                    description: 'Always pushing boundaries and exploring new possibilities'
                                },
                                {
                                    icon: <Target className="w-6 h-6" />,
                                    title: 'Impact',
                                    description: 'Creating solutions that make a real difference in people&rsquo;s lives'
                                }
                            ].map(({ icon, title, description }) => (
                                <div key={title} className="group text-center">
                                    <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-white/40 group-hover:bg-white/5 transition-all duration-300">
                                        <div className="text-white/60 group-hover:text-white transition-colors">
                                            {icon}
                                        </div>
                                    </div>
                                    <h4 className="font-semibold mb-2 group-hover:text-white/90 transition-colors">{title}</h4>
                                    <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
                                        {description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                            I&rsquo;m always excited to connect with fellow developers, discuss new opportunities,
                            or collaborate on interesting projects. Let&rsquo;s build something amazing together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xs mx-auto">
                            <button className="px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-white/90 transition transform hover:scale-105">
                                Let&apos;s Connect
                            </button>
                            <button className="px-6 py-3 border border-white/40 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/60 transition">
                                View Resume
                            </button>
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

export default AboutMe;
