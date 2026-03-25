import { useEffect, useState } from 'react'
import { hero } from '../data/portfolio'
import styles from './Hero.module.css'

const CV_PATH = '/CV.pdf'

export default function Hero() {
  const [showCV, setShowCV] = useState(false)

  useEffect(() => {
    if (!showCV) return
    const onKey = (e) => {
      if (e.key === 'Escape') setShowCV(false)
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [showCV])

  return (
    <section id="hero" className={styles.hero}>
      {/* animated grid background */}
      <div className={styles.grid} aria-hidden />
      {/* radial glow */}
      <div className={styles.glow} aria-hidden />

      <div className={styles.inner}>
        {/* ── LEFT ── */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            {hero.availableText}
          </div>

          <p className={styles.role}>
            {hero.title} · {hero.subtitle}
          </p>

          <h1 className={styles.title}>
            {hero.name.split(' ')[0]}<br />
            <span className={styles.accent}>{hero.name.split(' ')[1]}</span>
          </h1>

          <p className={styles.tagline}>{hero.tagline}</p>
          <p className={styles.desc}>{hero.description}</p>

          <div className={styles.location}>
            <span>📍</span> {hero.location}
          </div>

          <div className={styles.btns}>
            <a href="#projects" className={styles.btnPrimary}>View Projects →</a>
            <button
              type="button"
              className={styles.btnOutline}
              onClick={() => setShowCV(true)}
            >
              Download Resume ↓
            </button>
            <a href="#contact" className={styles.btnOutline}>Contact Me</a>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.portraitWrap}>
            <div className={styles.portraitFloater}>
              <div className={styles.portraitClip}>
                <img
                  src={hero.portraitSrc}
                  alt={hero.name}
                  className={styles.portraitImg}
                  width={600}
                  height={750}
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {showCV && (
        <div
          className={styles.cvModalRoot}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
        >
          <button
            type="button"
            className={styles.cvModalBackdrop}
            aria-label="Close resume viewer"
            onClick={() => setShowCV(false)}
          />
          <div className={styles.cvModalPanel}>
            <div className={styles.cvModalHeader}>
              <h2 id="cv-modal-title" className={styles.cvModalTitle}>
                Resume
              </h2>
              <button
                type="button"
                className={styles.cvModalClose}
                onClick={() => setShowCV(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <iframe
              className={styles.cvModalFrame}
              src={CV_PATH}
              title="Resume PDF"
            />
            <div className={styles.cvModalFooter}>
              <a
                href={CV_PATH}
                download="CV.pdf"
                className={styles.cvModalDownload}
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
