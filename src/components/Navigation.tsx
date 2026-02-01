import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
const navItems = [
{
  name: 'Home',
  href: '#home'
},
{
  name: 'About',
  href: '#about'
},
{
  name: 'Skills',
  href: '#skills'
},
{
  name: 'Projects',
  href: '#projects'
},
{
  name: 'Contact',
  href: '#contact'
}];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <motion.nav
        initial={{
          y: -100
        }}
        animate={{
          y: 0
        }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-4' : 'bg-transparent py-6'}`}>

        <div className="container mx-auto px-6 flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-bold font-display text-slate-900 dark:text-white">

            Baron<span className="text-cyan-500">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navItems.map((item) =>
              <li key={item.name}>
                  <a
                  href={item.href}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">

                    {item.name}
                  </a>
                </li>
              )}
            </ul>

            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700" />

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
                aria-label="Toggle theme">

                {theme === 'dark' ?
                <Sun className="w-5 h-5" /> :

                <Moon className="w-5 h-5" />
                }
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300">

              {theme === 'dark' ?
              <Sun className="w-5 h-5" /> :

              <Moon className="w-5 h-5" />
              }
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-slate-900 dark:text-white">

              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <>
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm md:hidden" />

            <motion.div
            initial={{
              x: '100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '100%'
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 200
            }}
            className="fixed top-0 right-0 bottom-0 z-50 w-3/4 max-w-xs bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-6 md:hidden">

              <div className="flex justify-end mb-8">
                <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white">

                  <X className="w-6 h-6" />
                </button>
              </div>

              <ul className="space-y-6">
                {navItems.map((item) =>
              <li key={item.name}>
                    <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-slate-900 dark:text-slate-100 hover:text-cyan-500 dark:hover:text-cyan-400">

                      {item.name}
                    </a>
                  </li>
              )}
              </ul>

              <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                <div className="flex justify-center space-x-6">
                  <a
                  href="#"
                  className="text-slate-500 hover:text-cyan-500 transition-colors">

                    <Github className="w-5 h-5" />
                  </a>
                  <a
                  href="#"
                  className="text-slate-500 hover:text-cyan-500 transition-colors">

                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                  href="#"
                  className="text-slate-500 hover:text-cyan-500 transition-colors">

                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </>);

}