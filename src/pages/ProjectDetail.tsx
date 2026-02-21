import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FadeIn } from '../components/Animations'
import projects from '../data/projects'
import styles from '../styles/ProjectDetail.module.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="page-wrapper">
        <Navbar />
        <div className={`container ${styles.notFound}`}>
          <h1 className={styles.notFoundTitle}>project not found</h1>
          <p className={styles.notFoundText}>
            <Link to="/projects">back to projects</Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="page-wrapper">
      <Navbar />
      <div className={`container ${styles.page}`}>
        <FadeIn>
          <Link to="/projects" className={styles.back}>
            &larr; back to projects
          </Link>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className={styles.header}>
            <div className={styles.headerTop}>
              <h1 className={styles.name}>{project.name}</h1>
              <span className={styles.status}>{project.status}</span>
            </div>
            <p className={styles.tagline}>{project.tagline}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>overview</h2>
            <p className={styles.description}>{project.description}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>highlights</h2>
            <ul className={styles.highlights}>
              {project.highlights.map((h, i) => (
                <li key={i} className={styles.highlight}>
                  <span className={styles.bullet} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {project.installCommand && (
          <FadeIn delay={0.4}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>install</h2>
              <div className={styles.installBlock}>
                <p className={styles.installLabel}>run in terminal:</p>
                <pre className={styles.installCmd}>
                  {project.installCommand}
                </pre>
              </div>
            </div>
          </FadeIn>
        )}

        {project.link && (
          <FadeIn delay={0.5}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkBtn}
            >
              view on github &rarr;
            </a>
          </FadeIn>
        )}
      </div>
    </div>
  )
}
