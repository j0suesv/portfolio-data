import { about } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import styles from './About.module.css'

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner} ref={ref}>
        {/* ── LEFT: heading + stats ── */}
        <div className={`${styles.left} ${visible ? styles.visible : ''}`}>
          <span className={styles.tag}>About Me</span>
          <h2 className={styles.title}>
            Engineering data that<br />drives decisions
          </h2>

          <div className={styles.stats}>
            {about.stats.map((s, i) => (
              <div
                key={s.label}
                className={styles.statCard}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: text ── */}
        <div className={`${styles.right} ${visible ? styles.visible : ''}`}>
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={styles.para}
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
          <blockquote className={styles.evolving}>
            {about.evolving}
          </blockquote>
        </div>
      </div>
    </section>
  )
}
