
import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Navbar.module.css'

const LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const DRAWER_DURATION = 850
const SCROLL_THRESHOLD = 60

function MenuIcon({ open = false }) {
  return (
    <span
      className={`${styles.menuIcon} ${open ? styles.menuIconOpen : ''}`}
      aria-hidden="true"
    >
      <span />
      <span />
    </span>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const closeTimer = useRef(null)
  const menuButtonRef = useRef(null)
  const closeButtonRef = useRef(null)

  const openMenu = useCallback(() => {
    window.clearTimeout(closeTimer.current)
    setClosing(false)
    setOpen(true)
  }, [])

  const closeMenu = useCallback(() => {
    if (!open || closing) return

    setClosing(true)

    closeTimer.current = window.setTimeout(() => {
      setOpen(false)
      setClosing(false)
      menuButtonRef.current?.focus()
    }, DRAWER_DURATION)
  }, [open, closing])

  // Transform the navigation when scrolling, on every screen size.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Prevent the page behind the open drawer from scrolling.
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  // Close the drawer with Escape.
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, closeMenu])

  // Focus the close button when the drawer opens.
  useEffect(() => {
    if (open && !closing) {
      closeButtonRef.current?.focus()
    }
  }, [open, closing])

  // Clear any pending animation timer when the component unmounts.
  useEffect(() => {
    return () => window.clearTimeout(closeTimer.current)
  }, [])

  const headerClasses = [
    styles.header,
    scrolled ? styles.headerScrolled : '',
    open ? styles.headerMenuOpen : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <header className={headerClasses}>
        <a
          href="#home"
          className={styles.brand}
          aria-label="Abdulwahab Adamson — home"
        >
          <span className={styles.brandLabel}>
            <span className={styles.brandShort}>
              © Code by Adamson
            </span>

            <span className={styles.brandFull}>
              © Abdulwahab Adamson
            </span>
          </span>
        </a>

        <nav
          className={styles.desktopNav}
          aria-label="Main navigation"
          aria-hidden={scrolled || undefined}
        >
          {LINKS.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.desktopLink}
              style={{ '--link-index': index }}
              tabIndex={scrolled ? -1 : 0}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className={styles.menuButton}
          onClick={open ? closeMenu : openMenu}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open && !closing}
          aria-controls="mobile-navigation"
        >
          <MenuIcon open={open && !closing} />
        </button>
      </header>

      {open && (
        <div
          className={`${styles.menuLayer} ${
            closing ? styles.menuLayerClosing : ''
          }`}
        >
          <button
            type="button"
            className={styles.backdrop}
            onClick={closeMenu}
            aria-label="Close navigation menu"
            tabIndex={-1}
          />

          <nav
            id="mobile-navigation"
            className={`${styles.drawer} ${
              closing ? styles.drawerClosing : ''
            }`}
            aria-label="Navigation menu"
            aria-hidden={closing}
            inert={closing}
          >
            <div className={styles.drawerTop}>
              <span className={styles.drawerEyebrow}>
                NAVIGATION
              </span>

              <button
                ref={closeButtonRef}
                type="button"
                className={styles.drawerClose}
                onClick={closeMenu}
                aria-label="Close navigation menu"
                tabIndex={closing ? -1 : 0}
              >
                <MenuIcon open />
              </button>
            </div>

            <div className={styles.drawerLinks}>
              {LINKS.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={styles.drawerLink}
                  style={{ '--link-index': index }}
                  tabIndex={closing ? -1 : 0}
                  onClick={closeMenu}
                >
                  <span className={styles.linkNumber}>
                    0{index + 1}
                  </span>

                  <span className={styles.linkLabel}>
                    {link.label}
                  </span>

                  <span className={styles.linkArrow} aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <div className={styles.drawerFooter}>
              <span>© Abdulwahab Adamson</span>
              <span>Available for opportunities</span>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
