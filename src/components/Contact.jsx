
import { useEffect, useRef, useState } from 'react'
import styles from './Contact.module.css'
import profileImage from './assets/adamson.jpg'

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.arrowIcon}
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}

export default function Contact() {
  const sectionRef = useRef(null)
  const [isRevealed, setIsRevealed] = useState(false)

  // useEffect(() => {
  //   const section = sectionRef.current
  //   if (!section) return

  //   if (!('IntersectionObserver' in window)) {
  //     setIsRevealed(true)
  //     return
  //   }

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setIsRevealed(true)
  //         observer.unobserve(section)
  //       }
  //     },
  //     { threshold: 0.08 },
  //   )

  //   observer.observe(section)

  //   return () => observer.disconnect()
  // }, [])


useEffect(() => {
  const section = sectionRef.current
  if (!section) return

  // Safety fallback: reveal the section even if the
  // browser doesn't trigger IntersectionObserver.
  const fallback = window.setTimeout(() => {
    setIsRevealed(true)
  }, 2000)

  if (!('IntersectionObserver' in window)) {
    setIsRevealed(true)
    window.clearTimeout(fallback)
    return
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsRevealed(true)
        window.clearTimeout(fallback)
        observer.unobserve(section)
      }
    },
    { threshold: 0.08 },
  )

  observer.observe(section)

  return () => {
    observer.disconnect()
    window.clearTimeout(fallback)
  }
}, [])


  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`${styles.contactSection} ${
        isRevealed ? styles.contactRevealed : ''
      }`}
      aria-labelledby="contact-heading"
    >
      <div className={styles.contactInner}>
        <div className={styles.contactMain}>
          <h2 id="contact-heading" className={styles.contactHeading}>
            <img src={profileImage} alt="" className={styles.profileImage} />
            <span>
              Let’s work
              <br />
              together
            </span>
          </h2>

          <a
            href="mailto:YOUR_EMAIL@example.com"
            className={styles.contactArrow}
            aria-label="Email me"
          >
            <ArrowIcon />
          </a>

          <div className={styles.contactDivider}>
            <a
              href="mailto:YOUR_EMAIL@example.com"
              className={styles.getInTouchButton}
            >
              <span className={styles.buttonFill} aria-hidden="true" />
              <span className={styles.buttonLabel}>Get in touch</span>
            </a>
          </div>

          <div className={styles.contactLinks}>
            <a
              href="mailto:YOUR_EMAIL@example.com"
              className={styles.contactPill}
            >
              YOUR_EMAIL@example.com
            </a>

            <a
              href="tel:+2340000000000"
              className={styles.contactPill}
            >
              +234 000 000 0000
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
