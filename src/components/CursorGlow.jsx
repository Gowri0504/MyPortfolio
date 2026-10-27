import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Soft spotlight that follows the cursor — a subtle "premium" touch.
 * Disabled on touch devices to avoid a stuck glow.
 */
const CursorGlow = () => {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-500)
  const y = useMotionValue(-500)
  const springX = useSpring(x, { stiffness: 90, damping: 20, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 90, damping: 20, mass: 0.6 })

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    setEnabled(true)
    const handleMove = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden="true"
      style={{ left: springX, top: springY }}
      className="pointer-events-none fixed z-[5] hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 blur-[90px] md:block"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.22),rgba(14,165,233,0.10)_45%,transparent_70%)]" />
    </motion.div>
  )
}

export default CursorGlow
