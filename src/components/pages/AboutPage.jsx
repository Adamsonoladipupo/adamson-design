
import Navbar from '../Navbar.jsx'
import About from '../About.jsx'
import Footer from '../Footer.jsx'

export default function AboutPage({ dark, toggleDark }) {
  return (
    <>
      <Navbar dark={dark} toggleDark={toggleDark} />

      <main>
        <About />
      </main>

      {/* <Footer /> */}
    </>
  )
}
