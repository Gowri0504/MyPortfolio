import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, Code2, Send, Check, AlertCircle, ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      // FormSubmit.co — free relay, no signup required
      const response = await fetch('https://formsubmit.co/ajax/gowri.d.tech@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
          _captcha: 'false',
          _template: 'table',
        }),
      })

      if (!response.ok) throw new Error('Failed to send message')

      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      setError('Failed to send message. Please try again or email me directly.')
      setTimeout(() => setError(''), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gowri.d.tech@gmail.com',
      href: 'mailto:gowri.d.tech@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tamil Nadu, India',
      href: 'https://www.google.com/maps/place/Tamil+Nadu',
    },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Gowri0504', label: 'GitHub', color: 'group-hover:text-gray-100' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gowri-dharmaraj/', label: 'LinkedIn', color: 'group-hover:text-sky-400' },
    { icon: Code2, href: 'https://leetcode.com/u/Gowri0504/', label: 'LeetCode', color: 'group-hover:text-amber-400' },
    { icon: Mail, href: 'mailto:gowri.d.tech@gmail.com', label: 'Email', color: 'group-hover:text-rose-400' },
  ]

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-gray-100 placeholder:text-gray-600 transition-all duration-300 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/30 md:text-base'

  return (
    <section id="contact" className="relative px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="04 — Contact"
          title="Let's Build"
          highlight="Something"
          description="Have a role, a project or an idea worth discussing? My inbox is always open."
        />

        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card-surface flex flex-col p-6 md:p-8"
          >
            <h3 className="font-display text-xl font-bold md:text-2xl">
              Let's <span className="gradient-text">connect</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400 md:text-base">
              I'm open to internships, full-time roles and freelance collaborations. Whether it's
              a product idea or an opportunity, I'd love to hear from you.
            </p>

            <div className="mt-7 space-y-3">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label === 'Location' ? '_blank' : undefined}
                  rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
                >
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-glow">
                    <info.icon className="h-5 w-5 text-white" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-gray-500">{info.label}</p>
                    <p className="truncate text-sm text-gray-200 md:text-base">{info.value}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-600 transition-colors group-hover:text-primary-light" />
                </motion.a>
              ))}
            </div>

            <div className="mt-7 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group rounded-xl border border-white/10 bg-white/[0.03] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <social.icon
                    className={`h-5 w-5 text-gray-400 transition-colors ${social.color}`}
                  />
                </a>
              ))}
            </div>

            <div className="mt-auto pt-8">
              <div className="rounded-xl border border-white/10 bg-gradient-to-br from-mint/10 via-transparent to-primary/10 p-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
                  </span>
                  <span className="font-mono text-xs text-gray-300">
                    Currently available for opportunities
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="card-surface space-y-5 p-6 md:p-8"
            >
              <div>
                <label className="mb-2 block font-mono text-xs text-gray-400">name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-xs text-gray-400">email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-xs text-gray-400">message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project or role..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="btn-primary w-full text-sm disabled:cursor-not-allowed disabled:opacity-80 md:text-base"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <Check className="h-5 w-5" />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" />
                    Send Message
                  </span>
                )}
              </motion.button>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300"
                >
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}

              <p className="text-center font-mono text-[11px] text-gray-600">
                or email me at{' '}
                <a href="mailto:gowri.d.tech@gmail.com" className="text-primary-light hover:underline">
                  gowri.d.tech@gmail.com
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
