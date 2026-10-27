import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Brain, ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'

const Projects = () => {
  const projects = [
    {
      title: 'PlacementPro',
      subtitle: 'AI Powered Placement Preparation Tracker',
      description:
        'AI-powered placement preparation ecosystem helping students track coding progress, company preparation, aptitude performance, interview readiness, and personalized learning plans using intelligent analytics.',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=900',
      tech: ['React.js', 'Spring Boot', 'Java', 'PostgreSQL', 'JWT', 'Redis', 'Django REST', 'Python', 'Tailwind CSS', 'Recharts', 'Docker', 'REST APIs'],
      type: 'Full Stack',
      github: 'https://github.com/Gowri0504',
      demo: '#',
      featured: true,
    },
    {
      title: 'DreamLift',
      subtitle: 'Crowdfunding Platform',
      description:
        'A full-stack crowdfunding platform with real-time updates, secure payment integration via Stripe/Razorpay, JWT authentication, and Socket.io for live updates. Built with MERN stack and deployed on cloud platforms.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=900',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'Socket.io', 'Stripe', 'Razorpay', 'Tailwind CSS', 'Framer Motion', 'Cloudinary', 'Mongoose'],
      type: 'Full Stack',
      github: 'https://github.com/Gowri0504',
      demo: '#',
    },
    {
      title: 'Digital Wallet Analyzer',
      description:
        'Track and visualize your spending habits with beautiful charts and AI-powered insights. Full-stack application with secure authentication and real-time analytics.',
      image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=900',
      tech: ['Angular', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT', 'Bootstrap', 'Chart.js', 'GitHub Actions'],
      type: 'Full Stack',
      github: 'https://github.com/Gowri0504/Digital-Wallet',
      demo: 'https://gowri0504.github.io/Digital-Wallet/',
    },
    {
      title: 'Railway Management System',
      description:
        'CRUD system for trains and reservations with an admin dashboard. Manage train schedules, passenger bookings, and track availability efficiently.',
      image: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=900',
      tech: ['JavaScript', 'MySQL', 'HTML', 'CSS'],
      type: 'Java',
      github: 'https://github.com/Gowri0504/Railway-Management',
      demo: 'https://gowri0504.github.io/Railway-Management/',
    },
    {
      title: 'Chess Game',
      description:
        'Implemented using Data Structures and Java. Supports real-time two-player logic with all standard chess rules and move validation.',
      image: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=900',
      tech: ['Java', 'OOP', 'Data Structures'],
      type: 'Java',
      github: 'https://github.com/Gowri0504/ChessGame',
      demo: 'https://gowri0504.github.io/ChessGame/',
    },
    {
      title: 'Spin a Yarn Game',
      description:
        'A creative storytelling game built using Python that promotes logical flow and fun interactions for players of all ages.',
      image: 'https://images.pexels.com/photos/1240885/pexels-photo-1240885.jpeg?auto=compress&cs=tinysrgb&w=900',
      tech: ['Python', 'Pygame', 'OOP'],
      type: 'Python',
      github: 'https://github.com/Gowri0504/Spin-a-yarn',
      demo: 'https://gowri0504.github.io/Spin-a-yarn/',
    },
  ]

  const filters = ['All', 'Full Stack', 'Java', 'Python']
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.type === active)),
    [active]
  )

  return (
    <section id="projects" className="relative px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="02 — Work"
          title="Selected"
          highlight="Projects"
          description="Products I've designed and engineered end to end — from data models and APIs to the pixels users touch."
        />

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2 md:gap-3">
          {filters.map((filter) => {
            const isActive = active === filter
            return (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`relative rounded-full px-5 py-2 font-mono text-xs transition-all duration-300 md:text-sm ${
                  isActive
                    ? 'text-white'
                    : 'border border-white/10 bg-white/[0.03] text-gray-400 hover:border-primary/40 hover:text-gray-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="projectFilter"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-secondary shadow-glow"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="card-surface group flex h-full flex-col overflow-hidden"
              >
                {/* Cover */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />

                  {project.featured && (
                    <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-primary/30 bg-slate-950/70 px-3 py-1.5 backdrop-blur">
                      <Brain className="h-3.5 w-3.5 text-primary-light" />
                      <span className="font-mono text-[11px] text-primary-light">Featured</span>
                    </div>
                  )}

                  <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1.5 font-mono text-[11px] text-gray-300 backdrop-blur">
                    {project.type}
                  </div>

                  <ArrowUpRight className="absolute bottom-3 right-3 h-6 w-6 translate-y-3 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
                </div>

                {/* Body */}
                <div className="flex flex-grow flex-col p-5 md:p-6">
                  <h3 className="font-display text-lg font-bold text-gray-100 md:text-xl">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="mt-1 font-mono text-xs text-primary-light">{project.subtitle}</p>
                  )}

                  <p className="mt-3 flex-grow text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>

                  <div className="mb-5 mt-4 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 6).map((tech) => (
                      <span key={tech} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 6 && (
                      <span className="skill-badge">+{project.tech.length - 6}</span>
                    )}
                  </div>

                  <div className="flex gap-3 border-t border-white/10 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex-1 justify-center !px-4 !py-2.5 text-sm"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 justify-center !px-4 !py-2.5 text-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/Gowri0504"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <Github className="h-4 w-4" />
            Explore all repositories
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
