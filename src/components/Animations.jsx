import { motion } from 'framer-motion'

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export function FadeIn({ children, delay = 0, className, style }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, style }) {
  return (
    <motion.div variants={fadeUp} className={className} style={style}>
      {children}
    </motion.div>
  )
}

export function HoverScale({ children, scale = 1.02, className, style }) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
