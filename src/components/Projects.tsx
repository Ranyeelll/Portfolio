import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Tag, User } from 'lucide-react';
import { Card } from './ui/Card';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
// ===== EDIT YOUR PROJECTS HERE =====
const projects = [
{
  id: 1,
  title: 'Novella',
  category: 'Web',
  role: 'Backend Developer, Business Analyst',
  image: "/Novella.png",

  description:
  'An Integrated Library Management System built with Laravel framework. Features book reservations, user accounts, shelf management, and a modern user interface for discovering and managing library resources.',
  tags: ['Laravel', 'HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  links: {
    demo: '',
    github: 'https://github.com/AltheaEHEM1/LMS-CUSTOMER'
  }
},
{
  id: 2,
  title: 'Tara Biyahe',
  category: 'Desktop',
  role: 'Frontend Developer',
  image: "/Tara_Biyahe.png",

  description:
  'Tara Biyahe – A vehicle rental application built with Python Tkinter and SQLite, allowing users to browse, book, and manage rentals through an intuitive desktop interface.',
  tags: ['Tkinter', 'Python', 'SQLite'],
  links: {
    demo: '',
    github: 'https://github.com/dnsxmrs/VRMS'
  }
},
{
  id: 3,
  title: 'NourishShare',
  category: 'Mobile',
  role: 'Fullstack Developer',
  image: "/NourishShare.jpg",

  description:
  'NourishShare – A Flutterflow mobile app that lets users search for orphanages and shelters and contribute donations to support them.',
  tags: ['Flutterflow', 'Mobile App'],
  links: {
    demo: '',
    github:
    'https://app.flutterflow.io/project/nourish-share1234-f5y5pk?tab=uiBuilder&page=welcomepage'
  }
},
{
  id: 4,
  title: 'ReserveEase',
  category: 'Desktop',
  role: 'Backend Developer, UI/UX Designer',
  image: "/Reservease.png",

  description:
  'ReserveEase – A hotel management system developed using WinForms (C#) and SQLite, designed to manage room reservations, guest records, and booking operations efficiently.',
  tags: ['WinForms', 'C#', 'SQLite'],
  links: {
    demo: '',
    github: 'https://github.com/Ranyeelll/ReserveEasev2'
  }
},
{
  id: 5,
  title: 'SJSFI Student Information System',
  category: 'Web',
  role: 'UI/UX Designer',
  image: "/image.png",

  description:
  'SJSFI Student Information System – A web-based enrollment system with dedicated admin/registrar and student portals for managing student records and enrollment processes efficiently.',
  tags: ['Next.js 15', 'React', 'Tailwind CSS', 'Prisma ORM'],
  links: {
    demo: '',
    github: 'https://github.com/dnsxmrs/sjsfi-sis-student',
    github2: 'https://github.com/dnsxmrs/sjsfi-sis-registrar'
  }
},
{
  id: 6,
  title: 'StudyBuddy',
  category: 'Web',
  role: 'Fullstack Developer',
  image: "/image-1.png",

  description:
  'StudyBuddy – A comprehensive study management web application that helps users organize tasks and calendar events, track emotions, and get assistance through an AI-powered chatbot for more effective and balanced studying.',
  tags: [
  'React 18',
  'TypeScript',
  'Vite',
  'Tailwind CSS',
  'Google Gemini AI'],

  links: {
    demo: 'https://studybuddyai-pi.vercel.app/',
    github: ''
  }
},
{
  id: 7,
  title: 'ParKing',
  category: 'Desktop',
  role: 'Backend Developer, UI/UX Designer',
  image: "/ParKing.png",

  description:
  'ParKing – A parking ticketing and management system designed to handle vehicle entries, parking records, and ticket management efficiently.',
  tags: ['HTML', 'CSS', 'JavaScript', 'C#', 'Microsoft SQL Server'],
  links: {
    demo: '',
    github: 'https://github.com/Ranyeelll/ParKing'
  }
}];

// ===== END PROJECTS SECTION =====
const filters = ['All', 'Web', 'Desktop', 'Mobile'];
export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null>(
    null);
  const filteredProjects =
  activeFilter === 'All' ?
  projects :
  projects.filter((p) => p.category === activeFilter);
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
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
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-cyan-500 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) =>
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeFilter === filter ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>

              {filter}
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          <AnimatePresence>
            {filteredProjects.map((project) =>
            <motion.div
              key={project.id}
              layout
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0,
                scale: 0.9
              }}
              transition={{
                duration: 0.3
              }}>

                <Card
                hover={true}
                className="group cursor-pointer h-full flex flex-col"
                onClick={() => setSelectedProject(project)}>

                  <div className="relative overflow-hidden aspect-video">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white font-medium">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 text-xs font-bold rounded uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mb-3 text-sm text-slate-500 dark:text-slate-400">
                      <User className="w-3.5 h-3.5" />
                      <span>{project.role}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) =>
                    <span
                      key={tag}
                      className="text-xs text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">

                          #{tag}
                        </span>
                    )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject?.title}>

          {selectedProject &&
          <div className="space-y-6">
              <div className="rounded-xl overflow-hidden aspect-video">
                <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover" />

              </div>

              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <User className="w-4 h-4 text-cyan-500" />
                <span className="font-medium">Role:</span>
                <span>{selectedProject.role}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) =>
              <span
                key={tag}
                className="flex items-center text-sm text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 px-3 py-1 rounded-full">

                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
              )}
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                {selectedProject.description}
              </p>

              <div className="flex gap-4 pt-4">
                {selectedProject.links.demo &&
              <Button
                onClick={() =>
                window.open(selectedProject.links.demo, '_blank')
                }>

                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
              }
                {selectedProject.links.github &&
              <Button
                variant={selectedProject.links.demo ? 'outline' : 'primary'}
                onClick={() =>
                window.open(selectedProject.links.github, '_blank')
                }>

                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
              }
              </div>
            </div>
          }
        </Modal>
      </div>
    </section>);

}