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
            <h2 className={styles.blockTitle}>so... what is this?</h2>
            <p className={styles.text}>
              This is my personal site website. It's mostly used to keep
              track of my projects, skills, etc and just keep a general
              portfolio online. I also use it as a sandbox for learning and
              experimenting with web development, and also to keep a general
              presence on the internet. I don't have any grand ambitions for it,
              but I do want it to be a nice, clean and fast experience for anyone
              who visits. If you have any questions, suggestions or other stuff you
              might want to say, feel free to reach out through the contact page.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>how i set it up</h2>
            <p className={styles.text}>
              The website is a fairly standard React setup, with React Router for, well,
              routing, and a custom-built animation system that I use for the fade-ins
              and transitions. It's fully static and hosted on my own server, which at
              the current moment is just a macmini m1 running an nginx server. The website
              is routed through CloudFare, which provides privacy (for both me and you),
              and also handles caching and CDN stuff to make sure the site loads fast and nicely.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
