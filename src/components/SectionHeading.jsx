import React from 'react'
import { motion } from 'framer-motion'

/**
 * Shared section heading: monospace eyebrow + gradient title.
 * Keeps every section visually consistent.
 */
const SectionHeading = ({ eyebrow, title, highlight, description }) => {
  return (
    <div className="mb-10 md:mb-14 text-center">
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-eyebrow mb-3"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/70" />
          {eyebrow}
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary/70" />
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        viewport={{ once: true }}
        className="section-title"
      >
        {title} {highlight && <span className="gradient-text-animated">{highlight}</span>}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-gray-400 text-balance"
        >
          {description}
        </motion.p>
      )}

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
      />
    </div>
  )
}

export default SectionHeading
