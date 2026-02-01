import React, { useEffect, useState, Component } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/Button';
import { TypeAnimation } from 'react-type-animation'; 
const TypewriterEffect = ({ words }: {words: string[];}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    if (index === words.length) return;
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      Math.max(
        reverse ? 75 : subIndex === words[index].length ? 1000 : 150,
        parseInt(Math.random() * 350 + '')
      )
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);
  useEffect(() => {
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout2);
  }, []);
  return (
    <span className="inline-block min-w-[200px] text-left">
      {`${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
    </span>);

};
export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950">

      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5
            }}
            className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">

            Hi, I'm Baron. <br />I am{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              <TypewriterEffect
                words={['UI/UX Designer', 'Frontend Developer', 'QA Tester']} />

            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10">

            4th-year BSIT student with basic IT fundamentals and strong communication skills, seeking hands-on experience to grow professionally.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
            className="flex flex-col sm:flex-row items-center gap-4">

            <Button
              size="lg"
              onClick={() =>
              document.getElementById('projects')?.scrollIntoView()
              }>

              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
              document.getElementById('contact')?.scrollIntoView()
              }>

              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 0.5,
              delay: 0.6
            }}
            className="mt-16 flex items-center gap-6 text-slate-400">

            <a href="https://github.com/Ranyeelll" className="hover:text-cyan-500 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/baron-aloveros-105646362/" className="hover:text-cyan-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:aloverosbaron@gmail.com
                "
            className="hover:text-cyan-500 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400">

        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>);

}
