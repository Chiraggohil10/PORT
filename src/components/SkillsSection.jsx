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
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-indigo-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/3 w-56 h-56 bg-emerald-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
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
            className="inline-block text-sm font-mono text-amber-400 mb-3 px-3 py-1 rounded-full bg-slate-800 border border-amber-400/20"
            whileHover={{ scale: 1.05 }}
          >
            TECHNICAL EXPERTISE
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            My <span className="text-amber-400">Skills</span> & Technologies
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 max-w-3xl mx-auto"
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
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="bg-amber-500/10 p-3 rounded-xl"
                variants={iconVariants}
                whileHover="hover"
              >
                <FaCode className="text-3xl text-amber-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">
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
              {skills.frontend.map((skill) => (
                <motion.div key={skill.name} className="group" variants={item}>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-300 font-medium group-hover:text-amber-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-amber-400 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-slate-700 rounded-full overflow-hidden">
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
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="bg-emerald-500/10 p-3 rounded-xl"
                variants={iconVariants}
                whileHover="hover"
              >
                <FaServer className="text-3xl text-emerald-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">
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
                    <span className="text-slate-300 font-medium group-hover:text-emerald-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-emerald-400 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-slate-700 rounded-full overflow-hidden">
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
                    className="bg-slate-900/50 p-3 rounded-xl text-center border border-slate-700 group"
                    variants={item}
                    whileHover={{
                      y: -5,
                      backgroundColor: "rgba(6, 78, 59, 0.3)",
                      borderColor: "rgba(110, 231, 183, 0.5)",
                    }}
                  >
                    <div className="text-sm text-slate-400 group-hover:text-emerald-300">
                      Basic Knowledge
                    </div>
                    <span className="text-slate-300 group-hover:text-emerald-400 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Tools & Other Skills */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700"
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                className="bg-purple-500/10 p-3 rounded-xl"
                variants={iconVariants}
                whileHover="hover"
              >
                <FaTools className="text-3xl text-purple-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white">
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
                    <span className="text-slate-300 font-medium group-hover:text-purple-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-purple-400 font-bold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-slate-700 rounded-full overflow-hidden">
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
                <h4 className="text-2xl font-bold text-slate-200 mb-3 border-b border-slate-700 pb-2">
                  🚀 Additional Skills
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
                      className="px-2 py-2 text-sm font-medium rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 text-slate-300 border border-slate-700 shadow-sm group transition-all duration-300"
                      whileHover={{
                        scale: 1.08,
                        backgroundColor: "rgba(76, 29, 149, 0.3)",
                        borderColor: "rgba(192, 132, 252, 0.5)",
                        color: "#e9d5ff",
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
        className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-amber-400"
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
        className="absolute bottom-1/3 right-20 w-6 h-6 rounded-full bg-emerald-400"
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
