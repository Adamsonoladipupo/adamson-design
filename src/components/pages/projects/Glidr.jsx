
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Glidr.module.css";

import glidrImage from "../../assets/glidr.png";
import saveliensImage from "../../assets/saveliens.png";

// Replace with the real paths of your shared components.
import Navbar from "../../Navbar";
import Footer from "../../Footer";

const LIVE_URL = "https://shop-with-glidr.onrender.com/";

export default function Glidr() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  function handlePointerMove(event) {
    const bounds = event.currentTarget.getBoundingClientRect();

    setCursor({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
      visible: true,
    });
  }

  function handlePointerLeave() {
    setCursor((current) => ({
      ...current,
      visible: false,
    }));
  }

  return (
    <main className={styles.page}>
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

      <section
        className={styles.nextProject}
        onPointerMove={(event) => {
          if (event.pointerType === "mouse") {
            handlePointerMove(event);
          }
        }}
        onPointerLeave={handlePointerLeave}
        aria-label="Next project"
      >
        <p className={styles.nextLabel}>
          Next project
        </p>

        {/* Only the project name is clickable here. */}
        <Link
          to="/work/saveliens"
          className={styles.nextTitleLink}
        >
          <h2 className={styles.nextTitle}>
            Saveliens
          </h2>
        </Link>

        {/* Only the preview image is clickable here. */}
        <Link
          to="/work/saveliens"
          className={styles.nextImageLink}
          aria-label="View the Saveliens project"
        >
          <div className={styles.nextPreview}>
            <img
              src={saveliensImage}
              alt="Saveliens project preview"
              loading="lazy"
            />
          </div>
        </Link>

        <div className={styles.nextBottom}>
          <span className={styles.nextRule} />

          {/* This link navigates to the projects index, not Saveliens. */}
          <Link
            to="/projects"
            className={styles.allProjects}
          >
            All projects
          </Link>
        </div>

        {/* Decorative only; it cannot intercept clicks. */}
        <div
          className={`${styles.cursorView} ${
            cursor.visible ? styles.cursorViewVisible : ""
          }`}
          style={{
            left: `${cursor.x}px`,
            top: `${cursor.y}px`,
          }}
          aria-hidden="true"
        >
          <span>View</span>
          <span>project ↗</span>
        </div>
      </section>

      <Footer />
    </main>
  );
}
