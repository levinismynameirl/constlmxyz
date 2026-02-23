import Navbar from '../components/Navbar'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations'
import styles from '../styles/About.module.css'

const interests = [
  'Machine Learning',
  'Systems',
  'Infrastructure',
  'Networking',
  'Reverse Engineering',
  'Finance',
  'Economics',
  'Skiing',
  'Nuclear Physics',
  'Home Labs',
  'Algorythmic Trading',
]

export default function About() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className={`container ${styles.page}`}>
        <FadeIn>
          <p className={styles.label}>// about</p>
          <h1 className={styles.title}>
            About me...
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>who I am</h2>
            <p className={styles.text}>
              I study computer and data science, and I've also
              built full stack applications and done somme machine learning
              projects. I am interested in a lot of different things, some more
              than others.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>what else?</h2>
            <p className={styles.text}>
              Aside from software development, I do also have some other hobbies and interests,
              like skiing, nuclear physics, etc. If you've read the home page, you probably
              already know that I will be building a homelab system, and you can check the homelab page for more details.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>interests</h2>
            <StaggerContainer className={styles.interests}>
              {interests.map((i) => (
                <StaggerItem key={i}>
                  <span className={styles.tag}>{i}</span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
