import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
// ===== EDIT YOUR EXPERIENCE HERE =====
const timeline = [
{
  id: 1,
  role: '4th Year BSIT Student',
  company: 'Polytechnic University of the Philippines - Quezon City Campus',
  date: '2022 - Present',
  description:
  'Pursuing Bachelor of Science in Information Technology with focus on software development and web technologies.',
  icon: GraduationCap,
  type: 'education'
},
{
  id: 2,
  role: 'Office Clerk',
  company: 'San Antonio De Padua Parish Office',
  date: '2022 - 2025',
  description:
  'Managed data entry, organized files, assisted customers, and supported daily administrative tasks.',
  icon: Briefcase,
  type: 'work'
},
{
  id: 3,
  role: 'Technical Committee Head',
  company: 'PUP QC - Commonwealth Information Technology Society',
  date: '2024 - 2025',
  description:
  'Led technical setup, provided support during events, and coordinated to resolve issues efficiently.',
  icon: Briefcase,
  type: 'work'
}];

// ===== END EXPERIENCE SECTION =====
export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
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
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}>

            <div className="relative mb-8 group">
              <div className="absolute inset-0 bg-cyan-500 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-20" />
              <img
                src="/download_(2).jpg"
                alt="Baron - Profile Photo"
                className="relative rounded-2xl shadow-xl w-full max-w-md mx-auto object-cover aspect-[4/5]" />

            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              Motivated 4th Year BSIT student with a experienced foundation in IT
              concepts and excellent communication skills. Reliable, adaptable,
              and collaborative, with hands-on experience in volunteer and
              team-based projects. Passionate about contributing to
              organizational goals while continuously developing technical and
              professional expertise.
            </p>

            <div className="grid grid-cols-2 gap-4"></div>
          </motion.div>

          {/* Timeline Section */}
          <div className="space-y-8">
            {timeline.map((item, index) =>
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: 50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700 last:border-0">

                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-white dark:ring-slate-900" />

                <div className="mb-1 flex items-center text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {item.role}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium mb-2">
                  {item.company}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}
