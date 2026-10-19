
import { Link } from 'react-router-dom'
import styles from './ProjectsIntro.module.css'



const PROJECTS = [
  {
    name: 'Glidr',
    contribution: 'Design & Development',
    href: 'https://shop-with-glidr.onrender.com/',
  },
  {
    name: 'Saveliens',
    contribution: 'Product Design',
    href: 'https://saveliens.onrender.com/',
  },
  {
    name: 'Giftara',
    contribution: 'Product Design',
    href: 'https://giftara.app/',
  },
  {
    name: 'Swaply',
    contribution: 'UX/UI Design',
    href: 'https://www.behance.net/gallery/224400063/Swaply-Convert-crypto-withdraw-into-your-local-Bank',
  },
  {
    name: 'EcoEarn',
    contribution: 'Product Design',
    href: 'https://www.behance.net/gallery/217668017/EcoEarn-App-(Case-Study)',
  },
]



export default function ProjectsIntro() {
  return (
    <section
      id="projects"
      className={styles.projectsIntro}
      aria-labelledby="projects-intro-heading"
    >
      <div className={styles.projectList}>
        <h2 id="projects-intro-heading" className={styles.visuallyHidden}>
          Selected work
        </h2>

        {PROJECTS.slice(0, 3).map((project) => (
          <a
            key={project.name}
            className={styles.projectRow}
            href={project.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className={styles.projectName}>{project.name}</span>
            <span className={styles.projectContribution}>
              {project.contribution}
            </span>
          </a>
        ))}
      </div>

      <div className={styles.moreWorkWrap}>
        <Link to="/projects" className={styles.moreWorkButton}>
          <span className={styles.moreWorkFill} aria-hidden="true" />
          <span className={styles.moreWorkLabel}>
            More work
            <sup className={styles.projectCount}>{PROJECTS.length}</sup>
          </span>
        </Link>
      </div>
    </section>
  )
}
