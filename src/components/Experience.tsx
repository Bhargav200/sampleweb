import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Innovators Inc.',
    position: 'Senior Full Stack Developer',
    period: '2021 - Present',
    description: 'Led development of enterprise-scale applications using React and Node.js. Implemented AI-driven features that increased user engagement by 40%.'
  },
  {
    company: 'Digital Solutions Ltd.',
    position: 'Full Stack Developer',
    period: '2019 - 2021',
    description: 'Developed and maintained multiple client projects. Introduced automated testing that reduced bug reports by 60%.'
  },
  {
    company: 'StartUp Ventures',
    position: 'Junior Developer',
    period: '2018 - 2019',
    description: 'Worked on front-end development using React and Vue.js. Collaborated with UX team to implement responsive designs.'
  }
];

const Experience = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Experience</h2>
        <div className="relative">
          <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 bg-white dark:bg-gray-900 p-4 rounded-full shadow-lg">
                <Briefcase className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-1 dark:text-white">{exp.position}</h3>
                <div className="text-purple-600 dark:text-purple-400 font-medium mb-2">{exp.company}</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mb-4">{exp.period}</div>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;