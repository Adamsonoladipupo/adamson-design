
import { Link } from 'react-router-dom'
import styles from './AboutIntro.module.css'

export default function AboutIntro() {
  return (
    <section
      className={styles.aboutSection}
      aria-labelledby="about-intro-heading"
    >
      <div className={styles.aboutGrid}>
        {/* Main introduction */}
        <h2
          id="about-intro-heading"
          className={styles.statement}
        >
          Helping brands to stand out in the digital era.
          Together we will set the new status quo. No nonsense,
          always on the cutting edge.
        </h2>

        {/* Supporting text and About link */}
        <div className={styles.aboutAside}>
          <p className={styles.description}>
            The combination of my passion for design, code
            and interaction positions me in a unique place
            in the web design world.
          </p>

          <Link
            to="/about"
            className={styles.aboutButton}
            aria-label="Learn more about Adamson"
          >
            <span
              className={styles.buttonFill}
              aria-hidden="true"
            />

            <span className={styles.buttonLabel}>
              About me
            </span>
          </Link>
        </div>
      </div>

      {/* Divider introducing the projects section */}
      <div className={styles.workHeading}>
        <span>Recent work</span>
      </div>
    </section>
  )
}
