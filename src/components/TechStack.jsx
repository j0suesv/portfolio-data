import { stack } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import IconMedia from './IconMedia'
import styles from './TechStack.module.css'

function TechChip({ icon, name }) {
  const icon58 =
    name === 'Excel' ||
    (typeof icon === 'string' && /looker\.svg$/i.test(icon))
  const iconClass = icon58
    ? `${styles.chipIcon} ${styles.chipIcon58}`
    : styles.chipIcon

  return (
    <div className={styles.chip}>
      <IconMedia icon={icon} alt="" className={iconClass} />
      <span className={styles.chipName}>{name}</span>
    </div>
  )
}

function Category({ category, items, delay }) {
  const [ref, visible] = useReveal()
  return (
    <div
      ref={ref}
      className={`${styles.category} ${visible ? styles.visible : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={styles.catLabel}>{category}</div>
      <div className={styles.grid}>
        {items.map(item => <TechChip key={item.name} {...item} />)}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="stack" className={styles.section}>
      <span className={styles.tag}>Tech Stack</span>
      <h2 className={styles.title}>Tools of the trade</h2>
      <p className={styles.sub}>
        The technologies I use to build and maintain data systems at scale.
      </p>

      {stack.map((cat, i) => (
        <Category key={cat.category} {...cat} delay={i * 80} />
      ))}
    </section>
  )
}
