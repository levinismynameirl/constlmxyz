import Navbar from '../components/Navbar'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations'
import styles from '../styles/Skills.module.css'

interface Skill {
  name: string
  note?: string
}

const languages: Skill[] = [
  { name: 'Swift' },
  { name: 'Objective-C' },
  { name: 'TypeScript' },
  { name: 'JavaScript' },
  { name: 'Python' },
  { name: 'C++', note: 'some' },
  { name: 'Java', note: 'some' },
  { name: 'Ruby' },
]

const tools: Skill[] = [
  { name: 'React' },
  { name: 'Vite' },
  { name: 'Expo' },
  { name: 'Firebase' },
  { name: 'Git' },
  { name: 'GitHub' },
  { name: 'Namecheap (if youd consider it)' },
]

const areas: Skill[] = [
  { name: 'Full Stack Development' },
  { name: 'Machine Learning' },
  { name: 'Systems & Infrastructure' },
  { name: 'Networking' },
  { name: 'Reverse Engineering' },
  { name: 'Clean Architecture' },
  { name: 'Data Science' },
]

const otherStuff: Skill[] = [
  { name: 'Skiing' },
  { name: 'Nuclear Physics' },
  { name: 'Home Labs' },
  { name: 'Algorithmic Trading' },
]

export default function Skills() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className={`container ${styles.page}`}>
        <FadeIn>
          <p className={styles.label}>// skills</p>
          <h1 className={styles.title}>what I work with</h1>
          <p className={styles.subtitle}>
            Languages I write in, tools I rely on, and the areas I focus on.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>languages</h2>
            <StaggerContainer className={styles.skillGrid}>
              {languages.map((lang) => (
                <StaggerItem key={lang.name}>
                  <span className={styles.skill}>
                    {lang.name}
                    {lang.note && (
                      <span className={styles.proficiency}>({lang.note})</span>
                    )}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>tools & stack</h2>
            <StaggerContainer className={styles.skillGrid}>
              {tools.map((tool) => (
                <StaggerItem key={tool.name}>
                  <span className={styles.skill}>{tool.name}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>areas of focus</h2>
            <StaggerContainer className={styles.skillGrid}>
              {areas.map((area) => (
                <StaggerItem key={area.name}>
                  <span className={styles.skill}>{area.name}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>other stuff</h2>
            <StaggerContainer className={styles.skillGrid}>
              {otherStuff.map((item) => (
                <StaggerItem key={item.name}>
                  <span className={styles.skill}>{item.name}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
