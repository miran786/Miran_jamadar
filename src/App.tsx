import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { About, Contact, Experience, Footer, Projects, Recognition, Research, Skills } from './components/Sections'
import { useRevealOnScroll } from './hooks'

export default function App() {
  useRevealOnScroll()
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Projects />
        <Recognition />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
