import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaCheckCircle,
  FaExclamationCircle,
} from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const contactItems = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'gohilchirag90994@gmail.com',
      href: 'mailto:gohilchirag90994@gmail.com',
      color: '#3B82F6',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 90994 23494',
      href: 'tel:+919099423494',
      color: '#8B5CF6',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Bangalore, India',
      href: null,
      color: '#06B6D4',
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Chiraggohil10', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/chirag-gohil-42b261255/', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/chirag_gohil_1910/', label: 'Instagram' },
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitError('');
    setSubmitSuccess(false);
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/gohilchirag90994@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          _subject: 'Portfolio Contact Message',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to submit your message at this time.');
      }

      const result = await response.json();
      if (result.success === 'false' || result.success === false) {
        throw new Error(result.message || 'Submission failed.');
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/80 dark:border-zinc-800/80">
      {/* Background decor */}
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/2 rounded-full blur-3xl pointer-events-none" />

      <div className="section-wrap">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3.5 py-1.5 rounded-full border border-blue-500/10 bg-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            Contact
          </span>
          <h2 className="text-fluid-h2 font-extrabold text-zinc-900 dark:text-zinc-50 mb-4 font-display">
            Start a project or{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              say hello
            </span>
          </h2>
          <p className="text-fluid-body text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Outline your roadmap, design needs, or questions, and I will get back within 24 hours.
          </p>
        </motion.div>

        {/* Form & details grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Details Card */}
          <motion.div
            className="lg:col-span-5 h-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glow-card p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden">
              {/* Corner colored accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />
              
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900 dark:text-zinc-50 font-display mb-4">
                  Connect Details
                </h3>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
                  Direct communication channels. Feel free to copy my email or click links to launch calls/chats.
                </p>

                <div className="space-y-4">
                  {contactItems.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-zinc-150 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-900/40 p-4 flex items-center gap-4"
                    >
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" 
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <item.icon className="text-sm" style={{ color: item.color }} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] uppercase font-bold text-zinc-400 dark:text-zinc-500 tracking-wider">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="text-xs sm:text-sm font-semibold text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-500 transition-colors break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 break-words">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-8 mt-8 border-t border-zinc-150 dark:border-zinc-800/60">
                <p className="text-xs font-bold text-zinc-700 dark:text-zinc-300 mb-3 uppercase tracking-wider">Follow Me</p>
                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-150 shadow-xs flex items-center justify-center cursor-pointer transition-all"
                      whileHover={{ y: -2 }}
                      aria-label={social.label}
                    >
                      <social.icon className="text-base" />
                    </motion.a>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            className="lg:col-span-7 h-full"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glow-card p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900 dark:text-zinc-50 font-display mb-4">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wide">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl border bg-zinc-50 dark:bg-zinc-950 text-sm focus:outline-none transition-all ${
                        errors.name 
                          ? 'border-red-500/50 focus:ring-1 focus:ring-red-500/50' 
                          : 'border-zinc-200 dark:border-zinc-800 focus:ring-1 focus:ring-blue-500/50'
                      }`}
                      placeholder="Your Name"
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1.5 text-xxs text-red-500 mt-1">
                        <FaExclamationCircle className="text-[10px]" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wide">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl border bg-zinc-50 dark:bg-zinc-950 text-sm focus:outline-none transition-all ${
                        errors.email 
                          ? 'border-red-500/50 focus:ring-1 focus:ring-red-500/50' 
                          : 'border-zinc-200 dark:border-zinc-800 focus:ring-1 focus:ring-blue-500/50'
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1.5 text-xxs text-red-500 mt-1">
                        <FaExclamationCircle className="text-[10px]" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-zinc-600 dark:text-zinc-400 mb-1.5 uppercase tracking-wide">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-xl border bg-zinc-50 dark:bg-zinc-950 text-sm focus:outline-none transition-all resize-none ${
                        errors.message 
                          ? 'border-red-500/50 focus:ring-1 focus:ring-red-500/50' 
                          : 'border-zinc-200 dark:border-zinc-800 focus:ring-1 focus:ring-blue-500/50'
                      }`}
                      placeholder="Outline details, target audience, timeline, or inquiries..."
                    />
                    {errors.message && (
                      <p className="flex items-center gap-1.5 text-xxs text-red-500 mt-1">
                        <FaExclamationCircle className="text-[10px]" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Error Notification Banner */}
                  {submitError && (
                    <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-3.5 text-xs text-red-600 dark:text-red-400 flex items-center gap-2">
                      <FaExclamationCircle className="shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all disabled:opacity-75 disabled:cursor-not-allowed ${
                      submitSuccess 
                        ? 'bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700' 
                        : 'bg-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {isSubmitting ? (
                        <motion.span
                          key="sending"
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                        >
                          Sending...
                          <div className="w-3.5 h-3.5 rounded-full border-2 border-white/35 border-t-white animate-spin" />
                        </motion.span>
                      ) : submitSuccess ? (
                        <motion.span
                          key="success"
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                        >
                          Message Sent!
                          <FaCheckCircle className="text-xs text-white" />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="default"
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                        >
                          Send Message
                          <FaPaperPlane className="text-xs" />
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
