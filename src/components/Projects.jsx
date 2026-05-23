import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Brain } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'PlacementPro',
      subtitle: 'AI Powered Placement Preparation Tracker',
      description: 'Built an AI-powered placement preparation ecosystem helping students track coding progress, company preparation, aptitude performance, interview readiness, and personalized learning plans using intelligent analytics.',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React.js', 'Spring Boot', 'Java', 'PostgreSQL', 'JWT', 'Redis', 'Django REST', 'Python', 'Tailwind CSS', 'Recharts', 'Docker', 'REST APIs'],
      type: 'Full Stack',
      github: 'https://github.com/Gowri0504',
      demo: '#',
      featured: true,
    },
    {
      title: 'DreamLift',
      subtitle: 'Crowdfunding Platform',
      description: 'A full-stack crowdfunding platform with real-time updates, secure payment integration via Stripe/Razorpay, JWT authentication, and Socket.io for live updates. Built with MERN stack and deployed on cloud platforms.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'Socket.io', 'Stripe', 'Razorpay', 'Tailwind CSS', 'Framer Motion', 'Cloudinary', 'Mongoose'],
      type: 'Full Stack',
      github: 'https://github.com/Gowri0504',
      demo: '#',
    },
    {
      title: 'Digital Wallet Analyzer',
      description: 'Track and visualize your spending habits with beautiful charts and AI-powered insights. Full-stack application with secure authentication and real-time analytics.',
      image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT', 'Bootstrap', 'Chart.js', 'GitHub Actions'],
      type: 'Full Stack',
      github: 'https://github.com/Gowri0504/Digital-Wallet',
      demo: 'https://gowri0504.github.io/Digital-Wallet/',
    },
    {
      title: 'Railway Management System',
      description: 'CRUD system for trains and reservations with admin dashboard. Manage train schedules, passenger bookings, and track availability efficiently.',
      image: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['JavaScript', 'MySQL', 'HTML', 'CSS'],
      type: 'Java',
      github: 'https://github.com/Gowri0504/Railway-Management',
      demo: 'https://gowri0504.github.io/Railway-Management/',
    },
    {
      title: 'Chess Game',
      description: 'Implemented using Data Structures and Java. Supports real-time two-player logic with all standard chess rules and move validation.',
      image: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Java', 'OOP', 'Data Structures'],
      type: 'Java',
      github: 'https://github.com/Gowri0504/ChessGame',
      demo: 'https://gowri0504.github.io/ChessGame/',
    },
    {
      title: 'Spin a Yarn Game',
      description: 'A creative storytelling game built using Python that promotes logical flow and fun interactions for players of all ages.',
      image: 'https://images.pexels.com/photos/1240885/pexels-photo-1240885.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Pygame', 'OOP'],
      type: 'Python',
      github: 'https://github.com/Gowri0504/Spin-a-yarn',
      demo: 'https://gowri0504.github.io/Spin-a-yarn/',
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-20 px-4 relative bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My Projects
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass overflow-hidden rounded-2xl hover:border-primary/30 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-3 left-3 glass-light px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Brain className="w-3.5 h-3.5 text-primary-light" />
                    <span className="text-xs font-medium">Featured</span>
                  </div>
                )}

                {/* Type Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-primary/20 text-primary-light rounded-full text-xs font-medium">
                  {project.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 flex-grow flex flex-col">
                <div className="mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-gray-200 mb-1">{project.title}</h3>
                  {project.subtitle && (
                    <p className="text-xs text-primary-light mb-2">{project.subtitle}</p>
                  )}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-outline text-sm justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-sm justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
