import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations'
import projects from '../data/projects'
import styles from '../styles/Projects.module.css'

const secondaryWork = [
  'Home lab infrastructure and self-hosting',
  'AI-driven trading experiments',
]

export default function Projects() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className={`container ${styles.page}`}>
        <FadeIn>
          <p className={styles.label}>// projects</p>
          <h1 className={styles.title}>things I have built</h1>
          <p className={styles.subtitle}>
            A mix of team projects and personal tools.
          </p>
        </FadeIn>

        <StaggerContainer className={styles.grid}>
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <Link
                to={`/projects/${project.id}`}
                className={styles.card}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardName}>{project.name}</span>
                  <span className={styles.cardStatus}>{project.status}</span>
                </div>
                <p className={styles.cardTagline}>{project.tagline}</p>
                <div className={styles.cardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.cardTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <div className={styles.secondary}>
            <h2 className={styles.secondaryTitle}>also working on</h2>
            <div className={styles.secondaryList}>
              {secondaryWork.map((item) => (
                <div key={item} className={styles.secondaryItem}>
                  <span className={styles.dot} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
