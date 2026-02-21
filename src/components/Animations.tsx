import { type ReactNode, type CSSProperties } from 'react'
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
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
}

export function FadeIn({ children, delay = 0, className, style }: FadeInProps) {
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

interface ContainerProps {
  children: ReactNode
  className?: string
}

export function StaggerContainer({ children, className }: ContainerProps) {
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

interface ItemProps {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function StaggerItem({ children, className, style }: ItemProps) {
  return (
    <motion.div variants={fadeUp} className={className} style={style}>
      {children}
    </motion.div>
  )
}

interface HoverScaleProps {
  children: ReactNode
  scale?: number
  className?: string
  style?: CSSProperties
}

export function HoverScale({ children, scale = 1.02, className, style }: HoverScaleProps) {
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
