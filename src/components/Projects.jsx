import { Link } from 'react-router-dom'
import { projects } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import styles from './Projects.module.css'

function ProjectCard({ icon, status, title, description, architecture, tags, github, caseStudy, delay }) {
  const [ref, visible] = useReveal()

  return (
    <article
      ref={ref}
      className={`${styles.card} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.topBar} />

      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{icon}</span>
        <span className={styles.status}>{status}</span>
      </div>

      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>

      <div className={styles.arch}>
        <span className={styles.archLabel}>Architecture</span>
        <code className={styles.archFlow}>{architecture}</code>
      </div>

      <div className={styles.tags}>
        {tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </div>

      <div className={styles.links}>
        <a href={github} className={`${styles.btn} ${styles.btnGhost}`}>
          GitHub ↗
        </a>
        <Link to={caseStudy} className={`${styles.btn} ${styles.btnSolid}`}>
          Case Study →
        </Link>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.sectionTag}>Featured Projects</span>
        <h2 className={styles.sectionTitle}>Data systems I've built</h2>
        <p className={styles.sectionSub}>
          End-to-end data engineering projects from ingestion to insight.
        </p>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} {...p} delay={(i % 2) * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}
