// src/components/SkillsSection.js
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaServer, FaTools } from "react-icons/fa";

const SkillsSection = () => {
  const skills = {
    frontend: [
      { name: "HTML5", level: 95, color: "from-orange-500 to-amber-500" },
      { name: "CSS3", level: 90, color: "from-emerald-500 to-cyan-400" },
      { name: "JavaScript", level: 85, color: "from-yellow-400 to-amber-300" },
      { name: "React JS", level: 88, color: "from-sky-400 to-cyan-300" },
      {
        name: "Tailwind CSS",
        level: 92,
        color: "from-teal-500 to-emerald-400",
      },
      { name: "Bootstrap", level: 80, color: "from-purple-600 to-indigo-500" },
    ],
    backend: [
      { name: "Redux", level: 80, color: "from-blue-600 to-sky-500" },
      { name: "Firebase", level: 90, color: "from-violet-500 to-purple-400" },
      { name: "REST APIs", level: 70, color: "from-pink-500 to-red-400" },
      { name: "SQL", level: 75, color: "from-green-600 to-emerald-500" },
    ],
    tools: [
      { name: "Git/Github", level: 85, color: "from-gray-400 to-slate-300" },
      { name: "VS Code", level: 90, color: "from-blue-500 to-sky-400" },
    ],
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const progressBar = {
    hidden: { width: 0 },
    show: {
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const iconVariants = {
    hover: {
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-16 px-4 md:px-8  overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/3 w-56 h-56 bg-indigo-300 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block text-sm font-mono text-blue-600 mb-3 px-3 py-1 rounded-full bg-blue-100 border border-blue-200"
            whileHover={{ scale: 1.05 }}
          >
            TECHNICAL EXPERTISE
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            My <span className="text-blue-600">Skills</span> & Technologies
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            I've worked with a range of technologies in the web development
            world. Here's a showcase of my core competencies.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="bg-blue-500/10 p-3 rounded-xl"
                variants={iconVariants}
                whileHover="hover"
              >
                <FaCode className="text-3xl text-blue-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-800">
                Frontend Development
              </h3>
            </div>

            <motion.div
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skills.frontend.map((skill, index) => (
                <motion.div key={skill.name} className="group" variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium group-hover:text-blue-600 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-blue-600 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      style={{ width: `${skill.level}%` }}
                      variants={progressBar}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="bg-cyan-500/10 p-3 rounded-xl"
                variants={iconVariants}
                whileHover="hover"
              >
                <FaServer className="text-3xl text-cyan-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-800">
                Backend & Databases
              </h3>
            </div>

            <motion.div
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skills.backend.map((skill) => (
                <motion.div key={skill.name} className="group" variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium group-hover:text-cyan-600 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-cyan-600 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      style={{ width: `${skill.level}%` }}
                      variants={progressBar}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Additional backend skills for visual balance */}
              <motion.div
                className="grid grid-cols-2 gap-6 mt-10"
                variants={container}
              >
                {["Node.js", "Express"].map((skill) => (
                  <motion.div
                    key={skill}
                    className="bg-slate-100 p-3 rounded-xl text-center border border-slate-200 group"
                    variants={item}
                    whileHover={{
                      y: -5,
                      backgroundColor: "rgba(6, 182, 212, 0.1)",
                      borderColor: "rgba(6, 182, 212, 0.3)",
                    }}
                  >
                    <div className="text-sm text-slate-600 group-hover:text-cyan-600">
                      Basic Knowledge
                    </div>
                    <span className="text-slate-800 group-hover:text-cyan-700 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Tools & Other Skills */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="bg-indigo-500/10 p-3 rounded-xl"
                variants={iconVariants}
                whileHover="hover"
              >
                <FaTools className="text-3xl text-indigo-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-800">
                Tools & Platforms
              </h3>
            </div>
          
            <motion.div
              className="space-y-6"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {skills.tools.map((skill) => (
                <motion.div key={skill.name} className="group" variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 font-medium group-hover:text-indigo-600 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-indigo-600 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      style={{ width: `${skill.level}%` }}
                      variants={progressBar}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
          
              {/* Skills Grid */}
              <motion.div className="mt-12" variants={item}>
                <h4 className="text-2xl font-bold text-slate-800 mb-3 border-b border-slate-200 pb-2">
                  Additional Skills
                </h4>
          
                <div className="flex flex-wrap gap-2">
                  {[
                    "Redux",
                    "NPM",
                    "Postman",
                    "Netlify",
                    "Vercel",
                    "Swagger",
                    "Responsive Design",
                  ].map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-2 py-2 text-sm font-medium rounded-xl bg-white text-slate-700 border border-slate-200 shadow-sm group transition-all duration-300"
                      whileHover={{
                        scale: 1.08,
                        backgroundColor: "rgba(99, 102, 241, 0.1)",
                        borderColor: "rgba(99, 102, 241, 0.3)",
                        color: "#4f46e5",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-blue-400"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-20 w-6 h-6 rounded-full bg-cyan-400"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
};

export default SkillsSection;
