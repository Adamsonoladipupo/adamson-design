import { useEffect, useState } from 'react'
import Navbar   from './components/Navbar.jsx'
import Hero     from './components/Hero.jsx'
import Social   from './components/Social.jsx'
import About    from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact  from './components/Contact.jsx'
import Footer   from './components/Footer.jsx'

/**
 * Applies the dark/light class to <html> immediately — no transition delay.
 *
 * Strategy: inject a temporary <style> that sets transition:none on everything,
 * flip the class, then remove the style one frame later so all other UI
 * animations remain intact.
 */
function applyTheme(isDark) {
  const root = document.documentElement

  // Suppress ALL CSS transitions for exactly one frame
  const style = document.createElement('style')
  style.id = '__theme-no-transition__'
  style.textContent = '*, *::before, *::after { transition: none !important; }'
  document.head.appendChild(style)

  // Apply class synchronously
  root.classList.toggle('dark', isDark)

  // Remove the suppression after the browser has painted the new theme
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const el = document.getElementById('__theme-no-transition__')
      if (el) el.remove()
    })
  })
}

export default function App() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Apply theme on first render (no flash on mount)
  useEffect(() => {
    applyTheme(dark)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev
      applyTheme(next)
      localStorage.setItem('theme', next ? 'dark' : 'light')
      return next
    })
  }

  return (
    // Remove transition-theme from the root wrapper — theme changes
    // are now instant; individual component transitions remain unaffected.
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] selection:bg-violet-500 selection:text-white">
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <Social />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
