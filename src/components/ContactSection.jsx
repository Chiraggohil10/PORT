// src/components/ContactSection.js
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCheckCircle,
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

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const contactItems = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "gohilchirag90994@gmail.com",
      href: "mailto:gohilchirag90994@gmail.com",
      color: "#2563EB",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 90994 23494",
      href: "tel:+919099423494",
      color: "#7C3AED",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Bangalore, India",
      href: null,
      color: "#0891B2",
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Chiraggohil10",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/chirag-gohil-42b261255/",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/chirag_gohil_1910/",
      label: "Instagram",
    },
  ];

  const submitButtonColorClass =
    submitSuccess && !isSubmitting
      ? "bg-gradient-to-r from-emerald-500 to-green-600"
      : "bg-gradient-to-r from-blue-600 to-indigo-600";

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="section-solid-bg" />
      <div className="section-grid-pattern" />

      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-6 right-12 w-56 h-56 bg-indigo-300/15 rounded-full blur-3xl pointer-events-none" />

      <div className="section-wrap">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-fluid-h2 font-bold text-slate-900 mb-4">
            Let us build your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">next project</span>
          </h2>
          <p className="text-fluid-body text-slate-600 max-w-3xl mx-auto">
            Share your idea, timeline, or requirement. I will respond with a clear execution plan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 lg:items-stretch gap-6 sm:gap-8">
          <motion.div
            className="lg:col-span-5 h-full"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 p-5 sm:p-6 lg:p-7 shadow-sm h-full">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500" />

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">Contact Information</h3>
              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                Fast communication, clear updates, and delivery-focused collaboration.
              </p>

              <div className="space-y-3.5 mb-6">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-3.5 sm:p-4"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * index }}
                  >
                    <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                        <item.icon className="text-base" style={{ color: item.color }} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-wide font-semibold text-slate-500 mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm sm:text-base text-slate-700 hover:text-blue-700 transition-colors break-all">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm sm:text-base text-slate-700 break-words">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 mb-5">
                <div className="flex items-center gap-2 text-sm sm:text-base text-slate-700">
                  <FaCheckCircle className="text-emerald-600 shrink-0" />
                  <span>Average response time: within 24 hours</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800 mb-3">Follow Me</p>
                <div className="flex items-center gap-2.5">
                  {socialLinks.map((item) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      whileHover={{ y: -3 }}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-slate-200 bg-white text-slate-700 hover:text-blue-700 hover:border-blue-200 transition-all flex items-center justify-center"
                    >
                      <item.icon className="text-base sm:text-lg" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 h-full"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/95 p-5 sm:p-6 lg:p-8 shadow-sm h-full flex flex-col">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-50/40 via-transparent to-indigo-50/40" />

              <div className="relative flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">Send a Message</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-6">Tell me about your requirement, and I will get back with the right solution.</p>

                <div className="mb-5 sm:mb-6 rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-4">
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-2">Quick Project Brief</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {["Budget range", "Timeline", "Target users", "Core features"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                        <FaCheckCircle className="text-emerald-600 text-xs shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <form className="flex-1 flex flex-col" onSubmit={handleSubmit}>
                  <div className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm text-slate-700 font-medium mb-2">Name</label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm sm:text-base bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm text-slate-700 font-medium mb-2">Email</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 text-sm sm:text-base bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm text-slate-700 font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        rows="6"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm sm:text-base bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                        placeholder="Tell me about your project, target users, timeline, and goals..."
                      />
                    </div>

                  </div>

                  <motion.button
                    type="submit"
                    className={`w-full mt-5 sm:mt-6 inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 text-sm sm:text-base text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed ${submitButtonColorClass}`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {isSubmitting ? (
                        <motion.span
                          key="sending"
                          className="inline-flex items-center gap-2"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                        >
                          Sending...
                          <FaPaperPlane className="text-sm" />
                        </motion.span>
                      ) : submitSuccess ? (
                        <motion.span
                          key="success"
                          className="inline-flex items-center gap-2"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                        >
                          Message sent successfully.
                          <FaCheckCircle className="text-sm" />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="default"
                          className="inline-flex items-center gap-2"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                        >
                          Send Message
                          <FaPaperPlane className="text-sm" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
