// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" pt-16 pb-8 px-4 md:px-8 border-t border-slate-400">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row justify-between gap-10 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Chirag Gohil</h2>
            <p className="text-slate-400">
              Whether you're a web developer in need of support or an early-stage company looking to level up your development, I'd love to talk about your project. If you want to develop your website. 💜
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-amber-400 mb-4">EXPLORE</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Support</a></li>
                <li><a href="#about" className="text-slate-400 hover:text-amber-500 transition-colors">About Us</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-amber-400 mb-4">LEGAL</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Terms of Use</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">Private Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-amber-400 mb-4">SOCIAL</h3>
              <div className="flex space-x-4">
                <motion.a 
                  href="https://github.com/Chiraggohil10" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  <FaGithub className="text-2xl" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/chirag-gohil-42b261255/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  <FaLinkedin className="text-2xl" />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/chirag_gohil_1910/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  <FaInstagram className="text-2xl" />
                </motion.a>
              </div>

              
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        
        <p className="text-center text-slate-400 mt-8">
          © {new Date().getFullYear()} Chirag Gohil. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;