import Navbar from '../components/Navbar'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations'
import styles from '../styles/About.module.css'

const interests = [
  'Machine Learning',
  'Systems',
  'Infrastructure',
  'Networking',
  'Reverse Engineering',
  'Clean Architecture',
  'Finance',
  'Economics',
]

export default function About() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className={`container ${styles.page}`}>
        <FadeIn>
          <p className={styles.label}>// about</p>
          <h1 className={styles.title}>
            Computer and data science student.
            <br />
            Full stack developer.
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>who I am</h2>
            <p className={styles.text}>
              I study computer and data science, and I build full stack
              applications. I am passionate about machine learning and care
              deeply about how things work under the hood, from systems and
              infrastructure to networking and reverse engineering. Clean
              architecture is not optional for me, it is the default.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>what drives me</h2>
            <p className={styles.text}>
              I gravitate toward problems that sit at the intersection of
              software engineering and real-world systems. Whether that is
              figuring out how a protocol works, setting up infrastructure
              that does not fall over, or writing code that someone else can
              actually maintain, the goal is always the same: understand the
              system, then make it better.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>beyond code</h2>
            <p className={styles.text}>
              I spend a lot of time thinking about finance and economics.
              Markets are just another distributed system if you look at them
              right. I run a home lab where I self-host services and
              experiment with things like AI-driven trading strategies. It is
              mostly an excuse to keep learning.
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
