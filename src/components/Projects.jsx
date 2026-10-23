
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Projects.module.css'

import imgGlidr from './assets/glidr.png'
import imgSaveliens from './assets/saveliens.png'
import imgGiftara from './assets/giftara.png'
import imgSwaply from './assets/swaply.png'
import imgEcoearn from './assets/Ecoearn.png'

const PROJECTS = [
  {
    name: 'Glidr',
    slug: 'glidr',
    contribution: 'Design & Development',
    industry: 'E-commerce',
    categories: ['Design', 'Development'],
    image: imgGlidr,
  },
  {
    name: 'Saveliens',
    slug: 'saveliens',
    contribution: 'Product Design',
    industry: 'Lifestyle & E-commerce',
    categories: ['Design'],
    image: imgSaveliens,
  },
  {
    name: 'Giftara',
    slug: 'giftara',
    contribution: 'Product Design',
    industry: 'Gifting & E-commerce',
    categories: ['Design'],
    image: imgGiftara,
  },
  {
    name: 'Swaply',
    slug: 'swaply',
    contribution: 'UX/UI Design',
    industry: 'Fintech & Cryptocurrency',
    categories: ['Design'],
    image: imgSwaply,
  },
  {
    name: 'EcoEarn',
    slug: 'ecoearn',
    contribution: 'Product Design',
    industry: 'Sustainability & Rewards',
    categories: ['Design'],
    image: imgEcoearn,
  },
]

const FILTERS = ['All', 'Design', 'Development']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)
  const [previewPosition, setPreviewPosition] = useState({
    x: 0,
    y: 0,
  })

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) =>
          project.categories.includes(activeFilter),
        )

  const handleProjectMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()

    setPreviewPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }

  return (
    <main className={styles.projectsPage}>
      <section className={styles.projectList}>
        <h1 className={styles.pageTitle}>
          A collection of ideas
          <br />
          brought to life.
        </h1>

        <div
          className={styles.filters}
          role="group"
          aria-label="Filter projects"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              className={`${styles.filterButton} ${
                activeFilter === filter
                  ? styles.activeFilter
                  : ''
              }`}
              onClick={() => {
                setActiveFilter(filter)
                setHoveredProject(null)
              }}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles.projectTable}>
          <div className={styles.tableHeader}>
            <span>Project</span>
            <span>Contribution</span>
            <span>Industry</span>
          </div>

          {filteredProjects.map((project) => {
            const isHovered =
              hoveredProject === project.name

            return (
              <Link
                key={project.name}
                to={`/work/${project.slug}`}
                className={`${styles.projectRow} ${
                  isHovered
                    ? styles.projectRowHovered
                    : ''
                }`}
                onMouseEnter={(event) => {
                  setHoveredProject(project.name)
                  handleProjectMove(event)
                }}
                onMouseMove={handleProjectMove}
                onMouseLeave={() =>
                  setHoveredProject(null)
                }
              >
                <span className={styles.projectName}>
                  {project.name}
                </span>

                <span
                  className={styles.projectContribution}
                >
                  {project.contribution}
                </span>

                <span className={styles.projectIndustry}>
                  {project.industry}
                </span>

                <span className={styles.mobileProjectImage}>
                  <img
                    src={project.image}
                    alt={`${project.name} project preview`}
                    loading="lazy"
                  />
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
              </Link>
            )
          })}
        </div>
      </section>
    </main>
  )
}
