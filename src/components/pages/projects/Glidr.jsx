
import { Link } from 'react-router-dom'
import styles from './Glidr.module.css'

import glidrImage from '../../assets/glidr.png'
import saveliensImage from '../../assets/saveliens.png'

const LIVE_URL = 'https://shop-with-glidr.onrender.com/'

export default function Glidr() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          © Code by Adamson
        </Link>

        <nav
          className={styles.navigation}
          aria-label="Main navigation"
        >
          <Link to="/projects">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className={styles.intro}>
        <p className={styles.eyebrow}>
          Selected project / 01
        </p>

        <h1 className={styles.title}>Glidr</h1>

        <div className={styles.details}>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>
              Role / Services
            </span>
            <div className={styles.detailContent}>
              Design &amp; Development
            </div>
          </div>

          <div className={styles.detail}>
            <span className={styles.detailLabel}>
              Project
            </span>
            <div className={styles.detailContent}>
              E-commerce experience
            </div>
          </div>

          <div className={styles.detail}>
            <span className={styles.detailLabel}>
              Year
            </span>
            <div className={styles.detailContent}>
              2025
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.gallery}
        aria-label="Glidr project gallery"
      >
        <div className={styles.heroFrame}>
          <img
            src={glidrImage}
            alt="Glidr project preview"
            className={styles.heroImage}
          />

          <a
            href={LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.liveButton}
            aria-label="Visit the live Glidr website"
          >
            <span>Live site</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className={styles.projectCaption}>
          <span>GLIDR</span>
          <span>
            Design &amp; Development · 2025
          </span>
        </div>
      </section>

      <section className={styles.nextProject}>
        <p className={styles.nextLabel}>
          Next project
        </p>

        <Link
          to="/work/saveliens"
          className={styles.nextLink}
          aria-label="View the Saveliens project"
        >
          <h2 className={styles.nextTitle}>
            Saveliens
          </h2>

          <div className={styles.nextPreview}>
            <img
              src={saveliensImage}
              alt="Saveliens project preview"
              loading="lazy"
            />

            <span className={styles.nextView}>
              View project ↗
            </span>
          </div>
        </Link>

        <div className={styles.nextBottom}>
          <span className={styles.nextRule} />

          <Link
            to="/projects"
            className={styles.allProjects}
          >
            All projects
          </Link>
        </div>
      </section>
    </main>
  )
}
