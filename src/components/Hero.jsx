import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, Download, Code2, Brain, Layers, Target } from 'lucide-react'

const Hero = () => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = [
    'Full Stack Developer',
    'AI Application Developer',
    'MERN Stack Engineer',
    'Problem Solver',
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[currentIndex]

      if (!isDeleting) {
        if (currentText.length < currentRole.length) {
          setCurrentText(currentRole.substring(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 40 : 60)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentIndex])

  const stats = [
    { icon: Code2, label: 'Major Projects', value: '4+' },
    { icon: Brain, label: 'Technologies', value: '10+' },
    { icon: Target, label: 'CGPA', value: '8.0' },
    { icon: Layers, label: 'Graduate', value: '2027' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Gowri0504', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gowri-dharmaraj/', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/u/gowri_d/', label: 'LeetCode' },
    { icon: Mail, href: 'mailto:gowri.d.tech@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 md:pb-16 px-4 relative">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6 md:space-y-8"
          >
            {/* Heading */}
            <div className="space-y-3 md:space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary-light text-base md:text-lg font-medium"
              >
                Hello, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold"
              >
                Gowri <span className="gradient-text">D</span>
              </motion.h1>

              {/* Typing Animation */}
              <div className="h-8 md:h-10 text-xl md:text-2xl lg:text-3xl font-medium text-gray-300">
                <span>{currentText}</span>
                <span className="animate-pulse">|</span>
              </div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              I build scalable AI-powered web applications focused on real-world problem solving,
              placement preparation systems, analytics dashboards, and modern user experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                className="btn-primary text-sm md:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code2 className="w-4 h-4 md:w-5 md:h-5" />
                View AI Projects
              </motion.a>
              <motion.a
                href="Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm md:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-3 md:gap-4 justify-center lg:justify-start pt-4 md:pt-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="p-2.5 md:p-3 rounded-lg glass-light hover:glass transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-primary-light transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-6 md:pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="glass-light p-3 md:p-4 rounded-xl text-center hover:border-primary/30 transition-all duration-300"
                >
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-1.5 md:mb-2 text-primary-light" />
                  <div className="text-xl md:text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-gray-400 mt-0.5 md:mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end relative order-first lg:order-last"
          >
            <div className="relative">
              {/* Gradient Glow Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Profile Image Container */}
              <div className="relative">
                <motion.div
                  className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glow-border glass"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <img
                    src="pic.jpeg"
                    alt="Gowri D"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating Status Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 glass px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-2 md:gap-3 shadow-xl"
                >
                  <motion.div
                    className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)]"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-xs md:text-sm font-medium whitespace-nowrap">Available for work</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
