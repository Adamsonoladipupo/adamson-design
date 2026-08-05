import { useEffect, useRef, useState } from 'react'

const LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

/* ── Icons ─────────────────────────────────── */
function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1"  x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22"   x2="5.64"  y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1"  y1="12" x2="3"  y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
         strokeLinecap="round" className="w-5 h-5">
      <line x1="18" y1="6" x2="6"  y2="18" />
      <line x1="6"  y1="6" x2="18" y2="18" />
    </svg>
  )
}

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
         strokeLinecap="round" className="w-5 h-5">
      <line x1="3" y1="6"  x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

/* ─────────────────────────────────────────────
   The slide-in drawer works like this:
   - When opened, we mount it with class nav-slide-in.
   - When closed, we switch to nav-slide-out and wait for
     the animation to finish (300 ms) before unmounting.
   This gives us a real slide-out animation without any
   extra library.
   ───────────────────────────────────────────── */
export default function Navbar({ dark, toggleDark }) {
  const [open, setOpen]       = useState(false)   // true = drawer is mounted
  const [closing, setClosing] = useState(false)   // true = playing slide-out
  const [scrolled, setScrolled] = useState(false)
  const closeTimer = useRef(null)

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* lock body scroll while drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  function openMenu()  { clearTimeout(closeTimer.current); setClosing(false); setOpen(true) }

  function closeMenu() {
    setClosing(true)
    closeTimer.current = setTimeout(() => {
      setOpen(false)
      setClosing(false)
    }, 300)            /* must match nav-slide-out duration */
  }

  function handleLinkClick() { closeMenu() }

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-theme ${
          scrolled
            ? 'bg-[var(--surface)]/90 backdrop-blur border-[var(--border)]'
            : 'bg-[var(--bg)]/60 backdrop-blur border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ──────────────────────── */}
            <a href="/" className="flex items-center gap-2.5 font-display font-bold text-base tracking-tight text-[var(--ink)]">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                style={{ background: 'linear-gradient(135deg,#4F46E5,#818CF8)' }}
              >
                A
              </span>
              Adamson
            </a>

            {/* ── Desktop nav ───────────────── */}
            <nav className="hidden md:flex items-center gap-1">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--ink)] rounded-lg hover:bg-[var(--surface-2)] transition-theme"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* ── Desktop: theme toggle + CTA ── */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleDark}
                aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)] transition-theme"
              >
                {dark ? <SunIcon /> : <MoonIcon />}
              </button>
              <a
                href="#contact"
                className="text-sm font-semibold px-4 py-2 rounded-lg text-white shadow-cta hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg,#4F46E5,#6366F1)' }}
              >
                Hire me
              </a>
            </div>

            {/* ── Mobile: theme toggle + hamburger ── */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleDark}
                aria-label="Toggle theme"
                className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--ink)] transition-theme"
              >
                {dark ? <SunIcon /> : <MoonIcon />}
              </button>
              <button
                onClick={open ? closeMenu : openMenu}
                aria-label="Toggle menu"
                aria-expanded={open}
                aria-controls="mobile-nav"
                className="p-2 rounded-lg border border-[var(--border)] text-[var(--ink)] transition-theme"
              >
                {open ? <CloseIcon /> : <HamburgerIcon />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ── Mobile drawer ─────────────────────
          Rendered as a fixed full-height panel that
          slides in from the right edge of the screen.
          A semi-transparent backdrop sits behind it.
          ─────────────────────────────────────────── */}
      {open && (
        <>
          {/* Backdrop — tap to close */}
          <div
            className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            style={{ animation: closing ? 'fadeOut 0.3s ease forwards' : 'fadeIn 0.25s ease forwards' }}
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <nav
            id="mobile-nav"
            className={`md:hidden fixed top-0 right-0 z-50 h-full w-72 max-w-[85vw]
                        bg-[var(--surface)] border-l border-[var(--border)]
                        flex flex-col shadow-2xl
                        ${closing ? 'nav-slide-out' : 'nav-slide-in'}`}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-[var(--border)] flex-shrink-0">
              <span className="font-display font-bold text-base text-[var(--ink)]">Menu</span>
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--ink)] transition-theme"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col flex-1 px-4 py-6 gap-1 overflow-y-auto">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-2)] transition-theme"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Hire me CTA at bottom */}
            <div className="px-6 py-6 border-t border-[var(--border)] flex-shrink-0">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="block w-full text-center text-sm font-bold py-3.5 rounded-xl text-white shadow-cta hover:opacity-90 transition-opacity"
                style={{ background: 'linear-gradient(135deg,#4F46E5,#6366F1)' }}
              >
                Hire me
              </a>
            </div>
          </nav>
        </>
      )}

      {/* Inline keyframes for the backdrop fade (can't do this in Tailwind easily) */}
      <style>{`
        @keyframes fadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes fadeOut { from { opacity: 1 } to { opacity: 0 } }
      `}</style>
    </>
  )
}
