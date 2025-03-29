import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">About Me</h2>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            I'm a passionate Full Stack Developer with 5+ years of experience building web applications.
            My journey in tech started with a deep curiosity about how things work on the internet,
            which led me to pursue a career in software development.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Currently, I'm focused on building accessible, human-centered products using modern web
            technologies. I have a particular interest in AI and machine learning, and I'm always
            exploring new ways to integrate these technologies into practical applications.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-bold text-xl text-purple-600 dark:text-purple-400">5+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Years Experience</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-bold text-xl text-purple-600 dark:text-purple-400">50+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-bold text-xl text-purple-600 dark:text-purple-400">30+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Happy Clients</p>
            </div>
            <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h3 className="font-bold text-xl text-purple-600 dark:text-purple-400">15+</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;