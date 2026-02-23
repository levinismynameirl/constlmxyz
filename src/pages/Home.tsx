import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations'
import styles from '../styles/Home.module.css'

interface Section {
  to: string
  label: string
  desc: string
}

const sections: Section[] = [
  {
    to: '/about',
    label: 'about me',
    desc: 'A bit about who I am, what I do, and what I am interested in.',
  },
  {
    to: '/projects',
    label: 'projects',
    desc: 'A list of some of the projects I have worked on and collaborated on with links to their repos (when available)',
  },
  {
    to: '/skills',
    label: 'skills',
    desc: 'Some of the skills I have gained over the years, which are not limited to just tech stuff.',
  },
  {
    to: '/contact',
    label: 'contact',
    desc: 'Ways to reach out to me if you want to get in touch for any reason.',
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
            <h1 className={styles.title}>soo.. who am I?</h1>
            <p className={styles.intro}>
              I'm a teenage kid who likes both software and hardware development, and stuff in between,
              like machine learning, cybersec and some stuff related to finanace and economics. Other than
              those, I also have some other hobbies and interests related to skiing, nuclear physics,
              and some other random stuff.
            </p>
            <p className={styles.intro}>
              Aside from being a personal portfolio, this little corner of the internet is also a place
              for me to document stuff I work on and just have a general internet presence.
              Feel free to explore and reach out if you want to ask me anything via the contact page.
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
              I'm also in the process of building a homelab system for various reasons.
              You can check the homelab page for more details.
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
