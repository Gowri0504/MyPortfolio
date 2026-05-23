import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, Code, Send, Check, AlertCircle } from 'lucide-react'

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
      // Using FormSubmit.co service (free, no signup required)
      const response = await fetch('https://formsubmit.co/ajax/gowri.d.tech@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
          _captcha: 'false',
          _template: 'table'
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (err) {
      setError('Failed to send message. Please try again or email directly.')
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
      value: 'Chennai, Tamil Nadu, India',
      href: '#',
    },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Gowri0504', label: 'GitHub', color: 'hover:text-gray-200' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gowri-dharmaraj/', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Code, href: 'https://leetcode.com/u/gowri_d/', label: 'LeetCode', color: 'hover:text-yellow-400' },
    { icon: Mail, href: 'mailto:gowri.d.tech@gmail.com', label: 'Email', color: 'hover:text-red-400' },
  ]

  return (
    <section id="contact" className="py-16 md:py-20 px-4 relative bg-gradient-to-t from-slate-900/50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Get In Touch
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <div className="glass p-5 md:p-6 rounded-2xl">
              <h3 className="text-xl md:text-2xl font-display font-bold mb-3 md:mb-4 text-primary-light">Let's Connect</h3>
              <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8 leading-relaxed">
                Have a project in mind or want to discuss opportunities? Feel free to reach out!
                I'm always open to new ideas and collaborations.
              </p>

              {/* Contact Details */}
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 md:gap-4 glass-light p-3 md:p-4 rounded-xl group hover:border-primary/30 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full gradient-bg flex items-center justify-center shadow-lg shadow-primary/30 flex-shrink-0">
                      <info.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-semibold text-gray-400">{info.label}</h4>
                      <p className="text-sm md:text-base text-gray-200">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-2 md:gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-2.5 md:p-3 rounded-lg glass-light transition-all duration-300 group ${social.color}`}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-current" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass p-5 md:p-6 rounded-2xl space-y-4 md:space-y-6">
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-400 mb-1.5 md:mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-400 mb-1.5 md:mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-400 mb-1.5 md:mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full btn-primary relative overflow-hidden text-sm md:text-base"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center gap-2">
                    <Check className="w-4 md:w-5 h-4 md:h-5" />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-4 md:w-5 h-4 md:h-5" />
                    Send Message
                  </span>
                )}
              </motion.button>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{error}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
