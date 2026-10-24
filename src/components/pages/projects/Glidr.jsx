
import { Link } from "react-router-dom";
import styles from "./Glidr.module.css";

import glidrImage from "../../assets/glidr.png";
import saveliensImage from "../../assets/saveliens.png";

// Replace these example imports with your existing component paths.
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const LIVE_URL = "https://shop-with-glidr.onrender.com/";

export default function Glidr() {
  return (
    <main className={styles.page}>
      {/* Shared site navbar */}
      <Navbar />

      <section className={styles.intro}>
        <h1 className={styles.title}>Glidr</h1>

        <div className={styles.details}>
          <div className={styles.detail}>
            <span className={styles.detailLabel}>
              About project
            </span>

            <div className={styles.detailContent}>
              Glidr simplifies the shopping experience from
              product discovery to checkout.
            </div>
          </div>

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
          <span>Design &amp; Development · 2025</span>
        </div>
      </section>

      {/* Keep the original project-to-project transition */}
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

      {/* Shared site footer */}
      <Footer />
    </main>
  );
}
