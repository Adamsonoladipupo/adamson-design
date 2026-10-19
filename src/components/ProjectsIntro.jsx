
import { useState } from 'react'
import imgGlidr from './assets/glidr.png'
import imgSaveliens from './assets/saveliens.png'
import imgGiftara from './assets/giftara.png'
import imgSwaply from './assets/swaply.png'
import imgEcoearn from './assets/Ecoearn.png'
import styles from './ProjectsIntro.module.css'

const PROJECTS = [
  {
    name: 'Glidr',
    contribution: 'Design & Development',
    href: 'https://shop-with-glidr.onrender.com/',
    img: imgGlidr,
  },
  {
    name: 'Saveliens',
    contribution: 'Design & Development',
    href: 'https://saveliens.onrender.com/',
    img: imgSaveliens,
  },
  {
    name: 'Giftara',
    contribution: 'Product Design',
    href: 'https://giftara.app/',
    img: imgGiftara,
  },
  {
    name: 'Swaply',
    contribution: 'UX/UI Design',
    href: 'https://www.behance.net/gallery/224400063/Swaply-Convert-crypto-withdraw-into-your-local-Bank',
    img: imgSwaply,
  },
  {
    name: 'EcoEarn',
    contribution: 'Product Design',
    href: 'https://www.behance.net/gallery/217668017/EcoEarn-App-(Case-Study)',
    img: imgEcoearn,
  },
]

const INITIAL_COUNT = 3
const LOAD_COUNT = 3

function ProjectRow({ project }) {
  const [hovered, setHovered] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  function handlePointerEnter(event) {
    if (event.pointerType === 'touch') return

    const bounds = event.currentTarget.getBoundingClientRect()

    setCursor({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    })
    setHovered(true)
  }

  function handlePointerMove(event) {
    if (event.pointerType === 'touch') return

    const bounds = event.currentTarget.getBoundingClientRect()

    setCursor({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    })
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={`${styles.projectRow} ${hovered ? styles.projectRowHovered : ''}`}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setHovered(false)}
    >
      <span className={styles.projectName}>{project.name}</span>

      <span className={styles.projectContribution}>
        {project.contribution}
      </span>

      {hovered && (
        <span className={styles.projectPreview} aria-hidden="true">
          <img
            src={project.img}
            alt=""
            className={styles.previewImage}
          />
        </span>
      )}

      {hovered && (
        <span
          className={styles.cursorView}
          style={{
            left: `${cursor.x}px`,
            top: `${cursor.y}px`,
          }}
          aria-hidden="true"
        >
          View
        </span>
      )}
    </a>
  )
}

export default function ProjectsIntro() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)
  const hasMore = visibleCount < PROJECTS.length

  function loadMore() {
    setVisibleCount((count) =>
      Math.min(count + LOAD_COUNT, PROJECTS.length),
    )
  }

  return (
    <section
      id="projects"
      className={styles.projectsIntro}
      aria-label="Recent work"
    >
      <div className={styles.projectList}>
        {PROJECTS.slice(0, visibleCount).map((project) => (
          <ProjectRow key={project.name} project={project} />
        ))}
      </div>

      {hasMore && (
        <div className={styles.moreWorkWrap}>
          <button
            type="button"
            className={styles.moreWorkButton}
            onClick={loadMore}
          >
            <span className={styles.moreWorkFill} aria-hidden="true" />
            <span className={styles.moreWorkLabel}>
              Load more
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
