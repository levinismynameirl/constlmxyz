import Navbar from '../components/Navbar'
import { FadeIn } from '../components/Animations'
import styles from '../styles/WhatIsThis.module.css'

export default function WhatIsThis() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className={`container ${styles.page}`}>
        <FadeIn>
          <p className={styles.label}>// meta</p>
          <h1 className={styles.title}>what is this website</h1>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>the point</h2>
            <p className={styles.text}>
              This is my personal site. I use it to put my projects and work
              somewhere that is not just a GitHub profile. If you are here,
              you are probably looking at something I built or trying to
              reach me.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>how it is set up</h2>
            <p className={styles.text}>
              The site itself is a React app built with Vite, running behind
              nginx. Fonts are self-hosted. There are no CDN calls, no
              external scripts, nothing leaves your browser. The domain is
              constlm.xyz, and I use subdomains for APIs and other services
              when I need them.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>privacy</h2>
            <p className={styles.text}>
              No cookies. No analytics. No tracking pixels. I do not collect
              any data from visitors. The site is static and does not phone
              home to anything.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
