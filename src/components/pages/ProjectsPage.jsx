
import Navbar from '../Navbar.jsx'
import Projects from '../Projects.jsx'
import Contact from '../Contact.jsx'
import Footer from '../Footer.jsx'
import styles from './ProjectsPage.module.css'

export default function ProjectsPage({ dark, toggleDark }) {
  return (
    <div className={styles.projectsPage}>
      <Navbar dark={dark} toggleDark={toggleDark} />

      <main>
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
