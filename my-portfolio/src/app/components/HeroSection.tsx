'use client';

import React from 'react';
import Image from 'next/image';
import profilePic from '../assets/profile-img.jpg'; 

import { Github, Linkedin, Mail, ExternalLink, PenLine, ArrowDown } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

const HeroSection = () => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white opacity-3 rounded-full blur-3xl"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20">
                <div className="max-w-6xl mx-auto text-center">

                    {/* Profile Image */}
                    <div className="mt-8 mb-12">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full border-2 border-white/20 overflow-hidden backdrop-blur-sm bg-white/5 flex items-center justify-center group hover:border-white/40 transition-all duration-500 relative">
                            <Image
                                src={profilePic}
                                alt="Yasith Rashan"
                                fill
                                quality={100}
                                className="object-cover"
                                sizes="128px"
                            />
                        </div>
                    </div>

                    {/* Name and Title */}
                    <div className="mb-16 space-y-6">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
                            <span className="block">Yasith</span>
                            <span className="block text-white/60">Rashan</span>
                        </h1>

                        <div className="flex items-center justify-center space-x-4">
                            <div className="h-px bg-white/20 w-16"></div>
                            <p className="text-lg md:text-xl text-white/80 font-light tracking-wide">
                                Software Engineer Intern
                            </p>
                            <div className="h-px bg-white/20 w-16"></div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-16 max-w-3xl mx-auto">
                        <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
                            I engineer intelligent digital solutions with precision and creativity.
                            Passionate about software craftsmanship and the transformative power of AI,
                            I specialize in building scalable, human-centered applications that solve real-world problems.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto">
                            <div className="text-center group">
                                <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-white/90 transition-colors">25+</div>
                                <div className="text-sm md:text-base text-white/50 uppercase tracking-wider">Projects</div>
                            </div>
                            <div className="text-center group">
                                <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-white/90 transition-colors">3+</div>
                                <div className="text-sm md:text-base text-white/50 uppercase tracking-wider">Years</div>
                            </div>
                            <div className="text-center group">
                                <div className="text-3xl md:text-4xl font-bold mb-2 group-hover:text-white/90 transition-colors">15+</div>
                                <div className="text-sm md:text-base text-white/50 uppercase tracking-wider">Technologies</div>
                            </div>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-16">
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
                            {['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB'].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 border border-white/20 rounded-full text-sm text-white/70 hover:border-white/40 hover:text-white transition-all duration-300 cursor-default"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-16 space-y-4">
                        <div className="text-white/60 text-sm uppercase tracking-wider">Based in Sri Lanka</div>
                        <div className="text-white/80">yasithrashan.online</div>
                    </div>

                    {/* Social Links */}
                    <div className="mb-16">
                        <div className="flex justify-center space-x-6">
                            <a
                                href="https://github.com/yasithrashan"
                                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-white/60 hover:bg-white/5 transition-all duration-300 group"
                            >
                                <Github className="w-5 h-5 text-white/60 group-hover:text-white" />
                            </a>
                            <a
                                href="https://linkedin.com/in/yasith-rashan-a44b54295/"
                                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-white/60 hover:bg-white/5 transition-all duration-300 group"
                            >
                                <Linkedin className="w-5 h-5 text-white/60 group-hover:text-white" />
                            </a>
                            <a
                                href="mailto:y.rashan22@gmail.com"
                                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-white/60 hover:bg-white/5 transition-all duration-300 group"
                            >
                                <Mail className="w-5 h-5 text-white/60 group-hover:text-white" />
                            </a>
                            <a
                                href="https://yasithrashan.online"
                                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-white/60 hover:bg-white/5 transition-all duration-300 group"
                            >
                                <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white" />
                            </a>
                            <a
                                href="https://medium.com/@y.rashan22"
                                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-white/60 hover:bg-white/5 transition-all duration-300 group"
                            >
                                <PenLine className="w-5 h-5 text-white/60 group-hover:text-white" />
                            </a>
                            <a
                                href="https://instagram.com/yxsiya"
                                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-white/60 hover:bg-white/5 transition-all duration-300 group"
                            >
                                <FaInstagram className="w-5 h-5 text-white/60 group-hover:text-white" />
                            </a>
                            <a
                                href="https://facebook.com/profile.php?id=100087673762639"
                                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-white/60 hover:bg-white/5 transition-all duration-300 group"
                            >
                                <FaFacebookF className="w-5 h-5 text-white/60 group-hover:text-white" />
                            </a>
                            <a
                                href="https://x.com/yxsiya"
                                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:border-white/60 hover:bg-white/5 transition-all duration-300 group"
                            >
                                <FaXTwitter className="w-5 h-5 text-white/60 group-hover:text-white" />
                            </a>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mb-16">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-full sm:max-w-md mx-auto px-4 sm:px-0">
                            <button className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                                View Projects
                            </button>
                            <button className="px-8 py-4 border border-white/40 text-white font-medium rounded-full hover:bg-white/5 hover:border-white/60 transition-all duration-300">
                                Download CV
                            </button>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="animate-bounce">
                        <ArrowDown className="w-6 h-6 mx-auto text-white/40" />
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

export default HeroSection;
