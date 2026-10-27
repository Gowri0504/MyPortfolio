import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Code, Award, Building2, Check } from 'lucide-react'
import SectionHeading from './SectionHeading'

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
    { label: 'Technologies', value: '15+' },
    { label: 'Projects', value: '6+' },
    { label: 'Certifications', value: '8+' },
    { label: 'CGPA', value: '8.0' },
  ]

  const highlights = [
    'AI-powered application development',
    'Full stack (MERN + Spring Boot) engineering',
    'REST API design & secure authentication',
    'Data-driven dashboards & analytics',
  ]

  return (
    <section id="about" className="relative px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="01 — About"
          title="Engineer's"
          highlight="Mindset"
          description="Curious about systems, obsessed with clean code and building products that actually help people."
        />

        <div className="grid gap-6 md:gap-8 lg:grid-cols-5">
          {/* Terminal-style bio */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:col-span-3"
          >
            <div className="card-surface flex-1 overflow-hidden">
              {/* Window bar */}
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-mint/80" />
                <span className="ml-3 font-mono text-xs text-gray-500">~/gowri-d/about.md</span>
              </div>

              <div className="space-y-4 p-5 font-mono text-sm leading-relaxed text-gray-300 md:p-7 md:text-[15px]">
                <p>
                  <span className="text-accent">const</span>{' '}
                  <span className="text-secondary-light">developer</span>{' '}
                  <span className="text-gray-500">=</span> {'{'}
                </p>
                <div className="space-y-2 pl-4 md:pl-6">
                  <p>
                    <span className="text-primary-light">role</span>
                    <span className="text-gray-500">:</span>{' '}
                    <span className="text-mint">'AI Application Developer'</span>,
                  </p>
                  <p>
                    <span className="text-primary-light">stack</span>
                    <span className="text-gray-500">:</span>{' '}
                    <span className="text-mint">'MERN · Spring Boot · Python'</span>,
                  </p>
                  <p>
                    <span className="text-primary-light">focus</span>
                    <span className="text-gray-500">:</span>{' '}
                    <span className="text-mint">'scalable, real-world products'</span>,
                  </p>
                </div>
                <p className="text-gray-500">{'}'}</p>
              </div>

              <div className="space-y-4 border-t border-white/10 px-5 py-5 text-sm leading-relaxed text-gray-400 md:px-7 md:py-6 md:text-base">
                <p>
                  I'm an Information Technology undergraduate who loves turning ideas into
                  production-ready software. My work sits at the intersection of{' '}
                  <span className="text-gray-200">full stack engineering</span> and{' '}
                  <span className="text-gray-200">applied AI</span> — building platforms that
                  track progress, surface insights, and scale gracefully.
                </p>
                <p>
                  From placement preparation ecosystems to analytics dashboards and secure
                  payment-driven products, I focus on clean architecture, reliable APIs and
                  interfaces that feel effortless to use.
                </p>

                <ul className="grid gap-2 pt-2 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-mint" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="gradient-text text-2xl font-bold md:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-gray-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education timeline */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="card-surface h-full p-6 md:p-8">
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary-light">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-bold md:text-2xl">Education</h3>
              </div>

              <div className="relative">
                <div className="absolute bottom-2 left-[9px] top-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

                <div className="space-y-7">
                  {timelineData.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative pl-9"
                    >
                      <span className="absolute left-0 top-1.5 h-[19px] w-[19px] rounded-full border-2 border-slate-950 bg-gradient-to-br from-primary to-secondary shadow-glow transition-transform duration-300 group-hover:scale-125" />

                      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 group-hover:border-primary/40">
                        <div className="flex items-start gap-3">
                          <item.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-light" />
                          <div>
                            <h4 className="font-semibold text-gray-100">{item.title}</h4>
                            <p className="mt-1 text-sm text-primary-light">{item.subtitle}</p>
                            <p className="mono-tag mt-1">{item.period}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Philosophy strip */}
              <div className="mt-8 rounded-xl border border-white/10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Code className="h-4 w-4 text-secondary-light" />
                  <span className="mono-tag text-secondary-light">philosophy.ts</span>
                </div>
                <p className="font-mono text-xs leading-relaxed text-gray-400">
                  Write it simple. Make it fast. Ship what users need.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
