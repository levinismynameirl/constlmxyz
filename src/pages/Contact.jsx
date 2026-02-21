import Navbar from '../components/Navbar'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations'
import styles from '../styles/Contact.module.css'

const contacts = [
  {
    label: 'email',
    value: 'contact@constlm.xyz',
    href: 'mailto:contact@constlm.xyz',
    icon: '@',
    note: 'best way to reach me for anything serious',
  },
  {
    label: 'github',
    value: 'levinismynameirl',
    href: 'https://github.com/levinismynameirl',
    icon: '>_',
    note: 'where the code lives',
  },
  {
    label: 'discord',
    value: '@epicallycool',
    href: null,
    icon: '#',
    note: 'for casual conversations',
  },
]

export default function Contact() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className={`container ${styles.page}`}>
        <FadeIn>
          <p className={styles.label}>// contact</p>
          <h1 className={styles.title}>get in touch</h1>
          <p className={styles.subtitle}>
            Reach out if you want to talk about a project, have a question,
            or just want to say hey.
          </p>
        </FadeIn>

        <StaggerContainer className={styles.links}>
          {contacts.map((c) => {
            const Tag = c.href ? 'a' : 'div'
            const props = c.href
              ? {
                  href: c.href,
                  target: c.href.startsWith('http') ? '_blank' : undefined,
                  rel: c.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined,
                }
              : {}

            return (
              <StaggerItem key={c.label}>
                <Tag className={styles.contactLink} {...props}>
                  <span className={styles.icon}>{c.icon}</span>
                  <div>
                    <div className={styles.linkLabel}>{c.label}</div>
                    <div className={styles.linkValue}>{c.value}</div>
                    {c.note && (
                      <div className={styles.linkNote}>{c.note}</div>
                    )}
                  </div>
                </Tag>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <p className={styles.responseNote}>
            I usually respond within a day or two.
          </p>
        </FadeIn>
      </div>
    </div>
  )
}
