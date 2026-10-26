import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaGitAlt, FaDocker, FaHtml5, FaCss3Alt, FaPython, FaAws 
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTypescript, SiJavascript, SiTailwindcss, 
  SiNextdotjs, SiPostgresql, SiRedis, SiGraphql, SiPrisma 
} from 'react-icons/si';

const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState('All');
  const prefersReducedMotion = useReducedMotion();

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps & Tools'];

  const technologies = [
    // Frontend
    { name: 'React', icon: FaReact, color: '#61DAFB', category: 'Frontend' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', darkColor: '#ffffff', category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', icon: FaNodeJs, color: '#68A063', category: 'Backend' },
    { name: 'Express.js', icon: SiExpress, color: '#000000', darkColor: '#ffffff', category: 'Backend' },
    { name: 'Python', icon: FaPython, color: '#3776AB', category: 'Backend' },
    { name: 'GraphQL', icon: SiGraphql, color: '#E10098', category: 'Backend' },
    { name: 'Prisma', icon: SiPrisma, color: '#2D3748', darkColor: '#a3a3a3', category: 'Backend' },
    
    // Database
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', category: 'Database' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'Database' },
    
    // Tools & DevOps
    { name: 'Git', icon: FaGitAlt, color: '#F05032', category: 'DevOps & Tools' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED', category: 'DevOps & Tools' },
    { name: 'AWS', icon: FaAws, color: '#FF9900', category: 'DevOps & Tools' },
  ];

  const filteredTechnologies = activeTab === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeTab);

  return (
    <section id="techstack" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="section-wrap">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3.5 py-1.5 rounded-full border border-indigo-500/10 bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4">
            Tech Stack
          </span>
          <h2 className="text-fluid-h2 font-extrabold text-zinc-900 dark:text-zinc-50 mb-4 font-display">
            A specialized stack for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              modern engineering
            </span>
          </h2>
          <p className="text-fluid-body text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Consistently picking the right tool for the job. Optimized for scalability, performance, and typing safety.
          </p>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-xl mx-auto">
          {categories.map((cat) => {
            const isSelected = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  isSelected 
                    ? 'text-white dark:text-zinc-900 z-10' 
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeTechTab"
                    className="absolute inset-0 bg-zinc-900 dark:bg-zinc-100 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Grid List */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          layout={!prefersReducedMotion}
        >
          <AnimatePresence mode="popLayout">
            {filteredTechnologies.map((tech) => (
              <motion.div
                key={tech.name}
                layout={!prefersReducedMotion}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="group glow-card glow-card-hover p-5 sm:p-6 flex flex-col items-center justify-between text-center relative overflow-hidden"
              >
                {/* Visual glow background matching technology brand color */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: tech.color }}
                />
                
                <div className="flex flex-col items-center gap-3">
                  <tech.icon
                    className="text-4.5xl sm:text-5xl transition-transform duration-300 group-hover:scale-105"
                    style={{ color: tech.color }}
                  />
                  <span className="text-sm font-bold text-zinc-800 dark:text-zinc-200 leading-tight">
                    {tech.name}
                  </span>
                </div>
                
                <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800/80 px-2 py-0.5 rounded-full mt-3 uppercase tracking-wider">
                  {tech.category}
                </span>

                {/* Accent glow corner */}
                <div 
                  className="absolute -bottom-4 -right-4 w-8 h-8 rounded-full blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-350"
                  style={{ backgroundColor: tech.color }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
};

export default TechStackSection;
