import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { caseStudies } from '../data/caseStudies'
import styles from './CaseStudy.module.css'

export default function CaseStudy() {
  const { slug } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])
  const index = caseStudies.findIndex(c => c.slug === slug)
  const study = caseStudies[index]

  if (!study) {
    return (
      <div className={styles.notFound}>
        <span className={styles.notFoundCode}>404</span>
        <p>Case study not found.</p>
        <Link to="/#projects" className={styles.backLink}>← Back to projects</Link>
      </div>
    )
  }

  const prev = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length]
  const next = caseStudies[(index + 1) % caseStudies.length]

  return (
    <div className={styles.page}>

      {/* ── TOP NAV ── */}
      <nav className={styles.topNav}>
        <Link to="/#projects" className={styles.backLink}>← Back to projects</Link>
      </nav>

      {/* ── HEADER ── */}
      <header className={styles.header}>
        <span className={styles.status}>{study.status}</span>
        <h1 className={styles.title}>{study.title}</h1>
        <div className={styles.tags}>
          {study.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
      </header>

      <div className={styles.content}>

        {/* ── SUMMARY ── */}
        <Section label="Overview">
          <p className={styles.body}>{study.summary}</p>
        </Section>

        {/* ── PROBLEM ── */}
        <Section label="Problem">
          <p className={styles.body}>{study.problem}</p>
        </Section>

        {/* ── SOLUTION ── */}
        <Section label="Solution">
          <p className={styles.body}>{study.solution}</p>
        </Section>

        {/* ── ARCHITECTURE ── */}
        <Section label="Architecture">
          <code className={styles.diagram}>{study.architecture.diagram}</code>
          <div className={styles.steps}>
            {study.architecture.steps.map((step, i) => (
              <div key={step.label} className={styles.step}>
                <div className={styles.stepNumber}>{i + 1}</div>
                <div>
                  <span className={styles.stepLabel}>{step.label}</span>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── RESULTS ── */}
        <Section label="Results">
          <div className={styles.results}>
            {study.results.map(r => (
              <div key={r.label} className={styles.resultCard}>
                <span className={styles.metric}>{r.metric}</span>
                <span className={styles.metricLabel}>{r.label}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ── STACK ── */}
        <Section label="Tech Stack">
          <div className={styles.stack}>
            {study.stack.map(s => <span key={s} className={styles.tag}>{s}</span>)}
          </div>
        </Section>

        {/* ── LEARNINGS ── */}
        <Section label="Key Learnings">
          <p className={styles.body}>{study.learnings}</p>
        </Section>

        {/* ── GITHUB ── */}
        {study.github && study.github !== '#' && (
          <div className={styles.githubRow}>
            <a href={study.github} target="_blank" rel="noreferrer" className={styles.btnGhost}>
              View on GitHub ↗
            </a>
          </div>
        )}

      </div>

      {/* ── PREV / NEXT ── */}
      <nav className={styles.pagination}>
        <Link to={`/case-study/${prev.slug}`} className={styles.pageLink}>
          <span className={styles.pageLinkArrow}>←</span>
          <span>
            <span className={styles.pageLinkDir}>Previous</span>
            <span className={styles.pageLinkTitle}>{prev.title}</span>
          </span>
        </Link>

        <Link to={`/case-study/${next.slug}`} className={`${styles.pageLink} ${styles.pageLinkRight}`}>
          <span>
            <span className={styles.pageLinkDir}>Next</span>
            <span className={styles.pageLinkTitle}>{next.title}</span>
          </span>
          <span className={styles.pageLinkArrow}>→</span>
        </Link>
      </nav>

    </div>
  )
}

function Section({ label, children }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionLabel}>{label}</h2>
      {children}
    </section>
  )
}
