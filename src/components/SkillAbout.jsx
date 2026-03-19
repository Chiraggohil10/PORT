import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLayerGroup, FaReact, FaDatabase, FaCss3Alt, FaFire } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiMysql } from "react-icons/si";

const SkillAbout = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardHover = {
    hover: {
      y: -10,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Frontend skills with icons
  const frontendSkills = [
    { name: "HTML", icon: <FaCode className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React JS", icon: <FaReact className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "SCSS", icon: <FaCss3Alt className="text-pink-500" /> }
  ];

  // Backend skills with icons
  const backendSkills = [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" />, level: "Basic" },
    { name: "Express", icon: <SiExpress className="text-gray-400" />, level: "Basic" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "SQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "Firebase", icon: <FaFire className="text-yellow-500" /> },
    { name: "Redux", icon: <FaCode className="text-purple-500" /> },
    { name: "REST API", icon: <FaDatabase className="text-green-400" />, level: "Basic" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A showcase of my technical abilities and areas of specialization in web development
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Frontend Card */}
          <motion.div 
            className="bg-gradient-to-br from-white to-blue-50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden"
            whileHover="hover"
            variants={cardHover}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/10 rounded-full"></div>
            
            <div className="flex items-start gap-6 relative z-10">
              <motion.div 
                className="bg-blue-500/20 p-4 rounded-2xl shadow-lg"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaCode className="text-3xl text-blue-600" />
              </motion.div>
              <div>
                <h4 className="text-2xl font-bold text-slate-800 mb-3">Frontend Expertise</h4>
                <p className="text-slate-600 mb-6">Creating responsive, modern and user-friendly interfaces</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {frontendSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-3 bg-white/80 p-3 rounded-lg border border-slate-200 shadow-sm"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-xl">{skill.icon}</div>
                      <span className="text-slate-700">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Backend Card */}
          <motion.div 
            className="bg-gradient-to-br from-white to-cyan-50 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-xl relative overflow-hidden"
            whileHover="hover"
            variants={cardHover}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-400/10 rounded-full"></div>
            
            <div className="flex items-start gap-6 relative z-10">
              <motion.div 
                className="bg-cyan-500/20 p-4 rounded-2xl shadow-lg"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaLayerGroup className="text-3xl text-cyan-600" />
              </motion.div>
              <div>
                <h4 className="text-2xl font-bold text-slate-800 mb-3">Backend Skills</h4>
                <p className="text-slate-600 mb-6">Building robust server-side applications and APIs</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {backendSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center justify-between bg-white/80 p-3 rounded-lg border border-slate-200 shadow-sm"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-xl">{skill.icon}</div>
                        <span className="text-slate-700">{skill.name}</span>
                      </div>
                      {skill.level && (
                        <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                          {skill.level}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillAbout;