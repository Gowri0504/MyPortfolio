import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

/** Thin gradient bar at the very top showing reading progress. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary via-accent to-secondary shadow-[0_0_12px_rgba(139,92,246,0.7)]"
    />
  )
}

export default ScrollProgress
