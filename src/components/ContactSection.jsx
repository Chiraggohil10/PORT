// src/components/ContactSection.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative pb-16 px-4 md:px-8  overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-amber-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-emerald-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/3 w-56 h-56 bg-indigo-700 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
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
            GET IN TOUCH
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Contact <span className="text-amber-400">Me</span>
          </motion.h2>
          <motion.p
            className="text-xl text-slate-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 h-full">
              <h3 className="text-2xl font-bold text-white mb-8">
                Let's Connect
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-amber-500/10 p-3 rounded-lg">
                    <FaEnvelope className="text-xl text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-300 mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:gohilchirag90994@gmail.com"
                      className="text-slate-400 hover:text-amber-400 transition-colors"
                    >
                      gohilchirag90994@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-emerald-500/10 p-3 rounded-lg">
                    <FaMapMarkerAlt className="text-xl text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-300 mb-1">
                      Location
                    </h4>
                    <p className="text-slate-400">Bangalore, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <FaPhone className="text-xl text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-300 mb-1">
                      Phone
                    </h4>
                    <p className="text-slate-400">+91 90994 23494</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-bold text-slate-300 mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {/* GitHub */}
                  <a
                    href="#"
                    className="bg-slate-800 p-3 rounded-full text-slate-300 hover:text-white hover:bg-gray-700 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-xl" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="bg-slate-800 p-3 rounded-full text-slate-300 hover:text-white hover:bg-[#0077b5] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="#"
                    className="bg-slate-800 p-3 rounded-full text-slate-300 hover:text-white hover:bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 transition-all"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-slate-300 font-medium mb-2"
                  >
                    Your Name<span className="text-amber-500 ml-1">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-slate-300 font-medium mb-2"
                  >
                    Email Address<span className="text-amber-500 ml-1">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-slate-300 font-medium mb-2"
                  >
                    Your Message<span className="text-amber-500 ml-1">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="I'd like to discuss a project..."
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  ></textarea>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.button
                    type="submit"
                    className={`w-full flex items-center text-white justify-center gap-2 font-bold py-4 px-6 rounded-lg transition-all ${
                      isSubmitting
                        ? "bg-amber-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <FaPaperPlane className="ml-2" />
                      </>
                    )}
                  </motion.button>

                  {submitSuccess && (
                    <motion.div
                      className="mt-4 p-4 bg-emerald-900/30 border border-emerald-700 rounded-lg text-emerald-400 text-center"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      Your message has been sent successfully! I'll get back to
                      you soon.
                    </motion.div>
                  )}
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/3 left-10 w-4 h-4 rounded-full bg-amber-400"
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
        className="absolute bottom-1/4 right-20 w-5 h-5 rounded-full bg-emerald-400"
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

export default ContactSection;
