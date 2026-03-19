import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaGitAlt, FaDocker, FaHtml5, FaCss3Alt, FaPython, FaAws 
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTypescript, SiJavascript, SiTailwindcss, 
  SiNextdotjs, SiPostgresql, SiRedis, SiGraphql, SiPrisma 
} from 'react-icons/si';

const TechStackSection = () => {
  const technologies = [
    // Frontend
    { name: 'React', icon: FaReact, color: '#61DAFB', category: 'Frontend' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', icon: FaNodeJs, color: '#68A063', category: 'Backend' },
    { name: 'Express.js', icon: SiExpress, color: '#000000', category: 'Backend' },
    { name: 'Python', icon: FaPython, color: '#3776AB', category: 'Backend' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098', category: 'Backend' },
    { name: 'Prisma', icon: SiPrisma, color: '#2D3748', category: 'Backend' },
    
    // Database
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', category: 'Database' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'Database' },
    
    // Tools & DevOps
    { name: 'Git', icon: FaGitAlt, color: '#F05032', category: 'Tools' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED', category: 'DevOps' },
    { name: 'AWS', icon: FaAws, color: '#FF9900', category: 'DevOps' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section id="techstack" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="section-solid-bg" />
      
      {/* Grid pattern */}
      <div className="section-grid-pattern" />

      <div className="section-wrap">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
            TECH STACK
          </span>
          <h2 className="text-fluid-h2 font-bold text-slate-900 mb-4">
            Technologies I{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
          <p className="text-fluid-body text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              className="group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="relative h-full p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: tech.color }}
                />
                
                {/* Icon */}
                <div className="flex flex-col items-center gap-3 relative z-10">
                  <tech.icon
                    className="text-3xl sm:text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110"
                    style={{ color: tech.color }}
                  />
                  <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-700 text-center break-words">
                    {tech.name}
                  </span>
                  <span className="text-xs text-slate-500 px-2 py-1 bg-slate-100 rounded-full">
                    {tech.category}
                  </span>
                </div>

                {/* Glow effect */}
                <div
                  className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                  style={{ backgroundColor: tech.color }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm sm:text-base text-slate-600 break-words">
            Always learning and adapting to new technologies | Open to working with modern tools
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;



