import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  Terminal,
  MapPin,
  Sparkles,
  Code2,
  Brain,
  Layers,
  Target,
} from 'lucide-react'
import { asset } from '../lib/asset'

const Hero = () => {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const roles = [
    'Full Stack Developer',
    'AI Application Developer',
    'MERN Stack Engineer',
    'Problem Solver',
  ]

  useEffect(() => {
    const full = roles[index]
    let delay = deleting ? 45 : 75
    if (!deleting && text === full) delay = 1600
    if (deleting && text === '') delay = 350

    const timer = setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true)
        return
      }
      if (deleting && text === '') {
        setDeleting(false)
        setIndex((prev) => (prev + 1) % roles.length)
        return
      }
      setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1))
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index])

  const stats = [
    { icon: Code2, label: 'Projects', value: '6+' },
    { icon: Brain, label: 'Technologies', value: '15+' },
    { icon: Target, label: 'CGPA', value: '8.0' },
    { icon: Layers, label: 'Graduate', value: '2027' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Gowri0504', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gowri-dharmaraj/', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/u/Gowri0504/', label: 'LeetCode' },
    { icon: Mail, href: 'mailto:gowri.d.tech@gmail.com', label: 'Email' },
  ]

  const marqueeItems = [
    'React', 'Node.js', 'TypeScript', 'Java', 'Spring Boot', 'Python', 'Django',
    'MongoDB', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'OpenAI API', 'Tailwind CSS',
  ]

  return (
    <section id="home" className="relative px-4 pb-14 pt-24 sm:pt-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-14">
          {/* ---------------- Content ---------------- */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 space-y-7 text-center lg:order-1 lg:text-left"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur"
              >
                <Sparkles className="h-3.5 w-3.5 text-primary-light" />
                <span className="font-mono text-xs tracking-wide text-gray-300">
                  Hello, I'm
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              >
                Gowri <span className="gradient-text-animated">D</span>
              </motion.h1>

              <div className="flex h-8 items-center justify-center gap-2 font-mono text-base text-gray-300 sm:h-9 sm:text-lg md:text-2xl lg:justify-start">
                <Terminal className="h-4 w-4 flex-shrink-0 text-mint sm:h-5 sm:w-5" />
                <span className="whitespace-nowrap">{text}</span>
                <span className="inline-block h-5 w-[2px] flex-shrink-0 animate-blink bg-primary-light sm:h-6 md:h-7" />
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mx-auto max-w-xl text-base leading-relaxed text-gray-400 lg:mx-0 lg:text-lg"
            >
              I design and build scalable AI-powered web applications — from placement
              preparation platforms and analytics dashboards to secure full-stack products —
              with clean architecture, strong APIs and polished user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <a href="#projects" className="btn-primary text-sm md:text-base">
                <Code2 className="h-4 w-4 md:h-5 md:w-5" />
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={asset('Resume.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm md:text-base"
              >
                <Download className="h-4 w-4 md:h-5 md:w-5" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center gap-3 pt-2 lg:justify-start"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/10 hover:shadow-glow"
                >
                  <social.icon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-primary-light" />
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <stat.icon className="mx-auto mb-2 h-5 w-5 text-primary-light" />
                  <div className="gradient-text text-xl font-bold md:text-2xl">{stat.value}</div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-wider text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ---------------- Passport photo ---------------- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="order-1 flex justify-center lg:order-2 lg:justify-center xl:justify-end"
          >
            <div className="relative">
              {/* Rotating conic halo */}
              <div className="absolute -inset-6 rounded-[2.5rem] bg-[conic-gradient(from_0deg,rgba(139,92,246,0.5),rgba(14,165,233,0.4),rgba(217,70,239,0.5),rgba(139,92,246,0.5))] opacity-40 blur-2xl animate-spin-slow" />

              {/* Glow */}
              <motion.div
                className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary via-accent to-secondary blur-3xl"
                animate={{ opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Frame */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="gradient-border relative overflow-hidden rounded-[2rem] p-2 shadow-soft"
              >
                {/* Passport size ratio (3.5 x 4.5) */}
                <div className="relative aspect-[3.5/4.5] w-60 overflow-hidden rounded-[1.6rem] bg-slate-800 sm:w-72 md:w-80 lg:w-[20rem] xl:w-[24rem]">
                  <img
                    src={asset('passport.png')}
                    alt="Gowri D — professional passport size photo"
                    className="h-full w-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Name plate inside frame */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-display text-lg font-bold text-white">Gowri D</p>
                    <p className="font-mono text-[11px] text-primary-light">
                      AI Application Developer
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -left-2 top-8 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 shadow-soft backdrop-blur-xl sm:-left-4 sm:px-3.5 lg:-left-6 xl:-left-8"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
                </span>
                <span className="whitespace-nowrap text-xs font-medium">Open to work</span>
              </motion.div>

              {/* Floating badge — location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15 }}
                className="absolute -right-2 bottom-24 flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-3 py-2 shadow-soft backdrop-blur-xl sm:-right-3 sm:px-3.5 lg:-right-5 xl:-right-6"
              >
                <MapPin className="h-3.5 w-3.5 text-secondary-light" />
                <span className="whitespace-nowrap text-xs font-medium">Tamil Nadu, India</span>
              </motion.div>

              {/* Floating badge — focus */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 shadow-soft backdrop-blur-xl"
              >
                <span className="font-mono text-xs text-gray-300">
                  &lt;/&gt; Building with AI
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ---------------- Tech marquee ---------------- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="marquee-mask mt-14 overflow-hidden border-y border-white/5 py-5 md:mt-16"
        >
          <div className="flex w-max animate-marquee">
            {[0, 1].map((group) => (
              <div key={group} className="flex shrink-0 gap-10 pr-10">
                {marqueeItems.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-sm whitespace-nowrap text-gray-500 transition-colors hover:text-primary-light"
                  >
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
