import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Server, Database, Wrench, Brain, Award, X, ZoomIn } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { asset } from '../lib/asset'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      accent: 'primary',
      skills: [
        { name: 'React', level: 85, icon: '⚛️' },
        { name: 'Angular', level: 70, icon: '🅰️' },
        { name: 'Tailwind CSS', level: 90, icon: '🎨' },
        { name: 'HTML / CSS', level: 95, icon: '🌐' },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      accent: 'secondary',
      skills: [
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'Express.js', level: 75, icon: '🚀' },
        { name: 'Spring Boot', level: 70, icon: '☕' },
        { name: 'Django REST', level: 65, icon: '🐍' },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      accent: 'primary',
      skills: [
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'PostgreSQL', level: 75, icon: '🐘' },
        { name: 'MySQL', level: 80, icon: '🗄️' },
        { name: 'Redis', level: 70, icon: '⚡' },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      accent: 'secondary',
      skills: [
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'Git', level: 90, icon: '📦' },
        { name: 'Postman', level: 85, icon: '📬' },
        { name: 'VS Code', level: 95, icon: '💻' },
      ],
    },
    {
      title: 'AI & APIs',
      icon: Brain,
      accent: 'primary',
      skills: [
        { name: 'OpenAI APIs', level: 80, icon: '🤖' },
        { name: 'REST APIs', level: 90, icon: '🔌' },
        { name: 'Authentication (JWT)', level: 85, icon: '🔐' },
        { name: 'TensorFlow.js', level: 65, icon: '🧠' },
      ],
    },
  ]

  const certifications = [
    { title: 'NPTEL: VLSI Design', date: 'Elite, July 2024', image: 'vlsi.png' },
    { title: 'NPTEL: Human Computer Interaction', date: 'Elite + Silver, April 2025', image: 'hci.png' },
    { title: 'MongoDB Associate Developer', date: 'August 2024', image: 'mdc.png' },
    { title: 'Oracle APEX Cloud Developer', date: '2025', image: 'oracle.jpg' },
    { title: 'Java SE 17 Developer', date: '2026', image: 'se17.jpg' },
    { title: 'Guvi: Generative AI', date: '2024', image: 'guviai.png' },
    { title: 'Git', date: 'July 2024', image: 'git.png' },
    { title: 'SAWIT.AI Learnathon', date: 'October 2024', image: 'sawit.png' },
  ]

  const [selectedCert, setSelectedCert] = useState(null)

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <section id="skills" className="relative px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="03 — Skills"
          title="Technical"
          highlight="Toolkit"
          description="The languages, frameworks and platforms I use to ship software — plus certifications that back them up."
        />

        {/* Skill categories */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              viewport={{ once: true }}
              className="card-surface p-5 md:p-6"
            >
              <div className="mb-6 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    category.accent === 'primary'
                      ? 'bg-primary/15 text-primary-light'
                      : 'bg-secondary/15 text-secondary-light'
                  }`}
                >
                  <category.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold md:text-xl">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      </div>
                      <span className="font-mono text-xs text-gray-500">{skill.level}%</span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.1, delay: 0.2 + index * 0.08, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${
                          category.accent === 'primary'
                            ? 'bg-gradient-to-r from-primary to-accent'
                            : 'bg-gradient-to-r from-secondary to-primary'
                        } group-hover:shadow-glow`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* CTA tile keeps the grid balanced */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="gradient-border flex flex-col justify-center p-6"
          >
            <h3 className="font-display text-xl font-bold">Always learning</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              Currently going deeper into system design, cloud deployment and applied machine
              learning to build software that scales.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['System Design', 'AWS', 'TypeScript', 'LangChain'].map((item) => (
                <span key={item} className="skill-badge">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="card-surface mt-8 p-5 md:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary-light">
              <Award className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold md:text-2xl">Certifications</h3>
              <p className="mono-tag mt-0.5">tap any card to preview</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <motion.button
                key={cert.title}
                type="button"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setSelectedCert(cert)}
                className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-3 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-glow"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
                  <img
                    src={asset(cert.image)}
                    alt={cert.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src =
                        'https://images.pexels.com/photos/5428299/pexels-photo-5428299.jpeg?auto=compress&cs=tinysrgb&w=400'
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ZoomIn className="h-5 w-5 text-white" />
                  </div>
                </div>
                <h4 className="mt-3 line-clamp-2 text-xs font-semibold text-gray-200 md:text-sm">
                  {cert.title}
                </h4>
                <p className="mt-1 text-[11px] text-gray-500">{cert.date}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Certificate lightbox */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                className="glass relative max-h-[90vh] w-full max-w-4xl overflow-auto p-3 md:p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close"
                  className="absolute right-4 top-4 rounded-full border border-white/10 bg-slate-950/80 p-2 text-gray-300 transition-colors hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>

                <img
                  src={asset(selectedCert.image)}
                  alt={selectedCert.title}
                  className="h-auto w-full rounded-lg"
                  onError={(e) => {
                    e.target.src =
                      'https://images.pexels.com/photos/5428299/pexels-photo-5428299.jpeg?auto=compress&cs=tinysrgb&w=800'
                  }}
                />

                <div className="mt-3 text-center">
                  <h4 className="text-base font-semibold text-gray-100 md:text-lg">
                    {selectedCert.title}
                  </h4>
                  <p className="mt-1 text-xs text-gray-400 md:text-sm">{selectedCert.date}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Skills
