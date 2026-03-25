import { hero } from '../data/portfolio'
import styles from './Hero.module.css'

export default function Hero() {
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
            <a href="#" className={styles.btnOutline}>Download Resume ↓</a>
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
    </section>
  )
}
