import { architecture } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import styles from './Architecture.module.css'

export default function Architecture() {
  const [ref, visible] = useReveal()

  return (
    <section id="architecture" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.tag}>Architecture</span>
        <h2 className={styles.title}>How data flows</h2>
        <p className={styles.sub}>
          The modern data stack I design and operate — from raw sources to actionable dashboards.
        </p>

        {/* flow arrows between columns */}
        <div className={styles.flowRow}>
          {architecture.map((col, i) => (
            <div key={col.header} className={styles.flowStep}>
              <span className={styles.flowLabel}>{col.header}</span>
              {i < architecture.length - 1 && (
                <span
                  className={styles.flowArrow}
                  style={{ animationDelay: `${i * 0.25}s` }}
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div
          ref={ref}
          className={`${styles.diagram} ${visible ? styles.visible : ''}`}
        >
          {architecture.map((col, ci) => (
            <div key={col.header} className={styles.col}>
              <div className={styles.colHeader}>{col.header}</div>
              {col.items.map((item, ii) => (
                <div
                  key={item.name}
                  className={styles.item}
                  style={{ animationDelay: `${ci * 0.08 + ii * 0.06}s` }}
                >
                  <span className={styles.itemIcon}>{item.icon}</span>
                  <span className={styles.itemName}>{item.name}</span>
                  <span className={styles.itemDesc}>{item.desc}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
