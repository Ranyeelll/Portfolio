import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
// ===== EDIT YOUR CONTACT INFO HERE =====
const contactInfo = {
  email: 'aloverosbaron@gmail.com',
  phone: '+639615855322',
  linkedin: 'https://www.linkedin.com/in/baron-aloveros-105646362/',
  github: 'https://github.com/Ranyeelll'
};
// ===== END CONTACT INFO =====
export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900">
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
            Get In Touch
          </h2>
          <div className="w-20 h-1.5 bg-cyan-500 mx-auto rounded-full mb-8" />
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Want to get in touch? Reach me through any of these channels!
          </p>
        </motion.div>

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
          transition={{
            delay: 0.1
          }}
          className="max-w-2xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Email - Text Display */}
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
              transition={{
                delay: 0.1
              }}
              className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl">

              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Email
                </p>
                <p className="text-slate-900 dark:text-white font-medium">
                  {contactInfo.email}
                </p>
              </div>
            </motion.div>

            {/* Phone - Text Display */}
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
              transition={{
                delay: 0.2
              }}
              className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl">

              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                  Phone
                </p>
                <p className="text-slate-900 dark:text-white font-medium">
                  {contactInfo.phone}
                </p>
              </div>
            </motion.div>

            {/* LinkedIn - Clickable Link */}
            <motion.a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
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
              transition={{
                delay: 0.3
              }}
              whileHover={{
                scale: 1.02,
                y: -2
              }}
              className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl cursor-pointer hover:bg-cyan-500 group transition-all duration-300">

              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500 group-hover:bg-white/20 group-hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 group-hover:text-cyan-100 transition-colors">
                  LinkedIn
                </p>
                <p className="text-slate-900 dark:text-white font-medium group-hover:text-white transition-colors">
                  View Profile →
                </p>
              </div>
            </motion.a>

            {/* GitHub - Clickable Link */}
            <motion.a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
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
              transition={{
                delay: 0.4
              }}
              whileHover={{
                scale: 1.02,
                y: -2
              }}
              className="flex items-center gap-4 p-5 bg-slate-50 dark:bg-slate-800 rounded-2xl cursor-pointer hover:bg-cyan-500 group transition-all duration-300">

              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500 group-hover:bg-white/20 group-hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1 group-hover:text-cyan-100 transition-colors">
                  GitHub
                </p>
                <p className="text-slate-900 dark:text-white font-medium group-hover:text-white transition-colors">
                  View Profile →
                </p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>);

}