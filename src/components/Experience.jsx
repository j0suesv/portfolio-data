import { experience } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import styles from './Experience.module.css'

function TimelineItem({ icon, company, role, period, current, description, stack: techStack }) {
  const [ref, visible] = useReveal()

  return (
    <div ref={ref} className={`${styles.item} ${visible ? styles.visible : ''}`}>
      <div className={styles.dotCol}>
        <div className={styles.dot}>{icon}</div>
        <div className={styles.stem} />
      </div>

      <div className={styles.content}>
        <p className={styles.company}>{company}</p>
        <h3 className={styles.role}>{role}</h3>

        <div className={styles.periodRow}>
          <span className={styles.period}>{period}</span>
          {current && <span className={styles.currentBadge}>● Current</span>}
        </div>

        <p className={styles.desc}>{description}</p>

        <div className={styles.stack}>
          {techStack.map(t => (
            <span key={t} className={styles.stackTag}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.tag}>Experience</span>
        <h2 className={styles.title}>Where I've worked</h2>
        <p className={styles.sub}>
          Professional experience building data systems for enterprise clients.
        </p>

        <div className={styles.timeline}>
          {experience.map(exp => (
            <TimelineItem key={exp.company + exp.role} {...exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
