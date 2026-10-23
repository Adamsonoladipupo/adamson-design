
import styles from './About.module.css'
import profileImage from './assets/adamson.jpg'

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={styles.globeIcon}
    >
      <circle cx="50" cy="50" r="43" />
      <ellipse cx="50" cy="50" rx="20" ry="43" />
      <ellipse cx="50" cy="50" rx="36" ry="43" />
      <path d="M7 50h86M14 30h72M14 70h72" />
    </svg>
  )
}

export default function About() {
  return (
    <div className={styles.aboutPage}>
      {/* SECTION 1: INTRODUCTION */}
      <section className={styles.introSection}>
        <div className={styles.introInner}>
          <h1 className={styles.heroTitle}>
            Helping ideas become
            <br />
            meaningful digital experiences.
          </h1>

          <div className={styles.globeDivider}>
            <span className={styles.dividerLine} />

            <div
              className={styles.globeCircle}
              aria-label="Rotating globe"
              role="img"
            >
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

      {/* SECTION 2: SERVICES */}
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
                With over five years of design experience, I create
                thoughtful, user-centred interfaces that balance visual
                clarity, usability, and business goals. Every decision
                is intentional, from the overall experience to the
                smallest interaction.
              </p>
            </article>

            <article className={styles.service}>
              <span className={styles.serviceNumber}>02</span>
              <div className={styles.serviceRule} />

              <h3>Development</h3>

              <p>
                With over a year of development experience, I turn
                concepts into responsive, functional digital products.
                I focus on clean implementation, accessibility, and
                performance to ensure that great designs work just as
                well as they look.
              </p>
            </article>

            <article className={styles.service}>
              <span className={styles.serviceNumber}>03</span>
              <div className={styles.serviceRule} />

              <h3>The full package</h3>

              <p>
                Bringing design and development together allows me to
                work across multiple stages of the digital product
                lifecycle. From shaping an idea and refining the user
                experience to building the final product, I help create
                cohesive experiences from start to finish.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 3: EXPERIENCE & APPROACH */}
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
            <p className={styles.eyebrow}>
              A LITTLE ABOUT MY APPROACH
            </p>

            <h2 className={styles.storyTitle}>
              Design meets
              <br />
              development.
            </h2>

            <p className={styles.storyDescription}>
              With over five years of experience in design and more
              than a year in development, I bring a broader perspective
              to building digital products. I understand how a product
              should look, how it should feel, and how it needs to work.
            </p>

            <p className={styles.storyDescription}>
              This combination allows me to contribute across multiple
              stages of the product development lifecycle—from research,
              user flows, and interface design to responsive development
              and implementation. Rather than treating design and code
              as separate processes, I connect the two to make better
              decisions, solve problems more effectively, and create
              experiences that are both purposeful and practical.
            </p>

            <p className={styles.storyClosing}>
              I don't just design how a product looks. I help bring
              the entire experience to life.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
