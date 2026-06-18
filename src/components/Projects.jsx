import { useState, useEffect } from 'react'
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
        {github && github !== '#' ? (
          <a href={github} target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.btnGhost}`}>
            GitHub ↗
          </a>
        ) : (
          <span className={`${styles.btn} ${styles.btnPrivate}`}>
            Private repo
          </span>
        )}
        <Link to={caseStudy} className={`${styles.btn} ${styles.btnSolid}`}>
          Case Study →
        </Link>
      </div>
    </article>
  )
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(4)

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth
      if (width < 600) setItemsPerPage(1)
      else if (width < 900) setItemsPerPage(2)
      else setItemsPerPage(4)
    }

    updateItemsPerPage()
    window.addEventListener('resize', updateItemsPerPage)
    return () => window.removeEventListener('resize', updateItemsPerPage)
  }, [])

  const maxIndex = Math.max(0, projects.length - itemsPerPage)
  const hasNextPage = currentIndex < maxIndex
  const hasPrevPage = currentIndex > 0

  const goNext = () => {
    setCurrentIndex(Math.min(currentIndex + 1, maxIndex))
  }

  const goPrev = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0))
  }

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.sectionTag}>Featured Projects</span>
        <h2 className={styles.sectionTitle}>Data systems I've built</h2>
        <p className={styles.sectionSub}>
          End-to-end data engineering projects from ingestion to insight.
        </p>

        <div className={styles.carousel}>
          <div className={styles.grid}>
            {projects.slice(currentIndex, currentIndex + itemsPerPage).map((p, i) => (
              <ProjectCard key={p.title} {...p} delay={(i % 2) * 120} />
            ))}
          </div>
        </div>

        {maxIndex > 0 && (
          <>
            <div className={styles.carouselNav}>
              <button
                className={`${styles.navBtn} ${styles.navPrev}`}
                onClick={goPrev}
                disabled={!hasPrevPage}
                aria-label="Previous projects"
              >
                ←
              </button>

              <div className={styles.pagination}>
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.dot} ${currentIndex === i * itemsPerPage ? styles.active : ''}`}
                    onClick={() => setCurrentIndex(i * itemsPerPage)}
                    aria-label={`Go to project page ${i + 1}`}
                  />
                ))}
              </div>

              <button
                className={`${styles.navBtn} ${styles.navNext}`}
                onClick={goNext}
                disabled={!hasNextPage}
                aria-label="Next projects"
              >
                →
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
