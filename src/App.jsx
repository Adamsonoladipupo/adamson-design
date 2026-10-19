
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage.jsx'
import AboutPage from './components/pages/AboutPage.jsx'

function applyTheme(isDark) {
  const root = document.documentElement
  const styleId = '__theme-no-transition__'

  document.getElementById(styleId)?.remove()

  const style = document.createElement('style')
  style.id = styleId
  style.textContent =
    '*, *::before, *::after { transition: none !important; }'

  document.head.appendChild(style)
  root.classList.toggle('dark', isDark)

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.getElementById(styleId)?.remove()
    })
  })
}

export default function App() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme')

    if (stored !== null) {
      return stored === 'dark'
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    applyTheme(dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const toggleDark = () => {
    setDark((previous) => !previous)
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)] selection:bg-violet-500 selection:text-white">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                dark={dark}
                toggleDark={toggleDark}
              />
            }
          />

          <Route
            path="/about"
            element={
              <AboutPage
                dark={dark}
                toggleDark={toggleDark}
              />
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
