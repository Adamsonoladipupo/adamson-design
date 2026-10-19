
import styles from './Projects.module.css'

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

export default function Projects() {
  return (
    <section
      className={styles.projectsPage}
      aria-labelledby="all-projects-heading"
    >
      <div className={styles.projectList}>
        <h1 id="all-projects-heading" className={styles.pageTitle}>
          Selected work
        </h1>

        {PROJECTS.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className={styles.projectRow}
          >
            <span className={styles.projectName}>{project.name}</span>
            <span className={styles.projectContribution}>
              {project.contribution}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
