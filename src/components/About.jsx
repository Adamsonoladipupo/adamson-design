
import styles from './About.module.css'
import profileImage from './assets/adamson.jpg'

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="16" />
      <ellipse cx="24" cy="24" rx="8" ry="16" />
      <path d="M9 24h30M12 16h24M12 32h24" />
    </svg>
  )
}

export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Section 1: Introduction */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h1 className={styles.heroTitle}>
            Helping ideas become
            <br />
            meaningful digital experiences.
          </h1>

          <div className={styles.globeDivider}>
            <span className={styles.dividerLine} />
            <div className={styles.globeCircle}>
              <GlobeIcon />
            </div>
          </div>

          <div className={styles.introContent}>
            <div className={styles.introCopy}>
              <span className={styles.smallArrow} aria-hidden="true">
                ↗
              </span>

              <div>
                <p>
                  I combine thoughtful design and development to create
                  digital experiences that are clear, engaging, and built
                  with purpose.
                </p>

                <span className={styles.mutedText}>
                  Always learning. Always exploring.
                </span>
              </div>
            </div>

            <div className={styles.heroImageWrap}>
              <img
                src={profileImage}
                alt="Portrait of Adamson"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: About and creative approach */}
      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <div className={styles.storyImageWrap}>
            <img
              src={profileImage}
              alt="Adamson"
              className={styles.storyImage}
              loading="lazy"
            />
          </div>

          <div className={styles.storyCopy}>
            <span className={styles.juryMark} aria-hidden="true">
              A<span>✳</span>
            </span>

            <p className={styles.eyebrow}>A LITTLE ABOUT MY APPROACH</p>

            <h2 className={styles.storyTitle}>
              Design meets
              <br />
              development.
            </h2>

            <p className={styles.storyDescription}>
              I enjoy bringing ideas to life through a balance of visual
              design, thoughtful structure, and clean implementation.
              I pay attention to the details that make a digital experience
              feel intuitive, from its overall layout to the smallest
              interaction.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Services */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}>
          <h2 className={styles.servicesHeading}>
            I can help you with
          </h2>

          <div className={styles.servicesGrid}>
            <article className={styles.service}>
              <span className={styles.serviceNumber}>01</span>
              <div className={styles.serviceRule} />

              <h3>Design</h3>

              <p>
                I create clean, considered interfaces that balance visual
                appeal with usability, helping ideas communicate clearly
                and confidently.
              </p>
            </article>

            <article className={styles.service}>
              <span className={styles.serviceNumber}>02</span>
              <div className={styles.serviceRule} />

              <h3>Development</h3>

              <p>
                I build responsive websites with attention to performance,
                accessibility, and the details that make each experience
                feel smooth and intuitive.
              </p>
            </article>

            <article className={styles.service}>
              <span className={styles.serviceNumber}>03</span>
              <div className={styles.serviceRule} />

              <h3>
                <span className={styles.serviceSpark} aria-hidden="true">
                  ✦
                </span>
                The full package
              </h3>

              <p>
                From the first idea to the finished website, I bring design
                and development together to create a consistent, polished
                digital experience.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}
