
import { useEffect, useRef, useState } from 'react'
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
    href: 'https://shop-with-glidr.onrender.com/',
    image: imgGlidr,
  },
  {
    name: 'Saveliens',
    contribution: 'Product Design & Development',
    href: 'https://saveliens.onrender.com/',
    image: imgSaveliens,
  },
  {
    name: 'Giftara',
    contribution: 'Product Design',
    href: 'https://giftara.app/',
    image: imgGiftara,
  },
  {
    name: 'Swaply',
    contribution: 'UX/UI Design & Case Study',
    href: 'https://www.behance.net/gallery/224400063/Swaply-Convert-crypto-withdraw-into-your-local-Bank',
    image: imgSwaply,
  },
  {
    name: 'EcoEarn',
    contribution: 'Product Design & Research',
    href: 'https://www.behance.net/gallery/217668017/EcoEarn-App-(Case-Study)',
    image: imgEcoearn,
  },
]

const INITIAL_VISIBLE = 3
const LOAD_STEP = 3

export default function ProjectsIntro() {
  const sectionRef = useRef(null)
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 })

  // Update the curved lower edge as the section moves up the viewport.
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

        section.style.setProperty(
          '--curve-depth',
          `${progress * 85}px`,
        )
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
    const row = event.currentTarget
    const rect = row.getBoundingClientRect()

    setPreviewPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  const visibleProjects = PROJECTS.slice(0, visibleCount)
  const hasMoreProjects = visibleCount < PROJECTS.length

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

              <span className={styles.projectContribution}>
                {project.contribution}
              </span>

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

      {hasMoreProjects && (
        <div className={styles.moreWorkWrap}>
          <button
            type="button"
            className={styles.moreWorkButton}
            onClick={() => {
              setVisibleCount((count) =>
                Math.min(count + LOAD_STEP, PROJECTS.length),
              )
            }}
          >
            <span className={styles.moreWorkFill} aria-hidden="true" />
            <span className={styles.moreWorkLabel}>
              More work
              <sup className={styles.projectCount}>
                {PROJECTS.length - visibleCount}
              </sup>
            </span>
          </button>
        </div>
      )}
    </section>
  )
}
