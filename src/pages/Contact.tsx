import Navbar from '../components/Navbar'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations'
import styles from '../styles/Contact.module.css'

interface ContactItem {
  label: string
  value: string
  href: string | null
  icon: string
  note: string
}

const contacts: ContactItem[] = [
  {
    label: 'email',
    value: 'contact@constlm.xyz',
    href: 'mailto:contact@constlm.xyz',
    icon: '@',
    note: 'probably the best way to reach me',
  },
  {
    label: 'github',
    value: 'levinismynameirl',
    href: 'https://github.com/levinismynameirl',
    icon: '>_',
    note: 'here you can see my work',
  },
  {
    label: 'discord',
    value: '@epicallycool',
    href: null,
    icon: '#',
    note: 'i might not respond if you message me here, but you can try',
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
            Reach out to me for any reasonable motive
          </p>
        </FadeIn>

        <StaggerContainer className={styles.links}>
          {contacts.map((c) => {
            const linkProps = c.href
              ? {
                  href: c.href,
                  target: c.href.startsWith('http') ? '_blank' as const : undefined,
                  rel: c.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined,
                }
              : {}

            return (
              <StaggerItem key={c.label}>
                {c.href ? (
                  <a className={styles.contactLink} {...linkProps}>
                    <span className={styles.icon}>{c.icon}</span>
                    <div>
                      <div className={styles.linkLabel}>{c.label}</div>
                      <div className={styles.linkValue}>{c.value}</div>
                      {c.note && (
                        <div className={styles.linkNote}>{c.note}</div>
                      )}
                    </div>
                  </a>
                ) : (
                  <div className={styles.contactLink}>
                    <span className={styles.icon}>{c.icon}</span>
                    <div>
                      <div className={styles.linkLabel}>{c.label}</div>
                      <div className={styles.linkValue}>{c.value}</div>
                      {c.note && (
                        <div className={styles.linkNote}>{c.note}</div>
                      )}
                    </div>
                  </div>
                )}
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </div>
  )
}
