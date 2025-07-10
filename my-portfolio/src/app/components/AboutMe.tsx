'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Lightbulb, Target } from 'lucide-react';

const AboutMe = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

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

    const skills = [
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
    ];

    return (
        <div className="bg-gray-50 text-gray-900 relative overflow-hidden" ref={ref}>
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
                                About Me
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
                            <span className="block font-medium">Crafting Digital</span>
                            <span className="block text-gray-500">Experiences</span>
                        </motion.h2>
                    </motion.div>

                    {/* Main Content Grid */}
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 text-left"
                        variants={itemVariants}
                    >
                        {/* Left Column - Story */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
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
                        </motion.div>

                        {/* Right Column - Skills & Approach */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <div>
                                <h3 className="text-xl sm:text-2xl font-medium mb-6">What I Bring</h3>
                                <motion.div
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    variants={{
                                        hidden: {},
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.1,
                                                delayChildren: 1
                                            }
                                        }
                                    }}
                                >
                                    {skills.map(({ icon, label, desc }) => (
                                        <motion.div
                                            key={label}
                                            className="group"
                                            variants={{
                                                hidden: { opacity: 0, scale: 0.8 },
                                                visible: { opacity: 1, scale: 1 }
                                            }}
                                            whileHover={{ y: -5 }}
                                        >
                                            <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:bg-white transition-all duration-300">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <motion.div
                                                        className="text-gray-500 group-hover:text-gray-900 transition-colors"
                                                        whileHover={{ rotate: 360 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        {icon}
                                                    </motion.div>
                                                    <span className="font-medium text-sm sm:text-base">{label}</span>
                                                </div>
                                                <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-600 transition-colors">
                                                    {desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                        className="mb-16"
                        variants={itemVariants}
                    >
                        <motion.h3
                            className="text-xl sm:text-2xl font-medium mb-8 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >
                            Experience
                        </motion.h3>
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
                                    <motion.div
                                        key={index}
                                        className="flex flex-col sm:flex-row gap-6 group text-left"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                        transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}
                                        whileHover={{ x: 10 }}
                                    >
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
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                                        transition={{ duration: 0.5, delay: 1.6 + i * 0.1 }}
                                                    >
                                                        {b}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Education */}
                    <motion.div
                        className="mb-16"
                        variants={itemVariants}
                    >
                        <motion.h3
                            className="text-xl sm:text-2xl font-medium mb-8 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 1.8 }}
                        >
                            Education
                        </motion.h3>
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
                                    <motion.div
                                        key={index}
                                        className="flex flex-col sm:flex-row gap-6 group text-left"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                        transition={{ duration: 0.8, delay: 2 + index * 0.2 }}
                                        whileHover={{ x: 10 }}
                                    >
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
                                                    <motion.li
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                                        transition={{ duration: 0.5, delay: 2.2 + index * 0.2 + i * 0.1 }}
                                                    >
                                                        {b}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                        className="mt-16"
                        variants={itemVariants}
                    >
                        <motion.p
                            className="text-gray-600 mb-8 max-w-xl mx-auto text-sm sm:text-base font-light leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 2.6 }}
                        >
                            I&rsquo;m always excited to connect with fellow developers, discuss new opportunities,
                            or collaborate on interesting projects. Let&rsquo;s build something amazing together.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center max-w-xs mx-auto"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6, delay: 2.8 }}
                        >
                            <motion.button
                                className="px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Let&apos;s Connect
                            </motion.button>
                            <motion.button
                                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 hover:border-gray-400 transition"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Resume
                            </motion.button>
                        </motion.div>
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

export default AboutMe;
