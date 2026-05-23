import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Gowri0504', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gowri-dharmaraj/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:gowrid.23it@kongu.edu', label: 'Email' },
  ]

  return (
    <footer className="relative z-10 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-display font-bold gradient-text mb-4 md:mb-6"
          >
            Gowri D
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-gray-400 text-center mb-4 md:mb-6"
          >
            Building AI-Powered Experiences
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-3 md:gap-4 mb-6 md:mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="p-2.5 md:p-3 rounded-lg glass-light hover:glass transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-primary-light transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-4 md:mb-6" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center text-xs md:text-sm text-gray-500"
          >
            <p className="flex items-center justify-center gap-1 md:gap-2">
              Designed & Developed by{' '}
              <span className="font-semibold gradient-text">Gowri D</span>
            </p>
            <p className="mt-1.5 md:mt-2 flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 md:w-4 md:h-4 text-red-500 inline" /> in India
            </p>
            <p className="mt-1.5 md:mt-2">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
