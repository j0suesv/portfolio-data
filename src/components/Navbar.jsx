import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['About', 'Stack', 'Projects', 'Experience']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <span className={styles.logo}>JS / DATA_ENGINEER</span>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className={styles.cta} onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.burgerLineTop    : ''} />
        <span className={menuOpen ? styles.burgerLineMid    : ''} />
        <span className={menuOpen ? styles.burgerLineBottom : ''} />
      </button>
    </nav>
  )
}
