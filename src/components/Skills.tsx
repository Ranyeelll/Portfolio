import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Users,
  Database,
  Globe,
  Lock,
  Layout,
  TestTube,
  Palette,
  FileCheck,
  Server,
  MessageSquare,
  Crown,
  CheckCircle,
  Calendar,
  Lightbulb,
  Puzzle } from
'lucide-react';
import { Card } from './ui/Card';
const categories = [
{
  id: 'technical',
  label: 'Technical Skills'
},
{
  id: 'soft',
  label: 'Soft Skills'
}];

const skills = {
  technical: [
  {
    name: 'Web & App Development',
    description: 'HTML, CSS, JavaScript, MySQL',
    level: 75,
    icon: Code2
  },
  {
    name: 'Software QA & Testing',
    description: 'Quality Assurance & Testing',
    level: 80,
    icon: TestTube
  },
  {
    name: 'Database Management',
    description: 'SQL Basics & Data Management',
    level: 75,
    icon: Database
  },
  {
    name: 'UI/UX Design',
    description: 'Design Fundamentals',
    level: 85,
    icon: Palette
  },
  {
    name: 'Data Entry & QA',
    description: 'Data Quality Assurance',
    level: 90,
    icon: FileCheck
  },
  {
    name: 'Information Security',
    description: 'Security Fundamentals',
    level: 75,
    icon: Lock
  },
  {
    name: 'Systems & Network Admin',
    description: 'Basic Administration',
    level: 70,
    icon: Server
  }],

  soft: [
  {
    name: 'Communication',
    description: 'Team Collaboration',
    level: 90,
    icon: MessageSquare
  },
  {
    name: 'Leadership',
    description: 'Coordination & Guidance',
    level: 85,
    icon: Crown
  },
  {
    name: 'Responsibility',
    description: 'Reliability & Accountability',
    level: 95,
    icon: CheckCircle
  },
  {
    name: 'Sprint Planning',
    description: 'Project Management',
    level: 80,
    icon: Calendar
  },
  {
    name: 'Adaptability',
    description: 'Willingness to Learn',
    level: 90,
    icon: Lightbulb
  },
  {
    name: 'Problem-Solving',
    description: 'Analytical Thinking',
    level: 85,
    icon: Puzzle
  }]

};
export function Skills() {
  const [activeCategory, setActiveCategory] = useState('technical');
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1.5 bg-cyan-500 mx-auto rounded-full mb-8" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) =>
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'}`}>

              {category.label}
            </button>
          )}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills[activeCategory as keyof typeof skills].map((skill, index) =>
          <Card
            key={skill.name}
            hover={true}
            className="p-6 flex flex-col justify-center">

              <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.05
              }}>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-500">
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm font-bold text-cyan-500">
                    {skill.level}%
                  </span>
                </div>

                <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                  initial={{
                    width: 0
                  }}
                  whileInView={{
                    width: `${skill.level}%`
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 1,
                    ease: 'easeOut'
                  }}
                  className="h-full bg-cyan-500 rounded-full" />

                </div>
              </motion.div>
            </Card>
          )}
        </div>
      </div>
    </section>);

}