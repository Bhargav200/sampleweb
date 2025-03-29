import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop"
            alt="Profile"
            className="rounded-full w-full h-full object-cover shadow-xl"
          />
        </div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text dark:from-purple-400 dark:to-blue-300"
        >
          John Doe
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Full Stack Developer & AI Enthusiast
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center space-x-6"
        >
          <a href="https://github.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;