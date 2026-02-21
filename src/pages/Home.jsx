import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations'
import styles from '../styles/Home.module.css'

const sections = [
  {
    to: '/about',
    label: 'about me',
    desc: 'Computer and data science student. Full stack developer with a passion for ML, systems, and clean architecture.',
  },
  {
    to: '/projects',
    label: 'projects',
    desc: 'From award-winning archaeology software to macOS CLI tools. A mix of team projects and personal builds.',
  },
  {
    to: '/skills',
    label: 'skills',
    desc: 'Swift, TypeScript, Python, React, and more. Languages, tools, and areas of focus.',
  },
  {
    to: '/contact',
    label: 'contact',
    desc: 'Email, GitHub, Discord. Pick your preferred channel.',
  },
]

export default function Home() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className={`container ${styles.page}`}>
        <FadeIn>
          <div className={styles.hero}>
            <p className={styles.greeting}>// welcome</p>
            <h1 className={styles.title}>I build things for the web and beyond.</h1>
            <p className={styles.intro}>
              Computer and data science student. Full stack developer. Passionate
              about machine learning, systems, infrastructure, and clean
              architecture. Also into finance and economics.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h2 className={styles.sectionHeading}>explore</h2>
        </FadeIn>

        <StaggerContainer className={styles.sections}>
          {sections.map((s) => (
            <StaggerItem key={s.to}>
              <Link to={s.to} className={styles.card}>
                <div className={styles.cardLabel}>{s.label}</div>
                <div className={styles.cardDesc}>{s.desc}</div>
                <span className={styles.cardArrow}>&rarr;</span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.5}>
          <div className={styles.aside}>
            <p className={styles.asideText}>
              I also run a home lab, experiment with AI-driven trading
              strategies, and spend too much time thinking about how financial
              systems work.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className={styles.footer}>
            <Link to="/what-is-this" className={styles.footerLink}>
              what is this website?
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
