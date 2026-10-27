import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Send, Github } from 'lucide-react'
import { asset } from '../lib/asset'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)

      // Active section = last section whose top passed the offset
      const offset = window.innerHeight * 0.28
      let current = 'home'
      navItems.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= offset) {
          current = id
        }
      })
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-x-0 top-0 z-50 px-4 py-3 md:px-8"
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 md:px-5 ${
            scrolled
              ? 'border border-white/10 bg-slate-950/70 shadow-soft backdrop-blur-xl'
              : 'border border-transparent bg-transparent'
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="group flex items-center gap-2.5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary font-display text-sm font-bold text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
              GD
            </span>
            <span className="hidden font-display text-lg font-bold tracking-tight sm:block">
              Gowri <span className="gradient-text">D</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-gray-100'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navActive"
                      className="absolute inset-0 rounded-lg border border-primary/30 bg-primary/15"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 font-mono">{item.label}</span>
                </button>
              )
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="https://github.com/Gowri0504"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-gray-400 transition-all duration-300 hover:border-primary/40 hover:text-primary-light"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={asset('Resume.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline !px-4 !py-2.5 text-sm"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary !px-4 !py-2.5 text-sm"
            >
              <Send className="h-4 w-4" />
              Hire Me
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="rounded-lg p-2 text-gray-300 transition-colors hover:text-white lg:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[55] bg-slate-950/70 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 240 }}
              className="fixed inset-y-0 right-0 z-[56] w-72 border-l border-white/10 bg-slate-950/95 backdrop-blur-xl lg:hidden"
            >
              <div className="flex h-full flex-col p-6">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                    className="rounded-lg p-2 text-gray-400 transition-colors hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-1.5">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 }}
                      className={`w-full rounded-xl px-4 py-3 text-left font-mono text-sm transition-all ${
                        activeSection === item.id
                          ? 'border border-primary/30 bg-primary/10 text-primary-light'
                          : 'text-gray-400 hover:bg-white/5 hover:text-gray-100'
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  <a
                    href={asset('Resume.pdf')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full justify-center text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </a>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="btn-primary w-full justify-center text-sm"
                  >
                    <Send className="h-4 w-4" />
                    Let's Talk
                  </button>
                </div>

                <p className="mt-auto font-mono text-[11px] text-gray-600">
                  gowri.d.tech@gmail.com
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
