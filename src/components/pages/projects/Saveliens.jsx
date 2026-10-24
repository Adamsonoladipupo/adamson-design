import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Saveliens.module.css";

import Navbar from "../../Navbar";
import Footer from "../../Footer";

import dashboardImage from "../../assets/saveliens/dashboard.png";
import linksImage from "../../assets/saveliens/link.png";
import saveliensImage from "../../assets/saveliens/saveliens1.png";
import topicImage from "../../assets/saveliens/topic.png";
import giftaraImage from "../../assets/giftara.png";
import saveliensVideo from "../../assets/saveliens/saveliens_landing_page.mp4";

const PROJECT_DETAILS = [
  {
    label: "About project",
    content:
      "Saveliens is a link management platform designed to help people save, organize, and revisit useful online resources.",
  },
  {
    label: "Role / Services",
    content:
      "Product design, interface design, frontend development, backend integration, and database design.",
  },
  {
    label: "Project",
    content: "Personal project · Full-stack web application",
  },
];

const TAGS = [
  "Product Design",
  "React",
  "Spring Boot",
  "PostgreSQL",
  "REST API",
  "JWT Authentication",
];

export default function Saveliens() {
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVisible, setCursorVisible] = useState(false);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    });
  };

  return (
    <main className={styles.page}>
      <Navbar />

      {/* Project introduction */}
      <section className={styles.intro}>
        <p className={styles.eyebrow}>Selected project / Full-stack development</p>

        <h1 className={styles.title}>Saveliens</h1>

        <div className={styles.details}>
          {PROJECT_DETAILS.map((item) => (
            <div className={styles.detail} key={item.label}>
              <span className={styles.detailLabel}>{item.label}</span>
              <p className={styles.detailContent}>{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main dashboard image */}
      <section className={styles.gallery}>
        <div className={styles.heroFrame}>
          <img
            className={styles.heroImage}
            src={saveliensImage}
            alt="Saveliens product and brand preview"
          />

          <a
            className={styles.liveButton}
            href="https://saveliens.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the Saveliens live website in a new tab"
          >
            <span>Live site ↗</span>
          </a>
        </div>

        <div className={styles.projectCaption}>
          <span>SAVELIENS — LINK MANAGEMENT</span>
          <span>PRODUCT INTERFACE / 01</span>
        </div>
      </section>

      {/* Problem */}
      <section className={styles.problem} id="project-overview">
        <header className={styles.problemHeader}>
          <span className={styles.problemEyebrow}>01 / The challenge</span>
          <h2 className={styles.problemTitle}>
            Good resources.
            <br />
            <span>Hard to find again.</span>
          </h2>
        </header>

        <div className={styles.problemContent}>
          <span className={styles.problemMark}>↳</span>

          <p className={styles.problemText}>
            Useful links can quickly become scattered across browser tabs,
            bookmarks, notes, and messaging apps. When everything is saved in
            different places, finding the right resource later becomes another
            task of its own.
          </p>
        </div>
      </section>

      {/* Video showcase */}
      <section className={styles.videoSection}>
        <header className={styles.videoHeader}>
          <span className={styles.videoEyebrow}>02 / Product walkthrough</span>
          <p className={styles.videoCaption}>
            A home for your <span>saved knowledge.</span>
          </p>
        </header>

        <div className={styles.videoFrame}>
          <video
            className={styles.showcaseVideo}
            src={saveliensVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Saveliens product walkthrough"
          />

          {/* <div className={styles.videoBadge}>
            <span className={styles.videoDot} />
            <span>Product walkthrough</span>
          </div> */}
        </div>
      </section>

      {/* Solution */}
      <section className={styles.solution}>
        <header className={styles.solutionHeader}>
          <span className={styles.solutionEyebrow}>03 / The solution</span>

          <h2 className={styles.solutionTitle}>
            Save it once.
            <br />
            <span>Find it when it matters.</span>
          </h2>
        </header>

        <div className={styles.solutionContent}>
          <span className={styles.solutionMark}>↳</span>

          <p className={styles.solutionText}>
            Saveliens brings saved links into one organized workspace. Topics
            provide a way to group related resources, while a dedicated links
            view makes it easier to revisit what has already been collected.
            The goal is to make personal resource management feel clear,
            structured, and effortless.
          </p>
        </div>
      </section>

      {/* Dashboard showcase */}
      <section className={styles.solutionGallery}>
        <header className={styles.solutionGalleryHeader}>
          <span className={styles.solutionGalleryEyebrow}>
            Interface / 01
          </span>

          <p className={styles.solutionGalleryCaption}>
            One workspace. <span>Clear organization.</span>
          </p>
        </header>

        <figure className={styles.solutionImageFrame}>
          <img
            className={styles.solutionImage}
            src={dashboardImage}
            alt="Saveliens dashboard with a topic overview and recently added links"
            loading="lazy"
          />

          <figcaption className={styles.solutionImageIndex}>
            DASHBOARD — 01
          </figcaption>
        </figure>
      </section>

      {/* Link management showcase */}
      <section className={styles.linkShowcase}>
        <header className={styles.solutionGalleryHeader}>
          <span className={styles.solutionGalleryEyebrow}>
            Interface / 02
          </span>

          <p className={styles.solutionGalleryCaption}>
            Your saved links, <span>all in one place.</span>
          </p>
        </header>

        <figure className={styles.solutionImageFrame}>
          <img
            className={styles.solutionImage}
            src={linksImage}
            alt="Saveliens links page displaying saved resources and topic labels"
            loading="lazy"
          />

          <figcaption className={styles.solutionImageIndex}>
            LINKS — 02
          </figcaption>
        </figure>
      </section>

      {/* Design and engineering insights */}
      <section className={styles.insights}>
        <header className={styles.insightsHeader}>
          <span className={styles.insightsEyebrow}>
            04 / Design & engineering
          </span>

          <h2 className={styles.insightsTitle}>
            From a useful idea
            <br />
            to a <span>working product.</span>
          </h2>
        </header>

        <div className={styles.insightsContent}>
          <span className={styles.insightsMark}>↳</span>

          <div className={styles.insightsBody}>
            <p className={styles.insightsLead}>
              Designing the experience was only one part of the challenge.
              Making the different layers work together was just as important.
            </p>

            <p className={styles.insightsText}>
              The process included exploring the interface in Figma and
              developing a dashboard centered on topic cards and a quick-add
              link flow. The interface was built with React, while Spring Boot
              handled backend services and PostgreSQL supported data storage.
            </p>

            <p className={styles.insightsText}>
              Connecting the frontend and backend brought practical engineering
              challenges, including CORS configuration, authentication, database
              constraints, state management, and deployment. Working through
              these issues helped connect interface decisions with the
              underlying behavior of a full-stack application.
            </p>

            <div className={styles.insightsTags}>
              {TAGS.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* Supporting topic visual */}
    <section className={styles.brandShowcase}>
    <div className={styles.brandImageFrame}>
        <img
        src={topicImage}
        alt="Saveliens topic organization interface"
        loading="lazy"
        />
    </div>

    <p className={styles.brandCaption}>
        SAVELIENS — ORGANIZE YOUR LINKS BY TOPIC
    </p>
    </section>

      {/* Reflection */}
      <section className={styles.reflection}>
        <span className={styles.problemEyebrow}>05 / Reflection</span>

        <h2 className={styles.reflectionTitle}>
          Better organization starts with a clearer experience.
        </h2>

        <p className={styles.reflectionText}>
          Saveliens brought product thinking, interface design, and full-stack
          development into one project. It reinforced the importance of
          designing for a real user problem while paying attention to the
          technical details that make an experience dependable. There is still
          room to refine the product, but the project provided a practical
          foundation for building and connecting a complete web application.
        </p>
      </section>

      {/* Next project */}
      <section
        className={styles.nextProject}
        onPointerMove={handlePointerMove}
        onPointerEnter={() => setCursorVisible(true)}
        onPointerLeave={() => setCursorVisible(false)}
      >
        {/* <p className={styles.nextLabel}>Up next</p> */}
        <p className={styles.nextLabel}>Up next · Product Design</p>

        <Link
        className={styles.nextLink}
        to="/work/giftara"
        onFocus={() => setCursorVisible(false)}
        >
        <h2 className={styles.nextTitle}>Giftara</h2>

        <div className={styles.nextPreview}>
            <img
            src={giftaraImage}
            alt="Giftara project preview"
            loading="lazy"
            />
        </div>
        </Link>

        <div
          className={`${styles.cursorView} ${
            cursorVisible ? styles.cursorViewVisible : ""
          }`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
          aria-hidden="true"
        >
          <span>View project</span>
          <span>↗</span>
        </div>

        <div className={styles.nextBottom}>
          <div className={styles.nextRule} />
          <Link className={styles.allProjects} to="/projects">
            All projects <span aria-hidden="true"> ↗</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}