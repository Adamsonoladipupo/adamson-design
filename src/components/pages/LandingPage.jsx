
import Navbar from '../Navbar.jsx'
import Hero from '../Hero.jsx'
import Social from '../Social.jsx'
import AboutIntro from '../AboutIntro.jsx'
import Projects from '../Projects.jsx'
import Contact from '../Contact.jsx'
import Footer from '../Footer.jsx'

import styles from './LandingPage.module.css'
import ProjectsIntro from '../ProjectsIntro.jsx'

export default function LandingPage({ dark, toggleDark }) {
  return (
    <div className={styles.landingPage}>
      <Navbar dark={dark} toggleDark={toggleDark} />

      <main>
        <Hero />
        <AboutIntro />
        <ProjectsIntro />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
