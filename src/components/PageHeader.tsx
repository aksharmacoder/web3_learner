import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function PageHeader({ title, description, icon }: PageHeaderProps) {
  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto pt-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/20 mb-8"
          >
            {icon}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-6"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
}