
import { useEffect, useState } from 'react'
import styles from './Footer.module.css'

const SOCIALS = [
  { label: 'Behance', href: 'https://www.behance.net/abdulwahabadamson' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdulwahabadamson/' },
  { label: 'GitHub', href: 'https://github.com/Adamsonoladipupo' },
]

function getLocalTime() {
  const now = new Date()

  const time = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(now)

  const timeZone = new Intl.DateTimeFormat(undefined, {
    timeZoneName: 'short',
  })
    .formatToParts(now)
    .find((part) => part.type === 'timeZoneName')?.value

  return {
    time,
    timeZone: timeZone || 'Local time',
  }
}

export default function Footer() {
  const [localTime, setLocalTime] = useState(getLocalTime)

  useEffect(() => {
    const updateTime = () => setLocalTime(getLocalTime())

    updateTime()
    const intervalId = window.setInterval(updateTime, 60_000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerMeta}>
          <div className={styles.footerMetaItem}>
            <span className={styles.footerLabel}>Version</span>
            <span className={styles.footerValue}>2026 © Edition</span>
          </div>

          <div className={styles.footerMetaItem}>
            <span className={styles.footerLabel}>Local time</span>
            <span className={styles.footerValue}>
              {localTime.time} {localTime.timeZone}
            </span>
          </div>
        </div>

        <div className={styles.footerSocials}>
          <span className={styles.footerLabel}>Socials</span>

          <nav aria-label="Social media" className={styles.socialLinks}>
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
              >
                {social.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
