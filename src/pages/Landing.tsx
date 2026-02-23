import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import WaveBackground from '../components/WaveBackground'
import styles from '../styles/Landing.module.css'

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className={styles.landing}>
      <WaveBackground />
      <div className={styles.content}>
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          levin
        </motion.h1>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        >
          a student developer 
        </motion.p>
        <motion.button
          className={styles.continueBtn}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
          onClick={() => navigate('/home')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          continue
        </motion.button>
      </div>
    </div>
  )
}
