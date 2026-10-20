
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ProjectsIntro.module.css'

import imgGlidr from './assets/glidr.png'
import imgSaveliens from './assets/saveliens.png'
import imgGiftara from './assets/giftara.png'
import imgSwaply from './assets/swaply.png'
import imgEcoearn from './assets/Ecoearn.png'

const PROJECTS = [
  {
    name: 'Glidr',
    contribution: 'Design & Development',
    year: '2025',
    href: 'https://shop-with-glidr.onrender.com/',
    image: imgGlidr,
  },
  {
    name: 'Saveliens',
    contribution: 'Product Design & Development',
    year: '2025',
    href: 'https://saveliens.onrender.com/',
    image: imgSaveliens,
  },
  {
    name: 'Giftara',
    contribution: 'Product Design',
    year: '2025',
    href: 'https://giftara.app/',
    image: imgGiftara,
  },
  {
    name: 'Swaply',
    contribution: 'UX/UI Design & Case Study',
    year: '2025',
    href: 'https://www.behance.net/gallery/224400063/Swaply-Convert-crypto-withdraw-into-your-local-Bank',
    image: imgSwaply,
  },
  {
    name: 'EcoEarn',
    contribution: 'Product Design & Research',
    year: '2025',
    href: 'https://www.behance.net/gallery/217668017/EcoEarn-App-(Case-Study)',
    image: imgEcoearn,
  },
]

const INITIAL_VISIBLE = 3

export default function ProjectsIntro() {
  const sectionRef = useRef(null)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 })

  // Preserve the curved section transition on desktop.
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let frameId = 0

    const updateCurve = () => {
      cancelAnimationFrame(frameId)

      frameId = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect()
        const viewportHeight = window.innerHeight

        const progress = Math.max(
          0,
          Math.min(
            1,
            (viewportHeight - rect.bottom) / (viewportHeight * 0.8),
          ),
        )

        section.style.setProperty('--curve-depth', `${progress * 85}px`)
      })
    }

    updateCurve()

    window.addEventListener('scroll', updateCurve, { passive: true })
    window.addEventListener('resize', updateCurve)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', updateCurve)
      window.removeEventListener('resize', updateCurve)
    }
  }, [])

  const handleProjectMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()

    setPreviewPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  const visibleProjects = PROJECTS.slice(0, INITIAL_VISIBLE)

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={styles.projectsIntro}
      aria-label="Recent work"
    >
      <div className={styles.projectList}>
        {visibleProjects.map((project) => {
          const isHovered = hoveredProject === project.name

          return (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className={`${styles.projectRow} ${
                isHovered ? styles.projectRowHovered : ''
              }`}
              onMouseEnter={(event) => {
                setHoveredProject(project.name)
                handleProjectMove(event)
              }}
              onMouseMove={handleProjectMove}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <span className={styles.projectName}>
                {project.name}
              </span>

              {/* Always visible on mobile */}
              <span className={styles.mobileProjectImage}>
                <img
                  src={project.image}
                  alt={`${project.name} project preview`}
                  loading="lazy"
                />
              </span>

              <span className={styles.projectMeta}>
                <span className={styles.projectContribution}>
                  {project.contribution}
                </span>
                <span className={styles.projectYear}>
                  {project.year}
                </span>
              </span>

              {/* Cursor-following preview for desktop */}
              {isHovered && (
                <>
                  <span
                    className={styles.projectPreview}
                    style={{
                      left: previewPosition.x,
                      top: previewPosition.y,
                    }}
                    aria-hidden="true"
                  >
                    <img
                      src={project.image}
                      alt=""
                      className={styles.previewImage}
                    />
                  </span>

                  <span
                    className={styles.cursorView}
                    style={{
                      left: previewPosition.x,
                      top: previewPosition.y,
                    }}
                    aria-hidden="true"
                  >
                    View
                  </span>
                </>
              )}
            </a>
          )
        })}
      </div>

      <div className={styles.moreWorkWrap}>
        <Link
          to="/projects"
          className={styles.moreWorkButton}
          aria-label="View all projects"
        >
          <span className={styles.moreWorkFill} aria-hidden="true" />
          <span className={styles.moreWorkLabel}>
            More work
            <sup className={styles.projectCount}>
              {PROJECTS.length - INITIAL_VISIBLE}
            </sup>
          </span>
        </Link>
      </div>
    </section>
  )
}
