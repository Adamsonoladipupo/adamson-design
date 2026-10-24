
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Glidr.module.css";
import Navbar from "../../Navbar";
import Footer from "../../Footer";

import glidrImage from "../../assets/glidr/glidr1.jpg";
import saveliensImage from "../../assets/saveliens.png";
import glidrVideo from "../../assets/glidr/glidr_landing_page.mp4";

const LIVE_URL = "https://shop-with-glidr.onrender.com/";

export default function Glidr() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
    visible: false,
  });

  const handleNextProjectMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    setCursor({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
      visible: true,
    });
  };

  const handleNextProjectLeave = () => {
    setCursor((current) => ({
      ...current,
      visible: false,
    }));
  };

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
            <span aria-hidden="true">Live site ↗</span>
          </a>
        </div>
      </section>

      <section className={styles.problem} aria-labelledby="problem-title">
        <div className={styles.problemHeader}>
          <span className={styles.problemEyebrow}>01 / THE CHALLENGE</span>
          <h2 id="problem-title" className={styles.problemTitle}>
            The Problem<span>.</span>
          </h2>
        </div>

        <div className={styles.problemContent}>
          <span className={styles.problemMark} aria-hidden="true">
            ↘
          </span>

          <p className={styles.problemText}>
            Customers spend unnecessary time searching for products,
            confirming product’s price, navigating unfamiliar store layouts,
            and managing shopping lists, leading to a poor shopping
            experience and reduced customer loyalty.
          </p>
        </div>
      </section>


      <section className={styles.videoSection} aria-label="Glidr landing page video">
        <div className={styles.videoHeader}>
          <span className={styles.videoEyebrow}>02 / THE EXPERIENCE</span>
          <p className={styles.videoCaption}>
            A closer look at Glidr<span>.</span>
          </p>
        </div>

        <div className={styles.videoFrame}>
          <video
            className={styles.showcaseVideo}
            src={glidrVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Glidr landing page experience"
          />
        </div>
      </section>



      <section
        className={styles.nextProject}
        onMouseEnter={handleNextProjectMove}
        onMouseMove={handleNextProjectMove}
        onMouseLeave={handleNextProjectLeave}
        aria-label="Next project: Saveliens"
      >
        <div>
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
            </div>
          </Link>

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
            <span>Next Project</span>
          </div>
        </div>

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

      <Footer />
    </main>
  );
}
