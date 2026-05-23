import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Brain, TrendingUp, Zap, Cpu, Code, Map, GitBranch } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const featuredProject = {
    title: 'PlacementPro – AI Powered Placement Preparation Tracker',
    description: 'Built an AI-powered placement preparation ecosystem helping students track coding progress, company preparation, aptitude performance, interview readiness, and personalized learning plans using intelligent analytics.',
    image: 'https://images.pexels.com/photos/5740717/pexels-photo-5740717.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'AI Recommendations',
      'Resume Analyzer',
      'DSA Tracker',
      'Company Preparation',
      'Placement Analytics',
      'JWT Authentication',
      'Docker Deployment',
    ],
    tech: ['React.js', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker', 'JWT', 'Tailwind CSS'],
    metrics: [
      { value: '500+', label: 'Mock Student Records' },
      { value: 'Real-Time', label: 'Tracking' },
      { value: 'AI', label: 'Recommendation Engine' },
      { value: 'Optimized', label: 'Backend APIs' },
    ],
    github: 'https://github.com/Gowri0504',
    demo: '#',
  }

  const projects = [
    {
      title: 'DreamLift',
      description: 'Crowdfunding platform for creative projects with real-time donation tracking and campaign management.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      metrics: { users: '200+', features: '15+' },
      icon: Zap,
      color: 'primary',
      github: 'https://github.com/Gowri0504',
      demo: '#',
    },
    {
      title: 'GeoQuery',
      description: 'Location-based query system for geographical data analysis and visualization.',
      image: 'https://images.pexels.com/photos/6801645/pexels-photo-6801645.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Python', 'Django', 'PostgreSQL', 'MapBox'],
      metrics: { queries: '1K+', accuracy: '95%' },
      icon: Map,
      color: 'secondary',
      github: 'https://github.com/Gowri0504',
      demo: '#',
    },
    {
      title: 'Digital Wallet Analyzer',
      description: 'Track and visualize your spending habits with beautiful charts and AI-powered insights.',
      image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      metrics: { transactions: '10K+', insights: 'AI' },
      icon: TrendingUp,
      color: 'primary',
      github: 'https://github.com/Gowri0504/Digital-Wallet',
      demo: 'https://gowri0504.github.io/Digital-Wallet/',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 relative bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          AI Projects
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="glass p-6 md:p-8 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Image */}
              <div className="relative group">
                <div className="aspect-video rounded-xl overflow-hidden glow-border">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute top-4 left-4 glass-light px-4 py-2 rounded-full flex items-center gap-2">
                  <Brain className="w-4 h-4 text-primary-light" />
                  <span className="text-sm font-medium">Featured Project</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-display font-bold gradient-text">
                  {featuredProject.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {featuredProject.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {featuredProject.features.map((feature) => (
                    <span key={feature} className="skill-badge text-xs">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {featuredProject.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-slate-700/50 border border-slate-600/30 text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {featuredProject.metrics.map((metric) => (
                    <div key={metric.label} className="glass-light p-3 rounded-lg text-center">
                      <div className="text-lg font-bold gradient-text">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                  <motion.a
                    href={featuredProject.demo}
                    className="btn-primary text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative mb-4 overflow-hidden rounded-xl aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className={`absolute top-3 right-3 p-2 rounded-lg ${project.color === 'primary' ? 'bg-primary/20' : 'bg-secondary/20'} glass-light`}>
                  <project.icon className={`w-4 h-4 ${project.color === 'primary' ? 'text-primary-light' : 'text-secondary-light'}`} />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow space-y-4">
                <h3 className="text-xl font-bold text-gray-200">{project.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs rounded bg-slate-700/40 text-gray-400">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="flex gap-4 text-sm">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="glass-light px-3 py-1.5 rounded-lg">
                      <span className="gradient-text font-semibold">{value}</span>
                      <span className="text-gray-500 ml-1">{key}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-4 pt-4 border-t border-slate-700/50">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
