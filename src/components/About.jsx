import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Code, Award, Building2 } from 'lucide-react'

const About = () => {
  const timelineData = [
    {
      title: 'B.Tech in Information Technology',
      subtitle: 'Kongu Engineering College, Erode',
      period: '2023 – 2027',
      icon: GraduationCap,
    },
    {
      title: 'HSC – Computer Science',
      subtitle: 'Christ King Girls Higher Secondary School',
      period: '2022 – 2023',
      icon: Building2,
    },
    {
      title: 'SSLC',
      subtitle: 'Vidhya Matric Higher Secondary School',
      period: '2020 – 2021',
      icon: Award,
    },
  ]

  const stats = [
    { label: 'Technologies', value: '10+' },
    { label: 'Projects', value: '4+' },
    { label: 'Certifications', value: '8+' },
    { label: 'CGPA', value: '8.0' },
  ]

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About Me
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-primary-light">Who I Am</h3>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                I am an Information Technology student passionate about building scalable and
                impactful applications that solve real-world problems. My interests lie in
                AI-powered systems, full stack development, and modern cloud-ready applications.
              </p>
              <p>
                I specialize in creating intelligent solutions using cutting-edge technologies
                like OpenAI APIs, machine learning integration, and full-stack web applications.
                My focus is on building systems that make a meaningful impact on users' lives,
                from placement preparation platforms to analytics dashboards.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new AI tools, contributing to
                open-source projects, or working on innovative solutions that bridge the gap
                between technology and human needs.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-light p-4 rounded-xl text-center hover:border-primary/30 transition-all duration-300"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2 glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-display font-bold mb-8 text-primary-light">Education</h3>

            <div className="relative">
              {/* Timeline Line - Only up to the last item */}
              <div className="absolute left-[19px] top-[35px] bottom-[35px] w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent" />

              <div className="space-y-8">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-12 group"
                  >
                    {/* Node */}
                    <div className="absolute left-[7px] top-[8px] w-3 h-3 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-slate-900 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />

                    {/* Content */}
                    <div className="glass-light p-4 rounded-lg hover:border-primary/30 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <item.icon className="w-5 h-5 text-primary-light mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-bold text-gray-200">{item.title}</h4>
                          <p className="text-sm text-primary-light mt-1">{item.subtitle}</p>
                          <p className="text-xs text-gray-500 mt-1">{item.period}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
