'use client';

import React from 'react';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  const certificates = [];

  const achievements = [
    {
      id: 1,
      title: "Foundation Certificate Merit Pass",
      description: "Awarded Merit Pass in Foundation Certificate in Higher Education for academic excellence",
      date: "2024"
    },
    {
      id: 2,
      title: "IEEE Member",
      description: "Active member of the Institute of Electrical and Electronics Engineers (IEEE)",
      date: "2024"
    },
    {
      id: 3,
      title: "CodeSprint 8.0 Participant",
      description: "Participated in CodeSprint 8.0, showcasing problem-solving and coding skills in a competitive setting",
      date: "2024"
    },
    {
      id: 4,
      title: "Hult Prize 2025 Participant",
      description: "Contributed to a social entrepreneurship project in the Hult Prize 2025 competition",
      date: "2025"
    }
  ];

  const stats = [
    { number: "3+", label: "Major Awards" },
    { number: "25+", label: "Projects" },
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "Technologies" }
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
                Recognition
              </p>
              <div className="h-px bg-white/20 w-12 sm:w-16"></div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6">
              <span className="block">Notable</span>
              <span className="block text-white/60">Achievements</span>
            </h2>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light max-w-2xl mx-auto">
              A collection of academic achievements, recognitions, and milestones 
              that demonstrate my commitment to excellence and continuous growth.
            </p>
          </div>

      
          {/* Notable Achievements Section */}
          <div className="mb-16">
            <h3 className="text-xl sm:text-2xl font-semibold mb-8 text-center">Key Milestones</h3>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className="flex flex-col sm:flex-row gap-6 group">
                    {/* Date Column */}
                    <div className="sm:w-32 flex-shrink-0">
                      <span className="text-sm text-white/50 font-mono">{achievement.date}</span>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 border-l border-white/20 pl-6 group-hover:border-white/40 transition-colors">
                      <div className="flex items-start gap-4">
                        {/* Achievement Icon */}
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/5 transition-all duration-300">
                            <Trophy className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" />
                          </div>
                        </div>

                        {/* Achievement Details */}
                        <div className="flex-1 space-y-2">
                          <h4 className="font-semibold text-white group-hover:text-white/90 transition-colors text-sm sm:text-base">
                            {achievement.title}
                          </h4>
                          <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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

export default Achievements;