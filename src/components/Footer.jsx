import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp, Code2 } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Gowri0504', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gowri-dharmaraj/', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/u/Gowri0504/', label: 'LeetCode' },
    { icon: Mail, href: 'mailto:gowri.d.tech@gmail.com', label: 'Email' },
  ]

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ]

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary font-display text-sm font-bold text-white">
                GD
              </span>
              <span className="font-display text-xl font-bold gradient-text">Gowri D</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              AI Application Developer & Full Stack Engineer — building scalable, intelligent
              products with clean architecture and thoughtful design.
            </p>

            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group rounded-xl border border-white/10 bg-white/[0.03] p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10"
                >
                  <social.icon className="h-4 w-4 text-gray-400 transition-colors group-hover:text-primary-light" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-gray-400 transition-colors hover:text-primary-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Get in touch */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:gowri.d.tech@gmail.com"
                  className="transition-colors hover:text-primary-light"
                >
                  gowri.d.tech@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://gowri0504.github.io/MyPortfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary-light"
                >
                  gowri0504.github.io/MyPortfolio
                </a>
              </li>
              <li>Tamil Nadu, India</li>
            </ul>

            <button
              onClick={scrollToTop}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-white"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              Back to top
            </button>
          </motion.div>
        </div>

        <div className="divider-glow my-8 md:my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
          <p className="flex items-center gap-1.5 font-mono text-xs text-gray-500">
            Designed &amp; developed by
            <span className="gradient-text font-semibold">Gowri D</span>
            <span className="mx-1 text-gray-700">·</span>
            Made with <Heart className="h-3.5 w-3.5 text-rose-500" /> in India
          </p>
          <p className="font-mono text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Gowri D. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
