import { useState, useEffect } from 'react'
import { scrollToSection } from '../utils/scrollTo'
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

  function handleNav(e, id) {
    e.preventDefault()
    setMenuOpen(false)
    scrollToSection(id)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <span className={styles.logo}>JS / DATA_ENGINEER</span>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={e => handleNav(e, l.toLowerCase())}>
              {l}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" className={styles.cta} onClick={e => handleNav(e, 'contact')}>
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
