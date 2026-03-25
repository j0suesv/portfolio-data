import { contact } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import styles from './Contact.module.css'

export default function Contact() {
  const [ref, visible] = useReveal()

  // Split the phrase for highlight
  const parts = contact.phrase.split('businesses smarter.')

  return (
    <section id="contact" className={styles.section}>
      {/* subtle radial glow top-right */}
      <div className={styles.glow} aria-hidden />

      <div
        ref={ref}
        className={`${styles.inner} ${visible ? styles.visible : ''}`}
      >
        {/* ── LEFT ── */}
        <div className={styles.left}>
          <span className={styles.tag}>Contact</span>
          <p className={styles.phrase}>
            {parts[0]}
            <span className={styles.highlight}>businesses smarter.</span>
          </p>

          <p className={styles.sub}>
            Have a project, a role, or just want to talk data?<br />
            I'd love to hear from you.
          </p>
        </div>

        {/* ── RIGHT: links ── */}
        <div className={styles.links}>
          {contact.links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className={styles.link}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className={styles.linkIcon}>{l.icon}</div>
              <div className={styles.linkInfo}>
                <span className={styles.linkLabel}>{l.label}</span>
                <span className={styles.linkValue}>{l.value}</span>
              </div>
              <span className={styles.linkArrow}>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
