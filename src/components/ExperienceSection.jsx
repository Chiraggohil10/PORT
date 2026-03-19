import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaGraduationCap, FaBuilding } from 'react-icons/fa';

const ExperienceSection = () => {
  const experiences = [
    {
      icon: FaBuilding,
      title: 'Full Stack Developer',
      company: 'Theta Solutions | Bill Saathi',
      period: 'Jan 2026 - Present',
      description: 'Developing scalable full-stack web applications using React.js, Node.js, and Express.js. Designing clean, modular architectures with reusable components. Building secure REST APIs and integrating them with modern frontend interfaces.',
      color: '#3B82F6',
    },
    {
      icon: FaCode,
      title: 'Frontend / Full Stack Developer',
      company: 'Dashlani Technology Pvt. Ltd.',
      period: 'September 2025 - January 2026',
      description: 'Developed high-quality, performance-optimized React.js frontends with clean architecture. Built pixel-perfect UI using Tailwind CSS and Framer Motion. Engineered backend services using Node.js and Express.js with Swagger API documentation.',
      color: '#8B5CF6',
    },
    {
      icon: FaBriefcase,
      title: 'Frontend Developer / React Developer',
      company: 'United Tech and Solutions',
      period: 'March 2025 - September 2025',
      description: 'Built responsive web and mobile interfaces using React.js, React Native, Tailwind CSS. Integrated Firebase for real-time database and authentication. Developed reusable React and React Native components with clean code.',
      color: '#EC4899',
    },
    {
      icon: FaGraduationCap,
      title: 'Bachelor of Computer Applications (BCA)',
      company: 'Veer Narmad South Gujarat University',
      period: '2021 - 2024',
      description: '',
      education: true,
      training: {
        title: 'MERN Stack Development Training',
        institute: 'Jspider Institute, Bangalore',
        details: [
          'MongoDB, Express.js, React.js, Node.js',
          'REST API development',
          'Full Stack Web Application Architecture',
          'JavaScript and modern frontend development practices'
        ]
      },
      color: '#10B981',
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="section-solid-bg" />
      <div className="section-grid-pattern" />

      <div className="section-wrap">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            MY JOURNEY
          </span>
          <h2 className="text-fluid-h2 font-bold text-slate-900 mb-4">
            Experience &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Growth
            </span>
          </h2>
        </motion.div>

        <div className="w-full">
          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-start gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0`}>
                  <motion.div
                    className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-3">
                      {exp.period}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 break-words">{exp.title}</h3>
                    <p className="text-sm sm:text-base text-blue-600 font-semibold mb-3 break-words">{exp.company}</p>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed break-words">{exp.description}</p>
                    
                    {/* Special Training Section for Education */}
                    {exp.education && exp.training && (
                      <motion.div 
                        className="mt-4 bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border-2 border-green-200"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                            <FaCode className="text-white text-sm" />
                          </div>
                          <div>
                            <h4 className="font-bold text-green-800">{exp.training.title}</h4>
                            <p className="text-sm text-green-600 font-semibold">{exp.training.institute}</p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {exp.training.details.map((item, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-slate-700"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * idx }}
                            >
                              <span className="mt-1.5 w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Icon/Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                     style={{ backgroundColor: exp.color }}>
                  <exp.icon className="text-white text-sm" />
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm sm:text-base text-slate-600 mb-4">Always eager to take on new challenges</p>
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
            className="inline-block w-full sm:w-auto px-8 py-3 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
