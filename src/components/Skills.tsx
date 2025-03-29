import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'Python', level: 70 },
  { name: 'AI/ML', level: 65 },
  { name: 'DevOps', level: 60 },
  { name: 'UI/UX Design', level: 75 }
];

const Skills = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Skills</h2>
        <div className="grid gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-2">
                <span className="text-gray-700 dark:text-gray-300 w-24">{skill.name}</span>
                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="ml-4 text-gray-600 dark:text-gray-400 w-12">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;