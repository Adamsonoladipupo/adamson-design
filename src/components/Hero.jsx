
import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import profilePhoto from './assets/adamson.jpg'

const LOCATION = ['Located', 'in Nigeria']
const FULL_NAME = 'ABDULWAHAB ADAMSON'

function GlobeIcon() {
  return (
    <svg
      className={styles.globe}
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="16" />
      <ellipse cx="20" cy="20" rx="7" ry="16" />
      <path d="M4 20h32M8 11h24M8 29h24" />
    </svg>
  )
}

function DiagonalArrow() {
  return (
    <svg
      className={styles.diagonalArrow}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 5L27 27M10 27H27V10" />
    </svg>
  )
}

export default function Hero() {
  const nameTrackRef = useRef(null)
  const directionRef = useRef(1)

  useEffect(() => {
    const track = nameTrackRef.current
    if (!track) return

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    let previousScrollY = window.scrollY
    let previousTime = 0
    let offset = 0
    let frameId = null
    let halfWidth = 0

    const measureTrack = () => {
      halfWidth = track.scrollWidth / 2
    }

    measureTrack()

    const resizeObserver = new ResizeObserver(measureTrack)
    resizeObserver.observe(track)

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - previousScrollY

      if (delta !== 0) {
        directionRef.current = delta > 0 ? 1 : -1
      }

      previousScrollY = currentScrollY
    }

    const animate = (time) => {
      if (!previousTime) previousTime = time

      const elapsed = Math.min((time - previousTime) / 1000, 0.04)
      previousTime = time

      if (!reducedMotion.matches && halfWidth > 0) {
        const speed = 65

        offset += directionRef.current * speed * elapsed
        offset = ((offset % halfWidth) + halfWidth) % halfWidth

        track.style.transform = `translate3d(${-offset}px, 0, 0)`
      }

      frameId = window.requestAnimationFrame(animate)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    frameId = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <section
      id="home"
      className={styles.hero}
      aria-label="Introduction"
    >
      {/* Full-screen portrait background */}
      <div className={styles.background} aria-hidden="true">
        <img
          src={profilePhoto}
          alt=""
          className={styles.backgroundImage}
          fetchPriority="high"
          decoding="async"
        />

        <div className={styles.backgroundOverlay} />
      </div>

      {/* Location tab */}
      <div className={styles.location}>
        <div className={styles.locationCopy}>
          {LOCATION.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>

        <div className={styles.globeCircle}>
          <GlobeIcon />
        </div>
      </div>

      {/* Role and arrow */}
      <div className={styles.roles}>
        <DiagonalArrow />

        <div className={styles.roleText}>
          <span>Freelance</span>
          <span>Designer &amp; Developer</span>
        </div>
      </div>

      {/* Continuously moving name */}
      <div className={styles.nameViewport} aria-hidden="true">
        <div ref={nameTrackRef} className={styles.nameTrack}>
          {[0, 1, 2, 3].map((copy) => (
            <span className={styles.nameCopy} key={copy}>
              {FULL_NAME}
              <span className={styles.nameDash}>—</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue — hidden on mobile */}
      <a href="#projects" className={styles.scrollHint}>
        <span>SCROLL TO EXPLORE</span>
        <span className={styles.scrollArrow} aria-hidden="true">
          ↓
        </span>
      </a>
    </section>
  )
}
