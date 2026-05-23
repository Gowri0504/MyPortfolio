import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Code, Server, Database, Wrench, Brain, Award } from 'lucide-react'

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'primary',
      skills: [
        { name: 'React', level: 85, icon: '⚛️' },
        { name: 'Angular', level: 70, icon: '🅰️' },
        { name: 'Tailwind CSS', level: 90, icon: '🎨' },
        { name: 'HTML/CSS', level: 95, icon: '🌐' },
      ],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'secondary',
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
      color: 'primary',
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
      color: 'secondary',
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
      color: 'primary',
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

  const [selectedCerty, setSelectedCerty] = useState(null)

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Technical Skills
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl hover:border-primary/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${category.color === 'primary' ? 'bg-primary/20' : 'bg-secondary/20'}`}>
                  <category.icon className={`w-5 h-5 ${category.color === 'primary' ? 'text-primary-light' : 'text-secondary-light'}`} />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-200">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${
                          category.color === 'primary'
                            ? 'bg-gradient-to-r from-primary to-secondary'
                            : 'bg-gradient-to-r from-secondary to-primary'
                        } ${hoveredSkill === skill.name ? 'shadow-[0_0_15px_rgba(139,92,246,0.5)]' : ''}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass p-6 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/20">
              <Award className="w-5 h-5 text-primary-light" />
            </div>
            <h3 className="text-2xl font-display font-bold text-gray-200">Certifications</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-light p-4 rounded-xl cursor-pointer hover:border-primary/30 transition-all duration-300 group"
                onClick={() => setSelectedCerty(cert)}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-3 border border-slate-700/50">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'https://images.pexels.com/photos/5428299/pexels-photo-5428299.jpeg?auto=compress&cs=tinysrgb&w=400'
                    }}
                  />
                </div>
                <h4 className="text-sm font-semibold text-gray-200 mb-1 line-clamp-2">{cert.title}</h4>
                <p className="text-xs text-gray-500">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificate Modal */}
        {selectedCerty && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedCerty(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl w-full glass p-4 rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedCerty.image}
                alt={selectedCerty.title}
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  e.target.src = 'https://images.pexels.com/photos/5428299/pexels-photo-5428299.jpeg?auto=compress&cs=tinysrgb&w=800'
                }}
              />
              <div className="mt-3 text-center">
                <h4 className="text-lg font-semibold text-gray-200">{selectedCerty.title}</h4>
                <p className="text-sm text-gray-400">{selectedCerty.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Skills
