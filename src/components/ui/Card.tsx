import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  hover?: boolean;
  className?: string;
}
export function Card({
  children,
  hover = false,
  className = '',
  ...props
}: CardProps) {
  return (
    <motion.div
      whileHover={
      hover ?
      {
        y: -5,
        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)'
      } :
      undefined
      }
      transition={{
        duration: 0.2
      }}
      className={`bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-sm overflow-hidden ${className}`}
      {...props}>

      {children}
    </motion.div>);

}