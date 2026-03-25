import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.left}>
        © {new Date().getFullYear()} Josué Salcedo · Data Engineer · Barranquilla, Colombia
      </span>
      <span className={styles.right}>
        Built with precision · Powered by data
      </span>
    </footer>
  )
}
