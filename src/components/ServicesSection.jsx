import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaRocket,
  FaPalette,
  FaCheckCircle,
  FaArrowRight,
} from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: FaLaptopCode,
      title: 'Frontend Development',
      description:
        'Crafting fast and polished user interfaces with React and Next.js, focused on clean structure, accessibility, and smooth interactions.',
      color: '#3B82F6',
      features: [
        'React.js and Next.js',
        'Tailwind CSS and SCSS',
        'Reusable components',
        'Mobile-first responsive layouts',
        'Cross-browser compatibility',
        'State management patterns',
      ],
      tags: ['UI Engineering', 'SPA', 'SSR'],
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description:
        'Building secure APIs and scalable backend systems with robust validation, authentication, and production-ready architecture.',
      color: '#8B5CF6',
      features: [
        'Node.js and Express.js',
        'REST API architecture',
        'JWT and OAuth authentication',
        'MongoDB and SQL design',
        'Validation and error handling',
        'Scalable service structure',
      ],
      tags: ['API', 'Security', 'Database'],
    },
    {
      icon: FaCode,
      title: 'Full Stack Solutions',
      description:
        'Delivering complete products from planning to deployment with consistent engineering standards across frontend and backend.',
      color: '#EC4899',
      features: [
        'MERN stack delivery',
        '3rd-party API integrations',
        'Cloud deployment workflows',
        'CI/CD setup',
        'Version control discipline',
        'Production optimization',
      ],
      tags: ['End-to-End', 'Deployment', 'Scalable'],
    },
    {
      icon: FaMobileAlt,
      title: 'Responsive Design',
      description:
        'Ensuring consistent UX across mobiles, tablets, and desktops with adaptive grids, touch-friendly layouts, and accessibility in mind.',
      color: '#10B981',
      features: [
        'Mobile-first strategy',
        'Fluid layout systems',
        'Cross-device testing',
        'PWA-ready foundations',
        'Touch-friendly interactions',
        'Visual consistency',
      ],
      tags: ['Mobile UX', 'Adaptive', 'PWA'],
    },
    {
      icon: FaRocket,
      title: 'Performance Optimization',
      description:
        'Improving speed and discoverability with practical optimization techniques for core web vitals, SEO, and runtime efficiency.',
      color: '#F59E0B',
      features: [
        'Core Web Vitals tuning',
        'Code splitting and lazy loading',
        'Image and asset optimization',
        'SEO best practices',
        'Caching strategies',
        'Bundle size reduction',
      ],
      tags: ['Speed', 'SEO', 'Optimization'],
    },
    {
      icon: FaPalette,
      title: 'UI/UX Implementation',
      description:
        'Converting design files into production interfaces with clean details, meaningful transitions, and accessibility-first implementation.',
      color: '#06B6D4',
      features: [
        'Figma/XD to code',
        'Pixel-accurate implementation',
        'Micro-interactions',
        'Accessibility-friendly markup',
        'Design system consistency',
        'User-focused execution',
      ],
      tags: ['Design', 'UX', 'Accessibility'],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="section-solid-bg" />
      <div className="section-grid-pattern" />

      <div className="section-wrap">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            SERVICES
          </span>
          <h2 className="text-fluid-h2 font-bold text-slate-900 mb-4">
            What I <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Deliver</span>
          </h2>
          <p className="text-fluid-body text-slate-600 max-w-4xl mx-auto">
            Practical and scalable development services, designed for modern products and real business use-cases.
          </p>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/90 shadow-sm hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-0 left-0 h-full w-1.5" style={{ backgroundColor: service.color }} />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 p-5 sm:p-6 lg:p-8">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <service.icon className="text-2xl sm:text-3xl" style={{ color: service.color }} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight break-words">{service.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed break-words mb-4">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full border border-slate-200 text-slate-600 bg-slate-50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-8">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 bg-white"
                      >
                        <span className="w-5 h-5 flex items-center justify-center shrink-0">
                          <FaCheckCircle className="text-[14px]" style={{ color: service.color }} />
                        </span>
                        <span className="text-sm sm:text-base text-slate-700 break-words leading-5 sm:leading-6">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm sm:text-base text-slate-600 mb-5">
            Have a specific requirement? Let us discuss your project scope.
          </p>
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 80,
                  behavior: 'smooth',
                });
              }
            }}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-sm sm:text-base text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            Start a Project
            <FaArrowRight className="text-sm" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
